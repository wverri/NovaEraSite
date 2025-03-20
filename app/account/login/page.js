import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import LoginForm from './components/LoginForm';

export const metadata = {
  title: 'Login - Nova Era Shard',
  description: 'Faça login para acessar sua conta no Nova Era Shard, um servidor gratuito de Ultima Online.',
};

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/account"
          className="inline-flex items-center text-uo-gold hover:text-uo-crimson dark:hover:text-white mb-6 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Voltar para gerenciamento de conta
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <LoginForm />
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaShieldAlt className="text-uo-gold mr-2" />
                Dicas de Segurança
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Senha Forte:</strong> Utilize uma senha única para sua conta no Nova Era Shard. Não reutilize senhas de outros serviços.
                </p>
                
                <p>
                  <strong className="text-white">Cuidado com Compartilhamento:</strong> Nunca compartilhe suas informações de login com outros jogadores ou em sites não oficiais.
                </p>
                
                <p>
                  <strong className="text-white">Verificação:</strong> A equipe do Nova Era Shard nunca solicitará suas informações de login através de mensagens particulares ou emails.
                </p>
                
                <p>
                  <strong className="text-white">Problemas de Login?</strong> Se estiver com dificuldades para acessar sua conta, utilize a opção "Esqueceu sua senha?" ou entre em contato com o suporte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 