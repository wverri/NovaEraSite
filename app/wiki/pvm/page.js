import Link from 'next/link';
import { FaBook, FaArrowLeft, FaDragon, FaGem, FaQuestionCircle, FaMap, FaShieldAlt, FaUserAlt, FaPaw, FaDungeon } from 'react-icons/fa';

// Componente customizado para ícones que não existem no react-icons
const FaSwords = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" {...props}>
    <path d="M529.6 84l-126.4 126.4 48.4 48.4 126.4-126.4-48.4-48.4zM57.4 308.5l42.8-42.8-48.4-48.4-42.8 42.8 48.4 48.4zM394.8 218.6l-42.8 42.8 48.4 48.4 42.8-42.8-48.4-48.4zM193.3 420.1l126.4-126.4-48.4-48.4-126.4 126.4 48.4 48.4z"/>
  </svg>
);

export default function PVMPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar para Wiki
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Guia de PvM</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Aprenda estratégias de combate contra monstros e criaturas do Nova Era Shard.
          </p>
        </div>
        
        {/* Introdução ao PvM */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">O que é PvM?</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              PvM (Player versus Monster) é o termo usado para descrever o combate entre jogadores e monstros controlados pelo computador. No Nova Era Shard, o PvM é uma parte fundamental da jogabilidade, oferecendo desafios, recompensas e uma forma de desenvolver seu personagem.
            </p>
            
            <p>
              O combate contra monstros permite que você:
            </p>
            
            <ul>
              <li>Ganhe experiência para melhorar suas habilidades</li>
              <li>Obtenha equipamentos, itens raros e recursos valiosos</li>
              <li>Complete missões e tarefas</li>
              <li>Teste suas builds e estratégias de combate</li>
              <li>Acesse conteúdo endgame desafiador</li>
            </ul>
            
            <p>
              Este guia irá ajudá-lo a entender os fundamentos do PvM, desde o combate básico até estratégias avançadas para enfrentar os monstros mais poderosos de Britannia.
            </p>
          </div>
        </div>
        
        {/* Seção de Acesso Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/wiki/pvm/classes"
            className="card-medieval flex flex-col items-center p-6 hover:shadow-xl transition-shadow text-center"
          >
            <FaUserAlt className="h-12 w-12 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Sistema de Classes</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Conheça as classes disponíveis e suas habilidades únicas
            </p>
          </Link>
          
          <Link
            href="/wiki/pvm/pets"
            className="card-medieval flex flex-col items-center p-6 hover:shadow-xl transition-shadow text-center"
          >
            <FaPaw className="h-12 w-12 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Pets & Taming</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Guia completo sobre domesticação e evolução de pets
            </p>
          </Link>
          
          <Link
            href="/wiki/pvm/dungeons-instanciadas"
            className="card-medieval flex flex-col items-center p-6 hover:shadow-xl transition-shadow text-center"
          >
            <FaDungeon className="h-12 w-12 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Dungeons Instanciadas</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Desafie suas habilidades em dungeons privadas com seu grupo
            </p>
          </Link>
        </div>
        
        {/* Conceitos Básicos de Combate */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaSwords className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Conceitos Básicos de Combate</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Antes de enfrentar monstros poderosos, é essencial entender como funciona o sistema de combate no Nova Era Shard:
            </p>
            
            <h3>Tipos de Ataque</h3>
            <p>
              Existem diferentes formas de atacar monstros:
            </p>
            <ul>
              <li><strong>Combate Corpo a Corpo</strong> - Usando armas como espadas, machados e maças</li>
              <li><strong>Combate à Distância</strong> - Utilizando arcos, bestas e armas arremessáveis</li>
              <li><strong>Magia</strong> - Conjurando feitiços ofensivos de diversas escolas mágicas</li>
            </ul>
            
            <h3>Estatísticas de Combate</h3>
            <p>
              Seu desempenho em combate é influenciado por diversas estatísticas:
            </p>
            <ul>
              <li><strong>Força</strong> - Afeta o dano físico e a capacidade de carga</li>
              <li><strong>Destreza</strong> - Influencia a chance de acerto e defesa</li>
              <li><strong>Inteligência</strong> - Determina seu poder mágico e mana máximo</li>
              <li><strong>Resistências</strong> - Reduzem o dano recebido por tipo (físico, fogo, veneno, etc.)</li>
              <li><strong>Armadura</strong> - Diminui o dano físico recebido</li>
            </ul>
            
            <h3>Habilidades Essenciais</h3>
            <p>
              Algumas habilidades são particularmente úteis para o PvM:
            </p>
            <ul>
              <li><strong>Tactics</strong> - Aumenta o dano causado em combate</li>
              <li><strong>Anatomy</strong> - Melhora sua chance de causar golpes críticos</li>
              <li><strong>Healing</strong> - Permite recuperar vida durante e após o combate</li>
              <li><strong>Magery</strong> - Desbloqueia feitiços poderosos para combate</li>
              <li><strong>Resistance</strong> - Aumenta sua defesa contra tipos específicos de dano</li>
            </ul>
          </div>
        </div>
        
        {/* Tipos de Criaturas */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaDragon className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Tipos de Criaturas</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              O mundo de Britannia é habitado por uma grande variedade de criaturas. Conhecer as características de cada tipo é essencial para desenvolver estratégias eficazes:
            </p>
            
            <h3>Animais</h3>
            <p>
              São as criaturas mais comuns e geralmente as menos perigosas. Incluem lobos, ursos, veados e aves.
            </p>
            <ul>
              <li><strong>Dificuldade:</strong> Baixa a Média</li>
              <li><strong>Resistências:</strong> Geralmente baixas</li>
              <li><strong>Drops:</strong> Recursos básicos como peles, carne e penas</li>
              <li><strong>Locais:</strong> Encontrados em florestas, planícies e montanhas</li>
            </ul>
            
            <h3>Humanoides</h3>
            <p>
              Incluem orcs, trolls, ogres e bandidos. Podem usar armas e, às vezes, magia.
            </p>
            <ul>
              <li><strong>Dificuldade:</strong> Média</li>
              <li><strong>Resistências:</strong> Variadas, dependendo do tipo</li>
              <li><strong>Drops:</strong> Ouro, armas, armaduras e itens diversos</li>
              <li><strong>Locais:</strong> Acampamentos, cavernas e ruínas</li>
            </ul>
            
            <h3>Mortos-Vivos</h3>
            <p>
              Esqueletos, zumbis, fantasmas e vampiros. Frequentemente resistentes a dano físico.
            </p>
            <ul>
              <li><strong>Dificuldade:</strong> Média a Alta</li>
              <li><strong>Resistências:</strong> Física alta, vulneráveis a magia sagrada</li>
              <li><strong>Drops:</strong> Reagentes mágicos, itens encantados</li>
              <li><strong>Locais:</strong> Cemitérios, criptas e dungeons</li>
            </ul>
            
            <h3>Demoníacos</h3>
            <p>
              Demônios, diabretes e criaturas do submundo. Geralmente usam magia e ataques de fogo.
            </p>
            <ul>
              <li><strong>Dificuldade:</strong> Alta</li>
              <li><strong>Resistências:</strong> Altas ao fogo, vulneráveis a água e gelo</li>
              <li><strong>Drops:</strong> Itens raros, reagentes especiais</li>
              <li><strong>Locais:</strong> Dungeons profundas, portais demoníacos</li>
            </ul>
            
            <h3>Elementais</h3>
            <p>
              Criaturas formadas pelos elementos: fogo, água, terra e ar.
            </p>
            <ul>
              <li><strong>Dificuldade:</strong> Alta</li>
              <li><strong>Resistências:</strong> Muito altas ao seu elemento, vulneráveis ao elemento oposto</li>
              <li><strong>Drops:</strong> Pedras elementais, reagentes raros</li>
              <li><strong>Locais:</strong> Áreas elementais específicas, dungeons</li>
            </ul>
            
            <h3>Dragões e Criaturas Lendárias</h3>
            <p>
              As criaturas mais poderosas do jogo. Incluem dragões, hidras e outros monstros lendários.
            </p>
            <ul>
              <li><strong>Dificuldade:</strong> Muito Alta</li>
              <li><strong>Resistências:</strong> Extremamente altas a múltiplos tipos de dano</li>
              <li><strong>Drops:</strong> Itens únicos, equipamentos lendários</li>
              <li><strong>Locais:</strong> Covis especiais, eventos do mundo</li>
            </ul>
          </div>
        </div>
        
        {/* Níveis de Dificuldade */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Classificação de Dificuldade</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              No Nova Era Shard, os monstros são classificados por níveis de dificuldade para ajudar os jogadores a identificar desafios apropriados:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                <h3 className="font-medieval text-lg text-green-700 dark:text-green-400">Nível 1 - Iniciante</h3>
                <ul className="text-sm">
                  <li>Recomendado para personagens novos</li>
                  <li>Até 40 de skill em combate</li>
                  <li>Ex: Coelhos, galinhas, ratos, cobras</li>
                </ul>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                <h3 className="font-medieval text-lg text-blue-700 dark:text-blue-400">Nível 2 - Fácil</h3>
                <ul className="text-sm">
                  <li>Personagens com alguma experiência</li>
                  <li>40-60 de skill em combate</li>
                  <li>Ex: Lobos, orcs fracos, esqueletos</li>
                </ul>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                <h3 className="font-medieval text-lg text-yellow-700 dark:text-yellow-400">Nível 3 - Médio</h3>
                <ul className="text-sm">
                  <li>Aventureiros intermediários</li>
                  <li>60-80 de skill em combate</li>
                  <li>Ex: Ogres, trolls, zumbis, harpias</li>
                </ul>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                <h3 className="font-medieval text-lg text-orange-700 dark:text-orange-400">Nível 4 - Difícil</h3>
                <ul className="text-sm">
                  <li>Aventureiros experientes</li>
                  <li>80-100 de skill em combate</li>
                  <li>Ex: Elementais, daemons, lichs</li>
                </ul>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                <h3 className="font-medieval text-lg text-red-700 dark:text-red-400">Nível 5 - Elite</h3>
                <ul className="text-sm">
                  <li>Personagens de alto nível</li>
                  <li>100+ de skill em combate</li>
                  <li>Ex: Dragões, balrons, lords demoníacos</li>
                </ul>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                <h3 className="font-medieval text-lg text-purple-700 dark:text-purple-400">Nível 6 - Lendário</h3>
                <ul className="text-sm">
                  <li>Requer grupos organizados</li>
                  <li>Personagens totalmente equipados</li>
                  <li>Ex: Bosses de eventos, criaturas únicas</li>
                </ul>
              </div>
            </div>
            
            <p>
              Recomendamos que jogadores sempre busquem desafios um pouco acima de seu nível atual para maximizar o ganho de experiência, mas sem arriscar desnecessariamente.
            </p>
          </div>
        </div>
        
        {/* Estratégias de Combate */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaSwords className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Estratégias de Combate</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Diferentes builds e classes requerem abordagens distintas para o PvM. Aqui estão algumas estratégias recomendadas:
            </p>
            
            <h3>Guerreiros</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4>Pontos Fortes</h4>
                <ul>
                  <li>Alta resistência a danos</li>
                  <li>Dano corpo a corpo consistente</li>
                  <li>Boa sustentação em combates longos</li>
                </ul>
              </div>
              <div>
                <h4>Pontos Fracos</h4>
                <ul>
                  <li>Mobilidade limitada</li>
                  <li>Poucos recursos contra inimigos à distância</li>
                  <li>Vulnerável a monstros mágicos</li>
                </ul>
              </div>
            </div>
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h4>Dicas de Combate:</h4>
              <ul>
                <li>Use escudos com alta resistência física contra criaturas melee</li>
                <li>Carregue poções de cura e vendas para recuperação rápida</li>
                <li>Invista em armaduras elementais para dungeons específicas</li>
                <li>Utilize a habilidade Provocation para atrair apenas um monstro de cada vez</li>
                <li>Em grupos, posicione-se como tanque para proteger aliados mais frágeis</li>
              </ul>
            </div>
            
            <h3>Arqueiros</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4>Pontos Fortes</h4>
                <ul>
                  <li>Ataque à distância seguro</li>
                  <li>Dano elevado em alvos únicos</li>
                  <li>Boa mobilidade</li>
                </ul>
              </div>
              <div>
                <h4>Pontos Fracos</h4>
                <ul>
                  <li>Baixa resistência a danos</li>
                  <li>Limitações de munição</li>
                  <li>Dificuldade contra múltiplos inimigos próximos</li>
                </ul>
              </div>
            </div>
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h4>Dicas de Combate:</h4>
              <ul>
                <li>Mantenha distância segura e utilize terreno elevado</li>
                <li>Carregue diferentes tipos de flechas para vários inimigos</li>
                <li>Use armadilhas ou pets para distrair inimigos</li>
                <li>Invista em Hiding e Stealth para posicionamento vantajoso</li>
                <li>Combine com venenos para dano adicional ao longo do tempo</li>
              </ul>
            </div>
            
            <h3>Magos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4>Pontos Fortes</h4>
                <ul>
                  <li>Dano em área poderoso</li>
                  <li>Versatilidade de elementos</li>
                  <li>Utilidades como teleporte e invocações</li>
                </ul>
              </div>
              <div>
                <h4>Pontos Fracos</h4>
                <ul>
                  <li>Extremamente frágil</li>
                  <li>Consome muitos reagentes</li>
                  <li>Casting time longo</li>
                </ul>
              </div>
            </div>
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h4>Dicas de Combate:</h4>
              <ul>
                <li>Estude as fraquezas elementais dos monstros antes de atacar</li>
                <li>Use Mana Vampire para recuperar mana durante combates</li>
                <li>Mantenha distância e use barreiras arcanas para se proteger</li>
                <li>Tenha sempre reagentes suficientes e poções de mana</li>
                <li>Invoque criaturas para distrair inimigos e absorver dano</li>
              </ul>
            </div>
            
            <h3>Tamers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4>Pontos Fortes</h4>
                <ul>
                  <li>Pets poderosos para combate</li>
                  <li>Boa combinação de suporte e dano</li>
                  <li>Versatilidade de abordagens</li>
                </ul>
              </div>
              <div>
                <h4>Pontos Fracos</h4>
                <ul>
                  <li>Dependência do pet</li>
                  <li>Custo alto de manutenção</li>
                  <li>Controle complexo em dungeons</li>
                </ul>
              </div>
            </div>
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h4>Dicas de Combate:</h4>
              <ul>
                <li>Escolha pets com resistências adequadas para cada área</li>
                <li>Use Veterinary e Animal Lore para manter seus pets saudáveis</li>
                <li>Mantenha itens para ressuscitar pets em caso de morte</li>
                <li>Combine habilidades de cavaleiro com seu pet para maximizar eficiência</li>
                <li>Tenha pets secundários prontos caso seu pet principal caia</li>
              </ul>
            </div>
            
            <h3>Builds Híbridas</h3>
            <p>
              Builds híbridas combinam elementos de múltiplas classes para maior versatilidade:
            </p>
            <ul>
              <li><strong>Battlemage</strong> - Combina armas corpo a corpo com magias de suporte e ataque</li>
              <li><strong>Scout</strong> - Mistura habilidades de arqueiro com stealth e tracking</li>
              <li><strong>Paladin</strong> - Une combate corpo a corpo com magias de cura e proteção</li>
              <li><strong>Tamer Ranger</strong> - Combina arco com um pet para controle e dano</li>
            </ul>
            <p>
              As builds híbridas geralmente sacrificam especialização por versatilidade, mas podem ser extremamente eficazes quando bem executadas.
            </p>
          </div>
        </div>
        
        {/* Áreas de Farm */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaMap className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Melhores Áreas para Farm</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Saber onde caçar é tão importante quanto saber como caçar. Aqui estão algumas das melhores áreas por nível:
            </p>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h3 className="font-medieval text-lg text-green-700 dark:text-green-400">Nível Iniciante (1-40 skills)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medieval">Floresta de Britain</h4>
                  <ul className="text-sm">
                    <li><strong>Criaturas:</strong> Coelhos, cervos, lobos</li>
                    <li><strong>Drops:</strong> Peles, carne, ingredientes básicos</li>
                    <li><strong>Localização:</strong> Nordeste de Britain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medieval">Cemitério de Britain</h4>
                  <ul className="text-sm">
                    <li><strong>Criaturas:</strong> Esqueletos fracos, zumbis</li>
                    <li><strong>Drops:</strong> Ossos, bandagens, reagentes básicos</li>
                    <li><strong>Localização:</strong> Leste de Britain</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h3 className="font-medieval text-lg text-blue-700 dark:text-blue-400">Nível Intermediário (40-70 skills)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medieval">Acampamento Orc</h4>
                  <ul className="text-sm">
                    <li><strong>Criaturas:</strong> Orcs, ogres, trolls</li>
                    <li><strong>Drops:</strong> Ouro, equipamentos de baixo nível</li>
                    <li><strong>Localização:</strong> Sul das montanhas de Vesper</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medieval">Dungeon Deceit (Nível Superior)</h4>
                  <ul className="text-sm">
                    <li><strong>Criaturas:</strong> Esqueletos, zumbis, liches menores</li>
                    <li><strong>Drops:</strong> Reagentes, pergaminhos, itens mágicos</li>
                    <li><strong>Localização:</strong> Nordeste de Britain, entrada da caverna</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h3 className="font-medieval text-lg text-yellow-700 dark:text-yellow-400">Nível Avançado (70-100 skills)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medieval">Dungeon Destard</h4>
                  <ul className="text-sm">
                    <li><strong>Criaturas:</strong> Dragões menores, drakes, elementais</li>
                    <li><strong>Drops:</strong> Escamas, gemas, itens mágicos raros</li>
                    <li><strong>Localização:</strong> Oeste das montanhas de Trinsic</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medieval">Dungeon Hythloth (Nível Médio)</h4>
                  <ul className="text-sm">
                    <li><strong>Criaturas:</strong> Daemons menores, gárgulas, elementais</li>
                    <li><strong>Drops:</strong> Reagentes raros, pergaminhos, armas mágicas</li>
                    <li><strong>Localização:</strong> Sul da ilha vulcânica</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h3 className="font-medieval text-lg text-red-700 dark:text-red-400">Nível Elite (100+ skills)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medieval">Dungeon Doom</h4>
                  <ul className="text-sm">
                    <li><strong>Criaturas:</strong> Balrons, lords demoníacos, elementais divinos</li>
                    <li><strong>Drops:</strong> Itens lendários, artefatos, recursos raros</li>
                    <li><strong>Localização:</strong> Portal no extremo norte das Terras Perdidas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medieval">Covil dos Dragões</h4>
                  <ul className="text-sm">
                    <li><strong>Criaturas:</strong> Dragões ancientes, wyrms, drakes encantados</li>
                    <li><strong>Drops:</strong> Equipamentos de dragão, artefatos, ouro</li>
                    <li><strong>Localização:</strong> Montanha de Fogo no continente perdido</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p>
              Lembre-se que algumas áreas possuem restrições de PvP, então esteja sempre atento ao entrar em dungeons mais profundas ou áreas de facção contestadas.
            </p>
          </div>
        </div>
        
        {/* Dicas para Grupos */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Estratégias para Grupos</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Para conteúdo mais desafiador, formar um grupo é essencial. Aqui estão algumas dicas para PvM em grupo:
            </p>
            
            <h3>Composição de Grupo</h3>
            <p>
              Um grupo equilibrado geralmente inclui:
            </p>
            <ul>
              <li><strong>Tanque</strong> - Guerreiro ou paladino para absorver dano</li>
              <li><strong>Curador</strong> - Especialista em magias de cura e suporte</li>
              <li><strong>DPS</strong> - Arqueiros, magos ou builds de dano para eliminar inimigos</li>
              <li><strong>Suporte</strong> - Tamers, bardos ou magos de controle para debuffs e controle de área</li>
            </ul>
            
            <h3>Comunicação</h3>
            <p>
              A comunicação é fundamental em grupos. Use o canal de grupo (/g) ou Discord para:
            </p>
            <ul>
              <li>Coordenar ataques em alvos específicos</li>
              <li>Alertar sobre perigos iminentes</li>
              <li>Solicitar cura ou suporte quando necessário</li>
              <li>Planejar rotas de fuga em caso de emergência</li>
            </ul>
            
            <h3>Táticas para Bosses</h3>
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg mb-4">
              <h4>Dicas para enfrentar bosses:</h4>
              <ul>
                <li>Estude os padrões de ataque antes de enfrentar</li>
                <li>Distribua-se para evitar ataques em área</li>
                <li>O tanque deve manter a atenção do boss enquanto DPS focam no dano</li>
                <li>Curadores devem se posicionar de forma segura mas com visão do grupo</li>
                <li>Tenha itens especiais como scrolls de recall para emergências</li>
                <li>Alguns bosses têm fases - adapte sua estratégia conforme o combate evolui</li>
              </ul>
            </div>
            
            <h3>Distribuição de Loot</h3>
            <p>
              Acordem previamente como o loot será dividido:
            </p>
            <ul>
              <li><strong>Round Robin</strong> - Cada jogador pega um item por vez em rodízio</li>
              <li><strong>Need/Greed</strong> - Quem precisa do item para sua build tem prioridade</li>
              <li><strong>DKP (Dragon Kill Points)</strong> - Sistema de pontos para guildas organizadas</li>
              <li><strong>Leilão</strong> - Itens raros são leiloados e ouro dividido entre todos</li>
            </ul>
            
            <p>
              Um grupo bem coordenado pode superar desafios muito além do que seria possível individualmente, tornando acessível o conteúdo de elite e as melhores recompensas do jogo.
            </p>
          </div>
        </div>
        
        {/* FAQ PvM */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-6">
            <FaQuestionCircle className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Perguntas Frequentes sobre PvM</h2>
          </div>
          
          <div className="space-y-4">
            <div className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4">
              <h3 className="font-medieval text-lg mb-2">Como maximizar ganho de experiência durante PvM?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Foque em monstros que ofereçam um desafio adequado para seu nível (ligeiramente acima). Use buffs de experiência disponíveis em eventos, poções especiais e escolha áreas com bônus de experiência que ocorrem periodicamente.
              </p>
            </div>
            
            <div className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4">
              <h3 className="font-medieval text-lg mb-2">Vale a pena investir em itens de Luck para PvM?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Sim, itens com a propriedade Luck aumentam suas chances de conseguir itens raros. Mesmo um pequeno aumento na propriedade Luck pode fazer diferença significativa em longas sessões de farm.
              </p>
            </div>
            
            <div className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4">
              <h3 className="font-medieval text-lg mb-2">Como lidar com monstros que usam veneno?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Tenha sempre antídotos na barra de ações rápidas. Invista na skill Resistance para reduzir os efeitos de veneno. Contra serpentes e monstros venenosos, armaduras com resistência a veneno são fundamentais.
              </p>
            </div>
            
            <div className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4">
              <h3 className="font-medieval text-lg mb-2">Qual é a melhor forma de ganhar ouro através de PvM?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Foque em conteúdo de nível médio que possa ser feito rapidamente em vez de lutas lentas com criaturas de alto nível. Áreas como Acampamentos Orcs, Ilhas Piratas e Dungeons de nível médio oferecem bom equilíbrio entre tempo investido e ouro obtido.
              </p>
            </div>
            
            <div>
              <h3 className="font-medieval text-lg mb-2">Como posso sobreviver sozinho em dungeons difíceis?</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
                Invista em habilidades defensivas e itens de emergência. Carregue scrolls de recall, potions de cura, bandagens e itens de invisibilidade. Aprenda rotas de fuga e sempre tenha um plano B. Considere builds híbridas que permitam auto-cura e combate.
              </p>
            </div>
          </div>
        </div>
        
        {/* Links Úteis */}
        <div className="card-medieval p-6">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Links Úteis para PvM</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/wiki/pvm/classes" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Sistema de Classes</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Guia detalhado das classes e suas habilidades especiais.
              </p>
            </Link>
            
            <Link href="/wiki/pvm/pets" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Pets & Taming</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Sistema de pets, dicas de treinamento e evolução.
              </p>
            </Link>
            
            <Link href="/wiki/pvm/dungeons-instanciadas" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Dungeons Instanciadas</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Exploração detalhada das dungeons instanciadas exclusivas.
              </p>
            </Link>
            
            <Link href="/wiki/skills" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Guia de Skills</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Informações detalhadas sobre todas as habilidades e progressão.
              </p>
            </Link>
            
            <Link href="/wiki/dungeons" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Guia de Dungeons</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Mapas e informações sobre todas as dungeons do jogo.
              </p>
            </Link>
            
            <Link href="/wiki/creatures" className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors">
              <h3 className="font-medieval text-lg mb-1">Bestiário</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                Catálogo de monstros e suas características.
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