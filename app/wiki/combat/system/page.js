import Link from 'next/link';
import { FaBook, FaArrowLeft, FaShieldAlt, FaRunning, FaUserAlt, FaSkull, FaQuestionCircle } from 'react-icons/fa';
import { CustomSwordIcon, CustomMagicIcon } from '../../../components/icons/CustomIcons';

export default function CombatSystemPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link href="/wiki" className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar para Wiki
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Sistema de Combate</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Guia completo sobre o sistema de combate do Nova Era Shard.
          </p>
        </div>
        
        {/* Introdução */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Visão Geral do Combate</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              O sistema de combate do Nova Era Shard combina elementos clássicos do Ultima Online com melhorias modernas para proporcionar uma experiência de jogo balanceada e gratificante. O combate é baseado em um sistema de turnos em tempo real, onde os ataques são calculados levando em consideração uma série de fatores, incluindo habilidades, equipamentos e táticas.
            </p>
            
            <p>
              Existem três principais estilos de combate no Nova Era Shard:
            </p>
            
            <ul>
              <li><strong>Combate Físico</strong> - Utilizando armas corpo-a-corpo ou à distância</li>
              <li><strong>Combate Mágico</strong> - Utilizando magias e feitiços para causar dano ou apoiar aliados</li>
              <li><strong>Combate Híbrido</strong> - Combinando elementos físicos e mágicos para maior versatilidade</li>
            </ul>
          </div>
        </div>
        
        {/* Seções de Tipos de Combate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <CustomSwordIcon className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Combate Físico</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Domine as artes do combate com armas e escudos.
            </p>
          </div>
          
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <CustomMagicIcon className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Magia</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Domine as forças arcanas para derrotar seus inimigos.
            </p>
          </div>
          
          <div className="card-medieval flex flex-col items-center text-center p-6">
            <FaShieldAlt className="h-10 w-10 mb-3 text-uo-crimson dark:text-uo-gold" />
            <h3 className="font-medieval text-xl mb-2">Defesa</h3>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
              Aprenda a se proteger e sobreviver no campo de batalha.
            </p>
          </div>
        </div>
        
        {/* Detalhes do Combate Físico */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <CustomSwordIcon className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Combate Físico</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h3>Mecânicas Básicas</h3>
            <p>
              O combate físico no Nova Era Shard é baseado em várias habilidades e estatísticas:
            </p>
            
            <ul>
              <li><strong>Força (STR)</strong> - Aumenta o dano causado com armas corpo-a-corpo e afeta a capacidade de carga</li>
              <li><strong>Destreza (DEX)</strong> - Afeta a precisão dos ataques, velocidade de ataque e chance de esquiva</li>
              <li><strong>Armas de Combate</strong> - Habilidade que melhora a eficiência com armas específicas</li>
              <li><strong>Táticas</strong> - Aumenta o dano causado por armas e a eficácia em combate</li>
              <li><strong>Anatomia</strong> - Aumenta a chance de acertos críticos</li>
            </ul>
            
            <h3>Tipos de Armas</h3>
            <p>
              O Nova Era Shard oferece uma grande variedade de armas, cada uma com propriedades únicas:
            </p>
            
            <ul>
              <li><strong>Espadas</strong> - Boa relação entre dano e velocidade</li>
              <li><strong>Machados</strong> - Alto dano, mas velocidade reduzida</li>
              <li><strong>Maças</strong> - Efetivas contra armaduras pesadas</li>
              <li><strong>Adagas</strong> - Rápidas e com chance de sangramento</li>
              <li><strong>Lanças</strong> - Maior alcance em combate corpo-a-corpo</li>
              <li><strong>Arcos e Bestas</strong> - Permitem ataques à distância</li>
            </ul>
            
            <h3>Habilidades Especiais</h3>
            <p>
              Ao usar armas, você pode ativar habilidades especiais para dar vantagem em combate:
            </p>
            
            <ul>
              <li><strong>Ataque Especial</strong> - Um golpe poderoso que causa dano adicional (Tecla: S)</li>
              <li><strong>Golpe Paralisante</strong> - Chance de paralisar temporariamente o alvo (Tecla: P)</li>
              <li><strong>Defesa Ativa</strong> - Aumenta temporariamente a defesa à custa do dano (Tecla: D)</li>
              <li><strong>Golpe Múltiplo</strong> - Ataque vários inimigos ao redor com dano reduzido (Tecla: M)</li>
            </ul>
            
            <p>
              Estas habilidades consomem estamina e têm tempo de recarga. A eficiência delas depende da sua habilidade com o tipo de arma utilizado.
            </p>
          </div>
        </div>
        
        {/* Detalhes do Combate Mágico */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <CustomMagicIcon className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Combate Mágico</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h3>Sistema de Magia</h3>
            <p>
              A magia no Nova Era Shard é dividida em oito escolas:
            </p>
            
            <ul>
              <li><strong>Magia de Fogo</strong> - Focada em causar dano com elemento fogo</li>
              <li><strong>Magia de Gelo</strong> - Focada em diminuir a velocidade e causar dano</li>
              <li><strong>Magia de Raio</strong> - Alta potência de dano e chance de atordoamento</li>
              <li><strong>Magia de Veneno</strong> - Dano ao longo do tempo e enfraquecimento</li>
              <li><strong>Magia de Cura</strong> - Restauração de vida e remoção de estados negativos</li>
              <li><strong>Magia de Proteção</strong> - Escudos mágicos e resistências</li>
              <li><strong>Magia de Invocação</strong> - Convocação de criaturas e elementais</li>
              <li><strong>Necromancia</strong> - Manipulação da morte e energia negativa</li>
            </ul>
            
            <h3>Lançamento de Magias</h3>
            <p>
              Para lançar magias, você precisa:
            </p>
            
            <ol>
              <li>Possuir um grimório com a magia desejada ou memorizar a magia</li>
              <li>Ter os reagentes necessários em seu inventário (a menos que utilize um foco mágico)</li>
              <li>Possuir mana suficiente para o custo da magia</li>
              <li>Selecionar a magia e depois o alvo (ou área) para o efeito</li>
            </ol>
            
            <h3>Tipos de Magias Ofensivas</h3>
            <p>
              As magias ofensivas variam em efeito e potência:
            </p>
            
            <ul>
              <li><strong>Magias de Dano Direto</strong> - Causam dano imediato ao alvo (ex: Bola de Fogo, Relâmpago)</li>
              <li><strong>Magias de Área</strong> - Afetam múltiplos alvos em uma área (ex: Tempestade de Fogo)</li>
              <li><strong>Magias de Dano Contínuo</strong> - Causam dano ao longo do tempo (ex: Envenenamento, Chamas Contínuas)</li>
              <li><strong>Magias de Controle</strong> - Limitam as ações do oponente (ex: Paralisia, Confusão)</li>
            </ul>
            
            <h3>Poções e Pergaminhos</h3>
            <p>
              Além das magias lançadas diretamente, você pode usar:
            </p>
            
            <ul>
              <li><strong>Poções</strong> - Efeitos instantâneos, como cura, mana ou força temporária</li>
              <li><strong>Pergaminhos</strong> - Magia de uso único que não consome mana, apenas o pergaminho</li>
              <li><strong>Itens Encantados</strong> - Podem armazenar cargas de magias para uso posterior</li>
            </ul>
          </div>
        </div>
        
        {/* Defesa e Sobrevivência */}
        <div className="card-medieval mb-8">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
            <h2 className="font-medieval text-2xl">Defesa e Sobrevivência</h2>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h3>Sistemas de Proteção</h3>
            <p>
              Sua capacidade de sobreviver em combate depende de vários fatores:
            </p>
            
            <ul>
              <li><strong>Pontos de Vida (HP)</strong> - Determinados principalmente por sua Força</li>
              <li><strong>Armadura</strong> - Reduz o dano físico recebido</li>
              <li><strong>Resistência Mágica</strong> - Reduz o dano mágico recebido</li>
              <li><strong>Escudo</strong> - Oferece uma chance de bloquear ataques completamente</li>
              <li><strong>Esquiva</strong> - Chance de evitar completamente um ataque</li>
            </ul>
            
            <h3>Tipos de Armaduras</h3>
            <p>
              Existem diferentes tipos de armadura, cada uma com vantagens e desvantagens:
            </p>
            
            <ul>
              <li><strong>Armaduras Leves (Couro)</strong> - Baixa proteção, mas não prejudica a movimentação ou consumo de mana</li>
              <li><strong>Armaduras Médias (Anéis)</strong> - Proteção média, leve penalidade de movimentação</li>
              <li><strong>Armaduras Pesadas (Placas)</strong> - Alta proteção, mas reduz a velocidade de movimento e aumenta o consumo de mana</li>
              <li><strong>Vestes Mágicas</strong> - Baixa proteção física, mas bônus em resistência mágica e regeneração de mana</li>
            </ul>
            
            <h3>Estratégias de Fuga</h3>
            <p>
              Quando a situação fica crítica, você pode:
            </p>
            
            <ul>
              <li><strong>Portal Mágico</strong> - Magos podem conjurar portais para cidades seguras</li>
              <li><strong>Pergaminhos de Recall</strong> - Teleportam instantaneamente para um local marcado</li>
              <li><strong>Poções de Invisibilidade</strong> - Permitem escapar sem ser visto</li>
              <li><strong>Bandagem</strong> - Cura ferimentos quando fora de combate</li>
            </ul>
            
            <h3>Morte e Ressurreição</h3>
            <p>
              Quando você morre no Nova Era Shard:
            </p>
            
            <ul>
              <li>Seu corpo permanece no local com todos os seus itens</li>
              <li>Você se torna um fantasma e precisa encontrar um curandeiro para ressuscitar</li>
              <li>É possível recuperar seus itens voltando ao local da morte</li>
              <li>Há uma pequena penalidade temporária de estatísticas após a morte</li>
            </ul>
          </div>
        </div>
        
        {/* PvP vs PvE */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">PvP vs PvE</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              As mecânicas de combate do Nova Era Shard variam ligeiramente entre combate PvP (jogador contra jogador) e PvE (jogador contra ambiente):
            </p>
            
            <h3>Combate PvE</h3>
            <ul>
              <li>Monstros têm comportamentos e habilidades específicas</li>
              <li>Algumas criaturas são imunes a certos tipos de dano</li>
              <li>Monstros mais fortes podem ter ataques especiais e habilidades únicas</li>
              <li>A dificuldade escala de acordo com a zona (mais perigoso longe das cidades)</li>
            </ul>
            
            <h3>Combate PvP</h3>
            <ul>
              <li>Balanceamento mais rigoroso de habilidades e dano</li>
              <li>Sistema de "bandido" para jogadores que atacam inocentes</li>
              <li>Zonas seguras onde o PvP é proibido (cidades e arredores)</li>
              <li>Zonas de facção onde batalhas PvP são incentivadas</li>
              <li>Torneios organizados com regras específicas</li>
            </ul>
          </div>
        </div>
        
        {/* Dicas de Combate */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Dicas e Táticas Avançadas</h2>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <ul>
              <li><strong>Sempre tenha poções de cura</strong> - Elas podem salvar sua vida em momentos críticos</li>
              <li><strong>Adapte seu equipamento</strong> - Utilize armaduras e armas apropriadas para diferentes situações</li>
              <li><strong>Conheça seu inimigo</strong> - Aprenda as fraquezas das criaturas que você enfrenta</li>
              <li><strong>Trabalhe em equipe</strong> - Grupos bem coordenados são muito mais eficientes</li>
              <li><strong>Pratique combos</strong> - Combine habilidades e magias para maximizar a eficiência</li>
              <li><strong>Mantenha distância</strong> - Se você é um mago ou arqueiro, evite o combate corpo-a-corpo</li>
              <li><strong>Use o terreno</strong> - Posicione-se estrategicamente no campo de batalha</li>
            </ul>
          </div>
        </div>
        
        {/* Vídeos e Tutoriais */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Vídeos e Tutoriais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2">Tutorial de Combate Básico</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-uo-darkwood/60 dark:text-uo-mist/60">Vídeo Tutorial</span>
              </div>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2">Guia de Magia Avançada</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-uo-darkwood/60 dark:text-uo-mist/60">Vídeo Tutorial</span>
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