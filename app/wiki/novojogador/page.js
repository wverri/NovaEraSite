import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaGamepad, FaBook, FaVideo, FaUserPlus, FaClipboardList } from 'react-icons/fa';

export default function NovoJogadorPage() {
  // Definindo as seções principais para novos jogadores
  const newPlayerSections = [
    {
      title: "Início Rápido",
      icon: <FaGamepad className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Guia básico para começar a jogar no Nova Era Shard imediatamente",
      link: "/wiki/novojogador/inicio",
      content: "Um guia passo a passo para novos jogadores, desde o download até seus primeiros passos em Britannia."
    },
    {
      title: "Downloads",
      icon: <FaDownload className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Cliente, patches e ferramentas necessárias para jogar",
      link: "/download",
      content: "Todos os arquivos necessários para jogar, incluindo o cliente oficial, patch específico do Nova Era Shard e utilitários recomendados."
    },
    {
      title: "Regras",
      icon: <FaClipboardList className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Regras e políticas do Nova Era Shard",
      link: "/wiki/novojogador/regras",
      content: "As regras oficiais do servidor que todos os jogadores devem seguir para manter uma comunidade saudável e justa."
    },
    {
      title: "Vídeos Tutoriais",
      icon: <FaVideo className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Vídeos explicativos sobre as mecânicas do jogo",
      link: "/wiki/novojogador/videos",
      content: "Tutoriais em vídeo que demonstram mecânicas básicas e avançadas do Nova Era Shard."
    },
    {
      title: "Guias Detalhados",
      icon: <FaBook className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Guias detalhados sobre vários aspectos do jogo",
      link: "/wiki/beginners",
      content: "Guias completos e detalhados sobre diversos aspectos do jogo, desde combate até crafting."
    },
    {
      title: "Templates",
      icon: <FaUserPlus className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Modelos prontos de personagens para diferentes estilos de jogo",
      link: "/wiki/novojogador/templates",
      content: "Builds pré-definidos de personagens otimizados para diversos estilos de jogo e funções."
    }
  ];

  // Dicas para novos jogadores
  const beginnerTips = [
    "Sempre mantenha bandagens e poções de cura no seu inventário",
    "Complete as missões iniciais em Britain para obter equipamento básico",
    "Junte-se ao canal global para perguntar dúvidas - a comunidade geralmente é prestativa",
    "Concentre-se em 2-3 skills principais no início, em vez de distribuir pontos entre muitas skills",
    "Invista em bons equipamentos assim que puder - eles fazem grande diferença",
    "Sempre mantenha uma runa de recall para sua casa ou um local seguro",
    "Não tenha medo de morrer - é parte do aprendizado",
    "Participe dos eventos semanais para conhecer outros jogadores e ganhar recompensas",
    "Junte-se a uma guilda para obter ajuda e companheirismo"
  ];

  return (
    <div className="container-uo py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar para o Wiki
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Guia para Novos Jogadores</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Bem-vindo ao Nova Era Shard! Aqui você encontrará tudo o que precisa para iniciar sua jornada em Britannia.
          </p>
        </div>

        {/* Introdução */}
        <div className="card-medieval mb-10">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Bem-vindo ao Melhor Servidor Brasileiro de Ultima Online!</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              O Nova Era Shard é um servidor dedicado a oferecer a melhor experiência possível de Ultima Online
              para jogadores brasileiros. Nosso objetivo é criar um ambiente equilibrado, justo e divertido,
              onde tanto novos jogadores quanto veteranos possam se divertir.
            </p>
            
            <p>
              Se você é novo no mundo de Ultima Online, não se preocupe! Nossa comunidade é acolhedora
              e temos diversos recursos para ajudar você a se familiarizar com o jogo. Esta seção da Wiki
              foi especialmente criada para guiar novos jogadores em seus primeiros passos.
            </p>
            
            <p>
              Siga as seções abaixo para encontrar informações detalhadas sobre como começar:
            </p>
          </div>
        </div>

        {/* Seções para Novos Jogadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {newPlayerSections.map((section, index) => (
            <Link 
              key={index} 
              href={section.link} 
              className="card-medieval flex flex-col items-center p-6 hover:shadow-xl transition-shadow"
            >
              {section.icon}
              <h3 className="font-medieval text-xl mb-2 text-center">{section.title}</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-center text-sm">
                {section.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Guia Rápido */}
        <div className="card-medieval mb-10">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Guia Rápido de Início</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Baixe o Cliente e o Patch</strong>
                <p className="text-sm">
                  Visite nossa <Link href="/download" className="text-uo-crimson dark:text-uo-gold hover:underline">página de downloads</Link> para obter o cliente UO e o patch específico do Nova Era Shard.
                </p>
              </li>
              
              <li>
                <strong>Crie uma Conta</strong>
                <p className="text-sm">
                  Registre-se em nosso <Link href="/account/register" className="text-uo-crimson dark:text-uo-gold hover:underline">portal de contas</Link> para criar seu login.
                </p>
              </li>
              
              <li>
                <strong>Inicie o Cliente e Conecte-se</strong>
                <p className="text-sm">
                  Execute o arquivo NovaEraShard.exe após instalar o cliente e o patch.
                </p>
              </li>
              
              <li>
                <strong>Crie seu Personagem</strong>
                <p className="text-sm">
                  Escolha sua aparência, nome e distribuição inicial de atributos e skills.
                </p>
              </li>
              
              <li>
                <strong>Complete o Tutorial</strong>
                <p className="text-sm">
                  Ao entrar no jogo, você aparecerá em uma área de tutorial. Siga as instruções para aprender os controles básicos.
                </p>
              </li>
              
              <li>
                <strong>Escolha uma Cidade Inicial</strong>
                <p className="text-sm">
                  Após o tutorial, escolha uma cidade para começar sua aventura. Recomendamos Britain para novos jogadores.
                </p>
              </li>
              
              <li>
                <strong>Fale com o NPC Guia</strong>
                <p className="text-sm">
                  Em cada cidade principal, há um NPC Guia que oferecerá equipamento inicial e suas primeiras missões.
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* Dicas para Iniciantes */}
        <div className="card-medieval mb-10 bg-uo-crimson/5 dark:bg-uo-gold/5">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Dicas Essenciais para Novatos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beginnerTips.map((tip, index) => (
              <div key={index} className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-uo-crimson/20 dark:bg-uo-gold/20 text-center flex-shrink-0 mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-uo-darkwood/80 dark:text-uo-mist/80">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="card-medieval">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Perguntas Frequentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medieval text-lg mb-2">O jogo é gratuito?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Sim, o Nova Era Shard é completamente gratuito para jogar. Mantemos o servidor com doações voluntárias.
              </p>
            </div>
            
            <div>
              <h3 className="font-medieval text-lg mb-2">Perdi meus itens após morrer. Como recuperá-los?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Quando você morre, deixa um corpo com seus itens. Volte rapidamente ao local de sua morte para recuperá-los. Se demorar muito, outros jogadores podem pegar seus itens.
              </p>
            </div>
            
            <div>
              <h3 className="font-medieval text-lg mb-2">Como posso me juntar a uma guilda?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Procure por recrutadores de guildas nas cidades ou use o canal de chat global para informar que está procurando uma guilda. Alternativamente, visite nosso Discord para encontrar guildas recrutando.
              </p>
            </div>
            
            <div>
              <h3 className="font-medieval text-lg mb-2">O que são skills e como treiná-las?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Skills são habilidades do seu personagem que melhoram com o uso. Por exemplo, para melhorar em Swordsmanship, você precisa lutar com espadas. Visite nossa <Link href="/wiki/skills" className="text-uo-crimson dark:text-uo-gold hover:underline">página de Skills</Link> para informações detalhadas.
              </p>
            </div>
            
            <div>
              <h3 className="font-medieval text-lg mb-2">O servidor é PvP ou PvE?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                O Nova Era Shard tem áreas PvP e PvE. As cidades e arredores são zonas seguras (PvE). As dungeons mais profundas e facções territoriais são áreas PvP onde jogadores podem se atacar.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para o Wiki
          </Link>
        </div>
      </div>
    </div>
  );
} 