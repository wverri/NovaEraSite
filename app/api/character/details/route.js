// Endpoint proxy para obter detalhes de um personagem específico usando query parameter
export async function GET(request) {
  try {
    // Extrair o token de autenticação do cabeçalho
    const authHeader = request.headers.get('Authorization');
    
    // Extrair o nome do personagem da URL
    const url = new URL(request.url);
    const characterName = url.searchParams.get('name');
    
    console.log('Nome do personagem recebido via query:', characterName);
    
    if (!characterName) {
      return Response.json(
        { error: true, message: 'Nome do personagem não fornecido' },
        { status: 400 }
      );
    }
    
    // Usa a mesma URL base que o uoService
    const API_BASE_URL = process.env.NEXT_PUBLIC_UO_API_URL || 'http://novaerashard.ddns.net:8080/api';
    
    // Modificação: voltando ao formato original, mas com codificação melhorada
    // Use encodeURIComponent para codificar o nome do personagem para a URL
    // Isso trata espaços e caracteres especiais de forma adequada
    const encodedName = encodeURIComponent(characterName);
    const apiUrl = `${API_BASE_URL}/character/${encodedName}`;
    
    console.log('Proxy de detalhes do personagem: Enviando requisição para URL:', apiUrl);
    
    // Faz a requisição para o servidor a partir do lado do servidor Next.js
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Repassa o token de autenticação se existir
        ...(authHeader ? { 'Authorization': authHeader } : {})
      },
      // Adiciona um timeout de 8 segundos para evitar erros 504
      signal: AbortSignal.timeout(8000)
    });
    
    console.log('Status da resposta:', response.status);
    
    // Obtém a resposta como JSON
    const responseData = await response.json();
    
    console.log('Proxy de detalhes do personagem: Resposta recebida:', responseData);
    
    // Retorna a resposta para o cliente
    return Response.json(responseData, { status: response.status });
  } catch (error) {
    console.error('Erro no proxy de detalhes do personagem:', error);
    return Response.json(
      { 
        error: true, 
        message: 'Erro ao obter detalhes do personagem via proxy',
        details: error.message
      },
      { status: 500 }
    );
  }
} 