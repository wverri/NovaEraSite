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
      
      // Chamada para a API do ServUO com timeout aumentado para dar tempo aos retries
      const response = await apiClient.post('/account/create', { 
        username, 
        password, 
        email 
      });
      
      // Verifica se a API retornou erro
      if (response.data.error) {
        return {
          success: false,
          message: response.data.message || 'Erro ao criar conta'
        };
      }
      
      return {
        success: true,
        message: 'Conta criada com sucesso',
        data: response.data
      };
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      
      // Tratamento detalhado de erros baseado nos códigos de status HTTP
      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um status fora do intervalo 2xx
        if (error.response.status === 400) {
          return {
            success: false,
            message: error.response.data.message || 'Nome de usuário já existe ou dados inválidos',
          };
        } else if (error.response.status === 500) {
          return {
            success: false,
            message: 'Erro no servidor ao processar sua solicitação. Tente novamente mais tarde.',
          };
        }
      } else if (error.request) {
        // A requisição foi feita mas não houve resposta
        return {
          success: false,
          message: 'Não foi possível conectar ao servidor. Verifique sua conexão ou tente novamente mais tarde.',
        };
      }
      
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao criar conta',
        error: error.response?.data || error.message
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
      
      // Chamada para a API do ServUO com timeout aumentado
      const response = await apiClient.post('/account/login', { 
        username, 
        password 
      });
      
      // Verifica se a API retornou um erro
      if (response.data.error || !response.data.token) {
        return {
          success: false,
          message: response.data.message || 'Credenciais inválidas'
        };
      }
      
      // Extrai o token e informações do usuário da resposta
      const { token, username: returnedUsername } = response.data;
      
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
      
      // Tratamento detalhado de erros baseado nos códigos de status HTTP
      if (error.response) {
        if (error.response.status === 401) {
          return {
            success: false,
            message: 'Credenciais inválidas. Verifique seu nome de usuário e senha.',
          };
        } else if (error.response.status === 403) {
          return {
            success: false,
            message: 'Acesso negado. Sua conta pode estar bloqueada.',
          };
        } else if (error.response.status === 500) {
          return {
            success: false,
            message: 'Erro no servidor ao processar seu login. Tente novamente mais tarde.',
          };
        }
      } else if (error.request) {
        // A requisição foi feita mas não houve resposta (timeout)
        return {
          success: false,
          message: 'Login não concluído. O servidor demorou para responder. Tente novamente.',
        };
      }
      
      return {
        success: false,
        message: error.response?.data?.message || 'Credenciais inválidas',
        error: error.response?.data || error.message
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
      const response = await apiClient.get(`/account/${username}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter detalhes da conta:', error);
      return {};
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
   * Obtém os personagens do usuário logado
   * @returns {Promise<Object>} Objeto com os personagens
   */
  async getCharacters() {
    try {
      if (!this.isLoggedIn()) {
        return { success: false, message: 'Usuário não está logado' };
      }
      
      const username = this.getLoggedUsername();
      if (!username) {
        return { success: false, message: 'Nome de usuário não encontrado' };
      }
      
      // Chama o endpoint para obter personagens da conta
      const response = await apiClient.get(`/character/account/${username}`);
      
      return { 
        success: true, 
        message: response.data.length > 0 ? 'Personagens encontrados' : 'Nenhum personagem encontrado', 
        characters: response.data
      };
    } catch (error) {
      console.error('Erro ao obter personagens:', error);
      
      if (error.response && error.response.status === 401) {
        // Token expirado ou inválido
        this.logout(); // Faz logout para limpar os dados inválidos
        return {
          success: false,
          message: 'Sua sessão expirou. Por favor, faça login novamente.',
          sessionExpired: true
        };
      }
      
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao obter personagens',
        error: error.response?.data || error.message
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
      
      // Chama o endpoint para obter detalhes do personagem
      const response = await apiClient.get(`/character/${encodeURIComponent(characterName)}`);
      
      return {
        success: true,
        character: response.data
      };
    } catch (error) {
      console.error('Erro ao obter detalhes do personagem:', error);
      
      if (error.response && error.response.status === 401) {
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
        message: error.response?.data?.message || 'Erro ao obter detalhes do personagem',
        error: error.response?.data || error.message
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