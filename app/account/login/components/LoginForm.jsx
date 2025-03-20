'use client';

import { useState } from 'react';
import { FaUser, FaLock, FaSpinner, FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import uoService from '../../../services/uoService';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Resetar erro
    setError('');
    
    // Validações básicas
    if (!username.trim()) {
      setError('Digite seu nome de usuário');
      return;
    }
    
    if (!password) {
      setError('Digite sua senha');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await uoService.login(username, password);
      
      if (response.success) {
        // Redirecionar para o painel do usuário
        router.push('/account/dashboard');
      } else {
        setError(response.message || 'Nome de usuário ou senha incorretos');
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      setError(err.response?.data?.message || 'Falha na conexão com o servidor. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
      <h3 className="text-xl font-bold text-white mb-4">Login</h3>
      
      {error && (
        <div className="bg-red-900/50 border border-red-700 p-3 rounded mb-4 text-white flex items-center">
          <FaExclamationTriangle className="text-red-500 mr-2" />
          <span>{error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-300 mb-2">
            Nome de Usuário
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-500" />
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white w-full py-2 pl-10 pr-3 rounded focus:outline-none focus:ring-2 focus:ring-uo-gold focus:border-transparent"
              placeholder="Digite seu nome de usuário"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 mb-2">
            Senha
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="text-gray-500" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white w-full py-2 pl-10 pr-3 rounded focus:outline-none focus:ring-2 focus:ring-uo-gold focus:border-transparent"
              placeholder="Digite sua senha"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`btn-primary w-full flex justify-center items-center ${loading ? 'opacity-70' : ''}`}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Processando...
            </>
          ) : 'Entrar'}
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Não possui uma conta?{' '}
            <Link href="/account/register" className="text-uo-gold hover:underline">
              Criar nova conta
            </Link>
          </p>
        </div>
        
        <div className="mt-2 text-center">
          <Link href="/account/recover" className="text-gray-400 text-sm hover:text-uo-gold">
            Esqueceu sua senha?
          </Link>
        </div>
      </form>
    </div>
  );
} 