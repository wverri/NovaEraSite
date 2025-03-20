import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import RecoverForm from './components/RecoverForm';

export const metadata = {
  title: 'Recuperar Senha - Nova Era Shard',
  description: 'Recupere sua senha para acessar sua conta no Nova Era Shard.',
};

export default function RecoverPage() {
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
            <RecoverForm />
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaShieldAlt className="text-uo-gold mr-2" />
                Informações Importantes
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Para recuperar sua senha, você precisa fornecer o nome de usuário ou o email associado à sua conta.
                </p>
                
                <p>
                  Se você forneceu um email durante o registro, um link para redefinição de senha será enviado para este email.
                </p>
                
                <p>
                  Por questões de segurança, não informamos se um nome de usuário ou email existe em nosso sistema. Se você não receber o email, verifique a pasta de spam ou tente usar a outra informação.
                </p>
                
                <p>
                  Caso não consiga recuperar sua conta, entre em contato com o suporte através do Discord oficial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 