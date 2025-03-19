import Link from 'next/link';
import { FaArrowLeft, FaHammer, FaGem, FaTshirt, FaWrench, FaScroll } from 'react-icons/fa';

// Componente personalizado para ícone de martelo e bigorna
const FaAnvil = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M425.1 15.34c-12.8-3.84-26.13 3.002-30.02 15.94l-25.62 85.41H294.4l40.84-136.1c3.938-12.94-3.016-26.59-15.97-30.53c-12.94-3.904-26.59 3-30.53 15.97l-48 159.1h-77.46L211.2 16.08c3.906-12.96-3.031-26.62-15.1-30.53c-12.94-3.904-26.59 3-30.53 15.97l-47.93 159.4H15.98C7.139 160.9 0 168.1 0 176.9c0 8.832 7.139 16 15.98 16h94.1l-28.63 96H15.98C7.139 288.9 0 296.1 0 304.9c0 8.832 7.139 16 15.98 16h59.68L35.82 424.1c-3.906 12.96 3.031 26.63 15.1 30.53C53.76 456.6 55.91 457 58.03 457c10.39 0 20.06-6.75 23.5-16.94l44.85-149.2h77.46L165.1 440.1c-3.906 12.96 3.031 26.63 15.1 30.53C183 472.6 185.2 473 187.3 473c10.39 0 20.06-6.75 23.5-16.94l44.78-149.2h100.2c8.84 0 15.98-7.168 15.98-16c0-8.832-7.145-16-15.98-16h-93.43l28.63-96h96.75c8.836 0 15.98-7.168 15.98-16c0-8.832-7.146-16-15.98-16h-90l25.55-85.2C444.9 32.93 438 19.25 425.1 15.34zM265.5 240.9H188l28.63-96h77.46L265.5 240.9z"/>
  </svg>
);

// Componente personalizado para ícone de carpintaria
const FaCarpentry = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L460.8 13.56c-40.92 23.09-95.85 19.53-132.6-8.781l-21.25-16.28c-4.781-3.657-10.86-5.186-16.78-4.188l-152.2 25.05c-5.922 1.002-11.27 4.188-14.92 8.971L18.06 144.5C6.445 158 6.836 177.9 19.09 190.2l406.8 321.6c15.62 12.34 38.69 9.802 51.06-5.781l52.17-65.52c3.062-3.813 4.844-8.563 5.001-13.56l5.201-162C539.5 243.2 541.9 219.1 501.6 4.186zM461.8 296.9c-8.479 3.062-17.76-1.406-20.84-9.845c-3.062-8.479 1.406-17.76 9.845-20.84c8.447-3.08 17.76 1.406 20.84 9.845C474.7 284.5 470.2 293.8 461.8 296.9zM50.43 162.5l71.43-98.33l122.5-20.13l20.66 15.78c26.26 20.08 58.97 30.52 92.66 30.52c16.53 0 33.13-2.721 49-8.381c-14.22 30.88-37.38 109.4-16.41 187.2c-16.05-14.14-28.03-31.45-35.31-50.73l-10.44-27.7c-3.626-9.579-14.06-14.47-23.6-10.79c-9.595 3.626-14.44 14.04-10.82 23.64l10.44 27.73c11.28 29.66 31.34 55.7 57.66 75.14l-150.2-118.8c-6.656-5.281-7.78-14.91-2.5-21.53c5.281-6.625 14.88-7.781 21.53-2.469l79.66 63.06c7.676-64.81-5.657-140.5-27.21-186l-17.58-13.36c-11.22-8.61-25.27-13.11-39.87-13.11c-2.429 0-4.899 0.127-7.328 0.396l-94.67 15.56c-6.664 1.098-12.61 4.238-17.59 8.834l-44.34 60.93c-4.871 6.688-3.405 16.08 3.312 20.97C36.09 170.7 45.52 169.2 50.43 162.5z"/>
  </svg>
);

