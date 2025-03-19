import Link from 'next/link';
import { FaArrowLeft, FaPaw, FaHatWizard, FaDragon, FaQuestion } from 'react-icons/fa';
import FallbackImage from '../../../components/ui/FallbackImage';
import PageHeader from '../../../components/ui/PageHeader';
import SectionCard from '../../../components/ui/SectionCard';
import ItemCard from '../../../components/ui/ItemCard';
import MedievalTable from '../../../components/ui/MedievalTable';

// Dados dos tipos de pets para reutilização
const petTypes = [
  {
    id: "basic",
    title: "Pets Básicos",
    skill: "0-40 Taming",
    description: "Criaturas comuns com utilidade limitada em combate, mas excelentes para treinar as habilidades iniciais de Taming, Veterinary e Animal Lore.",
    image: "/images/pets/basic-pets.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Pets+Básicos",
    stats: {
      "Exemplos": ["Cães", "Gatos", "Coelhos", "Cervos", "Pássaros"],
      "Vantagens": ["Fáceis de domar", "Baixo custo de manutenção", "Boa mobilidade", "Úteis para iniciantes"]
    }
  },
  {
    id: "intermediate",
    title: "Pets Intermediários",
    skill: "40-70 Taming",
    description: "Criaturas com poder de combate moderado, capazes de enfrentar ameaças médias. Estes pets começam a oferecer habilidades táticas úteis em combate.",
    image: "/images/pets/intermediate-pets.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Pets+Intermediários",
    stats: {
      "Exemplos": ["Lobos", "Ursos", "Panteras", "Águias", "Aranhas Gigantes"],
      "Vantagens": ["Dano moderado", "Resistências básicas", "Algumas habilidades especiais", "Bom equilíbrio custo/benefício"]
    }
  },
  {
    id: "advanced",
    title: "Pets Avançados",
    skill: "70-100 Taming",
    description: "Criaturas poderosas capazes de enfrentar ameaças sérias. Estes pets oferecem habilidades de combate significativas e podem formar a espinha dorsal de um Tamer experiente.",
    image: "/images/pets/advanced-pets.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Pets+Avançados",
    stats: {
      "Exemplos": ["Alligators", "Trolls", "Lobos Gigantes", "Elementais", "Grifos"],
      "Vantagens": ["Alto dano", "Boas resistências", "Habilidades especiais táticas", "Sobrevivência melhorada", "Slots para equipamentos"]
    }
  },
  {
    id: "legendary",
    title: "Pets Lendários",
    skill: "100+ Taming",
    description: "As criaturas mais poderosas de Britannia, capazes de enfrentar os maiores desafios do jogo. Estes pets requerem um Tamer mestre e oferecem habilidades únicas que podem mudar o curso de uma batalha.",
    image: "/images/pets/legendary-pets.jpg",
    fallbackImage: "https://placehold.co/600x400/990000/FFF?text=Pets+Lendários",
    stats: {
      "Exemplos": ["Dragões", "Wyrms Ancestrais", "Daemons Selados", "Krakens", "Unicórnios Espirituais"],
      "Vantagens": ["Dano excepcional", "Resistências elevadas", "Habilidades únicas poderosas", "Capacidade para equipamentos especiais", "Prestígio e intimidação"]
    }
  }
];

// FAQ para reutilização
const faq = [
  {
    question: "Quantos pets posso ter ao mesmo tempo?",
    answer: "O número de pets que você pode controlar simultaneamente depende do seu nível de Animal Taming: 0-50 Skill: até 2 pets, 50-80 Skill: até 3 pets, 80-100 Skill: até 4 pets, GM (100+ com especialização): até 5 pets."
  },
  {
    question: "O que acontece se meu pet morrer?",
    answer: "Quando um pet morre, ele deixa um corpo que permanece por 2 minutos. Durante esse período, você pode usar a habilidade Ressurection com bandagens especiais para ressuscitá-lo. Após esse tempo, o pet é perdido permanentemente, incluindo todo seu progresso e equipamentos."
  },
  {
    question: "Como alimentar meus pets?",
    answer: "Pets precisam ser alimentados regularmente para manter sua lealdade. Cada tipo de pet tem preferências alimentares específicas. Use a habilidade Animal Lore para descobrir o que seu pet prefere comer. Alimentos apropriados podem ser comprados em vendedores de suprimentos para pets ou obtidos através de caça."
  },
  {
    question: "Posso transferir meu pet para outro jogador?",
    answer: "Sim, é possível transferir a propriedade de um pet utilizando o comando \"TransferPet\" enquanto o pet estiver selecionado e o alvo for outro jogador. O jogador receptor deve ter nível de Taming suficiente para controlar aquele pet específico."
  }
];

