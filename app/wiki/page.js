import Link from 'next/link';
import { FaBook, FaUser, FaGem, FaScroll, FaShieldAlt, FaQuestionCircle, FaMap, FaHammer, FaDragon, FaPaw, FaHatWizard, FaDungeon } from 'react-icons/fa';

export default function WikiPage() {
  // Usaremos ícones alternativos já que alguns do FaIcons não existem
  const FaSwords = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" {...props}>
      <path d="M529.6 84l-126.4 126.4 48.4 48.4 126.4-126.4-48.4-48.4zM57.4 308.5l42.8-42.8-48.4-48.4-42.8 42.8 48.4 48.4zM394.8 218.6l-42.8 42.8 48.4 48.4 42.8-42.8-48.4-48.4zM193.3 420.1l126.4-126.4-48.4-48.4-126.4 126.4 48.4 48.4z"/>
    </svg>
  );
  
  const FaScroll = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" {...props}>
      <path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h16c0-8.8 7.2-16 16-16s16 7.2 16 16h16c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zM176 80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H160c0-8.8-7.2-16-16-16s-16 7.2-16 16H96c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48h80z"/>
    </svg>
  );
  
  const FaAnvil = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M425.1 15.34c-12.8-3.84-26.13 3.002-30.02 15.94l-25.62 85.41H294.4l40.84-136.1c3.938-12.94-3.016-26.59-15.97-30.53c-12.94-3.904-26.59 3-30.53 15.97l-48 159.1h-77.46L211.2 16.08c3.906-12.96-3.031-26.62-15.1-30.53c-12.94-3.904-26.59 3-30.53 15.97l-47.93 159.4H15.98C7.139 160.9 0 168.1 0 176.9c0 8.832 7.139 16 15.98 16h94.1l-28.63 96H15.98C7.139 288.9 0 296.1 0 304.9c0 8.832 7.139 16 15.98 16h59.68L35.82 424.1c-3.906 12.96 3.031 26.63 15.1 30.53C53.76 456.6 55.91 457 58.03 457c10.39 0 20.06-6.75 23.5-16.94l44.85-149.2h77.46L165.1 440.1c-3.906 12.96 3.031 26.63 15.1 30.53C183 472.6 185.2 473 187.3 473c10.39 0 20.06-6.75 23.5-16.94l44.78-149.2h100.2c8.84 0 15.98-7.168 15.98-16c0-8.832-7.145-16-15.98-16h-93.43l28.63-96h96.75c8.836 0 15.98-7.168 15.98-16c0-8.832-7.146-16-15.98-16h-90l25.55-85.2C444.9 32.93 438 19.25 425.1 15.34zM265.5 240.9H188l28.63-96h77.46L265.5 240.9z"/>
    </svg>
  );

  const wikiCategories = [
    {
      title: 'Iniciantes',
      icon: <FaBook className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Guias e tutoriais para novos jogadores',
      link: '/wiki/beginners'
    },
    {
      title: 'Personagens',
      icon: <FaUser className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Informações sobre criação e customização de personagens',
      link: '/wiki/characters'
    },
    {
      title: 'Skills & Magias',
      icon: <FaGem className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Lista completa de habilidades e magias',
      link: '/wiki/skills'
    },
    {
      title: 'Combate',
      icon: <FaSwords className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Sistemas de combate, armas e estratégias',
      link: '/wiki/combat'
    },
    {
      title: 'PvM & Classes',
      icon: <FaDragon className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Combate contra monstros, classes e sistemas PvE',
      link: '/wiki/pvm'
    },
    {
      title: 'Crafting',
      icon: <FaAnvil className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Sistema de crafting e profissões artesanais',
      link: '/wiki/crafting'
    },
    {
      title: 'Dungeons',
      icon: <FaDungeon className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Guia de dungeons, masmorras e locais perigosos',
      link: '/wiki/dungeons'
    },
    {
      title: 'Pets & Taming',
      icon: <FaPaw className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Sistema de animais de estimação e domesticação',
      link: '/wiki/pvm/pets'
    },
    {
      title: 'Quests',
      icon: <FaScroll className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Missões, aventuras e recompensas',
      link: '/wiki/quests'
    },
    {
      title: 'Facções & Guildas',
      icon: <FaShieldAlt className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Organizações, facções e sistema de guildas',
      link: '/wiki/factions'
    },
    {
      title: 'Mapas',
      icon: <FaMap className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Mapas, localizações e pontos de interesse',
      link: '/wiki/maps'
    },
    {
      title: 'FAQ',
      icon: <FaQuestionCircle className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: 'Perguntas frequentes e solução de problemas',
      link: '/wiki/faq'
    }
  ];

  return (
    <div className="container-uo py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Enciclopédia do Nova Era Shard</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Bem-vindo à Wiki oficial do Nova Era Shard. Aqui você encontrará tudo o que precisa saber sobre o nosso mundo.
          </p>
        </div>
        
        {/* Notificação de atualizações */}
        <div className="max-w-4xl mx-auto mb-12 bg-uo-crimson/10 dark:bg-uo-gold/10 border border-uo-crimson/20 dark:border-uo-gold/20 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-uo-crimson dark:text-uo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="font-medieval text-uo-crimson dark:text-uo-gold text-lg">Novas páginas disponíveis!</h3>
              <div className="mt-1 text-uo-darkwood/80 dark:text-uo-mist/80">
                <p>
                  Nossa Wiki foi atualizada com novos guias detalhados. Confira as páginas de 
                  <Link href="/wiki/crafting" className="font-bold text-uo-crimson dark:text-uo-gold hover:underline"> Crafting</Link>, 
                  <Link href="/wiki/pvm/classes" className="font-bold text-uo-crimson dark:text-uo-gold hover:underline"> Classes</Link>, 
                  <Link href="/wiki/pvm/pets" className="font-bold text-uo-crimson dark:text-uo-gold hover:underline"> Pets</Link> e 
                  <Link href="/wiki/pvm/dungeons-instanciadas" className="font-bold text-uo-crimson dark:text-uo-gold hover:underline"> Dungeons Instanciadas</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Pesquisar na wiki..." 
              className="w-full p-4 pl-12 rounded-lg border border-uo-darkwood/20 dark:border-uo-gold/20 bg-white/80 dark:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-uo-crimson dark:focus:ring-uo-gold"
            />
            <div className="absolute left-4 top-4 text-uo-darkwood/50 dark:text-uo-mist/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Wiki Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wikiCategories.map((category, index) => (
            <Link 
              key={index} 
              href={category.link} 
              className="card-medieval flex flex-col items-center p-6 hover:shadow-xl transition-shadow"
            >
              {category.icon}
              <h3 className="font-medieval text-xl mb-2 text-center">{category.title}</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-center text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
        
        {/* Popular Articles */}
        <div className="mt-16">
          <h2 className="header-medieval text-2xl md:text-3xl mb-6">Artigos Populares</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-medieval">
              <h3 className="font-medieval text-xl mb-3">Guia para Iniciantes</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Um guia completo para quem está começando sua jornada no Nova Era Shard.
              </p>
              <Link href="/wiki/beginners/guide" className="text-uo-crimson dark:text-uo-gold hover:underline">
                Ler artigo →
              </Link>
            </div>
            
            <div className="card-medieval">
              <h3 className="font-medieval text-xl mb-3">Sistema de Crafting</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Conheça todas as profissões de crafting e o sistema de qualidade.
              </p>
              <Link href="/wiki/crafting" className="text-uo-crimson dark:text-uo-gold hover:underline">
                Ler artigo →
              </Link>
            </div>
            
            <div className="card-medieval">
              <h3 className="font-medieval text-xl mb-3">Guia de Classes</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Aprenda sobre as classes disponíveis e como desenvolvê-las.
              </p>
              <Link href="/wiki/pvm/classes" className="text-uo-crimson dark:text-uo-gold hover:underline">
                Ler artigo →
              </Link>
            </div>
            
            <div className="card-medieval">
              <h3 className="font-medieval text-xl mb-3">Dungeons Instanciadas</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Descubra o novo sistema de dungeons instanciadas do servidor.
              </p>
              <Link href="/wiki/pvm/dungeons-instanciadas" className="text-uo-crimson dark:text-uo-gold hover:underline">
                Ler artigo →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Recent Updates */}
        <div className="mt-16 card-medieval p-6">
          <h2 className="header-medieval text-2xl mb-4">Atualizações Recentes da Wiki</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-3">
              <div>
                <h3 className="font-medieval text-lg">Sistema de Crafting</h3>
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                  Novo guia completo sobre o sistema de crafting, incluindo todas as profissões.
                </p>
              </div>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60">19/03/2024</span>
            </div>
            
            <div className="flex justify-between items-start border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-3">
              <div>
                <h3 className="font-medieval text-lg">Guia de Pets e Taming</h3>
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                  Adicionado guia detalhado sobre domesticação e evolução de pets.
                </p>
              </div>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60">19/03/2024</span>
            </div>
            
            <div className="flex justify-between items-start border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-3">
              <div>
                <h3 className="font-medieval text-lg">Dungeons Instanciadas</h3>
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                  Lançado guia sobre o novo sistema de dungeons instanciadas.
                </p>
              </div>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60">19/03/2024</span>
            </div>
            
            <div className="flex justify-between items-start border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-3">
              <div>
                <h3 className="font-medieval text-lg">Sistema de Classes</h3>
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                  Atualização completa do sistema de classes e balanceamento.
                </p>
              </div>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60">18/03/2024</span>
            </div>
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