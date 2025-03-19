'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaKey, FaEye, FaEyeSlash, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    acceptTerms: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpar o erro para este campo quando o usuário começar a digitá-lo
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Validar nome de usuário
    if (!formData.username) {
      errors.username = 'Nome de usuário é obrigatório';
    } else if (formData.username.length < 3) {
      errors.username = 'Nome de usuário deve ter pelo menos 3 caracteres';
    }
    
    // Validar email
    if (!formData.email) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    
    // Validar senha
    if (!formData.password) {
      errors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      errors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    // Validar confirmação de senha
    if (!formData.passwordConfirm) {
      errors.passwordConfirm = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.passwordConfirm) {
      errors.passwordConfirm = 'As senhas não coincidem';
    }
    
    // Validar termos
    if (!formData.acceptTerms) {
      errors.acceptTerms = 'Você deve aceitar os termos de uso';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulário
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulação de envio para o servidor
    setSubmitStatus({ type: 'loading', message: 'Processando registro...' });
    
    // Simular um atraso de 1.5 segundos para envio ao servidor
    setTimeout(() => {
      setSubmitStatus({ 
        type: 'success', 
        message: 'Conta criada com sucesso! Um email de confirmação foi enviado para ' + formData.email 
      });
      
      // Limpar o formulário após sucesso
      setFormData({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        acceptTerms: false
      });
    }, 1500);
  };

  return (
    <div className="container-uo py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="header-medieval text-3xl md:text-4xl mb-2">Criar Conta</h1>
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
            Junte-se ao Nova Era Shard para começar sua aventura.
          </p>
        </div>
        
        <div className="card-medieval">
          {submitStatus.type === 'success' ? (
            <div className="text-center p-6">
              <FaCheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
              <h2 className="font-medieval text-2xl mb-4">Registro Completo!</h2>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
                {submitStatus.message}
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/account/login" className="btn-primary">
                  Fazer Login
                </Link>
                <Link href="/" className="text-uo-crimson dark:text-uo-gold hover:underline">
                  Voltar para a página inicial
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              {submitStatus.type === 'loading' && (
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-uo-crimson dark:border-uo-gold mx-auto mb-2"></div>
                  <p>{submitStatus.message}</p>
                </div>
              )}
              
              {/* Nome de usuário */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-uo-darkwood dark:text-uo-mist mb-1">
                  Nome de Usuário
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-uo-darkwood/50 dark:text-uo-mist/50" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`bg-white/80 dark:bg-gray-900/80 text-uo-darkwood dark:text-uo-mist block w-full pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
                      formErrors.username ? 'border-red-500 focus:ring-red-500' : 'border-uo-darkwood/20 dark:border-uo-gold/20 focus:ring-uo-crimson dark:focus:ring-uo-gold'
                    }`}
                    placeholder="Seu nome de usuário para login"
                  />
                </div>
                {formErrors.username && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.username}</p>
                )}
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-uo-darkwood dark:text-uo-mist mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-uo-darkwood/50 dark:text-uo-mist/50" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white/80 dark:bg-gray-900/80 text-uo-darkwood dark:text-uo-mist block w-full pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
                      formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-uo-darkwood/20 dark:border-uo-gold/20 focus:ring-uo-crimson dark:focus:ring-uo-gold'
                    }`}
                    placeholder="seu-email@exemplo.com"
                  />
                </div>
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                )}
              </div>
              
              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-uo-darkwood dark:text-uo-mist mb-1">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaKey className="h-5 w-5 text-uo-darkwood/50 dark:text-uo-mist/50" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`bg-white/80 dark:bg-gray-900/80 text-uo-darkwood dark:text-uo-mist block w-full pl-10 pr-10 py-2 rounded-md focus:outline-none focus:ring-2 ${
                      formErrors.password ? 'border-red-500 focus:ring-red-500' : 'border-uo-darkwood/20 dark:border-uo-gold/20 focus:ring-uo-crimson dark:focus:ring-uo-gold'
                    }`}
                    placeholder="Sua senha (mín. 6 caracteres)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5 text-uo-darkwood/50 dark:text-uo-mist/50" />
                    ) : (
                      <FaEye className="h-5 w-5 text-uo-darkwood/50 dark:text-uo-mist/50" />
                    )}
                  </button>
                </div>
                {formErrors.password && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
                )}
              </div>
              
              {/* Confirmação de Senha */}
              <div>
                <label htmlFor="passwordConfirm" className="block text-sm font-medium text-uo-darkwood dark:text-uo-mist mb-1">
                  Confirme a Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaKey className="h-5 w-5 text-uo-darkwood/50 dark:text-uo-mist/50" />
                  </div>
                  <input
                    type={showPasswordConfirm ? "text" : "password"}
                    id="passwordConfirm"
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    className={`bg-white/80 dark:bg-gray-900/80 text-uo-darkwood dark:text-uo-mist block w-full pl-10 pr-10 py-2 rounded-md focus:outline-none focus:ring-2 ${
                      formErrors.passwordConfirm ? 'border-red-500 focus:ring-red-500' : 'border-uo-darkwood/20 dark:border-uo-gold/20 focus:ring-uo-crimson dark:focus:ring-uo-gold'
                    }`}
                    placeholder="Repita sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPasswordConfirm ? (
                      <FaEyeSlash className="h-5 w-5 text-uo-darkwood/50 dark:text-uo-mist/50" />
                    ) : (
                      <FaEye className="h-5 w-5 text-uo-darkwood/50 dark:text-uo-mist/50" />
                    )}
                  </button>
                </div>
                {formErrors.passwordConfirm && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.passwordConfirm}</p>
                )}
              </div>
              
              {/* Termos de Uso */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-uo-crimson dark:text-uo-gold focus:ring-uo-crimson dark:focus:ring-uo-gold border-uo-darkwood/20 dark:border-uo-gold/20 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="acceptTerms" className="text-uo-darkwood dark:text-uo-mist">
                    Eu aceito os <Link href="/terms" className="text-uo-crimson dark:text-uo-gold hover:underline">termos de uso</Link> e <Link href="/privacy" className="text-uo-crimson dark:text-uo-gold hover:underline">política de privacidade</Link>
                  </label>
                  {formErrors.acceptTerms && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.acceptTerms}</p>
                  )}
                </div>
              </div>
              
              {/* Informações e Dicas */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md flex">
                <FaInfoCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  <p className="font-medium">Dicas importantes:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Escolha uma senha forte que você não use em outros sites</li>
                    <li>Sua conta será vinculada ao seu email para recuperação</li>
                    <li>Certifique-se de usar um email válido para confirmação</li>
                  </ul>
                </div>
              </div>
              
              {/* Botão de Submissão */}
              <div>
                <button
                  type="submit"
                  className="w-full btn-primary py-3 font-medium"
                  disabled={submitStatus.type === 'loading'}
                >
                  Criar Conta
                </button>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Já possui uma conta? <Link href="/account/login" className="text-uo-crimson dark:text-uo-gold hover:underline">Faça Login</Link>
                </p>
              </div>
            </form>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
} 