import Link from 'next/link';
import { FaBook, FaArrowLeft, FaCompass, FaLeaf, FaRunning, FaShieldAlt } from 'react-icons/fa';

// Componentes personalizados para ícones que não existem no react-icons
const FaSwords = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" {...props}>
    <path d="M529.6 84l-126.4 126.4 48.4 48.4 126.4-126.4-48.4-48.4zM57.4 308.5l42.8-42.8-48.4-48.4-42.8 42.8 48.4 48.4zM394.8 218.6l-42.8 42.8 48.4 48.4 42.8-42.8-48.4-48.4zM193.3 420.1l126.4-126.4-48.4-48.4-126.4 126.4 48.4 48.4z"/>
  </svg>
);

const FaMagic = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M224 96l16-32 32-16-16-32-32-16-16 32-32 16 16 32 32 16zm96 64l16-32 32-16-16-32-32-16-16 32-32 16 16 32 32 16zm-160 0l16-32 32-16-16-32-32-16-16 32-32 16 16 32 32 16zm160 160l16-32 32-16-16-32-32-16-16 32-32 16 16 32 32 16zm-256 0l16-32 32-16-16-32-32-16-16 32-32 16 16 32 32 16zM88 280l16-32 32-16-16-32-32-16-16 32-32 16 16 32 32 16zm304 48l16-32 32-16-16-32-32-16-16 32-32 16 16 32 32 16z"/>
  </svg>
);

const FaHammer = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" {...props}>
    <path d="M572.5 241.4C518.3 135.6 410.9 64 288 64S57.7 135.6 3.5 241.4C1.2 246.1 0 251.4 0 256s1.2 9.9 3.5 14.6C57.7 376.4 165.1 448 288 448s230.3-71.6 284.5-177.4c2.3-4.7 3.5-10 3.5-14.6s-1.2-9.9-3.5-14.6zM413.3 335.8c-5.1-12.2-17.3-19.9-29.7-19.9-11.9 0-23.5 7.2-29.7 19.9l-50.9 121.9c-7.4 17.9 2.8 38.3 20.7 45.8 17.9 7.4 38.3-2.8 45.8-20.7L419.3 396l49.9 86.8c7.4 17.9 27.9 28.1 45.8 20.7 17.9-7.4 28.1-27.9 20.7-45.8l-50.9-121.9z"/>
  </svg>
);

