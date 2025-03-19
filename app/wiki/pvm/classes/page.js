import Link from 'next/link';
import { FaArrowLeft, FaDragon, FaShieldAlt, FaHatWizard, FaGlobe } from 'react-icons/fa';
import SwordIcon from '../../../components/icons/SwordIcon';
import BowIcon from '../../../components/icons/BowIcon';
import FallbackImage from '../../../components/ui/FallbackImage';
import PageHeader from '../../../components/ui/PageHeader';
import SectionCard from '../../../components/ui/SectionCard';
import ItemCard from '../../../components/ui/ItemCard';

// Dados das classes para reutilização
const classes = [
  {
    id: "warrior",
    title: "Guerreiro",
    image: "/images/classes/warrior.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Guerreiro",
    description: "Especialistas em combate corpo a corpo, os Guerreiros são mestres em armas e técnicas de combate direto. Sua força bruta e resistência os tornam formidáveis na linha de frente.",
    stats: {
      "Armas": ["Espadas de Uma Mão", "Machados", "Maças", "Armas de Duas Mãos"],
      "Armaduras": ["Todas, com preferência para placas pesadas"],
      "Atributos": ["Força primária", "Destreza secundária"],
      "Habilidades": ["Tactics", "Swordsmanship", "Macing", "Parrying", "Healing"]
    },
    strengths: [
      "Excelente sobrevivência em combate direto",
      "Alto dano sustentado",
      "Versatilidade entre armas",
      "Eficiente contra inimigos únicos poderosos"
    ],
    weaknesses: [
      "Mobilidade limitada",
      "Vulnerável a magias de controle",
      "Eficácia reduzida contra múltiplos inimigos",
      "Depende de itens de cura para combates prolongados"
    ]
  },
  {
    id: "paladin",
    title: "Paladino",
    image: "/images/classes/paladin.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Paladino",
    description: "Os Paladinos combinam as habilidades de combate dos guerreiros com a capacidade de usar magia divina. São excelentes defensores e podem curar a si mesmos e aliados.",
    stats: {
      "Armas": ["Maças", "Espadas", "Lanças", "Escudos"],
      "Armaduras": ["Todas, com preferência para placas médias"],
      "Atributos": ["Força e Inteligência balanceadas"],
      "Habilidades": ["Chivalry", "Healing", "Tactics", "Meditation", "Swordsmanship"]
    },
    strengths: [
      "Excelente sustentação através de curas",
      "Resistência a magias negativas",
      "Auras benéficas para o grupo",
      "Controle de mortos-vivos"
    ],
    weaknesses: [
      "Dano inferior aos guerreiros puros",
      "Menos versátil que magos em habilidades",
      "Divisão de atributos reduz especialização",
      "Consumo de mana e stamina simultâneo"
    ]
  },
  {
    id: "mage",
    title: "Mago",
    image: "/images/classes/mage.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Mago",
    description: "Mestres da magia arcana, os Magos dominam os elementos e manipulam as forças da natureza para destruir seus inimigos à distância. O que lhes falta em resistência física, sobra em poder mágico devastador.",
    stats: {
      "Armas": ["Cajados", "Adagas", "Varinhas"],
      "Armaduras": ["Apenas tecidos e couro leve"],
      "Atributos": ["Inteligência primária", "Força mínima"],
      "Habilidades": ["Magery", "Evaluating Intelligence", "Meditation", "Inscription", "Resisting Spells"]
    },
    strengths: [
      "Dano em área devastador",
      "Controle de campo de batalha",
      "Teleportação e mobilidade",
      "Versatilidade de soluções para diferentes desafios"
    ],
    weaknesses: [
      "Baixa sobrevivência sob ataque direto",
      "Tempo de conjuração deixa vulnerável",
      "Alto consumo de reagentes",
      "Dependência de mana e meditação"
    ]
  },
  {
    id: "archer",
    title: "Arqueiro",
    image: "/images/classes/archer.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Arqueiro",
    description: "Especialistas em combate à distância, os Arqueiros utilizam arcos, bestas e armas de arremesso para eliminar inimigos sem se expor ao perigo do combate direto. Combinam precisão, mobilidade e dano sustentado.",
    stats: {
      "Armas": ["Arcos", "Bestas", "Armas de Arremesso"],
      "Armaduras": ["Leves a médias, privilegiando mobilidade"],
      "Atributos": ["Destreza primária", "Força secundária"],
      "Habilidades": ["Archery", "Tactics", "Anatomy", "Hiding", "Tracking"]
    },
    strengths: [
      "Excelente dano único à distância",
      "Habilidade de manter-se longe do perigo",
      "Eficiente contra alvos voadores",
      "Possibilidade de usar flechas especiais com efeitos"
    ],
    weaknesses: [
      "Vulnerável quando cercado em combate próximo",
      "Depende de linha de visão desobstruída",
      "Necessita gerenciar munição",
      "Eficácia reduzida em espaços confinados"
    ]
  }
];

