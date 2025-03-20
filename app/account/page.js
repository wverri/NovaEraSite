import Link from 'next/link';
import { FaUserPlus, FaSignInAlt, FaUser, FaUserShield } from 'react-icons/fa';

export const metadata = {
  title: 'Gerenciamento de Conta - Nova Era Shard',
  description: 'Acesse sua conta ou crie uma nova para jogar no Nova Era Shard, um servidor gratuito de Ultima Online.',
};

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">Gerenciamento de Conta</h1>
          <p className="text-xl text-gray-300">
            Bem-vindo ao painel de gerenciamento de conta do Nova Era Shard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg text-center">
            <FaSignInAlt className="text-uo-gold text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Entrar</h2>
            <p className="text-gray-300 mb-6">
              Já possui uma conta? Faça login para acessar o painel de sua conta, visualizar seus personagens e gerenciar suas configurações.
            </p>
            <Link 
              href="/account/login" 
              className="btn-primary w-full justify-center"
            >
              Fazer Login
            </Link>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg text-center">
            <FaUserPlus className="text-uo-gold text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Criar Conta</h2>
            <p className="text-gray-300 mb-6">
              Novo no Nova Era Shard? Crie uma conta gratuitamente para começar sua jornada no mundo de Ultima Online.
            </p>
            <Link 
              href="/account/register" 
              className="btn-primary w-full justify-center"
            >
              Registrar-se
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <FaUserShield className="text-uo-gold mr-2" />
            Informações sobre Contas
          </h3>
          
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Características das Contas:</strong> Cada conta no Nova Era Shard permite a criação de até 7 personagens, possibilitando que você experimente diferentes estilos de jogo e classes.
            </p>
            
            <p>
              <strong className="text-white">Segurança:</strong> Recomendamos utilizar uma senha forte e única para sua conta, além de fornecer um email válido para recuperação em caso de necessidade.
            </p>
            
            <p>
              <strong className="text-white">Suporte:</strong> Em caso de problemas com sua conta, entre em contato com nossa equipe através do Discord oficial ou envie um email para suporte@novaerashard.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 