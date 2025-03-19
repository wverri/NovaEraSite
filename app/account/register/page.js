'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaKey, FaEye, FaEyeSlash, FaInfoCircle, FaCheckCircle, FaScroll, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    <div className="container-uo py-16 min-h-screen relative">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-40 left-10 w-64 h-64 hero-decoration opacity-10"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 hero-decoration opacity-10" style={{ transform: 'rotate(180deg)' }}></div>
      
      <div className="max-w-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-flex items-center text-uo-crimson dark:text-uo-gold hover:underline mb-6 group">
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> 
            Voltar para a página inicial
          </Link>
          
          <div className="mb-4">
            <FaScroll className="h-16 w-16 mx-auto text-uo-crimson dark:text-uo-gold mb-4" />
          </div>
          
          <h1 className="title-uo mb-4">Criar Conta</h1>
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 max-w-lg mx-auto">
            Junte-se ao Nova Era Shard para começar sua jornada épica em Britannia.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-medieval corner-decorated relative"
        >
          {submitStatus.type === 'success' ? (
            <div className="text-center p-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <FaCheckCircle className="h-20 w-20 mx-auto text-green-500 mb-6" />
                <h2 className="font-medieval text-3xl mb-4 text-uo-crimson dark:text-uo-gold">Registro Completo!</h2>
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-8 max-w-md mx-auto">
                  {submitStatus.message}
                </p>
                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                  <Link href="/account/login" className="btn-primary py-3">
                    Fazer Login
                  </Link>
                  <Link href="/" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center justify-center gap-2 mt-2">
                    <FaArrowLeft className="h-4 w-4" /> Voltar para a página inicial
                  </Link>
                </div>
              </motion.div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-8">
              {submitStatus.type === 'loading' && (
                <div className="callout-uo bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-500">
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-uo-crimson dark:border-uo-gold mr-3"></div>
                    <p>{submitStatus.message}</p>
                  </div>
                </div>
              )}
              
              {/* Nome de usuário */}
              <div className="form-group">
                <label htmlFor="username" className="block text-sm font-medium text-uo-darkwood dark:text-uo-mist mb-2 font-medieval">
                  Nome de Usuário
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-uo-crimson/50 dark:text-uo-gold/50" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`bg-white/80 dark:bg-gray-900/80 text-uo-darkwood dark:text-uo-mist block w-full pl-10 pr-3 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.username ? 'border-red-500 focus:ring-red-500' : 'border-uo-darkwood/20 dark:border-uo-gold/20 focus:ring-uo-crimson dark:focus:ring-uo-gold'
                    }`}
                    placeholder="Seu nome de usuário para login"
                  />
                </div>
                {formErrors.username && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FaInfoCircle className="mr-1" /> {formErrors.username}
                  </p>
                )}
              </div>
              
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-uo-darkwood dark:text-uo-mist mb-2 font-medieval">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-uo-crimson/50 dark:text-uo-gold/50" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white/80 dark:bg-gray-900/80 text-uo-darkwood dark:text-uo-mist block w-full pl-10 pr-3 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-uo-darkwood/20 dark:border-uo-gold/20 focus:ring-uo-crimson dark:focus:ring-uo-gold'
                    }`}
                    placeholder="seu-email@exemplo.com"
                  />
                </div>
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FaInfoCircle className="mr-1" /> {formErrors.email}
                  </p>
                )}
              </div>
              
              {/* Senha */}
              <div className="form-group">
                <label htmlFor="password" className="block text-sm font-medium text-uo-darkwood dark:text-uo-mist mb-2 font-medieval">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaKey className="h-5 w-5 text-uo-crimson/50 dark:text-uo-gold/50" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`bg-white/80 dark:bg-gray-900/80 text-uo-darkwood dark:text-uo-mist block w-full pl-10 pr-10 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.password ? 'border-red-500 focus:ring-red-500' : 'border-uo-darkwood/20 dark:border-uo-gold/20 focus:ring-uo-crimson dark:focus:ring-uo-gold'
                    }`}
                    placeholder="Sua senha (mín. 6 caracteres)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-uo-crimson/50 dark:text-uo-gold/50 hover:text-uo-crimson dark:hover:text-uo-gold transition-colors"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5" />
                    ) : (
                      <FaEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {formErrors.password && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FaInfoCircle className="mr-1" /> {formErrors.password}
                  </p>
                )}
              </div>
              
              {/* Confirmação de Senha */}
              <div className="form-group">
                <label htmlFor="passwordConfirm" className="block text-sm font-medium text-uo-darkwood dark:text-uo-mist mb-2 font-medieval">
                  Confirme a Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaKey className="h-5 w-5 text-uo-crimson/50 dark:text-uo-gold/50" />
                  </div>
                  <input
                    type={showPasswordConfirm ? "text" : "password"}
                    id="passwordConfirm"
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    className={`bg-white/80 dark:bg-gray-900/80 text-uo-darkwood dark:text-uo-mist block w-full pl-10 pr-10 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formErrors.passwordConfirm ? 'border-red-500 focus:ring-red-500' : 'border-uo-darkwood/20 dark:border-uo-gold/20 focus:ring-uo-crimson dark:focus:ring-uo-gold'
                    }`}
                    placeholder="Repita sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-uo-crimson/50 dark:text-uo-gold/50 hover:text-uo-crimson dark:hover:text-uo-gold transition-colors"
                  >
                    {showPasswordConfirm ? (
                      <FaEyeSlash className="h-5 w-5" />
                    ) : (
                      <FaEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {formErrors.passwordConfirm && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <FaInfoCircle className="mr-1" /> {formErrors.passwordConfirm}
                  </p>
                )}
              </div>
              
              {/* Informações e Dicas */}
              <div className="callout-uo bg-uo-crimson/5 dark:bg-uo-gold/5 border-uo-crimson/20 dark:border-uo-gold/20">
                <div className="flex">
                  <FaInfoCircle className="h-5 w-5 text-uo-crimson dark:text-uo-gold mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                    <p className="font-medium font-medieval">Dicas importantes:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Escolha uma senha forte que você não use em outros sites</li>
                      <li>Sua conta será vinculada ao seu email para recuperação</li>
                      <li>Certifique-se de usar um email válido para confirmação</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Termos de Uso */}
              <div className="flex items-start bg-white/40 dark:bg-gray-900/40 p-3 rounded-md border border-uo-darkwood/10 dark:border-uo-gold/10">
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
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <FaInfoCircle className="mr-1" /> {formErrors.acceptTerms}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Botão de Submissão */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  className="w-full btn-primary py-3 font-medieval text-lg uppercase tracking-wider"
                  disabled={submitStatus.type === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Criar Conta
                </motion.button>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                  Já possui uma conta? <Link href="/account/login" className="text-uo-crimson dark:text-uo-gold hover:underline font-medieval">Faça Login</Link>
                </p>
              </div>
            </form>
          )}
        </motion.div>
        
        <div className="ornate-divider mt-12">
          <svg className="ornate-divider-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
        </div>
      </div>
    </div>
  );
} 