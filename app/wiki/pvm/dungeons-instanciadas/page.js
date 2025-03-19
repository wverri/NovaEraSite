import Link from 'next/link';
import { FaArrowLeft, FaDungeon, FaUsers, FaGem, FaSkull, FaQuestionCircle } from 'react-icons/fa';
import FallbackImage from '../../../components/ui/FallbackImage';
import PageHeader from '../../../components/ui/PageHeader';
import SectionCard from '../../../components/ui/SectionCard';
import ItemCard from '../../../components/ui/ItemCard';
import MedievalTable from '../../../components/ui/MedievalTable';

// Dados das dungeons para reutilização
const dungeons = [
  {
    id: "caverna-cristais",
    title: "Caverna dos Cristais",
    image: "/images/dungeons/caverna-cristais.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Caverna+dos+Cristais",
    description: "Uma rede de cavernas iluminadas por cristais mágicos que foram corrompidos por uma entidade maligna. Os jogadores devem purificar os cristais e derrotar a fonte da corrupção.",
    stats: {
      "Nível": ["70-90"],
      "Jogadores": ["3-5"],
      "Duração": ["45-60 min"],
      "Dificuldade": ["Média"],
      "Chefe": ["Cristalomante"],
      "Chave": ["Não requer"]
    }
  },
  {
    id: "catacumbas",
    title: "Catacumbas Esquecidas",
    image: "/images/dungeons/catacumbas.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Catacumbas+Esquecidas",
    description: "Antigas catacumbas infestadas de mortos-vivos onde um poderoso lich realiza experimentos proibidos. O grupo deve navegar pelas armadilhas e resolver enigmas para alcançar a câmara do lich.",
    stats: {
      "Nível": ["80-100"],
      "Jogadores": ["4-5"],
      "Duração": ["60-90 min"],
      "Dificuldade": ["Difícil"],
      "Chefe": ["Archlich Morenthal"],
      "Chave": ["Osso Encantado"]
    }
  },
  {
    id: "abismo-fogo",
    title: "Abismo de Fogo",
    image: "/images/dungeons/abismo-fogo.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Abismo+de+Fogo",
    description: "Uma fenda vulcânica onde demônios e elementais de fogo conspiram para invadir Britannia. O grupo deve atravessar rios de lava e salas em chamas para enfrentar o senhor demoníaco que comanda as forças invasoras.",
    stats: {
      "Nível": ["90-120"],
      "Jogadores": ["5"],
      "Duração": ["90-120 min"],
      "Dificuldade": ["Muito Difícil"],
      "Chefe": ["Balor, O Flamejante"],
      "Chave": ["Pedra de Lava"]
    }
  }
];

// Dados das recompensas para reutilização
const rewards = [
  {
    title: "Equipamentos Lendários",
    description: "Armas e armaduras com propriedades únicas e visuais exclusivos."
  },
  {
    title: "Tokens de Instância",
    description: "Moeda especial para trocar por recompensas com comerciantes específicos."
  },
  {
    title: "Materiais Raros",
    description: "Itens para crafting de alto nível não encontrados em outras áreas do jogo."
  },
  {
    title: "Montarias Especiais",
    description: "Montarias raras com aparência única e habilidades especiais."
  },
  {
    title: "Pontos de Conquista",
    description: "Progressão no sistema de conquistas com títulos e recompensas exclusivas."
  },
  {
    title: "Pets Raros",
    description: "Criaturas companheiras temáticas relacionadas às dungeons."
  }
];

