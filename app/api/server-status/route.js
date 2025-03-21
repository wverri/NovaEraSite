// Importações necessárias
import { verify } from 'jsonwebtoken';

// Chave secreta para verificação de API key - deve ser definida como variável de ambiente
const API_SECRET_KEY = process.env.API_SECRET_KEY || 'chave_secreta_temporaria';

export async function GET(request) {
  try {
    console.log('Testando conectividade com a API');
    
    // Teste de DNS
    const dns = await fetch('https://cloudflare-dns.com/dns-query?name=novaerashard.ddns.net&type=A', {
      headers: { 'Accept': 'application/dns-json' }
    }).then(r => r.json());
    
    console.log('Resolução DNS:', dns);
    
    // Teste de ping
    const pingStart = Date.now();
    try {
      await fetch(`http://novaerashard.ddns.net:8080/ping`, { 
        method: 'HEAD',
        signal: AbortSignal.timeout(2000)
      });
      console.log('Ping bem-sucedido:', Date.now() - pingStart, 'ms');
    } catch (e) {
      console.log('Falha no ping:', e.message);
    }
    
    // Verificar autenticação
    const authResult = await verifyAuthentication(request);
    if (!authResult.success) {
      return Response.json(
        { error: authResult.message },
        { status: authResult.status }
      );
    }
    
    // Usa a mesma URL base que o uoService
    const API_BASE_URL = process.env.NEXT_PUBLIC_UO_API_URL || 'http://novaerashard.ddns.net:8080/api';
    
    // Faz uma requisição para o endpoint de status do servidor
    const response = await fetch(`${API_BASE_URL}/server/status`);
    
    if (!response.ok) {
      throw new Error('Falha ao obter dados da API externa');
    }
    
    const rawData = await response.json();
    
    // Gerencia o valor de pico de jogadores
    let peakPlayers = await getPeakPlayers();
    if (rawData.players > peakPlayers) {
      peakPlayers = rawData.players;
      await savePeakPlayers(peakPlayers);
    }
    
    // Converte os dados da API externa para o formato esperado pelo frontend
    const serverStatus = {
      status: rawData.online ? 'online' : 'offline',
      players: {
        online: rawData.players,
        max: rawData.maxPlayers,
        peak: peakPlayers // Agora usamos o valor de pico armazenado
      },
      uptime: {
        // Convertendo o uptime (em minutos) para dias, horas e minutos
        days: Math.floor(rawData.uptime / (24 * 60)),
        hours: Math.floor((rawData.uptime % (24 * 60)) / 60),
        minutes: rawData.uptime % 60
      },
      lastRestart: rawData.lastUpdate,
      performance: {
        cpu: rawData.cpuUsage, // Já está em porcentagem
        memory: rawData.memoryUsage, // Já está em porcentagem
        ping: rawData.pingMs ? rawData.pingMs : "-", // Mantido como simulado pois não está disponível na API
        availableMemory: rawData.availableMemory, // Em GB, com 2 casas decimais
        threadCount: rawData.threadCount || 0
      },
      nextEvents: [
        {
          name: 'Invasão Demoníaca',
          date: '2024-03-28T20:00:00Z',
          description: 'Prepare-se para enfrentar ondas de demônios'
        },
        {
          name: 'Evento PvP',
          date: '2024-03-30T15:00:00Z',
          description: 'Torneio de PvP com prêmios especiais'
        }
      ]
    };
    
    return Response.json(serverStatus);
  } catch (error) {
    console.error('Erro ao obter status do servidor:', error);
    return Response.json(
      { error: 'Falha ao obter status do servidor' },
      { status: 500 }
    );
  }
}

// Função para verificar autenticação
async function verifyAuthentication(request) {
  // Obter cabeçalhos da requisição
  const authHeader = request.headers.get('Authorization');
  const apiKeyHeader = request.headers.get('X-API-Key');
  
  // Verificar se a requisição vem do próprio site (sem necessidade de autenticação)
  const referer = request.headers.get('Referer');
  const origin = request.headers.get('Origin');
  
  // Se a requisição vem do próprio site, permitir acesso
  if (referer && (referer.includes(process.env.NEXT_PUBLIC_SITE_URL) || 
      referer.includes('localhost'))) {
    return { success: true };
  }
  
  // Se a requisição tem uma API key válida, permitir acesso
  if (apiKeyHeader) {
    if (apiKeyHeader === API_SECRET_KEY) {
      return { success: true };
    } else {
      return { 
        success: false, 
        message: 'API key inválida', 
        status: 403 
      };
    }
  }
  
  // Se a requisição tem um token JWT válido, permitir acesso
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    try {
      // Verificar o token JWT
      const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret_temporario';
      verify(token, JWT_SECRET);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: 'Token JWT inválido ou expirado', 
        status: 401 
      };
    }
  }
  
  // Se chegou até aqui, a requisição não tem autenticação válida
  // Verificar se a autenticação é obrigatória para este endpoint
  const REQUIRE_AUTH = process.env.REQUIRE_API_AUTH === 'true';
  
  if (REQUIRE_AUTH) {
    return { 
      success: false, 
      message: 'Autenticação necessária', 
      status: 401 
    };
  } else {
    // Se a autenticação não for obrigatória, permitir acesso
    return { success: true };
  }
}

// Função para obter o valor de pico armazenado
async function getPeakPlayers() {
  try {
    const fs = require('fs').promises;
    const path = require('path');
    const filePath = path.join(process.cwd(), 'data', 'peak-players.json');
    
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const { peak } = JSON.parse(data);
      return peak;
    } catch (error) {
      // Se o arquivo não existir ou houver erro na leitura, retorna 0
      return 0;
    }
  } catch (error) {
    console.error('Erro ao ler o pico de jogadores:', error);
    return 0;
  }
}

// Função para salvar o novo valor de pico
async function savePeakPlayers(peak) {
  try {
    const fs = require('fs').promises;
    const path = require('path');
    const dir = path.join(process.cwd(), 'data');
    const filePath = path.join(dir, 'peak-players.json');
    
    // Garante que o diretório existe
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (error) {
      // Ignora erro se o diretório já existir
    }
    
    await fs.writeFile(filePath, JSON.stringify({ peak, updatedAt: new Date().toISOString() }));
  } catch (error) {
    console.error('Erro ao salvar o pico de jogadores:', error);
  }
}