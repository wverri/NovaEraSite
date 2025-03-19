import Link from 'next/link';
import { FaUserCircle, FaUserPlus, FaSignInAlt, FaUserCog, FaKey } from 'react-icons/fa';

export default function AccountPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="header-medieval text-3xl md:text-4xl mb-6">Gerenciamento de Conta</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Login */}
          <div className="card-medieval">
            <div className="flex items-center mb-4">
              <FaSignInAlt className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
              <h2 className="font-medieval text-2xl">Entrar</h2>
            </div>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
              Acesse sua conta para gerenciar personagens, ver estatísticas e mais.
            </p>
            <Link 
              href="/account/login" 
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaUserCircle /> Fazer Login
            </Link>
          </div>
          
          {/* Register */}
          <div className="card-medieval">
            <div className="flex items-center mb-4">
              <FaUserPlus className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
              <h2 className="font-medieval text-2xl">Registrar</h2>
            </div>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
              Crie uma nova conta para jogar no Nova Era Shard.
            </p>
            <Link 
              href="/account/register" 
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaUserPlus /> Criar Conta
            </Link>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="header-medieval text-2xl md:text-3xl mb-6">Outras Opções</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/account/recover" className="card-medieval flex flex-col items-center p-6 hover:shadow-xl transition-shadow">
              <FaKey className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-xl mb-2 text-center">Recuperar Senha</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-center text-sm">
                Esqueceu sua senha? Recupere-a aqui.
              </p>
            </Link>
            
            <Link href="/account/settings" className="card-medieval flex flex-col items-center p-6 hover:shadow-xl transition-shadow">
              <FaUserCog className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-xl mb-2 text-center">Configurações</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-center text-sm">
                Alterar configurações da conta.
              </p>
            </Link>
            
            <Link href="/support" className="card-medieval flex flex-col items-center p-6 hover:shadow-xl transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="font-medieval text-xl mb-2 text-center">Suporte</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-center text-sm">
                Precisa de ajuda? Entre em contato.
              </p>
            </Link>
          </div>
        </div>
        
        <div className="mt-12 card-medieval p-6">
          <h2 className="header-medieval text-2xl mb-4">Informações da Conta</h2>
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
            No Nova Era Shard, sua conta permite:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-uo-darkwood/80 dark:text-uo-mist/80">
            <li>Criar até 7 personagens por conta</li>
            <li>Gerenciar seus personagens e itens</li>
            <li>Acessar métricas e estatísticas de jogo</li>
            <li>Participar de eventos exclusivos</li>
            <li>Configurar opções de segurança adicionais</li>
          </ul>
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-md">
            <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
              <strong>Nota:</strong> Nunca compartilhe sua senha com outros jogadores ou membros da staff. A equipe do Nova Era Shard nunca solicitará sua senha.
            </p>
          </div>
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