export default function PetsPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title="Pets e Taming" 
          description="Domine a arte de domar e treinar criaturas para se tornarem seus companheiros fiéis no Nova Era Shard."
          backLink="/wiki/pvm"
          backLinkText="Voltar para PvM"
          icon={<FaPaw />}
        />
        
        {/* Introdução */}
        <SectionCard 
          title="Sobre Taming" 
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Animal Taming é uma habilidade que permite aos jogadores domar criaturas selvagens e transformá-las em companheiros leais. Um Tamer bem-sucedido pode comandar poderosos animais e criaturas místicas em combate, tornando-se uma força dominante nos campos de batalha de Britannia.
            </p>
            
            <p>
              No Nova Era Shard, o sistema de Taming foi ampliado e refinado para oferecer mais opções estratégicas e progressão. Com as modificações implementadas, a classe de Tamer se torna uma das mais versáteis do jogo, capaz de se adaptar a quase qualquer situação de combate.
            </p>
            
            <div className="callout-uo mt-4">
              <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mb-2">Habilidades Relacionadas</h3>
              <ul className="list-uo mt-0">
                <li>Animal Taming - A habilidade principal para domar criaturas</li>
                <li>Animal Lore - Examina status e informações detalhadas de pets</li>
                <li>Veterinary - Cura as feridas dos seus pets</li>
                <li>Herding - Auxilia no controle de movimento dos pets em grupo</li>
              </ul>
            </div>
          </div>
        </SectionCard>
        
        {/* Como Começar */}
        <SectionCard 
          title="Como Começar" 
          icon={<FaQuestion />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Para iniciar sua jornada como um Tamer, siga os passos abaixo:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Obtenha equipamento inicial</strong> - Adquira um cajado de domação (taming staff) com um comerciante em qualquer cidade grande.
              </li>
              <li>
                <strong>Primeiros skills</strong> - Treine Animal Taming até pelo menos 30.0 com o treinador da cidade para poder domar criaturas mais simples.
              </li>
              <li>
                <strong>Primeiras domas</strong> - Comece com animais básicos como cães, gatos e coelhos nas áreas próximas a Britain.
              </li>
              <li>
                <strong>Veterinary</strong> - Treine a habilidade Veterinary para curar seus pets quando ficarem feridos.
              </li>
              <li>
                <strong>Progressão</strong> - À medida que suas habilidades aumentam, busque criaturas mais desafiadoras e poderosas.
              </li>
            </ol>
            
            <div className="callout-uo">
              <p className="flex items-center">
                <svg className="h-5 w-5 text-uo-crimson dark:text-uo-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v3a1 1 0 11-2 0zm0-5a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
                <strong>Dica:</strong> Mantenha bandagens em seu inventário para usar com a habilidade Veterinary. Com um bom suprimento, você poderá manter seus pets saudáveis durante longos períodos de combate.
              </p>
            </div>
          </div>
        </SectionCard>
        
        {/* Tipos de Pets */}
        <SectionCard 
          title="Tipos de Pets" 
          icon={<FaPaw />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none mb-6">
            <p>
              Os pets no Nova Era Shard são divididos em categorias baseadas em seu poder e utilidade. Cada categoria tem requisitos específicos de Animal Taming e oferece diferentes vantagens em combate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            {petTypes.map((petType, index) => (
              <div key={petType.id} className={`${index < petTypes.length - 1 ? 'border-b border-uo-darkwood/10 dark:border-uo-gold/10 pb-6' : ''}`}>
                <h3 className="font-medieval text-xl mb-3 text-uo-crimson dark:text-uo-gold">{petType.title} ({petType.skill})</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <FallbackImage 
                      src={petType.image} 
                      alt={petType.title} 
                      className="rounded-lg w-full shadow-md hover:shadow-lg transition-shadow duration-300"
                      fallbackSrc={petType.fallbackImage}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-3">
                      {petType.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(petType.stats).map(([key, values]) => (
                        <div key={key}>
                          <span className="font-bold text-uo-crimson/80 dark:text-uo-gold/80">{key}:</span>
                          <ul className="mt-1 list-disc list-inside">
                            {values.map((value, i) => (
                              <li key={i}>{value}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
        
        {/* Sistema de Evolução */}
        <SectionCard 
          title="Sistema de Evolução de Pets" 
          icon={<FaHatWizard />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              No Nova Era Shard, implementamos um sistema exclusivo de evolução de pets que permite que suas criaturas cresçam em poder conforme ganham experiência em combate.
            </p>
            
            <h3 className="subtitle-uo mt-6 mb-3">Como Funciona:</h3>
            
            <ul className="list-uo">
              <li>
                <strong>Experiência em Combate</strong> - Pets ganham pontos de experiência quando ajudam a derrotar inimigos.
              </li>
              <li>
                <strong>Níveis</strong> - Cada pet pode subir até 10 níveis além de seu estado base.
              </li>
              <li>
                <strong>Pontos de Atributo</strong> - A cada nível, o pet ganha pontos para distribuir entre seus atributos (Força, Destreza, Inteligência).
              </li>
              <li>
                <strong>Habilidades Desbloqueáveis</strong> - Em níveis específicos (3, 5, 7 e 10), o pet desbloqueia habilidades especiais únicas para sua espécie.
              </li>
              <li>
                <strong>Transformações</strong> - Alguns pets raros podem passar por transformações visuais ao atingir o nível máximo, ganhando aparência única.
              </li>
            </ul>
            
            <div className="card-parchment my-6">
              <h3 className="font-medieval text-lg text-uo-crimson dark:text-uo-gold mb-2">Exemplo de Evolução: Lobo</h3>
              <p className="mb-2">Um lobo comum pode evoluir da seguinte forma:</p>
              
              <MedievalTable 
                headers={["Nível", "Habilidade", "Efeito"]}
                data={[
                  ["3", "Uivo de Terror", "Reduz resistência mágica dos inimigos"],
                  ["5", "Mordida Dilacerante", "Causa sangramento adicional"],
                  ["7", "Faro Aprimorado", "Detecta inimigos ocultos"],
                  ["10", "Transformação: Lobo Alfa", "Aparência distinta e comando do bando que aumenta atributos de outros pets caninos"]
                ]}
              />
            </div>
          </div>
        </SectionCard>
        
        {/* Equipamentos para Pets */}
        <SectionCard 
          title="Equipamentos para Pets" 
          icon={<FaDragon />}
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Pets avançados e lendários podem utilizar equipamentos especiais que melhoram suas habilidades de combate.
            </p>
            
            <h3 className="subtitle-uo mt-6 mb-3">Tipos de Equipamentos:</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 not-prose">
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Armaduras</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Aumentam a resistência física e mágica do pet. Disponíveis em diferentes materiais (couro, placas, escamas) e qualidades.
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Coleiras</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Melhoram atributos específicos como Força ou Destreza, além de oferecerem resistências elementais.
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Garras/Presas</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Aumentam o dano causado pelo pet e podem adicionar efeitos como sangramento, veneno ou dano elemental.
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Artefatos</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Itens raros que concedem habilidades únicas ou potencializam significativamente algum aspecto do pet.
                </p>
              </div>
            </div>
            
            <div className="callout-uo mt-6">
              <p className="flex items-center">
                <svg className="h-5 w-5 text-uo-crimson dark:text-uo-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v3a1 1 0 11-2 0zm0-5a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
                <strong>Dica:</strong> Os equipamentos para pets podem ser criados por jogadores com a habilidade Tailoring (para equipamentos de couro) ou Blacksmithy (para equipamentos de metal), usando materiais especiais obtidos de criaturas raras.
              </p>
            </div>
          </div>
        </SectionCard>
        
        {/* Estratégias de Combate */}
        <SectionCard 
          title="Estratégias de Combate" 
          className="mb-8"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Um Tamer eficiente deve saber utilizar seus pets de forma estratégica em combate. Aqui estão algumas táticas essenciais:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="subtitle-uo mb-3">Controle de Pets:</h3>
                <ul className="list-uo mt-0">
                  <li><strong>Comando "All Guard"</strong> - Todos os pets protegerão você automaticamente</li>
                  <li><strong>Comando "All Kill"</strong> - Direciona todos os pets para atacar um alvo específico</li>
                  <li><strong>Comando "All Follow"</strong> - Pets seguirão você sem atacar automaticamente</li>
                  <li><strong>Pets Individuais</strong> - Selecione um pet específico para dar comandos personalizados</li>
                </ul>
              </div>
              
              <div>
                <h3 className="subtitle-uo mb-3">Formações de Combate:</h3>
                <ul className="list-uo mt-0">
                  <li><strong>Linha de Frente</strong> - Posicione pets tanques (como ursos e trolls) para absorver dano</li>
                  <li><strong>Suporte Traseiro</strong> - Mantenha pets com habilidades à distância (como dragões) atrás</li>
                  <li><strong>Flanqueadores</strong> - Use pets rápidos (como lobos e panteras) para atacar magos inimigos</li>
                </ul>
              </div>
            </div>
            
            <div className="divider-uo">
              <span className="text-uo-crimson dark:text-uo-gold px-4 font-medieval">Combinações de Pets</span>
            </div>
            
            <p>
              Algumas combinações de pets trabalham melhor juntas:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 not-prose">
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10">
                <h3 className="font-medieval text-lg mb-1 text-uo-crimson dark:text-uo-gold">Alcateia</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Múltiplos lobos que ganham bônus quando juntos
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10">
                <h3 className="font-medieval text-lg mb-1 text-uo-crimson dark:text-uo-gold">Guarda Primal</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Urso + Águia para combinação de tanque e dano
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10">
                <h3 className="font-medieval text-lg mb-1 text-uo-crimson dark:text-uo-gold">Terror Antigo</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Dragão + Daemons para máximo poder ofensivo
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10">
                <h3 className="font-medieval text-lg mb-1 text-uo-crimson dark:text-uo-gold">Patrulha da Floresta</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  Unicórnio + Cu Sidhe para cura e dano sustentado
                </p>
              </div>
            </div>
          </div>
        </SectionCard>
        
        {/* Perguntas Frequentes */}
        <SectionCard 
          title="Perguntas Frequentes" 
          className="mb-8"
        >
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:border-uo-crimson/30 dark:hover:border-uo-gold/30 transition-colors">
                <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">{item.question}</h3>
                <div className="text-uo-darkwood/80 dark:text-uo-mist/80">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
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