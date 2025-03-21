'use client';

import axios from 'axios';

// URL base da API - pode ser configurada via variável de ambiente
const API_BASE_URL = process.env.NEXT_PUBLIC_UO_API_URL || 'http://novaerashard.ddns.net:8080/api';

// Configuração do cliente axios com timeout mais longo para lidar com o retry da API
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000, // 20 segundos para dar tempo ao retry da API
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para adicionar o token de autenticação a todas as requisições
apiClient.interceptors.request.use(
  config => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('uo_auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

// Configuração do serviço
const uoService = {
  /**
   * Cria uma nova conta no servidor ServUO
   * @param {string} username - Nome de usuário
   * @param {string} password - Senha do usuário
   * @param {string} email - Email do usuário (opcional)
   * @returns {Promise<Object>} Objeto com resultado da operação
   */
  async createAccount(username, password, email) {
    try {
      // Validações básicas no lado do cliente
      if (!username || username.length < 3) {
        return { success: false, message: 'Nome de usuário inválido (mínimo 3 caracteres)' };
      }
      
      if (!password || password.length < 6) {
        return { success: false, message: 'Senha muito curta (mínimo 6 caracteres)' };
      }
      
      console.log('Tentando criar conta com:', { username, email }); // Não logue a senha
      
      // Usar o endpoint proxy local em vez de chamar a API diretamente
      const response = await fetch('/api/account/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
      });
      
      const data = await response.json();
      console.log('Resposta da API via proxy:', response.status);
      
      if (!response.ok || data.error) {
        return {
          success: false,
          message: data.message || 'Erro ao criar conta'
        };
      }
      
      return {
        success: true,
        message: 'Conta criada com sucesso',
        data: data
      };
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      
      return {
        success: false,
        message: 'Erro ao criar conta. Por favor, tente novamente mais tarde.',
        error: error.message
      };
    }
  },
  
  /**
   * Autentica um usuário e armazena informações de login
   */
  async login(username, password) {
    try {
      // Validações básicas
      if (!username || !password) {
        return {
          success: false,
          message: 'Nome de usuário e senha são obrigatórios'
        };
      }
      
      console.log('Tentando login com:', { username });
      
      // Usar o endpoint proxy local em vez de chamar a API diretamente
      const response = await fetch('/api/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      console.log('Resposta do login via proxy:', response.status);
      
      if (!response.ok || data.error || !data.token) {
        return {
          success: false,
          message: data.message || 'Credenciais inválidas'
        };
      }
      
      // Extrai o token e informações do usuário da resposta
      const { token, username: returnedUsername } = data;
      
      // Obtém informações detalhadas da conta
      const accountDetails = await this.getAccountDetails(username);
      
      // Cria objeto de usuário com dados disponíveis
      const userData = {
        username: returnedUsername,
        ...accountDetails
      };
      
      // Armazena no localStorage
      localStorage.setItem('uo_auth_token', token);
      localStorage.setItem('uo_user', JSON.stringify(userData));
      
      return {
        success: true,
        message: 'Login realizado com sucesso',
        user: userData,
        token
      };
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      
      return {
        success: false,
        message: 'Erro ao fazer login. Por favor, tente novamente mais tarde.',
        error: error.message
      };
    }
  },
  
  /**
   * Obtém detalhes da conta do usuário
   * @param {string} username - Nome de usuário
   * @returns {Promise<Object>} Objeto com detalhes da conta
   */
  async getAccountDetails(username) {
    try {
      if (!username) {
        return { success: false, message: 'Nome de usuário não fornecido' };
      }
      
      // Obter token de autenticação
      const token = localStorage.getItem('uo_auth_token');
      
      // Usar o endpoint proxy local em vez de chamar a API diretamente
      const response = await fetch(`/api/account/details?username=${encodeURIComponent(username)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        }
      });
      
      const data = await response.json();
      
      if (!response.ok || data.error) {
        if (response.status === 401) {
          // Token expirado ou inválido
          this.logout();
          return {
            success: false,
            message: 'Sua sessão expirou. Por favor, faça login novamente.',
            sessionExpired: true
          };
        }
        
        return {
          success: false,
          message: data.message || 'Erro ao obter detalhes da conta'
        };
      }
      
      return {
        success: true,
        ...data
      };
    } catch (error) {
      console.error('Erro ao obter detalhes da conta:', error);
      
      return {
        success: false,
        message: 'Erro ao obter detalhes da conta. Por favor, tente novamente mais tarde.',
        error: error.message
      };
    }
  },
  
  /**
   * Faz logout do usuário atual
   */
  logout() {
    localStorage.removeItem('uo_auth_token');
    localStorage.removeItem('uo_user');
  },
  
  /**
   * Verifica se há um usuário logado
   * @returns {boolean} True se o usuário estiver logado
   */
  isLoggedIn() {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('uo_auth_token');
  },
  
  /**
   * Obtém o nome de usuário logado atualmente
   * @returns {string|null} Nome do usuário logado ou null
   */
  getLoggedUsername() {
    if (typeof window === 'undefined') return null;
    
    try {
      const userData = localStorage.getItem('uo_user');
      if (!userData) return null;
      
      return JSON.parse(userData).username;
    } catch (error) {
      console.error('Erro ao obter usuário:', error);
      return null;
    }
  },
  
  /**
   * Obtém o token JWT armazenado
   * @returns {string|null} Token JWT ou null
   */
  getAuthToken() {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('uo_auth_token');
  },
  
  /**
   * Obtém a lista de personagens do usuário
   * @returns {Promise<Object>} Objeto com a lista de personagens
   */
  async getCharacters() {
    try {
      if (!this.isLoggedIn()) {
        return { success: false, message: 'Usuário não está logado' };
      }
      
      // Obter o nome de usuário do localStorage
      const userData = JSON.parse(localStorage.getItem('uo_user') || '{}');
      const username = userData.username;
      
      if (!username) {
        return { success: false, message: 'Nome de usuário não encontrado' };
      }
      
      console.log('Obtendo personagens para o usuário:', username);
      
      // Obter token de autenticação
      const token = localStorage.getItem('uo_auth_token');
      
      // Usar o endpoint de detalhes da conta para obter os personagens
      const response = await fetch(`/api/account/details?username=${encodeURIComponent(username)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log('Status da resposta:', response.status);
      
      const data = await response.json();
      console.log('Dados da conta recebidos:', data);
      
      if (!response.ok || data.error) {
        if (response.status === 401) {
          // Token expirado ou inválido
          this.logout();
          return {
            success: false,
            message: 'Sua sessão expirou. Por favor, faça login novamente.',
            sessionExpired: true
          };
        }
        
        return {
          success: false,
          message: data.message || 'Erro ao obter lista de personagens'
        };
      }
      
      // Extrair a lista de personagens dos dados da conta
      const characters = data.characters || [];
      
      return {
        success: true,
        characters: characters
      };
    } catch (error) {
      console.error('Erro ao obter lista de personagens:', error);
      
      return {
        success: false,
        message: 'Erro ao obter lista de personagens. Por favor, tente novamente mais tarde.',
        error: error.message
      };
    }
  },
  
  /**
   * Obtém detalhes de um personagem específico
   * @param {string} characterName - Nome do personagem
   * @returns {Promise<Object>} Objeto com detalhes do personagem
   */
  async getCharacterDetails(characterName) {
    try {
      if (!this.isLoggedIn()) {
        return { success: false, message: 'Usuário não está logado' };
      }
      
      if (!characterName) {
        return { success: false, message: 'Nome do personagem não fornecido' };
      }
      
      console.log('Obtendo detalhes do personagem:', characterName);
      
      // Obter token de autenticação
      const token = localStorage.getItem('uo_auth_token');
      console.log('Token disponível:', !!token);
      
      // Construir a URL corretamente
      const url = `/api/character/details?name=${encodeURIComponent(characterName)}`;
      console.log('URL da requisição:', url);
      
      // Preparar os headers com o token
      const headers = {
        'Content-Type': 'application/json'
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      console.log('Headers da requisição:', headers);
      
      // Usar o endpoint proxy local em vez de chamar a API diretamente
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
        cache: 'no-store' // Desabilitar cache para garantir dados atualizados
      });
      
      console.log('Status da resposta:', response.status);
      
      // Verificar se a resposta é um JSON válido
      let data;
      try {
        data = await response.json();
        console.log('Dados recebidos:', data);
      } catch (jsonError) {
        console.error('Erro ao processar JSON da resposta:', jsonError);
        return {
          success: false,
          message: 'Erro ao processar resposta do servidor',
          error: jsonError.message
        };
      }
      
      // Verificar se a resposta contém um erro
      if (!response.ok || data.error) {
        if (response.status === 401) {
          // Token expirado ou inválido
          this.logout();
          return {
            success: false,
            message: 'Sua sessão expirou. Por favor, faça login novamente.',
            sessionExpired: true
          };
        }
        
        if (response.status === 404 || (data.message && data.message.includes('não encontrado'))) {
          return {
            success: false,
            message: `Personagem "${characterName}" não encontrado no servidor.`,
            notFound: true
          };
        }
        
        return {
          success: false,
          message: data.message || 'Erro ao obter detalhes do personagem',
          details: data.details || null
        };
      }
      
      // Verificar se os dados recebidos são válidos
      if (!data || (typeof data === 'object' && Object.keys(data).length === 0)) {
        return {
          success: false,
          message: 'Dados do personagem não disponíveis',
          notFound: true
        };
      }
      
      return {
        success: true,
        character: data
      };
    } catch (error) {
      console.error('Erro ao obter detalhes do personagem:', error);
      
      return {
        success: false,
        message: 'Erro ao obter detalhes do personagem. Por favor, tente novamente mais tarde.',
        error: error.message
      };
    }
  },
  
  /**
   * Verifica o status do servidor
   * @returns {Promise<Object>} Objeto com informações do servidor
   */
  async getServerStatus() {
    try {
      // Chama o endpoint para obter o status do servidor
      const response = await apiClient.get('/server/status');
      
      // Converte a resposta da API para o formato esperado pelo front-end
      return {
        success: true,
        online: response.data.online,
        players: response.data.players,
        maxPlayers: response.data.maxPlayers,
        uptime: `${response.data.uptime} minutos`,
        lastUpdate: response.data.lastUpdate,
        message: response.data.online 
          ? `Servidor online com ${response.data.players} jogadores` 
          : 'Servidor offline'
      };
    } catch (error) {
      console.error('Erro ao verificar status do servidor:', error);
      return {
        success: false,
        online: false,
        message: 'Não foi possível obter o status do servidor',
        error: error.response?.data || error.message
      };
    }
  },
  
  /**
   * Envia um pedido de recuperação de senha
   * @param {string} username - Nome de usuário
   * @param {string} email - Email do usuário
   * @returns {Promise<Object>} Objeto com resultado da operação
   */
  async recoverPassword(username, email) {
    try {
      // No mínimo um dos parâmetros deve ser fornecido
      if (!username && !email) {
        return { 
          success: false, 
          message: 'Forneça um nome de usuário ou email' 
        };
      }
      
      // Chama o endpoint para recuperação de senha
      const response = await apiClient.post('/account/reset-password', { 
        username, 
        email 
      });
      
      return {
        success: true,
        message: response.data.message || 'Instruções de recuperação enviadas por email',
        data: response.data
      };
    } catch (error) {
      console.error('Erro ao solicitar recuperação de senha:', error);
      
      // Por segurança, não revelamos se o usuário/email existe
      return {
        success: true,
        message: 'Se encontrarmos uma conta com essas informações, enviaremos instruções de recuperação para o email associado.'
      };
    }
  }
};

export default uoService; 