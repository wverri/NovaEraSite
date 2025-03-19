import Link from 'next/link';
import { FaBook, FaArrowLeft, FaCompass, FaLeaf, FaRunning, FaShieldAlt } from 'react-icons/fa';
import { CustomSwordIcon, CustomMagicIcon, CustomHammerIcon } from '../../components/icons/CustomIcons';
import PageHeader from '../../components/ui/PageHeader';
import SectionCard from '../../components/ui/SectionCard';
import ItemCard from '../../components/ui/ItemCard';

export default function SkillsPage() {
  // Definição das categorias de skills
  const skillCategories = [
    {
      title: "Combate Corpo-a-Corpo",
      icon: <CustomSwordIcon className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
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
      icon: <CustomMagicIcon className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
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
      icon: <CustomHammerIcon className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />,
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
        <PageHeader
          title="Sistema de Skills"
          description="Guia completo sobre as habilidades disponíveis no Nova Era Shard."
          backLink="/wiki"
          backLinkText="Voltar para Wiki"
          icon={<FaBook className="w-8 h-8" />}
        />
        
        {/* Introdução */}
        <SectionCard 
          title="Visão Geral das Skills" 
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Lista de Skills por Categoria */}
        {skillCategories.map((category, index) => (
          <SectionCard
            key={index}
            title={category.title}
            icon={category.icon}
            className="mb-8"
          >
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
          </SectionCard>
        ))}
        
        {/* Rodapé da seção com informações adicionais */}
        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
          <div className="flex items-center mb-2">
            <CustomHammerIcon className="h-5 w-5 mr-2 text-uo-crimson dark:text-uo-gold" />
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
        <SectionCard
          title="Dicas de Treinamento"
          className="mb-8"
        >
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
        </SectionCard>
        
        {/* Links para Guias Específicos */}
        <SectionCard
          title="Guias Detalhados por Habilidade"
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ItemCard
              title="Guia de Magia"
              icon={<CustomMagicIcon className="h-6 w-6" />}
              description="Detalhes completos sobre magias e feitiços."
              link="/wiki/skills/magic"
              linkText="Explorar Magia"
            />
            
            <ItemCard
              title="Guia de Combate"
              icon={<CustomSwordIcon className="h-6 w-6" />}
              description="Técnicas avançadas de combate e armas."
              link="/wiki/skills/combat"
              linkText="Aprender Combate"
            />
            
            <ItemCard
              title="Guia de Artesanato"
              icon={<CustomHammerIcon className="h-6 w-6" />}
              description="Como criar os melhores itens do jogo."
              link="/wiki/skills/crafting"
              linkText="Dominar Artesanato"
            />
            
            <ItemCard
              title="Guia de Sobrevivência"
              icon={<FaCompass className="h-6 w-6" />}
              description="Técnicas para explorar o mundo com segurança."
              link="/wiki/skills/survival"
              linkText="Sobreviver no Mundo"
            />
          </div>
        </SectionCard>
        
        <div className="mt-8 text-center">
          <Link 
            href="/wiki" 
            className="inline-flex items-center px-6 py-3 border-2 border-uo-crimson/30 dark:border-uo-gold/30 rounded-lg font-medieval text-lg text-uo-crimson dark:text-uo-gold hover:bg-uo-crimson/5 dark:hover:bg-uo-gold/5 transition-colors"
          >
            <FaArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a Wiki
          </Link>
        </div>
      </div>
    </div>
  );
} 