export default function SkillsPage() {
  // Definição das categorias de skills
  const skillCategories = [
    {
      title: "Combate Corpo-a-Corpo",
      icon: <FaSwords className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
      skills: [
        {
          name: "Swordsmanship",
          description: "Habilidade com espadas, incluindo adagas e lâminas curtas",
          difficulty: "Média",
          primaryStat: "STR/DEX",
          maxValue: "100.0",
          trainableAt: "Guilda dos Guerreiros"
        },
        {
          name: "Mace Fighting",
          description: "Habilidade com maças, clavas e martelos de guerra",
          difficulty: "Média",
          primaryStat: "STR",
          maxValue: "100.0",
          trainableAt: "Guilda dos Guerreiros"
        },
        {
          name: "Fencing",
          description: "Habilidade com armas de estocada como lanças e tridentes",
          difficulty: "Média",
          primaryStat: "DEX/STR",
          maxValue: "100.0",
          trainableAt: "Guilda dos Guerreiros"
        },
        {
          name: "Wrestling",
          description: "Combate desarmado usando apenas os punhos",
          difficulty: "Média",
          primaryStat: "STR/DEX",
          maxValue: "100.0",
          trainableAt: "Guilda dos Guerreiros"
        }
      ]
    },
    {
      title: "Combate à Distância",
      icon: <FaRunning className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
      skills: [
        {
          name: "Archery",
          description: "Uso de arcos e bestas para atacar à distância",
          difficulty: "Média",
          primaryStat: "DEX/STR",
          maxValue: "100.0",
          trainableAt: "Guilda dos Arqueiros"
        },
        {
          name: "Throwing",
          description: "Arremesso de armas como adagas e machados",
          difficulty: "Média",
          primaryStat: "DEX",
          maxValue: "100.0",
          trainableAt: "Guilda dos Ladinos"
        }
      ]
    },
    {
      title: "Magia",
      icon: <FaMagic className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
      skills: [
        {
          name: "Magery",
          description: "Lançamento de feitiços arcanos dos 8 círculos",
          difficulty: "Difícil",
          primaryStat: "INT",
          maxValue: "100.0",
          trainableAt: "Guilda dos Magos"
        },
        {
          name: "Meditation",
          description: "Recuperação de mana através de concentração",
          difficulty: "Média",
          primaryStat: "INT",
          maxValue: "100.0",
          trainableAt: "Guilda dos Magos"
        },
        {
          name: "Spirit Speak",
          description: "Comunicação com espíritos para cura e necromancia",
          difficulty: "Média",
          primaryStat: "INT",
          maxValue: "100.0",
          trainableAt: "Guilda dos Necromantes"
        },
        {
          name: "Inscribe",
          description: "Criação de pergaminhos mágicos",
          difficulty: "Média",
          primaryStat: "INT",
          maxValue: "100.0",
          trainableAt: "Guilda dos Escribas"
        },
        {
          name: "Alchemy",
          description: "Criação de poções e elixires mágicos",
          difficulty: "Média",
          primaryStat: "INT",
          maxValue: "100.0",
          trainableAt: "Guilda dos Alquimistas"
        }
      ]
    },
    {
      title: "Artesanato",
      icon: <FaHammer className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
      skills: [
        {
          name: "Blacksmithy",
          description: "Forja de armas e armaduras de metal",
          difficulty: "Difícil",
          primaryStat: "STR",
          maxValue: "100.0",
          trainableAt: "Ferreiro de Britain"
        },
        {
          name: "Tailoring",
          description: "Confecção de roupas e armaduras de tecido/couro",
          difficulty: "Média",
          primaryStat: "DEX",
          maxValue: "100.0",
          trainableAt: "Alfaiate de Britain"
        },
        {
          name: "Carpentry",
          description: "Criação de móveis e estruturas de madeira",
          difficulty: "Média",
          primaryStat: "STR",
          maxValue: "100.0",
          trainableAt: "Carpinteiro de Britain"
        },
        {
          name: "Tinkering",
          description: "Criação de pequenas ferramentas e itens diversos",
          difficulty: "Média",
          primaryStat: "DEX/INT",
          maxValue: "100.0",
          trainableAt: "Engenhocas de Britain"
        }
      ]
    },
    {
      title: "Coleta",
      icon: <FaLeaf className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
      skills: [
        {
          name: "Mining",
          description: "Extração de minérios e pedras preciosas",
          difficulty: "Média",
          primaryStat: "STR",
          maxValue: "100.0",
          trainableAt: "Minas próximas a Britain"
        },
        {
          name: "Lumberjacking",
          description: "Derrubada de árvores para obter madeira",
          difficulty: "Média",
          primaryStat: "STR",
          maxValue: "100.0",
          trainableAt: "Floresta próxima a Britain"
        },
        {
          name: "Fishing",
          description: "Captura de peixes e outros tesouros aquáticos",
          difficulty: "Fácil",
          primaryStat: "DEX",
          maxValue: "100.0",
          trainableAt: "Porto de Britain"
        },
        {
          name: "Herding",
          description: "Cuidado com animais e pastoreio",
          difficulty: "Fácil",
          primaryStat: "DEX",
          maxValue: "100.0",
          trainableAt: "Fazendas de Britain"
        }
      ]
    },
    {
      title: "Sobrevivência",
      icon: <FaCompass className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
      skills: [
        {
          name: "Tracking",
          description: "Rastreamento de criaturas e jogadores",
          difficulty: "Média",
          primaryStat: "DEX/INT",
          maxValue: "100.0",
          trainableAt: "Guilda dos Caçadores"
        },
        {
          name: "Camping",
          description: "Montar acampamentos para descanso e recuperação",
          difficulty: "Fácil",
          primaryStat: "INT",
          maxValue: "100.0",
          trainableAt: "Guilda dos Exploradores"
        },
        {
          name: "Cooking",
          description: "Preparação de alimentos com benefícios",
          difficulty: "Fácil",
          primaryStat: "INT",
          maxValue: "100.0",
          trainableAt: "Padaria de Britain"
        }
      ]
    },
    {
      title: "Outros",
      icon: <FaBook className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
      skills: [
        {
          name: "Animal Taming",
          description: "Domesticação de criaturas selvagens",
          difficulty: "Difícil",
          primaryStat: "INT",
          maxValue: "100.0",
          trainableAt: "Guilda dos Domadores"
        },
        {
          name: "Musicianship",
          description: "Tocar instrumentos musicais com efeitos especiais",
          difficulty: "Fácil",
          primaryStat: "DEX/INT",
          maxValue: "100.0",
          trainableAt: "Taverna de Britain"
        },
        {
          name: "Hiding",
          description: "Esconder-se de criaturas e jogadores",
          difficulty: "Média",
          primaryStat: "DEX",
          maxValue: "100.0",
          trainableAt: "Guilda dos Ladinos"
        },
        {
          name: "Stealth",
          description: "Movimento furtivo enquanto escondido",
          difficulty: "Difícil",
          primaryStat: "DEX",
          maxValue: "100.0",
          trainableAt: "Guilda dos Ladinos"
        }
      ]
    }
  ];

  return (
    <div className="container-uo py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar para Wiki
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Sistema de Skills</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Guia completo sobre as habilidades disponíveis no Nova Era Shard.
          </p>
        </div>
        
        {/* Introdução */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Visão Geral das Skills</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              No Nova Era Shard, como em Ultima Online, seu personagem é definido pelas habilidades (skills) que você escolhe desenvolver. Não existem classes fixas - seu personagem é o que você faz dele através das skills que treina.
            </p>
            
            <p>
              Cada personagem pode desenvolver qualquer combinação de skills, com um total máximo de 700 pontos distribuídos entre todas as skills (máximo de 100 pontos por skill). Isso significa que você pode ser um especialista em algumas áreas ou ter conhecimento diversificado em várias.
            </p>
            
            <h3>Como as Skills Funcionam</h3>
            <ul>
              <li>Cada skill tem um valor de 0 a 100.0</li>
              <li>As skills melhoram com o uso - quanto mais você pratica, melhor fica</li>
              <li>Quando chega a 100.0, uma skill está "no cap" (no máximo)</li>
              <li>Algumas skills são mais difíceis de aumentar que outras</li>
              <li>Cada skill é influenciada por uma ou mais estatísticas principais (Força, Destreza, Inteligência)</li>
            </ul>
            
            <h3>Treinamento de Skills</h3>
            <p>
              Existem três formas principais de treinar suas skills:
            </p>
            <ol>
              <li><strong>Uso Prático</strong> - Simplesmente usando a skill em situações reais</li>
              <li><strong>Treinamento com NPCs</strong> - Pagar um NPC treinador para ensinar uma skill (até 30.0)</li>
              <li><strong>Treino Dedicado</strong> - Usar alvos de treino, forjas, teares e outros locais específicos</li>
            </ol>
            
            <p>
              O ganho de skill é mais rápido nos valores baixos e fica progressivamente mais lento conforme você se aproxima do valor máximo. O último ponto de skill (99.9 para 100.0) pode levar semanas de treinamento!
            </p>
            
            <h3>Templates e Builds</h3>
            <p>
              Devido ao limite de 700 pontos totais, os jogadores geralmente criam "builds" ou "templates" concentrados em certas atividades. Alguns exemplos populares:
            </p>
            <ul>
              <li><strong>Guerreiro</strong> - Foco em combate corpo-a-corpo, táticas e anatomia</li>
              <li><strong>Mago</strong> - Especializado em magery, meditation e resistência</li>
              <li><strong>Artesão</strong> - Dedicado às skills de crafting como blacksmithy e tailoring</li>
              <li><strong>Bardo</strong> - Combinando musicianship, peacemaking e provocation</li>
              <li><strong>Ladrão</strong> - Focado em stealing, hiding e stealth</li>
            </ul>
          </div>
        </div>
        
        {/* Lista de Skills por Categoria */}
        {skillCategories.map((category, index) => (
          <div key={index} className="card-medieval mb-8">
            <div className="flex items-center mb-6">
              {category.icon}
              <h2 className="font-medieval text-2xl ml-2">{category.title}</h2>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-4 last:border-0">
                  <h3 className="font-medieval text-xl mb-2 text-uo-crimson dark:text-uo-gold">{skill.name}</h3>
                  <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-3">
                    {skill.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <div><span className="font-semibold">Dificuldade:</span> {skill.difficulty}</div>
                    <div><span className="font-semibold">Atributo Principal:</span> {skill.primaryStat}</div>
                    <div><span className="font-semibold">Valor Máximo:</span> {skill.maxValue}</div>
                    <div className="sm:col-span-3"><span className="font-semibold">Onde Treinar:</span> {skill.trainableAt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Rodapé da seção com informações adicionais */}
        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
          <div className="flex items-center mb-2">
            <FaHammer className="h-5 w-5 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-lg">Mais sobre Artesanato</h3>
          </div>
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm mb-2">
            O Nova Era Shard possui um sistema de crafting expandido e detalhado. Para conhecer todas as profissões, 
            materiais especiais, sistema de qualidade e dicas avançadas, visite nossa página dedicada:
          </p>
          <Link 
            href="/wiki/crafting" 
            className="inline-flex items-center text-uo-crimson dark:text-uo-gold hover:underline"
          >
            Guia Completo de Crafting →
          </Link>
        </div>
        
        {/* Dicas de Treinamento */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Dicas de Treinamento</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h3>Treinamento Eficiente</h3>
            <ul>
              <li>Foque em no máximo 3-4 skills principais inicialmente</li>
              <li>Use NPCs treinadores para chegar rapidamente a 30.0</li>
              <li>Pratique skills complementares juntas (ex: Mining e Blacksmithy)</li>
              <li>Para skills de combate, treine em criaturas mais fracas primeiro</li>
              <li>Mantenha reagentes e ferramentas suficientes ao treinar magia ou artesanato</li>
            </ul>
            
            <h3>Locais de Treinamento</h3>
            <ul>
              <li><strong>Guilda dos Guerreiros</strong> - Melhor lugar para treinar skills de combate com alvos de treinamento</li>
              <li><strong>Guilda dos Magos</strong> - Oferece ambiente seguro para praticar magias</li>
              <li><strong>Ferraria de Britain</strong> - Ideal para treinar Blacksmithy</li>
              <li><strong>Floresta de Yew</strong> - Excelente para Lumberjacking</li>
              <li><strong>Minas de Minoc</strong> - Perfeito para treinar Mining</li>
            </ul>
            
            <h3>Aumentando Skills Difíceis</h3>
            <p>
              Algumas skills, como Stealth e Animal Taming, são notoriamente difíceis de aumentar. Dicas específicas:
            </p>
            <ul>
              <li><strong>Animal Taming</strong> - Comece com animais mais fáceis como galinhas e coelhos</li>
              <li><strong>Stealth</strong> - Pratique em áreas isoladas, longe de monstros</li>
              <li><strong>Magery</strong> - Use magias de baixo custo repetidamente, como Light</li>
              <li><strong>Blacksmithy</strong> - Faça adagas e escudos pequenos para economizar metal</li>
            </ul>
          </div>
        </div>
        
        {/* Links para Guias Específicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/wiki/skills/magic" className="card-medieval p-4 hover:shadow-xl transition-shadow flex items-center">
            <FaMagic className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />
            <div>
              <h3 className="font-medieval text-lg">Guia de Magia</h3>
              <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">Detalhes completos sobre magias e feitiços.</p>
            </div>
          </Link>
          
          <Link href="/wiki/skills/combat" className="card-medieval p-4 hover:shadow-xl transition-shadow flex items-center">
            <FaSwords className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />
            <div>
              <h3 className="font-medieval text-lg">Guia de Combate</h3>
              <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">Técnicas avançadas de combate e armas.</p>
            </div>
          </Link>
          
          <Link href="/wiki/skills/crafting" className="card-medieval p-4 hover:shadow-xl transition-shadow flex items-center">
            <FaHammer className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />
            <div>
              <h3 className="font-medieval text-lg">Guia de Artesanato</h3>
              <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">Como criar os melhores itens do jogo.</p>
            </div>
          </Link>
          
          <Link href="/wiki/skills/survival" className="card-medieval p-4 hover:shadow-xl transition-shadow flex items-center">
            <FaCompass className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />
            <div>
              <h3 className="font-medieval text-lg">Guia de Sobrevivência</h3>
              <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">Técnicas para explorar o mundo com segurança.</p>
            </div>
          </Link>
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