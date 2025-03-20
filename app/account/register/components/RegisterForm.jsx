'use client';

import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import uoService from '../../../services/uoService';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Validações
  const validateUsername = (username) => {
    if (!username || username.length < 3 || username.length > 16) {
      return 'O nome de usuário deve ter entre 3 e 16 caracteres';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return 'O nome de usuário deve conter apenas letras, números e underscore';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password || password.length < 6) {
      return 'A senha deve ter pelo menos 6 caracteres';
    }
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return 'As senhas não coincidem';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Resetar estados
    setError('');
    setSuccess(false);
    
    // Validar campos
    const usernameError = validateUsername(username);
    if (usernameError) {
      setError(usernameError);
      return;
    }
    
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }
    
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    if (confirmPasswordError) {
      setError(confirmPasswordError);
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await uoService.createAccount(username, password, email || undefined);
      
      if (response.success) {
        setSuccess(true);
        // Limpar formulário
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
      } else {
        setError(response.message || 'Erro ao criar conta. Tente novamente.');
      }
    } catch (err) {
      console.error('Erro ao registrar:', err);
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
          <h3 className="text-xl font-bold text-white mb-2">Conta criada com sucesso!</h3>
          <p className="text-gray-300 mb-4">
            Sua conta foi criada e já está pronta para uso.
          </p>
          <Link 
            href="/account/login" 
            className="btn-primary w-full justify-center"
          >
            Fazer Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold text-white mb-4">Informações da Conta</h3>
          
          {error && (
            <div className="bg-red-900/50 border border-red-700 p-3 rounded mb-4 text-white flex items-center">
              <FaExclamationTriangle className="text-red-500 mr-2" />
              <span>{error}</span>
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 mb-2">
              Nome de Usuário *
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
            <p className="text-xs text-gray-400 mt-1">Entre 3 e 16 caracteres, apenas letras, números e underscore</p>
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Senha *
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
            <p className="text-xs text-gray-400 mt-1">Mínimo de 6 caracteres</p>
          </div>
          
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">
              Confirmar Senha *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-500" />
              </div>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white w-full py-2 pl-10 pr-3 rounded focus:outline-none focus:ring-2 focus:ring-uo-gold focus:border-transparent"
                placeholder="Digite sua senha novamente"
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email <span className="text-gray-400 text-xs">(opcional)</span>
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
            <p className="text-xs text-gray-400 mt-1">Para recuperação de senha (recomendado)</p>
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
            ) : 'Criar Conta'}
          </button>
          
          <p className="text-gray-400 text-sm mt-4 text-center">
            Já possui uma conta?{' '}
            <Link href="/account/login" className="text-uo-gold hover:underline">
              Fazer login
            </Link>
          </p>
        </form>
      )}
    </div>
  );
} 