export default function ClassesPVMPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title="Classes PvM" 
          description="Conheça as classes disponíveis para combate PvM no Nova Era Shard e escolha a que melhor se adapta ao seu estilo de jogo."
          backLink="/wiki/pvm"
          backLinkText="Voltar para PvM"
          icon={<SwordIcon className="w-6 h-6" />}
        />
        
        {/* Introdução */}
        <SectionCard 
          title="Escolha seu Caminho" 
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              No Nova Era Shard, cada jogador pode desenvolver seu personagem de acordo com suas preferências, 
              escolhendo habilidades e equipamentos que definirão seu papel no jogo. Embora não existam classes 
              fixas como em outros MMORPGs, os jogadores tendem a seguir certos arquétipos que se provaram 
              eficientes ao longo do tempo.
            </p>
            
            <p>
              As classes apresentadas abaixo são sugestões de combinações de habilidades e equipamentos que 
              funcionam bem juntos, mas você é livre para criar seu próprio estilo único de jogo, misturando 
              elementos de diferentes classes.
            </p>
            
            <div className="callout-uo mt-4">
              <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mb-2">Lembre-se</h3>
              <p>
                Em Nova Era Shard, você não está preso a uma classe. Seu personagem evolui de acordo com as 
                habilidades que você utiliza. Com tempo e dedicação, é possível dominar múltiplos estilos de jogo.
              </p>
            </div>
          </div>
        </SectionCard>
        
        {/* Classes */}
        <div className="grid grid-cols-1 gap-8 mb-10">
          {classes.map((classItem) => (
            <SectionCard 
              key={classItem.id}
              title={classItem.title}
              icon={
                classItem.id === "warrior" ? <SwordIcon className="w-6 h-6" /> :
                classItem.id === "paladin" ? <FaShieldAlt /> :
                classItem.id === "mage" ? <FaHatWizard /> :
                <BowIcon className="w-6 h-6" />
              }
              className="class-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <FallbackImage 
                    src={classItem.image} 
                    alt={classItem.title} 
                    className="rounded-lg w-full shadow-md hover:shadow-lg transition-shadow duration-300"
                    fallbackSrc={classItem.fallbackImage}
                  />
                  
                  <div className="mt-4 space-y-2">
                    <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold">Pontos Fortes</h3>
                    <ul className="list-disc list-inside text-sm text-uo-darkwood/80 dark:text-uo-mist/80 space-y-1">
                      {classItem.strengths.map((strength, idx) => (
                        <li key={idx}>{strength}</li>
                      ))}
                    </ul>
                    
                    <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mt-4">Pontos Fracos</h3>
                    <ul className="list-disc list-inside text-sm text-uo-darkwood/80 dark:text-uo-mist/80 space-y-1">
                      {classItem.weaknesses.map((weakness, idx) => (
                        <li key={idx}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                    {classItem.description}
                  </p>
                  
                  <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 mb-4">
                    <h3 className="font-medieval text-lg mb-3 text-uo-crimson dark:text-uo-gold">Características</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(classItem.stats).map(([key, values]) => (
                        <div key={key}>
                          <h4 className="font-medieval text-base text-uo-crimson/80 dark:text-uo-gold/80">{key}</h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            {values.map((value, idx) => (
                              <li key={idx}>{value}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10">
                    <h3 className="font-medieval text-lg mb-3 text-uo-crimson dark:text-uo-gold">Guia Rápido</h3>
                    
                    <div className="prose prose-sm prose-stone dark:prose-invert max-w-none">
                      <p>
                        <strong>Estilo de jogo:</strong> {
                          classItem.id === "warrior" ? "Combate frontal direto, resistindo a dano e causando alto dano sustentado." :
                          classItem.id === "paladin" ? "Tanque híbrido que equilibra resistência, cura e combate." :
                          classItem.id === "mage" ? "Controle de batalha e dano em área, mantendo distância dos inimigos." :
                          "Dano à distância concentrado, focando em mobilidade e posicionamento."
                        }
                      </p>
                      
                      <p>
                        <strong>Iniciando:</strong> {
                          classItem.id === "warrior" ? "Comece treinando Tactics e uma habilidade de arma (Swordsmanship, Macing ou Fencing). Adquira uma boa arma e armadura o quanto antes." :
                          classItem.id === "paladin" ? "Equilibre o treino entre Chivalry, uma habilidade de arma e Tactics. Treine Meditation para recuperar mana mais rapidamente." :
                          classItem.id === "mage" ? "Foque em Magery e Meditation inicialmente. Compre um bom suprimento de reagentes e um grimório para suas magias." :
                          "Invista em Archery e Tactics. Mantenha um bom estoque de flechas diferentes para situações variadas."
                        }
                      </p>
                      
                      <p>
                        <strong>Dica avançada:</strong> {
                          classItem.id === "warrior" ? "Aprenda a alternar entre escudo (para defesa) e armas de duas mãos (para dano máximo) conforme a situação." :
                          classItem.id === "paladin" ? "Use auras defensivas antecipadamente e reserve mana para curas de emergência quando enfrentar inimigos poderosos." :
                          classItem.id === "mage" ? "Lembre-se que seu posicionamento é crucial. Use Teleport para escapar quando cercado e Wall of Stone para controlar o campo de batalha." :
                          "Aprenda a usar o ambiente a seu favor, atirando de locais elevados ou criando gargalos onde os inimigos precisam passar."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>
          ))}
        </div>
        
        {/* Builds Avançados */}
        <SectionCard 
          title="Builds Avançados" 
          icon={<FaGlobe />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Jogadores experientes frequentemente desenvolvem builds especializados para enfrentar 
              desafios específicos. Aqui estão algumas das variações avançadas das classes básicas:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 not-prose">
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Cavaleiro Místico</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80 mb-2">
                  Variação do Paladino que incorpora mais elementos mágicos, utilizando Magery para complementar suas habilidades de Chivalry.
                </p>
                <p className="text-xs text-uo-crimson/70 dark:text-uo-gold/70">
                  Habilidades: Chivalry, Magery, Meditation, Tactics, Resisting Spells
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Battlemage</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80 mb-2">
                  Mago adaptado para combate próximo, combinando magia com habilidades defensivas e armas encantadas.
                </p>
                <p className="text-xs text-uo-crimson/70 dark:text-uo-gold/70">
                  Habilidades: Magery, Tactics, Parrying, Mace Fighting, Wrestling
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Ranger</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80 mb-2">
                  Arqueiro especializado em combate na natureza, com habilidades de rastreamento e sobrevivência melhoradas.
                </p>
                <p className="text-xs text-uo-crimson/70 dark:text-uo-gold/70">
                  Habilidades: Archery, Tracking, Animal Taming, Hiding, Stealth
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Berserker</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80 mb-2">
                  Guerreiro especializado em dano máximo, focando em armas de duas mãos e habilidades ofensivas.
                </p>
                <p className="text-xs text-uo-crimson/70 dark:text-uo-gold/70">
                  Habilidades: Swordsmanship, Tactics, Anatomy, Focus, Healing
                </p>
              </div>
            </div>
            
            <div className="callout-uo mt-6">
              <p className="flex items-center">
                <svg className="h-5 w-5 text-uo-crimson dark:text-uo-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v3a1 1 0 11-2 0zm0-5a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
                <strong>Dica:</strong> Estas builds avançadas geralmente requerem um personagem com skills já desenvolvidas. Recomendamos começar com uma das classes básicas e evoluir gradualmente para estas especializações.
              </p>
            </div>
          </div>
        </SectionCard>
        
        {/* Multiclasses */}
        <SectionCard 
          title="Multiclasses" 
          icon={<FaDragon />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Em Nova Era Shard, é possível combinar elementos de várias classes para criar builds híbridos 
              que oferecem versatilidade única. Estas combinações são mais desafiadoras de desenvolver, 
              mas podem ser extremamente gratificantes.
            </p>
            
            <div className="divider-uo my-6">
              <span className="text-uo-crimson dark:text-uo-gold px-4 font-medieval">Combinações Populares</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-parchment">
                <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mb-2">Guerreiro-Mago</h3>
                <p className="mb-2">
                  Combina a resistência e habilidades de combate próximo do Guerreiro com o poder mágico do Mago. 
                  Um verdadeiro desafio para mestres, mas extremamente versátil.
                </p>
                <div className="text-sm">
                  <p className="text-uo-crimson dark:text-uo-gold font-semibold">Divisão típica:</p>
                  <ul className="list-disc list-inside">
                    <li>50% foco em habilidades de combate</li>
                    <li>50% foco em habilidades mágicas</li>
                  </ul>
                </div>
              </div>
              
              <div className="card-parchment">
                <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mb-2">Arqueiro-Ladino</h3>
                <p className="mb-2">
                  Une as capacidades de ataque à distância do Arqueiro com as habilidades furtivas do Ladino, 
                  permitindo ataques surpresa devastadores.
                </p>
                <div className="text-sm">
                  <p className="text-uo-crimson dark:text-uo-gold font-semibold">Divisão típica:</p>
                  <ul className="list-disc list-inside">
                    <li>60% foco em Archery e Combat</li>
                    <li>40% foco em Stealth e Thievery</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="callout-uo mt-6">
              <p className="flex items-center">
                <svg className="h-5 w-5 text-uo-crimson dark:text-uo-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v3a1 1 0 11-2 0zm0-5a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
                <strong>Aviso:</strong> Builds multiclasse dividem seus pontos de skill entre diferentes áreas, o que significa que você não será tão especializado quanto alguém focado em uma única classe. Porém, a versatilidade compensará em muitas situações.
              </p>
            </div>
          </div>
        </SectionCard>
        
        <div className="divider-uo">
          <Link 
            href="/wiki/pvm" 
            className="btn-primary inline-flex items-center group px-6"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Voltar para PvM
          </Link>
        </div>
      </div>
    </div>
  );
} 