export default function CraftingPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar para Wiki
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Sistema de Crafting</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Domine as artes do artesanato e crie equipamentos lendários no Nova Era Shard.
          </p>
        </div>
        
        {/* Introdução */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Visão Geral do Crafting</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              No Nova Era Shard, o artesanato (crafting) é mais do que uma forma de obter equipamentos - é uma profissão completa com sistemas de progressão, receitas exclusivas e itens lendários que só podem ser criados pelas mãos de um mestre artesão.
            </p>
            
            <p>
              O sistema de crafting foi expandido e aprimorado em relação ao Ultima Online tradicional, oferecendo:
            </p>
            
            <ul>
              <li>Novas receitas exclusivas do servidor</li>
              <li>Sistema de qualidade com cinco níveis (Comum, Boa, Excelente, Excepcional e Lendária)</li>
              <li>Recursos especiais que podem ser encontrados apenas em determinadas áreas</li>
              <li>Propriedades únicas baseadas na skill do artesão e nos materiais utilizados</li>
              <li>Possibilidade de criar itens personalizados com efeitos especiais</li>
            </ul>
          </div>
        </div>
        
        {/* Seções de Tipos de Crafting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <FaAnvil className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Blacksmithy</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Forje armas e armaduras de metal com diferentes propriedades.
            </p>
          </div>
          
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <FaTshirt className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Tailoring</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Confeccione roupas, túnicas e armaduras de tecido e couro.
            </p>
          </div>
          
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <FaCarpentry className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Carpentry</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Crie móveis, barcos e itens de madeira com diferentes designs.
            </p>
          </div>
          
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <FaWrench className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Tinkering</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Fabrique ferramentas, trancas e dispositivos mecânicos avançados.
            </p>
          </div>
        </div>
        
        {/* Detalhes do Blacksmithy */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaAnvil className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Blacksmithy</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Blacksmithy é a arte de forjar armas e armaduras de metal. Esta profissão é ideal para jogadores que desejam criar equipamentos poderosos para guerreiros e paladinos.
            </p>
            
            <h3>Como Começar</h3>
            <ol>
              <li>Adquira um martelo de ferreiro com qualquer ferreiro nas cidades principais</li>
              <li>Colete minérios usando a skill Mining (ou compre de outros jogadores)</li>
              <li>Acesse uma forja para transformar os minérios em lingotes</li>
              <li>Use o martelo próximo à forja para abrir o menu de criação</li>
            </ol>
            
            <h3>Materiais Disponíveis</h3>
            <ul>
              <li><strong>Ferro</strong> - Material básico, disponível em áreas próximas a cidades</li>
              <li><strong>Cobre</strong> - Oferece leve resistência a dano elemental</li>
              <li><strong>Bronze</strong> - Mais resistente que ferro, oferece bônus de durabilidade</li>
              <li><strong>Prata</strong> - Efetivo contra criaturas sombrias e mortos-vivos</li>
              <li><strong>Ouro</strong> - Melhora a condução de energia mágica nos equipamentos</li>
              <li><strong>Agapita</strong> - Confere resistência a feitiços de controle mental</li>
              <li><strong>Verite</strong> - Metal raro, oferece resistência a fogo e ácido</li>
              <li><strong>Valorite</strong> - Metal extremamente raro, confere propriedades mágicas superiores</li>
              <li><strong>Adamantium</strong> - Metal lendário, exclusivo do Nova Era Shard</li>
            </ul>
            
            <h3>Itens Criáveis</h3>
            <p>Com Blacksmithy você pode criar:</p>
            <ul>
              <li><strong>Armas de Metal</strong> - Espadas, machados, maças, adagas, lanças</li>
              <li><strong>Armaduras</strong> - Capacetes, peitorais, braçadeiras, luvas, grevas, escudos</li>
              <li><strong>Ferramentas</strong> - Serras, enxadas, machados de lenhador, picaretas</li>
              <li><strong>Partes de Armas</strong> - Componentes para montagem de armas especiais</li>
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Dica:</strong> Ao atingir 90.0 em Blacksmithy, você pode forjar itens com propriedades excepcionais. 
                Com 100.0 e materiais especiais, você pode criar itens lendários com efeitos mágicos incorporados.
              </p>
            </div>
          </div>
        </div>
        
        {/* Detalhes do Tailoring */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaTshirt className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Tailoring</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Tailoring é a arte de criar vestimentas, armaduras leves e acessórios têxteis. Esta profissão é especialmente útil para criar equipamentos para magos, arqueiros e outras classes que preferem mobilidade.
            </p>
            
            <h3>Como Começar</h3>
            <ol>
              <li>Adquira kit de costura e tesouras com qualquer alfaiate nas cidades principais</li>
              <li>Obtenha lã de ovelhas usando a tesoura (ou compre de outros jogadores)</li>
              <li>Use a roda de fiar para transformar lã em fios</li>
              <li>Use o tear para transformar fios em tecido</li>
              <li>Alternativamente, obtenha couro de animais caçados</li>
              <li>Use o kit de costura para abrir o menu de criação</li>
            </ol>
            
            <h3>Materiais Disponíveis</h3>
            <ul>
              <li><strong>Tecido Regular</strong> - Material básico para vestimentas simples</li>
              <li><strong>Tecido Especial</strong> - Usado para vestes de mago e itens especiais</li>
              <li><strong>Couro Regular</strong> - Obtido de animais comuns, para armaduras leves</li>
              <li><strong>Couro Spined</strong> - Oferece resistência física adicional</li>
              <li><strong>Couro Horned</strong> - Confere resistência elemental</li>
              <li><strong>Couro Barbed</strong> - O melhor tipo de couro, com resistências elevadas</li>
              <li><strong>Seda Élfica</strong> - Material raro para itens mágicos</li>
              <li><strong>Seda Dracônica</strong> - Material lendário, exclusivo do Nova Era Shard</li>
            </ul>
            
            <h3>Itens Criáveis</h3>
            <p>Com Tailoring você pode criar:</p>
            <ul>
              <li><strong>Roupas</strong> - Túnicas, camisas, calças, vestidos, capas, chapéus</li>
              <li><strong>Armaduras de Couro</strong> - Capacetes, peitorais, luvas, calças, botas</li>
              <li><strong>Vestes Mágicas</strong> - Roupas com bônus para lançamento de magia</li>
              <li><strong>Bolsas e Mochilas</strong> - Containers com capacidade variada</li>
              <li><strong>Bandeiras e Estandartes</strong> - Decorativos e para guildas</li>
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Dica:</strong> Roupas e armaduras feitas com tecidos e couros especiais podem ter propriedades mágicas
                como resistência a energia ou bônus de mana. Alguns dos melhores equipamentos para magos são criados através de Tailoring.
              </p>
            </div>
          </div>
        </div>
        
        {/* Detalhes do Carpentry */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaCarpentry className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Carpentry</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Carpentry é a arte de criar estruturas, móveis e itens de madeira. Esta profissão é essencial para jogadores que desejam decorar casas ou construir barcos.
            </p>
            
            <h3>Como Começar</h3>
            <ol>
              <li>Adquira uma serra com qualquer carpinteiro nas cidades principais</li>
              <li>Colete toras de madeira usando uma machadinha em árvores (ou compre de outros jogadores)</li>
              <li>Use a serra para transformar toras em tábuas</li>
              <li>Use a serra novamente para abrir o menu de criação</li>
            </ol>
            
            <h3>Materiais Disponíveis</h3>
            <ul>
              <li><strong>Madeira Regular</strong> - Material básico, disponível em florestas comuns</li>
              <li><strong>Madeira de Carvalho</strong> - Mais resistente, para móveis de melhor qualidade</li>
              <li><strong>Madeira de Ash</strong> - Flexível, ideal para arcos e instrumentos</li>
              <li><strong>Madeira de Mogno</strong> - Elegante, para móveis nobres</li>
              <li><strong>Madeira de Cedro</strong> - Resistente à água, ideal para barcos</li>
              <li><strong>Madeira Élfica</strong> - Rara, com propriedades mágicas leves</li>
              <li><strong>Madeira Petrificada</strong> - Material lendário, exclusivo do Nova Era Shard</li>
            </ul>
            
            <h3>Itens Criáveis</h3>
            <p>Com Carpentry você pode criar:</p>
            <ul>
              <li><strong>Móveis</strong> - Mesas, cadeiras, camas, armários, estantes</li>
              <li><strong>Barcos</strong> - Pequenas embarcações até grandes navios</li>
              <li><strong>Armas de Madeira</strong> - Arcos, bastões, cajados</li>
              <li><strong>Escudos de Madeira</strong> - Diferentes tipos e tamanhos</li>
              <li><strong>Instrumentos Musicais</strong> - Alaúdes, harpas, tambores</li>
              <li><strong>Baús</strong> - Para armazenamento com diferentes capacidades</li>
              <li><strong>Portas e Estruturas</strong> - Para construção e decoração de casas</li>
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Dica:</strong> A maior vantagem da carpintaria é a possibilidade de criar móveis para decoração de casas,
                que podem aumentar significativamente o valor de sua propriedade. Além disso, apenas carpinteiros experientes podem construir navios.
              </p>
            </div>
          </div>
        </div>
        
        {/* Detalhes do Tinkering */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaWrench className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Tinkering</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Tinkering é a arte da engenhosidade, permitindo criar ferramentas, dispositivos mecânicos e itens especiais. É uma profissão versátil que produz itens úteis para todas as classes de jogadores.
            </p>
            
            <h3>Como Começar</h3>
            <ol>
              <li>Adquira um kit de ferramentas de um tinker em qualquer cidade principal</li>
              <li>Obtenha lingotes (via blacksmithy) e recursos diversos</li>
              <li>Use o kit de ferramentas para abrir o menu de criação</li>
            </ol>
            
            <h3>Materiais Utilizados</h3>
            <ul>
              <li><strong>Lingotes de Metal</strong> - Ferro, bronze, cobre, prata, ouro</li>
              <li><strong>Madeira</strong> - Para componentes de ferramentas e dispositivos</li>
              <li><strong>Vidro</strong> - Criado a partir de areia, para componentes delicados</li>
              <li><strong>Gemas</strong> - Para dispositivos mágicos e decorativos</li>
              <li><strong>Reagentes</strong> - Para dispositivos alquímicos</li>
              <li><strong>Engrenagens Encantadas</strong> - Material exclusivo do Nova Era Shard</li>
            </ul>
            
            <h3>Itens Criáveis</h3>
            <p>Com Tinkering você pode criar:</p>
            <ul>
              <li><strong>Ferramentas</strong> - Picaretas, martelos, serras, kits de costura</li>
              <li><strong>Chaves e Fechaduras</strong> - Para baús e portas</li>
              <li><strong>Relógios e Bússolas</strong> - Itens de navegação</li>
              <li><strong>Armadilhas</strong> - Diversos tipos, para defesa ou caça</li>
              <li><strong>Itens Especiais</strong> - Monóculos de identificação, detectores de tesouro</li>
              <li><strong>Autômatos</strong> - Pequenos assistentes mecânicos (habilidade avançada)</li>
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Dica:</strong> Tinkering é talvez a mais lucrativa das profissões de artesanato, pois suas ferramentas são necessárias para todas as outras profissões.
                Além disso, fechaduras de alta qualidade e armadilhas sofisticadas são sempre requisitadas por proprietários de casas.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sistema de Qualidade */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Sistema de Qualidade</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              No Nova Era Shard, o sistema de qualidade dos itens produzidos foi expandido significativamente. A qualidade de um item determina sua eficácia, durabilidade e valor.
            </p>
            
            <h3>Níveis de Qualidade</h3>
            <p>Existem cinco níveis de qualidade para itens criados:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 not-prose">
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-medieval text-lg mb-2 text-gray-600 dark:text-gray-400">Comum</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  <strong>Skill:</strong> 0-50<br />
                  <strong>Propriedades:</strong> Básicas<br />
                  <strong>Durabilidade:</strong> Normal<br />
                  <strong>Valor:</strong> Baixo
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-green-200 dark:border-green-900">
                <h3 className="font-medieval text-lg mb-2 text-green-600 dark:text-green-400">Boa</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  <strong>Skill:</strong> 50-70<br />
                  <strong>Propriedades:</strong> Melhoradas<br />
                  <strong>Durabilidade:</strong> +20%<br />
                  <strong>Valor:</strong> Médio
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-blue-200 dark:border-blue-900">
                <h3 className="font-medieval text-lg mb-2 text-blue-600 dark:text-blue-400">Excelente</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  <strong>Skill:</strong> 70-90<br />
                  <strong>Propriedades:</strong> Superiores<br />
                  <strong>Durabilidade:</strong> +50%<br />
                  <strong>Valor:</strong> Alto
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-purple-200 dark:border-purple-900">
                <h3 className="font-medieval text-lg mb-2 text-purple-600 dark:text-purple-400">Excepcional</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  <strong>Skill:</strong> 90-100<br />
                  <strong>Propriedades:</strong> Raras<br />
                  <strong>Durabilidade:</strong> +100%<br />
                  <strong>Valor:</strong> Muito Alto
                </p>
              </div>
              
              <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-yellow-200 dark:border-yellow-900">
                <h3 className="font-medieval text-lg mb-2 text-yellow-600 dark:text-yellow-400">Lendária</h3>
                <p className="text-sm text-uo-darkwood/80 dark:text-uo-mist/80">
                  <strong>Skill:</strong> 100 + materiais especiais<br />
                  <strong>Propriedades:</strong> Únicas<br />
                  <strong>Durabilidade:</strong> +200%<br />
                  <strong>Valor:</strong> Inestimável
                </p>
              </div>
            </div>
            
            <h3 className="mt-6">Fatores que Influenciam a Qualidade</h3>
            <ul>
              <li><strong>Nível da Skill</strong> - Quanto maior sua habilidade, maior a chance de criar itens de qualidade superior</li>
              <li><strong>Materiais Utilizados</strong> - Materiais raros e especiais aumentam a qualidade final</li>
              <li><strong>Ferramentas</strong> - Ferramentas mágicas ou de qualidade excepcional melhoram o resultado</li>
              <li><strong>Sorte</strong> - Existe um elemento aleatório que pode surpreender até mesmo os mestres artesãos</li>
              <li><strong>Fases da Lua</strong> - Em noites de lua cheia, há uma chance maior de criar itens excepcionais</li>
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md my-4">
              <p className="text-sm">
                <strong>Nota:</strong> Itens lendários são extremamente raros e requerem não apenas maestria na profissão,
                mas também materiais especiais que só podem ser encontrados em dungeons de alto nível ou obtidos através de eventos especiais.
              </p>
            </div>
          </div>
        </div>
        
        {/* Dicas e Truques para Artesãos */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Dicas e Truques para Artesãos</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              Domine o sistema de crafting com estas dicas essenciais:
            </p>
            
            <ul>
              <li>
                <strong>Especialize-se</strong> - Em vez de tentar dominar todas as profissões, foque em uma ou duas para maximizar sua eficiência.
              </li>
              <li>
                <strong>Cultive Relacionamentos</strong> - Forme parcerias com jogadores que possuem skills complementares às suas. Por exemplo, ferreiros precisam de mineiros.
              </li>
              <li>
                <strong>Conheça os Materiais</strong> - Investigue onde encontrar os materiais mais raros. Muitas vezes, eles estão em áreas perigosas ou dungeons específicas.
              </li>
              <li>
                <strong>Colete Receitas</strong> - Existem receitas especiais espalhadas pelo mundo que permitem criar itens únicos. Colecione-as!
              </li>
              <li>
                <strong>Pratique com Materiais Comuns</strong> - Até dominar uma profissão, use materiais mais baratos para praticar e evitar desperdício.
              </li>
              <li>
                <strong>Utilize Bônus</strong> - Algumas poções, ferramentas especiais e eventos oferecem bônus temporários de crafting.
              </li>
              <li>
                <strong>Melhore suas Ferramentas</strong> - Ferramentas de qualidade excepcional ou encantadas proporcionam melhores resultados.
              </li>
              <li>
                <strong>Observe a Fase da Lua</strong> - Em noites de lua cheia, suas chances de criar itens excepcionais aumentam.
              </li>
              <li>
                <strong>Personalize suas Criações</strong> - Itens podem ser nomeados e personalizados, o que aumenta seu valor entre colecionadores.
              </li>
            </ul>
            
            <h3>Locais Especiais para Artesãos</h3>
            <p>
              O Nova Era Shard possui locais especiais que oferecem bônus para crafting:
            </p>
            <ul>
              <li><strong>Forjas da Guilda dos Ferreiros</strong> - +10% de chance de criar itens excepcionais</li>
              <li><strong>Ateliê da Guilda dos Alfaiates</strong> - +15% de velocidade ao criar roupas e armaduras</li>
              <li><strong>Oficina Real de Britain</strong> - Acesso a receitas exclusivas (requer reputação)</li>
              <li><strong>Farol do Artesão</strong> - Estação móvel que pode ser colocada temporariamente em qualquer lugar e oferece bônus para todas as profissões</li>
            </ul>
          </div>
        </div>
        
        {/* Perguntas Frequentes */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Perguntas Frequentes</h2>
          
          <div className="space-y-4">
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Como posso subir minha skill de crafting rapidamente?</h3>
              <div className="text-uo-darkwood/80 dark:text-uo-mist/80">
                <p>A maneira mais eficiente é criar itens que usam a menor quantidade de recursos possível. Por exemplo, adagas para blacksmithy ou bandanas para tailoring. A skill aumenta com base no número de itens criados, não na qualidade ou complexidade deles.</p>
              </div>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">É possível reparar itens danificados?</h3>
              <div className="text-uo-darkwood/80 dark:text-uo-mist/80">
                <p>Sim! Você pode reparar itens usando a skill correspondente à sua criação (por exemplo, Blacksmithy para armas de metal). A qualidade do reparo depende da sua skill e pode restaurar de 20% a 100% da durabilidade original. Itens excepcionais ou lendários exigem um nível mínimo de skill para serem reparados.</p>
              </div>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Como obtenho receitas especiais?</h3>
              <div className="text-uo-darkwood/80 dark:text-uo-mist/80">
                <p>Receitas especiais podem ser encontradas de diversas formas: como recompensas de quests, compradas de NPCs especiais (geralmente com reputação alta), em baús de tesouros dentro de dungeons, ou através de eventos sazonais. Algumas receitas são trocadas entre jogadores e podem ser bastante valiosas.</p>
              </div>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Posso encantar itens que eu criar?</h3>
              <div className="text-uo-darkwood/80 dark:text-uo-mist/80">
                <p>Sim, mas isso requer um processo separado. Você pode criar o item base com sua profissão de crafting e depois utilizar a skill de Inscribe ou trabalhar com um mago para adicionar propriedades mágicas. Itens de qualidade excepcional têm maior chance de aceitar encantamentos poderosos.</p>
              </div>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Vale a pena ter mais de uma profissão de crafting?</h3>
              <div className="text-uo-darkwood/80 dark:text-uo-mist/80">
                <p>Isso depende do seu estilo de jogo. Devido ao limite de 700 pontos de skill total, ter múltiplas profissões de crafting significa comprometer outras habilidades. No entanto, algumas combinações funcionam bem juntas, como Blacksmithy e Mining, ou Tailoring e Tinkering. Muitos jogadores optam por ter um personagem dedicado apenas ao crafting.</p>
              </div>
            </div>
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