export default function DungeonsInstanciadasPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title="Dungeons Instanciadas" 
          description="Explore conteúdo exclusivo para grupos em instâncias privadas no Nova Era Shard."
          backLink="/wiki/pvm"
          backLinkText="Voltar para PvM"
          icon={<FaDungeon />}
        />
        
        {/* Introdução às Dungeons Instanciadas */}
        <SectionCard 
          title="O que são Dungeons Instanciadas?" 
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Dungeons Instanciadas são áreas especiais criadas exclusivamente para você e seu grupo. Diferente das dungeons tradicionais de Britannia, as instâncias são cópias privadas que garantem uma experiência sem interferências de outros jogadores.
            </p>
            
            <p>
              Este sistema permite:
            </p>
            
            <ul className="list-uo">
              <li>Exploração sem competição por monstros ou recursos</li>
              <li>Desafios balanceados especificamente para seu grupo</li>
              <li>Recompensas exclusivas não disponíveis em outras áreas do jogo</li>
              <li>Conteúdo com narrativa profunda e eventos específicos</li>
              <li>Mecânicas únicas que testam a coordenação e estratégia do grupo</li>
            </ul>
          </div>
        </SectionCard>
        
        {/* Como Acessar */}
        <SectionCard 
          title="Como Acessar" 
          icon={<FaDungeon />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Para acessar uma dungeon instanciada, siga os passos abaixo:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2">
              <li>Forme um grupo com 2-5 jogadores (a maioria das instâncias requer um grupo completo)</li>
              <li>Visite o <strong>Portal de Instâncias</strong> localizado em cada cidade principal</li>
              <li>Interaja com o portal e selecione a instância que deseja acessar</li>
              <li>Confirme a entrada (o líder do grupo deve ter a chave correspondente, se necessário)</li>
              <li>Todo o grupo será teleportado para a instância privada</li>
            </ol>
            
            <div className="callout-uo mt-4">
              <p className="flex items-center">
                <svg className="h-5 w-5 text-uo-crimson dark:text-uo-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v3a1 1 0 11-2 0zm0-5a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
                <strong>Nota:</strong> Uma vez iniciada, a instância permanecerá ativa por até 2 horas. Se o grupo sair completamente da instância, ela será encerrada após 10 minutos.
              </p>
            </div>
          </div>
        </SectionCard>
        
        {/* Lista de Dungeons */}
        <SectionCard 
          title="Dungeons Disponíveis" 
          icon={<FaSkull />}
          className="mb-8"
        >
          <div className="grid grid-cols-1 gap-6 mb-6">
            {dungeons.map((dungeon, index) => (
              <div key={dungeon.id} className={`${index < dungeons.length - 1 ? 'border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-6' : ''}`}>
                <h3 className="font-medieval text-xl mb-3 text-uo-crimson dark:text-uo-gold">{dungeon.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <FallbackImage 
                      src={dungeon.image} 
                      alt={dungeon.title} 
                      className="rounded-lg w-full shadow-md hover:shadow-lg transition-shadow duration-300"
                      fallbackSrc={dungeon.fallbackImage}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-3">
                      {dungeon.description}
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                      {Object.entries(dungeon.stats).map(([key, values]) => (
                        <div key={key}>
                          <span className="font-bold text-uo-crimson/80 dark:text-uo-gold/80">{key}:</span> {values[0]}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
        
        {/* Mecânicas Especiais */}
        <SectionCard 
          title="Mecânicas Especiais" 
          icon={<FaUsers />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              As dungeons instanciadas apresentam mecânicas únicas que não estão presentes no restante do jogo:
            </p>
            
            <ul className="list-uo">
              <li><strong>Escala Dinâmica</strong> - A dificuldade e recompensas se ajustam conforme o número e nível dos jogadores</li>
              <li><strong>Pontos de Checkpoint</strong> - Em caso de morte, jogadores podem retornar a pontos específicos da dungeon</li>
              <li><strong>Eventos Aleatórios</strong> - Cada execução pode conter diferentes eventos, monstros e desafios</li>
              <li><strong>Mecânicas de Coordenação</strong> - Quebra-cabeças e chefes que exigem coordenação do grupo</li>
              <li><strong>Sistema de Saque Especial</strong> - Loot distribuído de forma justa entre os participantes</li>
            </ul>
            
            <div className="card-parchment my-6">
              <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mb-2">Dicas para Instâncias</h3>
              <ul className="list-uo mt-0">
                <li>Sempre discuta a estratégia com seu grupo antes de enfrentar chefes</li>
                <li>Leve poções de cura e mana suficientes, pois não é possível retornar às cidades</li>
                <li>Distribua funções entre os jogadores (tanque, curador, dano)</li>
                <li>Utilize o sistema de marcação para facilitar a comunicação durante combates</li>
                <li>Explore todos os cantos da instância para encontrar tesouros e itens especiais</li>
              </ul>
            </div>
          </div>
        </SectionCard>
        
        {/* Recompensas */}
        <SectionCard 
          title="Recompensas" 
          icon={<FaGem />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Completar dungeons instanciadas oferece recompensas exclusivas:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 not-prose">
              {rewards.map((reward, index) => (
                <div key={index} className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                  <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">{reward.title}</h3>
                  <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                    {reward.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="callout-uo mt-6">
              <p className="flex items-center">
                <svg className="h-5 w-5 text-uo-crimson dark:text-uo-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v3a1 1 0 11-2 0zm0-5a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
                <strong>Dica Importante:</strong> As recompensas mais raras têm maior chance de aparecer ao completar a dungeon em dificuldade máxima e sem que nenhum membro do grupo morra durante a instância.
              </p>
            </div>
          </div>
        </SectionCard>
        
        {/* Sistema de Dificuldade */}
        <SectionCard 
          title="Sistema de Dificuldade" 
          icon={<FaQuestionCircle />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Cada dungeon instanciada pode ser acessada em diferentes níveis de dificuldade, que afetam tanto o desafio quanto as recompensas:
            </p>
            
            <MedievalTable 
              headers={["Dificuldade", "Modificadores", "Recompensas"]}
              data={[
                ["Normal", "Inimigos padrão, sem modificadores especiais", "Recompensas básicas, baixa chance de itens raros"],
                ["Difícil", "+25% vida/dano dos inimigos, eventos adicionais", "Recompensas melhoradas, chance moderada de itens raros"],
                ["Elite", "+50% vida/dano dos inimigos, modificadores especiais", "Recompensas de alta qualidade, boa chance de itens raros"],
                ["Pesadelo", "+100% vida/dano dos inimigos, desafios extremos", "Melhores recompensas, garantia de pelo menos um item raro"]
              ]}
              className="mb-6"
            />
            
            <p>
              Para acessar níveis de dificuldade mais altos, o grupo precisa primeiro completar a dungeon na dificuldade anterior pelo menos uma vez.
            </p>
          </div>
        </SectionCard>
        
        {/* Recordes e Rankings */}
        <SectionCard 
          title="Recordes e Rankings" 
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              O Nova Era Shard mantém um sistema de classificação para cada dungeon instanciada, premiando os grupos que conseguem completá-las com maior eficiência:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="card-parchment">
                <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mb-2">Rankings Sazonais</h3>
                <p className="mb-2">
                  A cada temporada (3 meses), os rankings são reiniciados e os melhores grupos recebem recompensas especiais.
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>Título exclusivo sazonal</li>
                  <li>Equipamentos cosmético temáticos</li>
                  <li>Moedas especiais para o comerciante sazonal</li>
                </ul>
              </div>
              
              <div className="card-parchment">
                <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mb-2">Recordes Medidos</h3>
                <p className="mb-2">
                  Diferentes tipos de recordes são acompanhados para cada instância:
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>Tempo de conclusão mais rápido</li>
                  <li>Maior pontuação total</li>
                  <li>Menor número de mortes</li>
                  <li>Instância completada com menor número de jogadores</li>
                </ul>
              </div>
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