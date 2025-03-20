'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaSpinner, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import uoService from '../../../services/uoService';

export default function RecoverForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Resetar estados
    setError('');
    setSuccess(false);
    
    // Validações básicas
    if (!username.trim() && !email.trim()) {
      setError('Digite seu nome de usuário ou email');
      return;
    }
    
    setLoading(true);
    
    try {
      // Esta função ainda não existe no uoService, seria necessário implementá-la
      const response = await uoService.recoverPassword(username, email);
      
      if (response.success) {
        setSuccess(true);
        // Limpar formulário
        setUsername('');
        setEmail('');
      } else {
        setError(response.message || 'Erro ao recuperar senha. Verifique as informações fornecidas.');
      }
    } catch (err) {
      console.error('Erro ao recuperar senha:', err);
      setError(err.response?.data?.message || 'Falha na conexão com o servidor. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
      {success ? (
        <div className="text-center py-8">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Instruções Enviadas!</h3>
          <p className="text-gray-300 mb-4">
            Se encontrarmos uma conta com as informações fornecidas, enviaremos instruções para redefinir sua senha para o email associado à conta.
          </p>
          <p className="text-gray-300 mb-4">
            Por favor, verifique sua caixa de entrada e pasta de spam.
          </p>
          <Link 
            href="/account/login" 
            className="btn-primary w-full justify-center"
          >
            Voltar para Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold text-white mb-4">Recuperar Senha</h3>
          
          {error && (
            <div className="bg-red-900/50 border border-red-700 p-3 rounded mb-4 text-white flex items-center">
              <FaExclamationTriangle className="text-red-500 mr-2" />
              <span>{error}</span>
            </div>
          )}
          
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
              />
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-gray-300">OU</span>
              <div className="flex-1 border-t border-gray-700 ml-2"></div>
            </div>
            
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-500" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white w-full py-2 pl-10 pr-3 rounded focus:outline-none focus:ring-2 focus:ring-uo-gold focus:border-transparent"
                placeholder="Digite seu email"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">O email usado na criação da conta</p>
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
            ) : 'Recuperar Senha'}
          </button>
          
          <p className="text-gray-400 text-sm mt-4 text-center">
            Lembrou sua senha?{' '}
            <Link href="/account/login" className="text-uo-gold hover:underline">
              Voltar para Login
            </Link>
          </p>
        </form>
      )}
    </div>
  );
} 