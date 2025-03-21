import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import RegisterForm from './components/RegisterForm';

export const metadata = {
  title: 'Criar Conta - Nova Era Shard',
  description: 'Crie uma conta para jogar no Nova Era Shard, um servidor gratuito de Ultima Online.',
};

export default function RegisterPage() {
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
            <RegisterForm />
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaShieldAlt className="text-uo-gold mr-2" />
                Informações Importantes
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Segurança de Conta:</strong> Escolha uma senha forte que você não use em outros serviços. Nunca compartilhe suas credenciais com outros jogadores.
                </p>
                
                <p>
                  <strong className="text-white">Email:</strong> Embora opcional, recomendamos fortemente fornecer um email para recuperação de conta caso esqueça sua senha.
                </p>
                
                <p>
                  <strong className="text-white">Criação de Personagens:</strong> Após criar sua conta, você poderá criar até 7 personagens por conta ao entrar no jogo.
                </p>
                
                <p>
                  <strong className="text-white">Suporte:</strong> Em caso de problemas com sua conta, entre em contato com nossa equipe através do Discord ou fórum oficial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 