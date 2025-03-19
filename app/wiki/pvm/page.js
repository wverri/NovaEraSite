import Link from 'next/link';
import { FaBook, FaArrowLeft, FaDragon, FaGem, FaQuestionCircle, FaMap, FaShieldAlt, FaUserAlt, FaPaw, FaDungeon } from 'react-icons/fa';
import { CustomSwordIcon } from '../../components/icons/CustomIcons';
import PageHeader from '../../components/ui/PageHeader';
import SectionCard from '../../components/ui/SectionCard';
import ItemCard from '../../components/ui/ItemCard';
import MedievalTable from '../../components/ui/MedievalTable';

export default function PVMPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Guia de PvM"
          description="Aprenda estratégias de combate contra monstros e criaturas do Nova Era Shard."
          backLink="/wiki"
          backLinkText="Voltar para Wiki"
          icon={<CustomSwordIcon className="w-8 h-8" />}
        />
        
        {/* Introdução ao PvM */}
        <SectionCard 
          title="O que é PvM?" 
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Seção de Acesso Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ItemCard
            title="Sistema de Classes"
            icon={<FaUserAlt />}
            description="Conheça as classes disponíveis e suas habilidades únicas"
            link="/wiki/pvm/classes"
            linkText="Ver Classes"
          />
          
          <ItemCard
            title="Pets & Taming"
            icon={<FaPaw />}
            description="Guia completo sobre domesticação e evolução de pets"
            link="/wiki/pvm/pets"
            linkText="Ver Pets"
          />
          
          <ItemCard
            title="Dungeons Instanciadas"
            icon={<FaDungeon />}
            description="Desafie suas habilidades em dungeons privadas com seu grupo"
            link="/wiki/pvm/dungeons-instanciadas"
            linkText="Ver Dungeons"
          />
        </div>
        
        {/* Conceitos Básicos de Combate */}
        <SectionCard 
          title="Conceitos Básicos de Combate" 
          icon={<CustomSwordIcon className="h-6 w-6" />}
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Tipos de Criaturas */}
        <SectionCard 
          title="Tipos de Criaturas" 
          icon={<FaDragon />}
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Níveis de Dificuldade */}
        <SectionCard 
          title="Classificação de Dificuldade" 
          icon={<FaShieldAlt />}
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Estratégias de Combate */}
        <SectionCard 
          title="Estratégias de Combate" 
          icon={<CustomSwordIcon className="h-6 w-6" />}
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Áreas de Farm */}
        <SectionCard 
          title="Melhores Áreas para Farm" 
          icon={<FaMap />}
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Dicas para Grupos */}
        <SectionCard 
          title="Estratégias para Grupos" 
          icon={<FaShieldAlt />}
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* FAQ PvM */}
        <SectionCard 
          title="Perguntas Frequentes sobre PvM" 
          icon={<FaQuestionCircle />}
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Links Úteis */}
        <SectionCard 
          title="Links Úteis para PvM" 
          className="p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ItemCard
              title="Sistema de Classes"
              icon={<FaUserAlt />}
              description="Guia detalhado das classes e suas habilidades especiais."
              link="/wiki/pvm/classes"
              linkText="Ver Classes"
            />
            
            <ItemCard
              title="Pets & Taming"
              icon={<FaPaw />}
              description="Sistema de pets, dicas de treinamento e evolução."
              link="/wiki/pvm/pets"
              linkText="Ver Pets"
            />
            
            <ItemCard
              title="Dungeons Instanciadas"
              icon={<FaDungeon />}
              description="Exploração detalhada das dungeons instanciadas exclusivas."
              link="/wiki/pvm/dungeons-instanciadas"
              linkText="Ver Dungeons"
            />
            
            <ItemCard
              title="Guia de Skills"
              icon={<FaBook />}
              description="Informações detalhadas sobre todas as habilidades e progressão."
              link="/wiki/skills"
              linkText="Ver Guia de Skills"
            />
            
            <ItemCard
              title="Guia de Dungeons"
              icon={<FaBook />}
              description="Mapas e informações sobre todas as dungeons do jogo."
              link="/wiki/dungeons"
              linkText="Ver Guia de Dungeons"
            />
            
            <ItemCard
              title="Bestiário"
              icon={<FaBook />}
              description="Catálogo de monstros e suas características."
              link="/wiki/creatures"
              linkText="Ver Bestiário"
            />
          </div>
        </SectionCard>
        
        <div className="mt-8 text-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para a Wiki
          </Link>
        </div>
      </div>
    </div>
  );
} 