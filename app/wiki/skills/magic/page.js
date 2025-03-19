import Link from 'next/link';
import { FaBook, FaArrowLeft, FaGem, FaFireAlt, FaBolt, FaWind, FaTint, FaSkull, FaHeart } from 'react-icons/fa';

// Componente personalizado para ícone de magia que não existe no react-icons
const FaMagicWand = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"/>
  </svg>
);

export default function MagicGuidePage() {
  // Definição dos círculos de magia
  const magicCircles = [
    {
      id: 1,
      name: "Primeiro Círculo",
      icon: <FaBolt className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      manaCost: "4",
      description: "Magias básicas, acessíveis a novatos. Requerem poucos reagentes e são fáceis de lançar.",
      spells: [
        {
          name: "Clumsy",
          reagents: ["Blood Moss", "Nightshade"],
          description: "Reduz a destreza do alvo.",
          words: "Uus Jux",
          mana: 4,
        },
        {
          name: "Create Food",
          reagents: ["Garlic", "Ginseng", "Mandrake Root"],
          description: "Cria comida para restaurar fome.",
          words: "In Mani Ylem",
          mana: 4,
        },
        {
          name: "Feeblemind",
          reagents: ["Ginseng", "Nightshade"],
          description: "Reduz a inteligência do alvo.",
          words: "Rel Wis",
          mana: 4,
        },
        {
          name: "Heal",
          reagents: ["Garlic", "Ginseng", "Spider's Silk"],
          description: "Cura ferimentos leves.",
          words: "In Mani",
          mana: 4,
        },
        {
          name: "Magic Arrow",
          reagents: ["Sulfurous Ash"],
          description: "Lança uma flecha mágica no alvo.",
          words: "In Por Ylem",
          mana: 4,
        },
        {
          name: "Night Sight",
          reagents: ["Sulfurous Ash", "Spider's Silk"],
          description: "Permite enxergar no escuro.",
          words: "In Lor",
          mana: 4,
        },
        {
          name: "Reactive Armor",
          reagents: ["Garlic", "Spider's Silk", "Sulfurous Ash"],
          description: "Aumenta a defesa física do conjurador.",
          words: "Flam Sanct",
          mana: 4,
        },
        {
          name: "Weaken",
          reagents: ["Garlic", "Nightshade"],
          description: "Reduz a força do alvo.",
          words: "Des Mani",
          mana: 4,
        }
      ]
    },
    {
      id: 2,
      name: "Segundo Círculo",
      icon: <FaFireAlt className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      manaCost: "6",
      description: "Magias intermediárias com efeitos mais potentes, exigindo maior conhecimento arcano.",
      spells: [
        {
          name: "Agility",
          reagents: ["Blood Moss", "Mandrake Root"],
          description: "Aumenta a destreza do alvo.",
          words: "Ex Uus",
          mana: 6,
        },
        {
          name: "Cunning",
          reagents: ["Mandrake Root", "Nightshade"],
          description: "Aumenta a inteligência do alvo.",
          words: "Ex Wis",
          mana: 6,
        },
        {
          name: "Cure",
          reagents: ["Garlic", "Ginseng"],
          description: "Cura venenos.",
          words: "An Nox",
          mana: 6,
        },
        {
          name: "Harm",
          reagents: ["Nightshade", "Spider's Silk"],
          description: "Causa dano direto ao alvo.",
          words: "An Mani",
          mana: 6,
        },
        {
          name: "Magic Trap",
          reagents: ["Garlic", "Spider's Silk", "Sulfurous Ash"],
          description: "Cria uma armadilha mágica.",
          words: "In Jux",
          mana: 6,
        },
        {
          name: "Magic Untrap",
          reagents: ["Blood Moss", "Sulfurous Ash"],
          description: "Remove armadilhas mágicas.",
          words: "An Jux",
          mana: 6,
        },
        {
          name: "Protection",
          reagents: ["Garlic", "Ginseng", "Sulfurous Ash"],
          description: "Aumenta a defesa mágica do conjurador.",
          words: "Uus Sanct",
          mana: 6,
        },
        {
          name: "Strength",
          reagents: ["Mandrake Root", "Nightshade"],
          description: "Aumenta a força do alvo.",
          words: "Ex Mani",
          mana: 6,
        }
      ]
    },
    {
      id: 3,
      name: "Terceiro Círculo",
      icon: <FaWind className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      manaCost: "9",
      description: "Magias avançadas que permitem teleporte e invocações menores.",
      spells: [
        {
          name: "Bless",
          reagents: ["Garlic", "Mandrake Root"],
          description: "Aumenta diversos atributos do alvo.",
          words: "Rel Sanct",
          mana: 9,
        },
        {
          name: "Fireball",
          reagents: ["Black Pearl", "Sulfurous Ash"],
          description: "Lança uma bola de fogo explosiva no alvo.",
          words: "Vas Flam",
          mana: 9,
        },
        {
          name: "Magic Lock",
          reagents: ["Blood Moss", "Garlic", "Sulfurous Ash"],
          description: "Tranca magicamente um baú ou porta.",
          words: "An Por",
          mana: 9,
        },
        {
          name: "Poison",
          reagents: ["Nightshade"],
          description: "Envenena o alvo.",
          words: "In Nox",
          mana: 9,
        },
        {
          name: "Telekinesis",
          reagents: ["Blood Moss", "Mandrake Root"],
          description: "Permite manipular objetos à distância.",
          words: "Ort Por Ylem",
          mana: 9,
        },
        {
          name: "Teleport",
          reagents: ["Blood Moss", "Mandrake Root"],
          description: "Teleporta o conjurador para o local marcado.",
          words: "Rel Por",
          mana: 9,
        },
        {
          name: "Unlock",
          reagents: ["Blood Moss", "Sulfurous Ash"],
          description: "Destranca fechaduras mágicas ou comuns.",
          words: "Ex Por",
          mana: 9,
        },
        {
          name: "Wall of Stone",
          reagents: ["Blood Moss", "Garlic"],
          description: "Cria uma barreira de pedra temporária.",
          words: "In Sanct Ylem",
          mana: 9,
        }
      ]
    },
    {
      id: 4,
      name: "Quarto Círculo",
      icon: <FaTint className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      manaCost: "11",
      description: "Magias poderosas que podem afetar vários alvos e manipular o ambiente.",
      spells: [
        {
          name: "Arch Cure",
          reagents: ["Garlic", "Ginseng", "Mandrake Root"],
          description: "Cura venenos em área.",
          words: "Vas An Nox",
          mana: 11,
        },
        {
          name: "Arch Protection",
          reagents: ["Garlic", "Ginseng", "Mandrake Root", "Sulfurous Ash"],
          description: "Aumenta a defesa mágica de todos no grupo.",
          words: "Vas Uus Sanct",
          mana: 11,
        },
        {
          name: "Curse",
          reagents: ["Garlic", "Nightshade", "Sulfurous Ash"],
          description: "Reduz todos os atributos do alvo.",
          words: "Des Sanct",
          mana: 11,
        },
        {
          name: "Fire Field",
          reagents: ["Black Pearl", "Spider's Silk", "Sulfurous Ash"],
          description: "Cria um campo de fogo que causa dano.",
          words: "In Flam Grav",
          mana: 11,
        },
        {
          name: "Greater Heal",
          reagents: ["Garlic", "Ginseng", "Mandrake Root", "Spider's Silk"],
          description: "Cura ferimentos graves.",
          words: "In Vas Mani",
          mana: 11,
        },
        {
          name: "Lightning",
          reagents: ["Mandrake Root", "Sulfurous Ash"],
          description: "Invoca um raio para atingir o alvo.",
          words: "Por Ort Grav",
          mana: 11,
        },
        {
          name: "Mana Drain",
          reagents: ["Black Pearl", "Mandrake Root", "Spider's Silk"],
          description: "Drena mana do alvo.",
          words: "Ort Rel",
          mana: 11,
        },
        {
          name: "Recall",
          reagents: ["Black Pearl", "Blood Moss", "Mandrake Root"],
          description: "Teleporta para uma runa marcada.",
          words: "Kal Ort Por",
          mana: 11,
        }
      ]
    },
    {
      id: 5,
      name: "Quinto Círculo",
      icon: <FaSkull className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      manaCost: "14",
      description: "Magias muito poderosas que manipulam forças elementais e permitem invocações.",
      spells: [
        {
          name: "Blade Spirits",
          reagents: ["Black Pearl", "Mandrake Root", "Nightshade"],
          description: "Invoca lâminas giratórias que atacam inimigos.",
          words: "In Jux Hur Ylem",
          mana: 14,
        },
        {
          name: "Dispel Field",
          reagents: ["Black Pearl", "Garlic", "Spider's Silk", "Sulfurous Ash"],
          description: "Remove campos mágicos.",
          words: "An Grav",
          mana: 14,
        },
        {
          name: "Incognito",
          reagents: ["Blood Moss", "Garlic", "Nightshade"],
          description: "Disfarça a aparência do conjurador.",
          words: "Kal In Ex",
          mana: 14,
        },
        {
          name: "Magic Reflection",
          reagents: ["Garlic", "Mandrake Root", "Spider's Silk"],
          description: "Reflete magias de volta para o atacante.",
          words: "In Jux Sanct",
          mana: 14,
        },
        {
          name: "Mind Blast",
          reagents: ["Black Pearl", "Mandrake Root", "Nightshade", "Sulfurous Ash"],
          description: "Causa dano mental baseado na inteligência.",
          words: "Por Corp Wis",
          mana: 14,
        },
        {
          name: "Paralyze",
          reagents: ["Garlic", "Mandrake Root", "Spider's Silk"],
          description: "Paralisa o alvo temporariamente.",
          words: "An Ex Por",
          mana: 14,
        },
        {
          name: "Poison Field",
          reagents: ["Black Pearl", "Nightshade", "Spider's Silk"],
          description: "Cria um campo de veneno.",
          words: "In Nox Grav",
          mana: 14,
        },
        {
          name: "Summon Creature",
          reagents: ["Blood Moss", "Mandrake Root", "Spider's Silk"],
          description: "Invoca uma criatura para lutar pelo conjurador.",
          words: "Kal Xen",
          mana: 14,
        }
      ]
    }
  ];

  // Definição dos reagentes mágicos
  const reagents = [
    {
      name: "Black Pearl",
      description: "Usado em magias de energia e teleportação",
      rarity: "Comum",
      location: "Encontrado em praias e comprado de vendedores de reagentes"
    },
    {
      name: "Blood Moss",
      description: "Usado em magias de movimento e transformação",
      rarity: "Comum",
      location: "Encontrado em pântanos e comprado de vendedores de reagentes"
    },
    {
      name: "Garlic",
      description: "Usado em magias de proteção e cura",
      rarity: "Comum",
      location: "Encontrado em campos e comprado de vendedores de reagentes"
    },
    {
      name: "Ginseng",
      description: "Usado em magias de cura e fortalecimento",
      rarity: "Comum",
      location: "Encontrado em campos e comprado de vendedores de reagentes"
    },
    {
      name: "Mandrake Root",
      description: "Usado em magias poderosas de todas as escolas",
      rarity: "Raro",
      location: "Encontrado em pântanos e comprado de vendedores de reagentes"
    },
    {
      name: "Nightshade",
      description: "Usado em magias de veneno e maldições",
      rarity: "Incomum",
      location: "Encontrado em florestas escuras e comprado de vendedores de reagentes"
    },
    {
      name: "Spider's Silk",
      description: "Usado em magias de amarras e teias",
      rarity: "Comum",
      location: "Encontrado em cavernas e comprado de vendedores de reagentes"
    },
    {
      name: "Sulfurous Ash",
      description: "Usado em magias de fogo e energia",
      rarity: "Comum",
      location: "Encontrado perto de vulcões e comprado de vendedores de reagentes"
    }
  ];

  return (
    <div className="container-uo py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link href="/wiki/skills" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar para Skills
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Guia de Magia</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Domine as artes arcanas do Nova Era Shard com este guia completo sobre magias e feitiços.
          </p>
        </div>
        
        {/* Introdução */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">A Arte da Magia</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              A magia no Nova Era Shard segue o sistema tradicional de Ultima Online, organizado em 8 círculos de poder crescente. 
              Cada círculo contém 8 feitiços, totalizando 64 magias disponíveis para os magos experientes.
            </p>
            
            <p>
              Para lançar magias, você precisará:
            </p>
            
            <ul>
              <li>Ter pontos suficientes na skill <strong>Magery</strong></li>
              <li>Possuir os reagentes necessários para o feitiço</li>
              <li>Ter mana suficiente</li>
              <li>Possuir um grimório (livro de feitiços) com o pergaminho da magia inscrito</li>
            </ul>
            
            <h3>Progresso em Magery</h3>
            <p>
              Seu nível de <strong>Magery</strong> determina quais círculos de magia você pode lançar com sucesso:
            </p>
            <ul>
              <li>1º Círculo: 0-30 Magery</li>
              <li>2º Círculo: 30-40 Magery</li>
              <li>3º Círculo: 40-50 Magery</li>
              <li>4º Círculo: 50-60 Magery</li>
              <li>5º Círculo: 60-70 Magery</li>
              <li>6º Círculo: 70-80 Magery</li>
              <li>7º Círculo: 80-90 Magery</li>
              <li>8º Círculo: 90-100 Magery</li>
            </ul>
            
            <h3>Mana e Recuperação</h3>
            <p>
              A mana é a energia mágica necessária para lançar feitiços. Sua mana máxima é determinada por sua <strong>Inteligência</strong>. 
              A skill <strong>Meditation</strong> permite recuperar mana mais rapidamente enquanto estiver em repouso.
            </p>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Dica:</strong> Você pode verificar sua mana atual olhando para a barra azul no canto da tela. 
                Use a skill Meditation para recuperar mana mais rapidamente entre combates.
              </p>
            </div>
          </div>
        </div>
        
        {/* Círculos de Magia */}
        <h2 className="header-medieval text-2xl md:text-3xl mb-6">Círculos de Magia</h2>
        
        {magicCircles.map((circle) => (
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
                      <span className="font-semibold">Palavras de Poder:</span> 
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Reagentes */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Reagentes Mágicos</h2>
          
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
            Os reagentes são ingredientes essenciais para a magia. Cada feitiço requer uma combinação específica destes itens.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reagents.map((reagent, index) => (
              <div 
                key={index} 
                className="flex items-start p-3 border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-md bg-white/40 dark:bg-gray-900/40"
              >
                <div className="w-12 h-12 bg-uo-crimson/10 dark:bg-uo-gold/10 rounded-md flex items-center justify-center mr-3">
                  <FaGem className="text-uo-crimson dark:text-uo-gold" />
                </div>
                <div>
                  <h3 className="font-medieval text-lg">{reagent.name}</h3>
                  <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                    {reagent.description}
                  </p>
                  <div className="mt-1 text-xs flex flex-wrap gap-2">
                    <span className="bg-uo-darkwood/5 dark:bg-uo-gold/5 px-2 py-0.5 rounded">
                      Raridade: {reagent.rarity}
                    </span>
                    <span className="bg-uo-darkwood/5 dark:bg-uo-gold/5 px-2 py-0.5 rounded">
                      {reagent.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dicas para Magos */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Dicas para Magos</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h3>Construindo um Mago Eficiente</h3>
            <ul>
              <li>Invista pontos em <strong>Meditation</strong> para recuperar mana mais rapidamente</li>
              <li>A skill <strong>Evaluating Intelligence</strong> aumenta o dano das suas magias ofensivas</li>
              <li>Balanceie suas skills entre magia ofensiva, defensiva e utilitária</li>
              <li>Sempre carregue reagentes extras em uma sacola especial</li>
              <li>Use <strong>Inscription</strong> para fazer seus próprios pergaminhos</li>
            </ul>
            
            <h3>Combinações Poderosas</h3>
            <ul>
              <li><strong>Magic Reflection + Protection</strong>: Máxima defesa mágica</li>
              <li><strong>Paralyze + Energy Bolt</strong>: Paralisa e causa dano ao mesmo tempo</li>
              <li><strong>Invisibility + Teleport</strong>: Escape perfeito de situações perigosas</li>
              <li><strong>Greater Heal + Cure</strong>: Combo de cura completa em emergências</li>
            </ul>
            
            <h3>Economia de Reagentes</h3>
            <p>
              Reagentes podem ser caros, especialmente os mais raros. Algumas dicas para economizá-los:
            </p>
            <ul>
              <li>Use a skill <strong>Alchemy</strong> para fazer seus próprios reagentes</li>
              <li>Compre em grande quantidade de NPCs para obter descontos</li>
              <li>Colete reagentes em dungeons e áreas específicas</li>
              <li>Use itens que reduzem o consumo de reagentes</li>
            </ul>
          </div>
        </div>
        
        {/* Links para outros guias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/wiki/skills/magery/advanced" className="card-medieval p-4 hover:shadow-xl transition-shadow flex items-center">
            <FaMagicWand className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />
            <div>
              <h3 className="font-medieval text-lg">Magia Avançada</h3>
              <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">Técnicas avançadas para magos experientes.</p>
            </div>
          </Link>
          
          <Link href="/wiki/skills/spellweaving" className="card-medieval p-4 hover:shadow-xl transition-shadow flex items-center">
            <FaHeart className="h-6 w-6 mr-3 text-uo-crimson dark:text-uo-gold" />
            <div>
              <h3 className="font-medieval text-lg">Spellweaving</h3>
              <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">Arte mágica élfica com encantamentos únicos.</p>
            </div>
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/wiki/skills" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para Sistema de Skills
          </Link>
        </div>
      </div>
    </div>
  );
} 