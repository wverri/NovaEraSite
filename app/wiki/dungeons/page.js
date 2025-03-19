import Link from 'next/link';
import { FaArrowLeft, FaSkull, FaGem, FaMapMarkedAlt, FaDungeon, FaShieldAlt, FaStar } from 'react-icons/fa';

export default function DungeonsPage() {
  // Lista de dungeons do servidor
  const dungeons = [
    {
      name: "Despise",
      level: "Iniciante a Intermediário",
      icon: <FaDungeon className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Uma caverna fria abaixo de Britain, lar de orcs, trolls e ettins",
      location: "Ao norte de Britain, na base das montanhas",
      monsters: ["Orcs", "Trolls", "Ettins", "Ogres", "Earth Elementals"],
      loot: ["Armas Básicas", "Armaduras Básicas", "Poções", "Reagentes"],
      minLevel: "Nenhum, mas recomendado para personagens com pelo menos 40 em combate",
      pvpZone: "Somente nas áreas mais profundas",
      specialFeatures: "Portal para dungeon secreta nas câmaras mais profundas",
      image: "/images/dungeons/despise.jpg"
    },
    {
      name: "Deceit",
      level: "Intermediário",
      icon: <FaSkull className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Uma antiga prisão subterrânea corrompida por magia negra",
      location: "Península ao leste do Moonglow",
      monsters: ["Esqueletos", "Zumbis", "Liches", "Lichs Lords", "Dread Spiders"],
      loot: ["Itens Mágicos", "Armas Encantadas", "Pergaminhos", "Reagentes Raros"],
      minLevel: "Recomendado para personagens com pelo menos 60 em combate",
      pvpZone: "Sim, a partir do segundo nível",
      specialFeatures: "Contém inimigos especiais em datas específicas",
      image: "/images/dungeons/deceit.jpg"
    },
    {
      name: "Hythloth",
      level: "Avançado",
      icon: <FaGem className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Uma dungeon vulcânica com múltiplos níveis de dificuldade crescente",
      location: "Dentro do vulcão na Ilha das Virtudes",
      monsters: ["Daemons", "Dragons", "Balrons", "Fire Elementals", "Lava Serpents"],
      loot: ["Itens Únicos", "Armas Raras", "Joias", "Recursos Valiosos"],
      minLevel: "Recomendado apenas para veteranos (80+ em combate)",
      pvpZone: "Sim, em toda a dungeon",
      specialFeatures: "Chefe especial que aparece a cada 24 horas",
      image: "/images/dungeons/hythloth.jpg"
    },
    {
      name: "Shame",
      level: "Intermediário a Avançado",
      icon: <FaShieldAlt className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Uma antiga mina inundada por criaturas",
      location: "Oeste de Britain, nas montanhas",
      monsters: ["Earth Elementals", "Fire Elementals", "Golems", "Daemons", "Minotaurs"],
      loot: ["Minérios Raros", "Equipamentos de Qualidade", "Reagentes"],
      minLevel: "Recomendado para personagens com pelo menos 70 em combate",
      pvpZone: "Apenas nos níveis 3 e 4",
      specialFeatures: "Passagens secretas que levam a áreas de tesouro",
      image: "/images/dungeons/shame.jpg"
    },
    {
      name: "Wrong",
      level: "Intermediário",
      icon: <FaMapMarkedAlt className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Uma prisão abandonada ocupada por humanoides e mortos-vivos",
      location: "Norte de Jhelom, nas montanhas",
      monsters: ["Lizardmen", "Ratmen", "Undead", "Headless Ones", "Evil Mages"],
      loot: ["Livros de Magia", "Pergaminhos", "Poções", "Itens Amaldiçoados"],
      minLevel: "Recomendado para personagens com pelo menos 55 em combate",
      pvpZone: "Não, é uma zona PvE",
      specialFeatures: "Contém uma prisão com inimigos raros que soltam itens únicos",
      image: "/images/dungeons/wrong.jpg"
    },
    {
      name: "Destard",
      level: "Avançado",
      icon: <FaStar className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Um covil de dragões subterrâneo com tesouros abundantes",
      location: "Noroeste de Trinsic, na base das montanhas",
      monsters: ["Drakes", "Wyverns", "Dragons", "Ancient Wyrms", "Dragon Lords"],
      loot: ["Escamas de Dragão", "Armas Lendárias", "Ouro em Quantidade", "Gemstones"],
      minLevel: "Recomendado apenas para grupos ou personagens muito fortes (85+ em combate)",
      pvpZone: "Sim, em toda a dungeon",
      specialFeatures: "Grande câmara central com o Dragão Ancião, um dos chefes mais difíceis do jogo",
      image: "/images/dungeons/destard.jpg"
    }
  ];

  // Dicas para explorar dungeons
  const dungeonTips = [
    "Sempre leve muitas bandagens e poções de cura",
    "Explore em grupo sempre que possível, especialmente nas dungeons mais difíceis",
    "Leve runas marcadas para poder retornar rapidamente caso precise",
    "Aprenda as fraquezas dos monstros que você enfrentará",
    "Em áreas PvP, esteja sempre alerta para emboscadas de outros jogadores",
    "Tenha um plano de fuga para situações perigosas",
    "Mapeie mentalmente seu caminho para evitar se perder",
    "Carregue reagentes extras se for um mago"
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
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Dungeons de Britannia</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Explore as perigosas cavernas e masmorras do mundo de Ultima Online e encontre tesouros lendários.
          </p>
        </div>

        {/* Introdução */}
        <div className="card-medieval mb-10">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Guia de Dungeons do Nova Era Shard</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              As dungeons são locais de exploração e aventura onde os mais corajosos enfrentam
              monstros poderosos em busca de tesouros valiosos. Cada dungeon tem seu próprio conjunto
              de inimigos, níveis de dificuldade e recompensas únicas.
            </p>
            
            <p>
              Algumas dungeons possuem áreas PvP, onde jogadores podem atacar uns aos outros. Esteja
              sempre preparado e, se possível, explore em grupo para maior segurança.
            </p>
            
            <p>
              Abaixo você encontrará informações detalhadas sobre as principais dungeons de Britannia no Nova Era Shard:
            </p>
          </div>
        </div>

        {/* Lista de Dungeons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {dungeons.map((dungeon, index) => (
            <div key={index} className="card-medieval">
              <div className="flex items-center mb-4">
                {dungeon.icon}
                <div>
                  <h3 className="font-medieval text-xl text-uo-crimson dark:text-uo-gold">{dungeon.name}</h3>
                  <p className="text-sm text-uo-darkwood/70 dark:text-uo-mist/70">Nível: {dungeon.level}</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{dungeon.description}</p>
                
                <div>
                  <p className="font-bold">Localização:</p>
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{dungeon.location}</p>
                </div>
                
                <div>
                  <p className="font-bold">Monstros Principais:</p>
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{dungeon.monsters.join(", ")}</p>
                </div>
                
                <div>
                  <p className="font-bold">Recompensas:</p>
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{dungeon.loot.join(", ")}</p>
                </div>
                
                <div>
                  <p className="font-bold">Nível Recomendado:</p>
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{dungeon.minLevel}</p>
                </div>
                
                <div>
                  <p className="font-bold">Zona PvP:</p>
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{dungeon.pvpZone}</p>
                </div>
                
                <div>
                  <p className="font-bold">Características Especiais:</p>
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{dungeon.specialFeatures}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mapa de Dungeons */}
        <div className="card-medieval mb-10">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Mapa de Dungeons</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="mb-4">
              Abaixo está a localização aproximada de cada dungeon no mapa de Britannia. 
              Clique no mapa para ver em tamanho maior.
            </p>
            
            <div className="bg-uo-mist/10 dark:bg-uo-darkwood/20 p-6 rounded-md text-center">
              <p className="italic text-uo-darkwood/60 dark:text-uo-mist/60">
                [Imagem do Mapa de Dungeons estaria aqui]
              </p>
            </div>
          </div>
        </div>

        {/* Dicas para Explorar Dungeons */}
        <div className="card-medieval mb-10 bg-uo-crimson/5 dark:bg-uo-gold/5">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Dicas para Exploração de Dungeons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dungeonTips.map((tip, index) => (
              <div key={index} className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-uo-crimson/20 dark:bg-uo-gold/20 text-center flex-shrink-0 mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-uo-darkwood/80 dark:text-uo-mist/80">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sistema de Chefes */}
        <div className="card-medieval mb-10">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Sistema de Chefes</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Cada dungeon possui um ou mais chefes (bosses) - monstros poderosos com habilidades
              especiais e recompensas exclusivas. Esses chefes geralmente estão localizados nas áreas
              mais profundas das dungeons e requerem uma estratégia coordenada para serem derrotados.
            </p>
            
            <p>
              <strong>Informações sobre Chefes:</strong>
            </p>
            
            <ul>
              <li>Os chefes reaparecem em intervalos regulares (geralmente 24 horas reais)</li>
              <li>Eles têm mais pontos de vida e dano que monstros normais</li>
              <li>Possuem habilidades especiais como invocar aliados ou usar ataques em área</li>
              <li>Garantem recompensas exclusivas como itens raros, armas únicas e grandes quantidades de ouro</li>
              <li>Alguns chefes possuem mecânicas especiais que requerem coordenação entre jogadores</li>
            </ul>
            
            <p>
              Para informações mais detalhadas sobre cada chefe, incluindo estratégias e loot,
              visite nossa página específica de <Link href="/wiki/chefes" className="text-uo-crimson dark:text-uo-gold hover:underline">Chefes e Monstros Raros</Link>.
            </p>
          </div>
        </div>

        {/* Recursos Importantes */}
        <div className="card-medieval">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Recursos Importantes</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/wiki/pvm" className="p-4 bg-uo-darkwood/5 dark:bg-uo-mist/5 rounded hover:bg-uo-darkwood/10 dark:hover:bg-uo-mist/10 transition">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Guia de PvM</h3>
              <p className="text-sm text-uo-darkwood/70 dark:text-uo-mist/70">
                Aprenda estratégias para combate contra monstros
              </p>
            </Link>
            
            <Link href="/wiki/pvm/dungeons-instanciadas" className="p-4 bg-uo-darkwood/5 dark:bg-uo-mist/5 rounded hover:bg-uo-darkwood/10 dark:hover:bg-uo-mist/10 transition">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Dungeons Instanciadas</h3>
              <p className="text-sm text-uo-darkwood/70 dark:text-uo-mist/70">
                Conheça o novo sistema de dungeons privadas para grupos
              </p>
            </Link>
            
            <Link href="/wiki/pvp" className="p-4 bg-uo-darkwood/5 dark:bg-uo-mist/5 rounded hover:bg-uo-darkwood/10 dark:hover:bg-uo-mist/10 transition">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Guia de PvP</h3>
              <p className="text-sm text-uo-darkwood/70 dark:text-uo-mist/70">
                Dicas para combate jogador contra jogador nas áreas PvP das dungeons
              </p>
            </Link>
            
            <Link href="/wiki/skills" className="p-4 bg-uo-darkwood/5 dark:bg-uo-mist/5 rounded hover:bg-uo-darkwood/10 dark:hover:bg-uo-mist/10 transition">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Sistema de Skills</h3>
              <p className="text-sm text-uo-darkwood/70 dark:text-uo-mist/70">
                Conheça as melhores skills para exploração de dungeons
              </p>
            </Link>
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