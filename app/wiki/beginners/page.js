import Link from 'next/link';
import { FaArrowLeft, FaCompass, FaShieldAlt, FaHammer, FaBook, FaCoins, FaRunning, FaUsers } from 'react-icons/fa';

export default function BeginnersGuidePage() {
  // Seções do guia
  const guideSections = [
    {
      id: "primeiros-passos",
      title: "Primeiros Passos",
      icon: <FaCompass className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />,
      content: (
        <div className="space-y-4">
          <p>
            Bem-vindo ao Nova Era Shard, um servidor de Ultima Online focado em uma experiência 
            nostálgica e equilibrada. Vamos ajudá-lo a dar seus primeiros passos neste vasto mundo.
          </p>
          
          <h3 className="text-xl font-medieval mt-4">Criando seu Personagem</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Faça o download do cliente através da nossa <Link href="/download" className="text-uo-crimson dark:text-uo-gold hover:underline">página de downloads</Link></li>
            <li>Instale o cliente seguindo as instruções fornecidas</li>
            <li>Crie uma conta no nosso <Link href="/account/register" className="text-uo-crimson dark:text-uo-gold hover:underline">portal de registro</Link></li>
            <li>Inicie o cliente e conecte-se ao servidor Nova Era</li>
            <li>Selecione "Criar Novo Personagem" na tela inicial</li>
            <li>Escolha sua aparência, nome e distribuição inicial de atributos e skills</li>
          </ol>
          
          <h3 className="text-xl font-medieval mt-4">Cidades Iniciais Recomendadas</h3>
          <ul className="space-y-2">
            <li><strong>Britain:</strong> A maior cidade do jogo, excelente para novos jogadores, com muitos recursos e comércio ativo</li>
            <li><strong>Trinsic:</strong> Cidade de cavaleiros e paladinos, boa para guerreiros</li>
            <li><strong>Moonglow:</strong> Cidade dos magos, perfeita para aqueles que desejam seguir o caminho arcano</li>
            <li><strong>Yew:</strong> Cidade na floresta, ideal para druidas, arqueiros e coletores de recursos naturais</li>
          </ul>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
            <p className="text-sm">
              <strong>Dica de Ouro:</strong> Ao começar, fale com o NPC Guia encontrado em todas as cidades principais. 
              Ele fornecerá equipamentos iniciais gratuitos e informações valiosas sobre a região.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "combate-basico",
      title: "Combate Básico",
      icon: <FaShieldAlt className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />,
      content: (
        <div className="space-y-4">
          <p>
            O combate no Ultima Online é simples de aprender, mas leva tempo para dominar. 
            Vamos cobrir o básico para que você possa começar a caçar monstros com segurança.
          </p>
          
          <h3 className="text-xl font-medieval mt-4">Controles Básicos de Combate</h3>
          <ul className="space-y-2">
            <li><strong>Ataque:</strong> Clique duas vezes no alvo ou clique uma vez e pressione "Alt" para entrar em modo de guerra</li>
            <li><strong>Defesa:</strong> A defesa é automática, baseada em suas habilidades e equipamentos</li>
            <li><strong>Magias:</strong> Selecione seu grimório, escolha a magia e selecione o alvo</li>
            <li><strong>Especiais:</strong> Habilidades especiais podem ser acessadas através do menu de macros (tecla Alt)</li>
          </ul>
          
          <h3 className="text-xl font-medieval mt-4">Locais para Treinar</h3>
          <ul className="space-y-2">
            <li><strong>Cemitério de Britain:</strong> Ideal para iniciantes, com zumbis e esqueletos de nível baixo</li>
            <li><strong>Floresta de Yew:</strong> Cervos, lobos e ursos para caçadores e arqueiros</li>
            <li><strong>Despero:</strong> Dungeon de nível iniciante/intermediário próximo a Britain</li>
            <li><strong>Área de Treinamento:</strong> Um local especial no Nova Era Shard onde monstros fracos reaparecem rapidamente</li>
          </ul>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
            <p className="text-sm">
              <strong>Dica de Ouro:</strong> Sempre treine com bandagens (healing) disponíveis e tenha um portal recall 
              preparado caso as coisas saiam do controle. A morte no Nova Era Shard resulta na perda de itens!
            </p>
          </div>
        </div>
      )
    },
    {
      id: "skills-iniciais",
      title: "Skills Iniciais",
      icon: <FaBook className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />,
      content: (
        <div className="space-y-4">
          <p>
            O Ultima Online oferece mais de 50 skills diferentes, mas escolher as skills iniciais certas 
            pode fazer uma grande diferença na sua experiência como iniciante.
          </p>
          
          <h3 className="text-xl font-medieval mt-4">Builds Recomendadas para Iniciantes</h3>
          
          <div className="space-y-6">
            <div className="border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-lg p-4 bg-white/40 dark:bg-gray-900/40">
              <h4 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold">Guerreiro</h4>
              <ul className="text-sm mt-2">
                <li><strong>Swordsmanship:</strong> 40.0</li>
                <li><strong>Tactics:</strong> 40.0</li>
                <li><strong>Anatomy:</strong> 30.0</li>
                <li><strong>Healing:</strong> 30.0</li>
                <li><strong>Parrying:</strong> 30.0</li>
                <li><strong>Resisting Spells:</strong> 30.0</li>
              </ul>
              <p className="text-sm mt-2">Perfeito para combate próximo, alta sobrevivência e dano consistente.</p>
            </div>
            
            <div className="border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-lg p-4 bg-white/40 dark:bg-gray-900/40">
              <h4 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold">Mago</h4>
              <ul className="text-sm mt-2">
                <li><strong>Magery:</strong> 50.0</li>
                <li><strong>Evaluating Intelligence:</strong> 30.0</li>
                <li><strong>Meditation:</strong> 30.0</li>
                <li><strong>Resisting Spells:</strong> 30.0</li>
                <li><strong>Inscription:</strong> 30.0</li>
                <li><strong>Healing:</strong> 30.0</li>
              </ul>
              <p className="text-sm mt-2">Especialista em dano à distância e utilidade, com versatilidade de magias.</p>
            </div>
            
            <div className="border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-lg p-4 bg-white/40 dark:bg-gray-900/40">
              <h4 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold">Arqueiro</h4>
              <ul className="text-sm mt-2">
                <li><strong>Archery:</strong> 50.0</li>
                <li><strong>Tactics:</strong> 30.0</li>
                <li><strong>Anatomy:</strong> 30.0</li>
                <li><strong>Healing:</strong> 30.0</li>
                <li><strong>Hiding:</strong> 30.0</li>
                <li><strong>Tracking:</strong> 30.0</li>
              </ul>
              <p className="text-sm mt-2">Combate à distância com alta mobilidade e bom dano único.</p>
            </div>
            
            <div className="border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-lg p-4 bg-white/40 dark:bg-gray-900/40">
              <h4 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold">Crafter</h4>
              <ul className="text-sm mt-2">
                <li><strong>Blacksmithy:</strong> 50.0</li>
                <li><strong>Mining:</strong> 40.0</li>
                <li><strong>Arms Lore:</strong> 30.0</li>
                <li><strong>Tinkering:</strong> 30.0</li>
                <li><strong>Tailoring:</strong> 30.0</li>
                <li><strong>Carpentry:</strong> 20.0</li>
              </ul>
              <p className="text-sm mt-2">Focado na produção de itens, com boa capacidade de ganhar ouro.</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
            <p className="text-sm">
              <strong>Dica de Ouro:</strong> No Nova Era Shard, você pode ter um total de 700 pontos de skills 
              distribuídos entre todas as skills. Concentre-se em 3-5 skills principais no início, ao invés 
              de espalhar pontos entre muitas skills.
            </p>
          </div>
          
          <p>
            Para mais informações sobre as skills disponíveis e como treiná-las, consulte nosso 
            <Link href="/wiki/skills" className="text-uo-crimson dark:text-uo-gold hover:underline ml-1">
              Guia Completo de Skills
            </Link>.
          </p>
        </div>
      )
    },
    {
      id: "economia",
      title: "Economia e Ouro",
      icon: <FaCoins className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />,
      content: (
        <div className="space-y-4">
          <p>
            Entender a economia do Nova Era Shard é fundamental para seu progresso. 
            Vamos explorar as formas de ganhar e gastar ouro de maneira eficiente.
          </p>
          
          <h3 className="text-xl font-medieval mt-4">Como Ganhar Ouro (Iniciantes)</h3>
          <ul className="space-y-2">
            <li><strong>Caça:</strong> Mate monstros e venda os drops para NPCs vendedores</li>
            <li><strong>Coleta:</strong> Minere minérios, corte madeira, ou colete plantas para vender</li>
            <li><strong>Crafting:</strong> Crie itens básicos e venda para NPCs ou outros jogadores</li>
            <li><strong>Missões:</strong> Complete missões de NPCs em cada cidade para recompensas</li>
            <li><strong>Tesouro:</strong> Encontre baús de tesouro em dungeons e áreas selvagens</li>
          </ul>
          
          <h3 className="text-xl font-medieval mt-4">Bancando seu Personagem</h3>
          <ul className="space-y-2">
            <li>Mantenha no mínimo 5.000 ouros para gastos essenciais (reagentes, suprimentos)</li>
            <li>Tenha uma casa de banco em uma cidade principal para armazenar seus itens</li>
            <li>Sempre mantenha runes de recall e reagentes suficientes para emergências</li>
            <li>Invista em equipamentos que melhoram suas skills antes de comprar itens caros</li>
            <li>Não gaste todo seu ouro em um único item - diversifique seus investimentos</li>
          </ul>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
            <p className="text-sm">
              <strong>Dica de Ouro:</strong> O banco do Nova Era Shard é acessível em todas as cidades principais. 
              Seu saldo bancário é compartilhado entre todas elas, então você pode depositar em uma cidade 
              e sacar em outra.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "transporte",
      title: "Transporte e Navegação",
      icon: <FaRunning className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />,
      content: (
        <div className="space-y-4">
          <p>
            Britannia é um mundo vasto, e saber como se locomover eficientemente é uma habilidade essencial. 
            Vamos explorar as principais formas de transporte disponíveis no Nova Era Shard.
          </p>
          
          <h3 className="text-xl font-medieval mt-4">Métodos de Transporte</h3>
          <ul className="space-y-2">
            <li><strong>Portais:</strong> Gates mágicos entre cidades principais, use-os gratuitamente para viagens rápidas</li>
            <li><strong>Montarias:</strong> Cavalos podem ser comprados nos estábulos e aumentam sua velocidade</li>
            <li><strong>Magia:</strong> Feitiços como Recall, Gate Travel e Mark permitem teleporte instantâneo</li>
            <li><strong>Barcos:</strong> Para atravessar oceanos e alcançar ilhas remotas</li>
            <li><strong>NPCs Transportadores:</strong> Alguns NPCs oferecem serviços de transporte por uma taxa</li>
          </ul>
          
          <h3 className="text-xl font-medieval mt-4">Navegação para Iniciantes</h3>
          <ul className="space-y-2">
            <li>Use o comando <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1">where</span> para saber sua posição atual</li>
            <li>A bússola no canto superior esquerdo da tela mostra a direção que você está olhando</li>
            <li>Memorize pontos de referência como montanhas, rios e cidades</li>
            <li>Pedir direções a outros jogadores ou NPCs é uma forma válida de encontrar seu caminho</li>
            <li>Jogadores com a skill Cartography podem fazer mapas detalhados das regiões</li>
          </ul>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
            <p className="text-sm">
              <strong>Dica de Ouro:</strong> Sempre carregue pedras de recall e reagentes suficientes 
              (Blood Moss, Black Pearl, Mandrake Root) para emergências. Um teleporte pode salvar sua vida!
            </p>
          </div>
        </div>
      )
    },
    {
      id: "etiqueta-comunidade",
      title: "Etiqueta e Comunidade",
      icon: <FaUsers className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />,
      content: (
        <div className="space-y-4">
          <p>
            O Nova Era Shard possui uma comunidade ativa e amigável. Seguir algumas regras de etiqueta 
            ajudará você a se integrar e aproveitar ao máximo sua experiência social.
          </p>
          
          <h3 className="text-xl font-medieval mt-4">Comunicação</h3>
          <ul className="space-y-2">
            <li><strong>Chat Global:</strong> Use [Global] para mensagens que todos podem ver (não abuse)</li>
            <li><strong>Chat Local:</strong> Falar normalmente só é ouvido por jogadores próximos</li>
            <li><strong>Sussurro:</strong> Use o comando <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1">.tell nome mensagem</span> para mensagens privadas</li>
            <li><strong>Guildas:</strong> Use [Guild] para falar apenas com sua guilda</li>
            <li><strong>Emotes:</strong> Use <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1">.emote</span> ou <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1">:emote</span> para ações</li>
          </ul>
          
          <h3 className="text-xl font-medieval mt-4">Etiqueta do Jogador</h3>
          <ul className="space-y-2">
            <li>Respeite os locais de caça de outros jogadores - não "roube" monstros</li>
            <li>Não peça itens ou ouro gratuitamente - ofereça trocas ou serviços</li>
            <li>Ajude novatos se puder - a comunidade prospera com cooperação</li>
            <li>Participe de eventos do servidor - eles são divertidos e recompensadores</li>
            <li>Respeite as regras de PvP nas zonas designadas</li>
          </ul>
          
          <h3 className="text-xl font-medieval mt-4">Guildas e Alianças</h3>
          <p>
            Juntar-se a uma guilda é uma das melhores formas de progredir no jogo. Guildas oferecem:
          </p>
          <ul className="space-y-2">
            <li>Proteção e ajuda em áreas perigosas</li>
            <li>Compartilhamento de recursos e conhecimento</li>
            <li>Atividades em grupo como caçadas e raids</li>
            <li>Comunidade e amizades duradouras</li>
            <li>Muitas guildas recrutam ativamente novos jogadores</li>
          </ul>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
            <p className="text-sm">
              <strong>Dica de Ouro:</strong> No Discord oficial do Nova Era Shard, há um canal dedicado a 
              jogadores iniciantes, onde você pode fazer perguntas e encontrar mentores dispostos a ajudar.
            </p>
          </div>
        </div>
      )
    }
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
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Guia para Iniciantes</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Tudo o que você precisa saber para dar seus primeiros passos em Britannia.
          </p>
        </div>

        {/* Introdução */}
        <div className="card-medieval mb-10">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Bem-vindo a Britannia!</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Se você é novo no Ultima Online ou no Nova Era Shard, este guia foi desenvolvido especialmente para você. 
              Nossa missão é ajudá-lo a compreender os fundamentos do jogo e facilitar seu início nesta grande aventura.
            </p>
            
            <p>
              Ultima Online é um dos MMORPGs mais antigos e respeitados, com um mundo vasto e complexo. 
              Diferente de jogos modernos que guiam você a cada passo, UO valoriza a descoberta e a exploração. 
              Este guia fornecerá as informações essenciais para começar, mas o verdadeiro aprendizado virá 
              da sua própria jornada.
            </p>
            
            <p>
              Navegue pelas seções abaixo para encontrar informações detalhadas sobre diversos aspectos do jogo:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {guideSections.map(section => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="flex items-center p-3 rounded-md border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/5 dark:hover:bg-uo-gold/5 transition-colors"
              >
                {section.icon}
                <span className="font-medieval">{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Seções do guia */}
        {guideSections.map((section) => (
          <div key={section.id} id={section.id} className="card-medieval mb-10 scroll-mt-20">
            <div className="flex items-center mb-6">
              {section.icon}
              <h2 className="font-medieval text-2xl text-uo-crimson dark:text-uo-gold">{section.title}</h2>
            </div>
            
            {section.content}
          </div>
        ))}

        {/* Conclusão */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Próximos Passos</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Este guia cobre apenas o básico para começar. À medida que você progride, vai querer explorar 
              aspectos mais avançados do jogo. Recomendamos conferir:
            </p>
            
            <ul>
              <li><Link href="/wiki/skills" className="text-uo-crimson dark:text-uo-gold hover:underline">Guia Detalhado de Skills</Link></li>
              <li><Link href="/wiki/combat/system" className="text-uo-crimson dark:text-uo-gold hover:underline">Sistema de Combate Avançado</Link></li>
              <li><Link href="/wiki/crafting" className="text-uo-crimson dark:text-uo-gold hover:underline">Guia de Crafting e Profissões</Link></li>
              <li><Link href="/wiki/housing" className="text-uo-crimson dark:text-uo-gold hover:underline">Sistema de Casas e Decoração</Link></li>
              <li><Link href="/wiki/pvp" className="text-uo-crimson dark:text-uo-gold hover:underline">PvP e Facções</Link></li>
            </ul>
            
            <p>
              Lembre-se de que Ultima Online é um jogo social. Não hesite em pedir ajuda no chat global ou 
              no Discord oficial. A comunidade do Nova Era Shard é conhecida por ser acolhedora com novos jogadores.
            </p>
            
            <div className="bg-uo-crimson/5 dark:bg-uo-gold/5 p-4 rounded-md my-4">
              <p>
                <strong>Palavras Finais:</strong> Não tenha medo de explorar e experimentar. Britannia é um mundo 
                vasto com infinitas possibilidades. Cada jogador encontra seu próprio caminho e estilo de jogo. 
                Sua jornada será única!
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