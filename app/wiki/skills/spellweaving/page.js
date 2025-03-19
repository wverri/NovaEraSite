import Link from 'next/link';
import { FaArrowLeft, FaFeather, FaHeart, FaMoon, FaSun, FaTree, FaWater, FaGem } from 'react-icons/fa';
import { CustomSpellweavingIcon } from '../../../components/icons/CustomIcons';

export default function SpellweavingPage() {
  // Definição dos círculos de Spellweaving
  const spellweavingCircles = [
    {
      id: 1,
      name: "Primeiro Círculo",
      icon: <FaFeather className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      manaCost: "10",
      description: "Feitiços básicos de Spellweaving, acessíveis àqueles que começaram a estudar as artes élficas.",
      spells: [
        {
          name: "Arcane Circle",
          reagents: ["Mandrake Root", "Blood Moss", "Black Pearl"],
          description: "Cria um círculo arcano no chão que aumenta temporariamente sua habilidade em Spellweaving.",
          words: "Myrshalee",
          mana: 10,
          skillNeeded: 0
        },
        {
          name: "Gift of Renewal",
          reagents: ["Mandrake Root", "Ginseng", "Garlic"],
          description: "Concede regeneração de vida a um alvo ao longo do tempo.",
          words: "Olorisstra",
          mana: 10,
          skillNeeded: 10
        },
        {
          name: "Immolating Weapon",
          reagents: ["Sulfurous Ash", "Spider's Silk", "Mandrake Root"],
          description: "Encanta uma arma com poder flamejante, causando dano adicional de fogo.",
          words: "Thalshara",
          mana: 10,
          skillNeeded: 20
        },
        {
          name: "Attune Weapon",
          reagents: ["Mandrake Root", "Nightshade", "Blood Moss"],
          description: "Sintoniza uma arma com a energia espiritual, aumentando o dano contra criaturas fantasmagóricas.",
          words: "Haeldril",
          mana: 10,
          skillNeeded: 30
        }
      ]
    },
    {
      id: 2,
      name: "Segundo Círculo",
      icon: <FaHeart className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      manaCost: "20",
      description: "Feitiços intermediários que manipulam energias naturais e espirituais.",
      spells: [
        {
          name: "Thunderstorm",
          reagents: ["Mandrake Root", "Black Pearl", "Sulfurous Ash"],
          description: "Invoca uma tempestade que causa dano elétrico a todos os inimigos na área.",
          words: "Erelonia",
          mana: 20,
          skillNeeded: 40
        },
        {
          name: "Nature's Fury",
          reagents: ["Mandrake Root", "Sulfurous Ash", "Blood Moss"],
          description: "Canaliza a fúria da natureza, causando dano em área a inimigos.",
          words: "Rauvvrae",
          mana: 20,
          skillNeeded: 50
        },
        {
          name: "Reaper Form",
          reagents: ["Mandrake Root", "Nightshade", "Spider's Silk"],
          description: "Transforma-se em uma forma espectral, aumentando velocidade e causando dano por contato.",
          words: "Tarisstree",
          mana: 20,
          skillNeeded: 60
        },
        {
          name: "Wildfire",
          reagents: ["Mandrake Root", "Sulfurous Ash", "Spider's Silk"],
          description: "Cria uma área de chamas selvagens que causam dano contínuo aos inimigos.",
          words: "Haelyn",
          mana: 20,
          skillNeeded: 70
        }
      ]
    },
    {
      id: 3,
      name: "Terceiro Círculo",
      icon: <FaSun className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      manaCost: "40",
      description: "Feitiços poderosos que manipulam as forças da vida, morte e elementos.",
      spells: [
        {
          name: "Essence of Wind",
          reagents: ["Mandrake Root", "Spider's Silk", "Blood Moss"],
          description: "Invoca a essência do vento, concedendo velocidade e proteção contra projéteis.",
          words: "Anshees",
          mana: 40,
          skillNeeded: 80
        },
        {
          name: "Dryad Allure",
          reagents: ["Mandrake Root", "Blood Moss", "Nightshade"],
          description: "Encanta o alvo para atrair criaturas animais e elementais que passam a defendê-lo.",
          words: "Orlavdra",
          mana: 40,
          skillNeeded: 85
        },
        {
          name: "Ethereal Voyage",
          reagents: ["Mandrake Root", "Black Pearl", "Blood Moss"],
          description: "Transforma o corpo em forma etérea, permitindo atravessar paredes e ficar imune a dano físico.",
          words: "Orlavdra",
          mana: 40,
          skillNeeded: 90
        },
        {
          name: "Word of Death",
          reagents: ["Mandrake Root", "Nightshade", "Garlic"],
          description: "Profere a palavra da morte, causando dano massivo a um único alvo.",
          words: "Nyraxle",
          mana: 40,
          skillNeeded: 95
        },
        {
          name: "Gift of Life",
          reagents: ["Mandrake Root", "Ginseng", "Garlic", "Spider's Silk"],
          description: "Ressuscita um jogador morto com vida e mana completas.",
          words: "Illorae",
          mana: 40,
          skillNeeded: 100
        }
      ]
    }
  ];

  // Informações sobre como obter a habilidade
  const spellweavingQuest = {
    title: "Jornada para o Arcanium Élfico",
    description: "Para aprender a arte de Spellweaving, você deve completar a jornada de iniciação no Santuário dos Arcanistas em Heartwood.",
    steps: [
      "Viaje até a Cidade Élfica de Heartwood, localizada na floresta a nordeste de Trinsic",
      "Fale com o Guardião do Conhecimento, Caelestis, no Grande Salão",
      "Ele irá pedir que você colete 5 Cristais Arcanos escondidos pela floresta",
      "Cada cristal está protegido por guardiães elementais e enigmas arcanos",
      "Após coletar todos os cristais, retorne a Caelestis",
      "Ele realizará o ritual de iniciação, concedendo-lhe acesso à skill Spellweaving",
      "Após completar o ritual, você receberá um grimório élfico especial e poderá começar a treinar"
    ],
    rewards: [
      "Acesso à skill Spellweaving",
      "Grimório Élfico (livro de feitiços especial)",
      "Robe dos Iniciados (+5 Spellweaving)",
      "Receita para criar Cristais Arcanos"
    ],
    requirements: [
      "Mínimo de 70.0 em Magery",
      "Mínimo de 50.0 em Spirit Speak",
      "Nível 5 de reputação com os elfos de Heartwood"
    ]
  };

  // Reagentes especiais para Spellweaving
  const specialReagents = [
    {
      name: "Cristal Arcano",
      description: "Cristal mágico que amplifica os efeitos de Spellweaving",
      location: "Pode ser encontrado em cavernas élficas ou craftado por jogadores com alta habilidade em Alchemy",
      effect: "Aumenta em 10% a potência de feitiços de Spellweaving quando usado como reagente adicional"
    },
    {
      name: "Folha de Silverleaf",
      description: "Folha prateada de uma árvore rara que cresce apenas sob luz da lua cheia",
      location: "Colhida apenas durante a lua cheia em árvores especiais na floresta de Heartwood",
      effect: "Reduz o consumo de mana em 15% quando usado como reagente adicional"
    },
    {
      name: "Essência Elemental",
      description: "Essência pura de elementos primordiais",
      location: "Obtida derrotando elementais poderosos ou em missões específicas",
      effect: "Adiciona efeito elemental (fogo, água, ar ou terra) dependendo do tipo usado"
    }
  ];

  return (
    <div className="container-uo py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link href="/wiki/skills/magic" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar para Guia de Magia
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Spellweaving</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            A arte mágica élfica de tecer os fios da realidade em encantamentos poderosos e harmoniosos.
          </p>
        </div>
        
        {/* Introdução */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">A Arte Arcana dos Elfos</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Spellweaving é uma forma de magia única, originária dos antigos elfos, que difere fundamentalmente da Magery tradicional. 
              Em vez de comandar os elementos através de palavras de poder diretas, os praticantes de Spellweaving "tecem" harmonias 
              arcanas que alteram sutilmente a realidade ao seu redor.
            </p>
            
            <p>
              Esta arte mística está profundamente conectada à natureza e aos ciclos elementais do mundo. Os feitiços de Spellweaving 
              geralmente são mais harmoniosos com o ambiente e produzem efeitos que combinam vários elementos em um equilíbrio perfeito.
            </p>
            
            <h3>Diferenças entre Spellweaving e Magery Tradicional</h3>
            <ul>
              <li><strong>Fonte de Poder:</strong> Enquanto a Magery deriva poder do mago manipulando forças externas, Spellweaving utiliza a harmonia entre o lançador e as forças naturais</li>
              <li><strong>Componentes:</strong> Spellweaving requer mandrake root em praticamente todos os feitiços, sendo este o condutor da harmonia arcana</li>
              <li><strong>Incantações:</strong> As palavras usadas são de origem élfica, mais melódicas e fluidas que as da Magery</li>
              <li><strong>Círculo Arcano:</strong> Muitos feitiços são potencializados quando lançados dentro de um Círculo Arcano</li>
              <li><strong>Efeitos:</strong> Tendem a ser mais sutis, duradouros e frequentemente combinam múltiplos elementos</li>
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Nota Importante:</strong> Spellweaving é uma skill inicialmente bloqueada. Para desbloqueá-la, você deve completar 
                a missão "Jornada para o Arcanium Élfico" descrita mais abaixo nesta página.
              </p>
            </div>
          </div>
        </div>
        
        {/* Círculos de Spellweaving */}
        <h2 className="header-medieval text-2xl md:text-3xl mb-6">Círculos de Spellweaving</h2>
        
        {spellweavingCircles.map((circle) => (
          <div key={circle.id} className="card-medieval mb-8">
            <div className="flex items-center mb-6">
              {circle.icon}
              <h2 className="font-medieval text-2xl ml-2">{circle.name}</h2>
              <span className="ml-auto text-sm bg-uo-crimson/10 dark:bg-uo-gold/10 px-2 py-1 rounded-md">
                Mana: {circle.manaCost}
              </span>
            </div>
            
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
              {circle.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {circle.spells.map((spell, spellIndex) => (
                <div 
                  key={spellIndex} 
                  className="border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-lg p-4 bg-white/40 dark:bg-gray-900/40"
                >
                  <h3 className="font-medieval text-xl mb-2 text-uo-crimson dark:text-uo-gold">{spell.name}</h3>
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-3 text-sm">
                    {spell.description}
                  </p>
                  <div className="text-sm space-y-1">
                    <div>
                      <span className="font-semibold">Canção Arcana:</span> 
                      <span className="italic ml-1">{spell.words}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Reagentes:</span> 
                      <span className="ml-1">{spell.reagents.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Custo de Mana:</span> 
                      <span className="ml-1">{spell.mana}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Skill Necessária:</span> 
                      <span className="ml-1">{spell.skillNeeded}.0</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Missão para Desbloquear Spellweaving */}
        <div className="card-medieval mb-8 bg-uo-crimson/5 dark:bg-uo-gold/5">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">{spellweavingQuest.title}</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>{spellweavingQuest.description}</p>
            
            <h3>Pré-requisitos</h3>
            <ul>
              {spellweavingQuest.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            
            <h3>Passos da Missão</h3>
            <ol>
              {spellweavingQuest.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            
            <h3>Recompensas</h3>
            <ul>
              {spellweavingQuest.rewards.map((reward, index) => (
                <li key={index}>{reward}</li>
              ))}
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Dica:</strong> Esta missão é desafiadora e recomendada para jogadores com pelo menos 70 de Magery. 
                Leve amigos para ajudar com os guardiões elementais, que podem ser bastante poderosos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Reagentes Especiais */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Reagentes Especiais</h2>
          
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
            Além dos reagentes tradicionais, a arte de Spellweaving pode ser potencializada com itens raros e especiais.
            Estes reagentes especiais não são obrigatórios para o lançamento, mas adicionam efeitos poderosos às magias.
          </p>
          
          <div className="space-y-6">
            {specialReagents.map((reagent, index) => (
              <div key={index} className="flex items-start border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-lg p-4 bg-white/40 dark:bg-gray-900/40">
                <div className="w-12 h-12 bg-uo-crimson/10 dark:bg-uo-gold/10 rounded-md flex items-center justify-center mr-4 flex-shrink-0">
                  {index === 0 ? (
                    <FaGem className="text-uo-crimson dark:text-uo-gold" />
                  ) : index === 1 ? (
                    <FaTree className="text-uo-crimson dark:text-uo-gold" />
                  ) : (
                    <FaWater className="text-uo-crimson dark:text-uo-gold" />
                  )}
                </div>
                
                <div>
                  <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold">{reagent.name}</h3>
                  <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80 mb-2">
                    {reagent.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-semibold">Onde encontrar:</span>
                      <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{reagent.location}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Efeito:</span>
                      <p className="text-uo-darkwood/80 dark:text-uo-mist/80">{reagent.effect}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Maestria em Spellweaving */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Dicas para Maestria em Spellweaving</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h3>Melhorando sua Eficiência</h3>
            <ul>
              <li>Sempre comece lançando <strong>Arcane Circle</strong> antes de utilizar outros feitiços. Isso aumenta temporariamente sua habilidade</li>
              <li>Treine sua habilidade em áreas próximas às cidades élficas, onde a conexão com a natureza amplifica o aprendizado</li>
              <li>Use <strong>Cristais Arcanos</strong> para aumentar a potência de feitiços importantes</li>
              <li>Combine Spellweaving com Meditation para recuperar mana rapidamente</li>
              <li>Feitiços lançados durante a lua cheia possuem 10% de potência adicional</li>
            </ul>
            
            <h3>Equipamentos Recomendados</h3>
            <ul>
              <li><strong>Cajado Élfico:</strong> Aumenta a skill de Spellweaving em até 15 pontos</li>
              <li><strong>Tiara da Harmonia:</strong> Reduz o consumo de mana de feitiços de Spellweaving</li>
              <li><strong>Anéis Elementais:</strong> Potencializam feitiços específicos baseados em seu elemento</li>
              <li><strong>Manto do Tecedor:</strong> Concede chance de não consumir reagentes</li>
              <li><strong>Botas da Floresta:</strong> Aumentam a velocidade de movimento durante o lançamento de feitiços</li>
            </ul>
            
            <h3>Builds Híbridos Recomendados</h3>
            <p>
              Spellweaving combina excepcionalmente bem com estas skills:
            </p>
            <ul>
              <li><strong>Spellweaving + Magery:</strong> O "Arquimago Élfico" - alternando entre magias tradicionais e élficas</li>
              <li><strong>Spellweaving + Archery:</strong> O "Arqueiro Místico" - encantando flechas e mantendo distância</li>
              <li><strong>Spellweaving + Spirit Speak:</strong> O "Xamã da Natureza" - comunicando-se com espíritos e forças naturais</li>
              <li><strong>Spellweaving + Animal Taming:</strong> O "Guardião da Floresta" - controlando animais enquanto lança magias de apoio</li>
            </ul>
          </div>
        </div>
        
        {/* Círculo Arcano */}
        <div className="card-medieval mb-8 bg-uo-crimson/5 dark:bg-uo-gold/5">
          <div className="flex items-center mb-4">
            <CustomSpellweavingIcon className="h-8 w-8 mr-3 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl text-uo-crimson dark:text-uo-gold">O Círculo Arcano</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              O <strong>Círculo Arcano</strong> é o feitiço fundamental para qualquer praticante de Spellweaving. 
              Este feitiço cria um círculo mágico no chão que amplifica temporariamente sua conexão com os fluxos arcanos, 
              aumentando sua habilidade em Spellweaving enquanto você permanece dentro dele.
            </p>
            
            <h3>Efeitos do Círculo Arcano</h3>
            <ul>
              <li>Aumenta sua skill efetiva de Spellweaving em 5-20 pontos (baseado em sua skill atual)</li>
              <li>Reduz o tempo de lançamento de feitiços de Spellweaving em 10%</li>
              <li>Permite lançar feitiços que normalmente estariam acima do seu nível de skill</li>
              <li>Aumenta a duração de feitiços de Spellweaving em 15%</li>
              <li>Concede uma aura visual que identifica você como um Tecedor de Feitiços</li>
            </ul>
            
            <h3>Uso Estratégico</h3>
            <p>
              O Círculo Arcano permanece ativo por 2 minutos, mas está fixo no lugar onde foi lançado. Isso cria 
              considerações táticas interessantes:
            </p>
            <ul>
              <li>Em combate, você precisa decidir entre mobilidade ou poder aumentado</li>
              <li>Para confrontos planejados, prepare o local com um círculo antes da batalha</li>
              <li>Múltiplos tecedores podem compartilhar um único círculo, criando oportunidades para táticas em grupo</li>
              <li>Em PvP, seu oponente pode ver o círculo e tentar atraí-lo para fora dele</li>
              <li>Em dungeons, posicione estrategicamente o círculo para maximizar cobertura da área</li>
            </ul>
          </div>
        </div>
      
        <div className="mt-8 text-center">
          <Link href="/wiki/skills/magic" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para Guia de Magia
          </Link>
        </div>
      </div>
    </div>
  );
} 