import Link from 'next/link';
import { FaArrowLeft, FaFlask, FaBrain, FaShieldAlt, FaFire, FaHatWizard } from 'react-icons/fa';

// Componente personalizado para ícone que não existe no react-icons
const FaMagicWand = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"/>
  </svg>
);

export default function AdvancedMageryPage() {
  // Técnicas avançadas de magia
  const advancedTechniques = [
    {
      id: 1,
      title: "Economia de Reagentes",
      icon: <FaFlask className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Técnicas para minimizar o uso de reagentes e maximizar a eficiência de lançamentos.",
      content: [
        "Utilize itens encantados com 'Lower Reagent Cost' para reduzir o consumo de reagentes",
        "Treine Alchemy para 80+ e crie seus próprios reagentes",
        "Foque em magias de alto valor e baixo custo de reagentes durante treinamento",
        "Use Recall Scrolls para viagens longas em vez de consumir reagentes",
        "Plante seus próprios reagentes em casa para colheita regular"
      ]
    },
    {
      id: 2,
      title: "Controle de Mana",
      icon: <FaBrain className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Maximizando sua reserva de mana e otimizando sua recuperação para combates prolongados.",
      content: [
        "Treine Meditation até 100 para recuperação de mana ultrarrápida",
        "Use itens com modificador 'Faster Cast Recovery' para reduzir o tempo entre lançamentos",
        "Mantenha inteligência alta (100+) para maximizar seu pool de mana",
        "Em combates, posicione-se estrategicamente para meditar durante pausas",
        "Use poções de mana apenas em situações críticas"
      ]
    },
    {
      id: 3,
      title: "Defesa Mágica",
      icon: <FaShieldAlt className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Protegendo-se contra magias inimigas e neutralizando magos adversários.",
      content: [
        "Mantenha Magic Reflection ativa durante confrontos com outros magos",
        "Combine Protection com Reactive Armor para defesa física e mágica",
        "Use Dispel Field contra campos mágicos criados por inimigos",
        "Posicione Wall of Stone estrategicamente para bloquear linhas de visão",
        "Lance Mana Drain em magos inimigos para torná-los inofensivos temporariamente"
      ]
    },
    {
      id: 4,
      title: "Combate Ofensivo",
      icon: <FaFire className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Maximizando seu potencial ofensivo e anulando inimigos com eficiência.",
      content: [
        "Comece combates com Paralyze seguido de Energy Bolt para impedir movimentação",
        "Use Flamestrike em vez de Fireball contra alvos com alta resistência",
        "Lance Curse antes de magias de dano para reduzir as resistências do alvo",
        "Empregue Poison com Paralyze para causar dano ao longo do tempo",
        "Contra guerreiros, use campos mágicos para impedir aproximação enquanto ataca à distância"
      ]
    },
    {
      id: 5,
      title: "Magias de Alto Círculo",
      icon: <FaHatWizard className="h-8 w-8 mb-3 text-uo-crimson dark:text-uo-gold" />,
      description: "Dominando as magias mais poderosas dos círculos 6, 7 e 8.",
      content: [
        "Para usar o 8º círculo efetivamente, mantenha Magery em 100 e Evaluating Intelligence em 80+",
        "Energy Vortex é excelente para criar distração e dividir grupos inimigos",
        "Meteor Swarm é mais eficiente contra múltiplos alvos agrupados",
        "Earthquake pode interromper lançamento de magias de todos os inimigos em área",
        "Resurrection deve ser usada estrategicamente - apenas em aliados valiosos devido ao alto custo"
      ]
    }
  ];

  // Builds de mago recomendados
  const mageBuilds = [
    {
      name: "Puro Ofensivo",
      skills: [
        "Magery 100",
        "Evaluating Intelligence 100",
        "Meditation 100",
        "Resisting Spells 80",
        "Inscription 80",
        "Tactics 20",
        "Hiding 20"
      ],
      strengths: "Dano extremamente alto, recuperação rápida de mana",
      weaknesses: "Vulnerabilidade física, pouca versatilidade",
      playstyle: "Focado em eliminar inimigos rapidamente com magias de alto dano"
    },
    {
      name: "Mago Defensivo",
      skills: [
        "Magery 100",
        "Meditation 100",
        "Resisting Spells 100",
        "Evaluating Intelligence 60",
        "Spirit Speak 60",
        "Healing 60",
        "Inscription 20"
      ],
      strengths: "Alta sobrevivência, bom contra outros magos",
      weaknesses: "Dano reduzido, combates mais longos",
      playstyle: "Sobrevive a confrontos prolongados desgastando o inimigo gradualmente"
    },
    {
      name: "Mago Utilitário",
      skills: [
        "Magery 100",
        "Meditation 80",
        "Inscription 100",
        "Alchemy 80",
        "Item Identification 60",
        "Evaluating Intelligence 60",
        "Resisting Spells 20"
      ],
      strengths: "Grande versatilidade, eficiência de recursos",
      weaknesses: "Menos eficaz em combate direto",
      playstyle: "Especialista em suporte e utilitários, criando pergaminhos e poções"
    },
    {
      name: "Mago Necromante",
      skills: [
        "Magery 100",
        "Spirit Speak 100",
        "Necromancy 100", 
        "Meditation 80",
        "Resisting Spells 40",
        "Hiding 30",
        "Evaluating Intelligence 50"
      ],
      strengths: "Combinação poderosa de magias arcanas e necromânticas",
      weaknesses: "Divisão de foco, consumo elevado de recursos",
      playstyle: "Usa mortos-vivos e magias de controle para dominar o campo de batalha"
    }
  ];

  // Itens mágicos especiais
  const magicalItems = [
    {
      name: "Cajado Arcano",
      properties: [
        "Lower Reagent Cost (10-25%)",
        "Faster Casting (1-2)",
        "Spell Damage Increase (5-15%)",
        "Mana Regeneration (1-3)"
      ],
      where: "Craftado por Woodworkers com 100 de skill e encantado por magos",
      notes: "Item essencial para qualquer mago sério, especialmente a versão com 25% LRC"
    },
    {
      name: "Chapéu de Mago",
      properties: [
        "Intelligence Bonus (5-8)",
        "Faster Cast Recovery (1-3)",
        "Mana Increase (5-10)",
        "Lower Mana Cost (5-15%)"
      ],
      where: "Drops raros de Liches e Lich Lords",
      notes: "Melhor equipamento para cabeça de um mago, especialmente com alto bônus de INT"
    },
    {
      name: "Manto do Arcanista",
      properties: [
        "Spell Damage Increase (10-20%)",
        "Magery Skill Bonus (5-15)",
        "Lower Reagent Cost (15-20%)",
        "Magic Reflection Charges (1-5)"
      ],
      where: "Recompensa de quest especial do Conselho de Magos",
      notes: "Extremamente raro e valioso, oferece grande vantagem ofensiva"
    },
    {
      name: "Anel da Concentração",
      properties: [
        "Meditation Skill Bonus (5-15)",
        "Mana Regeneration (3-5)",
        "Intelligence Bonus (3-6)",
        "Lower Mana Cost (5-15%)"
      ],
      where: "Craftado por joalheiros com 100 de skill usando materiais especiais",
      notes: "Perfeito para magos que precisam de recuperação rápida de mana"
    },
    {
      name: "Amuleto de Proteção",
      properties: [
        "Magic Resist Increase (5-15%)",
        "Spell Reflection Chance (5-15%)",
        "Resisting Spells Skill Bonus (5-10)",
        "Damage Reduction (5-10%)"
      ],
      where: "Drops de Ancient Wyrms",
      notes: "Essencial para sobrevivência contra outros magos"
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
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Magia Avançada</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Técnicas e estratégias de alto nível para magos experientes no Nova Era Shard.
          </p>
        </div>
        
        {/* Introdução */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Dominando as Artes Arcanas</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Este guia é destinado a magos que já dominam os fundamentos básicos da magia e desejam 
              aprimorar suas habilidades até o mais alto nível. Aqui você encontrará técnicas avançadas, 
              builds otimizados e estratégias para se tornar um verdadeiro Arquimago.
            </p>
            
            <p>
              Para aproveitar ao máximo este guia, recomendamos:
            </p>
            
            <ul>
              <li>Ter pelo menos 80.0 em Magery</li>
              <li>Compreender os conceitos básicos de lançamento de magias</li>
              <li>Estar familiarizado com todos os oito círculos de magia</li>
              <li>Ter experiência prévia em combate mágico PvE e/ou PvP</li>
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Nota:</strong> As estratégias e técnicas descritas aqui foram testadas por magos 
                veteranos do Nova Era Shard. Adapte-as ao seu estilo de jogo pessoal e equipamentos disponíveis.
              </p>
            </div>
          </div>
        </div>
        
        {/* Técnicas Avançadas */}
        <h2 className="header-medieval text-2xl md:text-3xl mb-6">Técnicas Avançadas</h2>
        
        {advancedTechniques.map((technique) => (
          <div key={technique.id} className="card-medieval mb-8">
            <div className="flex items-center mb-6">
              {technique.icon}
              <h2 className="font-medieval text-2xl ml-2">{technique.title}</h2>
            </div>
            
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
              {technique.description}
            </p>
            
            <ul className="space-y-2">
              {technique.content.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-uo-crimson/20 dark:bg-uo-gold/20 mr-2 mt-1 flex-shrink-0"></span>
                  <span className="text-uo-darkwood/80 dark:text-uo-mist/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        {/* Builds de Mago */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Builds de Mago Recomendados</h2>
          
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
            Estes templates foram otimizados para diferentes estilos de jogo e funções. 
            Cada um representa 700 pontos de skills distribuídos de forma eficiente.
          </p>
          
          <div className="space-y-6">
            {mageBuilds.map((build, index) => (
              <div key={index} className="border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-lg p-6 bg-white/40 dark:bg-gray-900/40">
                <h3 className="font-medieval text-xl mb-4 text-uo-crimson dark:text-uo-gold">{build.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Distribution de Skills</h4>
                    <ul className="space-y-1 text-sm">
                      {build.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="mb-3">
                      <h4 className="font-semibold mb-1 text-sm uppercase tracking-wide">Pontos Fortes</h4>
                      <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">{build.strengths}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="font-semibold mb-1 text-sm uppercase tracking-wide">Pontos Fracos</h4>
                      <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">{build.weaknesses}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1 text-sm uppercase tracking-wide">Estilo de Jogo</h4>
                  <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">{build.playstyle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Itens Mágicos */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-6 text-uo-crimson dark:text-uo-gold">Equipamentos Arcanos de Elite</h2>
          
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
            Um mago é tão poderoso quanto os itens que carrega. Estes são os equipamentos mais cobiçados 
            para praticantes da arte arcana no Nova Era Shard.
          </p>
          
          <div className="space-y-6">
            {magicalItems.map((item, index) => (
              <div key={index} className="border border-uo-darkwood/10 dark:border-uo-gold/10 rounded-lg p-4 bg-white/40 dark:bg-gray-900/40">
                <h3 className="font-medieval text-xl mb-2 text-uo-crimson dark:text-uo-gold">{item.name}</h3>
                
                <div className="mb-3">
                  <h4 className="font-semibold mb-1 text-sm">Propriedades</h4>
                  <ul className="space-y-1 text-sm pl-4 list-disc text-uo-darkwood/80 dark:text-uo-mist/80">
                    {item.properties.map((prop, propIndex) => (
                      <li key={propIndex}>{prop}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Onde Encontrar</h4>
                    <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">{item.where}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Observações</h4>
                    <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">{item.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* PvP Mágico */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Dominando o PvP Mágico</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              O combate mágico entre jogadores é uma das formas mais complexas e recompensadoras de PvP no Nova Era Shard. 
              Aqui estão algumas dicas essenciais para sobreviver e vencer duelos contra outros jogadores:
            </p>
            
            <h3>Contra outros Magos</h3>
            <ul>
              <li><strong>Prioridade #1:</strong> Lance Mana Drain o mais rápido possível para reduzir os recursos do oponente</li>
              <li>Mantenha Magic Reflection ativa em todos os momentos</li>
              <li>Use pergaminhos de Dispel para remover buffs do inimigo</li>
              <li>Evite previsibilidade nas suas sequências de magias</li>
              <li>Ataques rápidos são melhores que magias poderosas - seu objetivo é interromper o lançamento deles</li>
            </ul>
            
            <h3>Contra Guerreiros</h3>
            <ul>
              <li><strong>Prioridade #1:</strong> Mantenha distância usando Paralyze e campos mágicos</li>
              <li>Use Wall of Stone para bloquear o caminho de aproximação</li>
              <li>Lance Curse para reduzir as habilidades de combate deles</li>
              <li>Prepare Mark/Recall para fugas rápidas se necessário</li>
              <li>Magias de dano em área funcionam bem contra guerreiros por sua baixa resistência mágica</li>
            </ul>
            
            <h3>Contra Arqueiros</h3>
            <ul>
              <li><strong>Prioridade #1:</strong> Movimente-se de forma errática para dificultar os tiros</li>
              <li>Use Invisibility para reposicionamento estratégico</li>
              <li>Energy Field na linha de tiro pode impedir flechas</li>
              <li>Priorize magias que não têm animação longa de lançamento</li>
              <li>Se aproxime em vez de tentar manter distância - arqueiros são mais eficazes de longe</li>
            </ul>
            
            <h3>Equipamentos para PvP</h3>
            <p>
              Para PvP, priorize equipamentos com estas propriedades:
            </p>
            <ul>
              <li>Faster Casting (reduz o tempo de lançamento)</li>
              <li>Lower Mana Cost (permite lançar mais magias)</li>
              <li>Spell Damage Increase (aumenta seu dano)</li>
              <li>Magic Reflection (chance de refletir magias recebidas)</li>
              <li>Hit Points Regeneration (sustentabilidade em combates prolongados)</li>
            </ul>
          </div>
        </div>
        
        {/* Técnicas Secretas */}
        <div className="card-medieval mb-8 bg-uo-crimson/5 dark:bg-uo-gold/5">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Técnicas Secretas dos Arquimagos</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Estas técnicas raramente são compartilhadas e representam o pináculo da arte arcana. Use-as com sabedoria:
            </p>
            
            <ol className="space-y-4">
              <li>
                <strong>Troca de Posição:</strong> Lance Polymorph em si mesmo para se transformar em um ser pequeno, 
                seguido de Teleport para uma posição inesperada. Ótimo para confundir adversários em PvP.
              </li>
              
              <li>
                <strong>Ciclo de Controle:</strong> Sequência de Paralyze, Mind Blast, Mana Drain e Curse em 
                rotação. Mantém o oponente completamente incapaz de reagir enquanto drena seus recursos.
              </li>
              
              <li>
                <strong>Explosão de Reflexão:</strong> Lance Magic Reflection em si mesmo e então corra para 
                perto de vários inimigos e lance Explosion centrado em você mesmo. A reflexão protegerá você 
                enquanto os inimigos receberão todo o dano.
              </li>
              
              <li>
                <strong>Corredor de Morte:</strong> Crie dois Fire Fields paralelos com uma passagem estreita 
                entre eles, então use Mass Curse e Energy Vortex no corredor. Ótimo para emboscadas.
              </li>
              
              <li>
                <strong>Evocação Mascarada:</strong> Use Incognito para parecer inofensivo, aproxime-se de 
                um grupo inimigo e então lance Energy Vortex ou Summon Daemon para criar caos enquanto escapa.
              </li>
            </ol>
            
            <div className="bg-uo-crimson/10 dark:bg-uo-gold/10 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Aviso:</strong> Algumas destas técnicas podem ser consideradas desonrosas em determinados 
                contextos de PvP. Use seu julgamento e respeite os códigos de conduta da comunidade.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/wiki/skills/magic" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para o Guia de Magia
          </Link>
        </div>
      </div>
    </div>
  );
} 