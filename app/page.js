import Link from 'next/link';
import { FaUserPlus, FaDownload, FaBook, FaDiscord, FaCalendarAlt } from 'react-icons/fa';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('/images/uo-background.jpg')",
          filter: "brightness(0.4)"
        }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-uo-darkwood/20 to-uo-darkwood/80 dark:from-uo-midnight/20 dark:to-uo-midnight/80"></div>
        
        <div className="container-uo relative h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-berkshire text-4xl md:text-6xl lg:text-7xl text-uo-gold mb-6 drop-shadow-lg">
            Nova Era Shard
          </h1>
          <p className="font-medieval text-xl md:text-2xl text-white mb-8 max-w-3xl">
            Uma Nova Era em Ultima Online começa agora. Descubra o perfeito equilíbrio entre o clássico e o moderno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/account/register" className="btn-primary text-lg flex items-center justify-center gap-2">
              <FaUserPlus /> Criar Conta
            </Link>
            <Link href="/download" className="btn-secondary text-lg flex items-center justify-center gap-2">
              <FaDownload /> Download
            </Link>
          </div>
          
          {/* Server Stats */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container-uo">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-uo-darkwood/80 dark:bg-uo-midnight/80 backdrop-blur-sm p-4 rounded-lg border border-uo-gold/30">
                  <div className="flex items-center justify-between">
                    <span className="text-uo-parchment/80">Status:</span>
                    <span className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-green-400">Online</span>
                    </span>
                  </div>
                </div>
                
                <div className="bg-uo-darkwood/80 dark:bg-uo-midnight/80 backdrop-blur-sm p-4 rounded-lg border border-uo-gold/30">
                  <div className="flex items-center justify-between">
                    <span className="text-uo-parchment/80">Jogadores:</span>
                    <span className="text-uo-gold">148 / 500</span>
                  </div>
                </div>
                
                <div className="bg-uo-darkwood/80 dark:bg-uo-midnight/80 backdrop-blur-sm p-4 rounded-lg border border-uo-gold/30">
                  <div className="flex items-center justify-between">
                    <span className="text-uo-parchment/80">Próximo Evento:</span>
                    <span className="text-uo-gold flex items-center">
                      <FaCalendarAlt className="mr-2" /> 28/03 - 20h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container-uo">
          <div className="text-center mb-16">
            <h2 className="header-medieval text-3xl md:text-4xl mb-4">Por que jogar no Nova Era Shard?</h2>
            <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-2xl mx-auto">
              Nosso servidor foi projetado para oferecer a melhor experiência de Ultima Online, combinando elementos clássicos com melhorias modernas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-medieval">
              <div className="mb-4 text-uo-crimson dark:text-uo-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-medieval text-xl mb-2">Balanceamento Perfeito</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Skills e classes cuidadosamente balanceadas para garantir um jogo justo e divertido para todos os estilos de jogo.
              </p>
            </div>
            
            <div className="card-medieval">
              <div className="mb-4 text-uo-crimson dark:text-uo-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medieval text-xl mb-2">Comunidade Ativa</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Uma comunidade acolhedora e ativa com eventos regulares, sistemas PvP, PvE e roleplaying para todos os gostos.
              </p>
            </div>
            
            <div className="card-medieval">
              <div className="mb-4 text-uo-crimson dark:text-uo-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medieval text-xl mb-2">Infraestrutura Robusta</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Servidor com alta disponibilidade, protegido contra cheaters e com uma equipe de suporte sempre disponível.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-16 bg-uo-parchment/50 dark:bg-uo-darkwood/50">
        <div className="container-uo">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
              <FaBook className="h-12 w-12 mb-4 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-xl mb-2">Guia para Iniciantes</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Novo no Ultima Online? Confira nosso guia completo para começar sua jornada.
              </p>
              <Link href="/wiki/guide" className="text-uo-crimson dark:text-uo-gold hover:underline">
                Ler o guia →
              </Link>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
              <FaUserPlus className="h-12 w-12 mb-4 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-xl mb-2">Criar uma Conta</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                É rápido e fácil criar uma conta para jogar no Nova Era Shard.
              </p>
              <Link href="/account/register" className="text-uo-crimson dark:text-uo-gold hover:underline">
                Registrar agora →
              </Link>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
              <FaDiscord className="h-12 w-12 mb-4 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-xl mb-2">Junte-se ao Discord</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Participe de nossa comunidade no Discord para conversar e ficar por dentro das novidades.
              </p>
              <a 
                href="https://discord.gg/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-crimson dark:text-uo-gold hover:underline"
              >
                Entrar no Discord →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-20">
        <div className="container-uo">
          <div className="text-center mb-16">
            <h2 className="header-medieval text-3xl md:text-4xl mb-4">Últimas Notícias</h2>
            <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-2xl mx-auto">
              Fique por dentro das últimas atualizações e eventos do Nova Era Shard.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Notícia 1 */}
            <article className="card-medieval overflow-hidden">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700" style={{ backgroundImage: "url('/images/news-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-sm text-uo-darkwood/60 dark:text-uo-mist/60">
                  <FaCalendarAlt className="mr-2" /> 15 de Março, 2024
                </div>
                <h3 className="font-medieval text-xl mb-2">Grande Atualização de Primavera</h3>
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                  Nossa atualização de primavera trará novos sistemas de crafting, balanceamento de skills e muito mais.
                </p>
                <Link href="/news/1" className="text-uo-crimson dark:text-uo-gold hover:underline">
                  Leia mais →
                </Link>
              </div>
            </article>
            
            {/* Notícia 2 */}
            <article className="card-medieval overflow-hidden">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700" style={{ backgroundImage: "url('/images/news-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-sm text-uo-darkwood/60 dark:text-uo-mist/60">
                  <FaCalendarAlt className="mr-2" /> 10 de Março, 2024
                </div>
                <h3 className="font-medieval text-xl mb-2">Evento: A Invasão Demoníaca</h3>
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                  Prepare-se para enfrentar ondas de demônios em nosso próximo grande evento de servidor.
                </p>
                <Link href="/news/2" className="text-uo-crimson dark:text-uo-gold hover:underline">
                  Leia mais →
                </Link>
              </div>
            </article>
            
            {/* Notícia 3 */}
            <article className="card-medieval overflow-hidden">
              <div className="h-48 overflow-hidden">
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700" style={{ backgroundImage: "url('/images/news-3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-sm text-uo-darkwood/60 dark:text-uo-mist/60">
                  <FaCalendarAlt className="mr-2" /> 5 de Março, 2024
                </div>
                <h3 className="font-medieval text-xl mb-2">Novo Sistema de Housing</h3>
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                  Conheça nosso novo sistema de housing com mais opções de decoração e funcionalidades.
                </p>
                <Link href="/news/3" className="text-uo-crimson dark:text-uo-gold hover:underline">
                  Leia mais →
                </Link>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/news" className="btn-secondary inline-block">
              Ver todas as notícias
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-uo-crimson/90 dark:bg-uo-midnight/90 text-white">
        <div className="container-uo text-center">
          <h2 className="font-berkshire text-3xl md:text-4xl mb-4 text-uo-gold">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Junte-se a milhares de jogadores e descubra um mundo repleto de aventuras, desafios e comunidade vibrante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/account/register" className="btn-primary text-lg flex items-center justify-center gap-2 bg-uo-gold text-uo-darkwood hover:bg-yellow-500">
              <FaUserPlus /> Criar Conta
            </Link>
            <Link href="/download" className="btn-secondary text-lg flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20">
              <FaDownload /> Download
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 