import Link from 'next/link';
import { FaBook, FaArrowLeft, FaUser, FaGem, FaSwords, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';

// Componente personalizado para ícone que não existe no react-icons
const FaSwords = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" {...props}>
    <path d="M529.6 84l-126.4 126.4 48.4 48.4 126.4-126.4-48.4-48.4zM57.4 308.5l42.8-42.8-48.4-48.4-42.8 42.8 48.4 48.4zM394.8 218.6l-42.8 42.8 48.4 48.4 42.8-42.8-48.4-48.4zM193.3 420.1l126.4-126.4-48.4-48.4-126.4 126.4 48.4 48.4z"/>
  </svg>
);

export default function BeginnerGuidePage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar para Wiki
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Guia para Iniciantes</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Bem-vindo ao Nova Era Shard! Este guia te ajudará a dar os primeiros passos em Britannia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <FaUser className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Crie seu Personagem</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              O primeiro passo é criar seu herói ou heroína para aventuras em Britannia.
            </p>
          </div>
          
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <FaGem className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Desenvolva Habilidades</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Aprenda e aperfeiçoe suas skills para se tornar um mestre em sua profissão.
            </p>
          </div>
          
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <FaSwords className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Aventure-se</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Explore as terras, combata monstros e descubra tesouros escondidos.
            </p>
          </div>
        </div>
        
        {/* Conteúdo Principal do Guia */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Primeiros Passos no Nova Era Shard</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Bem-vindo a Britannia, viajante! O Nova Era Shard é um servidor de Ultima Online que combina elementos clássicos com melhorias modernas, oferecendo uma experiência de RPG medieval rica e imersiva. Aqui estão os passos iniciais para começar sua jornada:
            </p>
            
            <h3>1. Instalação e Login</h3>
            <ul>
              <li>Baixe o cliente do Ultima Online e o patch do Nova Era Shard na <Link href="/download" className="text-uo-crimson dark:text-uo-gold hover:underline">página de downloads</Link>.</li>
              <li>Instale o cliente seguindo as instruções do instalador.</li>
              <li>Extraia o patch para a pasta do cliente.</li>
              <li><Link href="/account/register" className="text-uo-crimson dark:text-uo-gold hover:underline">Crie uma conta</Link> no nosso site.</li>
              <li>Execute o NovaEraShard.exe e faça login com suas credenciais.</li>
            </ul>
            
            <h3>2. Criação de Personagem</h3>
            <p>
              Ao criar seu personagem, você terá muitas escolhas importantes:
            </p>
            <ul>
              <li><strong>Raça</strong>: Humano, Elfo ou Anão - cada um com vantagens distintas.</li>
              <li><strong>Aparência</strong>: Personalize cor de pele, cabelo, roupas e mais.</li>
              <li><strong>Estatísticas</strong>: Distribua pontos entre Força, Destreza e Inteligência.</li>
              <li><strong>Skills Iniciais</strong>: Escolha até 3 habilidades para começar com pontos.</li>
            </ul>
            <p>
              Após criar seu personagem, você aparecerá na cidade inicial de Britain, o coração de Britannia.
            </p>
            
            <h3>3. Interface e Controles Básicos</h3>
            <ul>
              <li><strong>Movimento</strong>: Clique com o botão esquerdo do mouse para mover-se.</li>
              <li><strong>Interação</strong>: Clique duplo em objetos e NPCs para interagir.</li>
              <li><strong>Combate</strong>: Clique duplo em armas para equipar, então clique em monstros para atacar.</li>
              <li><strong>Comunicação</strong>: Pressione Enter para abrir o chat, digite sua mensagem e pressione Enter novamente.</li>
              <li><strong>Inventário</strong>: Pressione I ou clique no ícone da mochila para abrir seu inventário.</li>
              <li><strong>Paperdoll</strong>: Clique duplo em seu personagem para ver os itens equipados.</li>
            </ul>
            
            <h3>4. Primeiras Missões</h3>
            <p>
              Para começar sua aventura, fale com o Guia de Novos Aventureiros próximo ao Banco de Britain. Ele oferecerá missões introdutórias que irão:
            </p>
            <ul>
              <li>Ensinar mecânicas básicas do jogo</li>
              <li>Fornecer equipamento inicial</li>
              <li>Recompensar com ouro e experiência</li>
              <li>Apresentar NPCs importantes da cidade</li>
            </ul>
            <p>
              Completar estas missões iniciais é a melhor forma de se familiarizar com o jogo e conseguir recursos para começar.
            </p>
            
            <h3>5. Desenvolvendo Skills</h3>
            <p>
              No Nova Era Shard, suas habilidades melhoram com o uso. Algumas dicas para desenvolvimento inicial:
            </p>
            <ul>
              <li>Foque em 2-3 skills principais no começo para progredir mais rapidamente</li>
              <li>Praticar em alvos de treinamento na Guilda dos Guerreiros pode ajudar com habilidades de combate</li>
              <li>Colete recursos e pratique crafting desde cedo para melhorar suas habilidades de produção</li>
              <li>Treine Tracking e Camping para sobreviver melhor fora das cidades</li>
            </ul>
            
            <h3>6. Economia e Comércio</h3>
            <p>
              O ouro é essencial para sua jornada. Algumas formas de ganhar dinheiro como iniciante:
            </p>
            <ul>
              <li>Complete missões para NPCs da cidade</li>
              <li>Colete recursos como madeira, minérios e ervas para vender</li>
              <li>Cace monstros nos arredores de Britain e venda os itens obtidos</li>
              <li>Pratique alguma profissão como ferraria, alfaiataria ou carpintaria</li>
            </ul>
            
            <h3>7. Comunidade e Etiqueta</h3>
            <p>
              O Nova Era Shard é uma comunidade ativa de jogadores. Algumas dicas para interação:
            </p>
            <ul>
              <li>Seja respeitoso com outros jogadores no chat</li>
              <li>Pergunte no canal de ajuda se tiver dúvidas - jogadores experientes geralmente estão dispostos a auxiliar</li>
              <li>Considere participar de uma guilda para ter acesso a recursos e proteção</li>
              <li>Participe de eventos do servidor para conhecer a comunidade</li>
            </ul>
          </div>
        </div>
        
        {/* Perguntas Frequentes */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-6">
            <FaQuestionCircle className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Perguntas Frequentes de Iniciantes</h2>
          </div>
          
          <div className="space-y-4">
            <div className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4">
              <h3 className="font-medieval text-lg mb-2">Como posso mudar minha aparência depois da criação?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Visite o Barbeiro em Britain, localizado próximo ao Banco. Por uma pequena taxa, ele permite alterar cabelo, barba e cores.
              </p>
            </div>
            
            <div className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4">
              <h3 className="font-medieval text-lg mb-2">Perdi meus itens depois de morrer. Como recuperá-los?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Quando você morre, deixa um corpo com seus itens. Volte rapidamente ao local de sua morte para recuperá-los. Se demorar muito, outros jogadores podem pegar seus itens.
              </p>
            </div>
            
            <div className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4">
              <h3 className="font-medieval text-lg mb-2">Como posso me juntar a uma guilda?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Procure por recrutadores de guildas nas cidades ou use o canal de chat global (;) para informar que está procurando uma guilda. Alternativamente, visite nosso Discord para encontrar guildas recrutando.
              </p>
            </div>
            
            <div className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4">
              <h3 className="font-medieval text-lg mb-2">É possível resetar minhas skills?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Sim. Você pode visitar o Mestre das Artes em cada cidade principal para resetar skills específicas ou fazer um reset completo. Note que há um custo em ouro e um período de espera entre resets.
              </p>
            </div>
            
            <div>
              <h3 className="font-medieval text-lg mb-2">O jogo é PvP ou PvE?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                O Nova Era Shard tem áreas PvP e PvE. As cidades e arredores são zonas seguras (PvE). As dungeons mais profundas e facções territoriais são áreas PvP onde jogadores podem se atacar.
              </p>
            </div>
          </div>
        </div>
        
        {/* Links Úteis */}
        <div className="card-medieval p-6">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Links Úteis para Iniciantes</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/wiki/skills" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Guia de Skills</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Lista completa de habilidades e como desenvolvê-las.
              </p>
            </Link>
            
            <Link href="/wiki/combat/system" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Sistema de Combate</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Aprenda o básico sobre como funciona o combate.
              </p>
            </Link>
            
            <Link href="/wiki/maps/important-locations" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Mapas e Localizações</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Guia das principais cidades e dungeons.
              </p>
            </Link>
            
            <Link href="/wiki/faq" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">FAQ Completo</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Respostas para as perguntas mais comuns.
              </p>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para a Wiki
          </Link>
        </div>
      </div>
    </div>
  );
} 