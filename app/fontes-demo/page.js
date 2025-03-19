'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function FontesDemo() {
  const [fontSize, setFontSize] = useState(28);
  
  const fontes = [
    { nome: 'MedievalSharp (Original)', classe: 'font-medieval' },
    { nome: 'Cinzel', classe: 'font-cinzel' },
    { nome: 'Almendra', classe: 'font-almendra' },
    { nome: 'Metamorphous', classe: 'font-metamorphous' },
    { nome: 'Pirata One', classe: 'font-pirata' },
    { nome: 'Berkshire Swash', classe: 'font-berkshire' }
  ];
  
  const textos = [
    'Nova Era Shard - Servidor de Ultima Online',
    'Britannia Aguarda Sua Aventura',
    'Reino Encantado dos Valorosos Guerreiros',
    'Dragões, Magia e Tesouros',
    'Masmorras Profundas, Monstros Temíveis'
  ];

  const aumentarFonte = () => {
    setFontSize(prev => Math.min(prev + 2, 72));
  };

  const diminuirFonte = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-uo-crimson dark:text-uo-gold hover:underline mb-6 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> 
          Voltar para a página inicial
        </Link>
        
        <div className="card-medieval mb-8">
          <h1 className="font-medieval text-3xl md:text-4xl mb-6 text-uo-crimson dark:text-uo-gold">Demonstração de Fontes Medievais</h1>
          
          <p className="mb-6 text-uo-darkwood/80 dark:text-uo-mist/80">
            Esta página exibe todas as fontes medievais disponíveis no projeto para que você possa escolher a mais adequada para seu site.
          </p>
          
          <div className="flex items-center mb-6">
            <span className="mr-4">Tamanho da fonte: {fontSize}px</span>
            <button 
              onClick={diminuirFonte}
              className="bg-uo-darkwood/10 dark:bg-uo-gold/10 px-4 py-1 rounded-l-md hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/20"
            >
              -
            </button>
            <button 
              onClick={aumentarFonte}
              className="bg-uo-darkwood/10 dark:bg-uo-gold/10 px-4 py-1 rounded-r-md hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/20"
            >
              +
            </button>
          </div>
          
          {fontes.map((fonte, idx) => (
            <div key={idx} className="mb-10 pb-10 border-b border-uo-darkwood/10 dark:border-uo-gold/10 last:border-0">
              <h2 className="text-xl mb-4 text-uo-crimson dark:text-uo-gold">{fonte.nome}</h2>
              
              <div className="bg-white/50 dark:bg-gray-900/50 p-6 rounded-lg">
                {textos.map((texto, textIdx) => (
                  <div key={textIdx} className="mb-4 last:mb-0">
                    <div 
                      className={`${fonte.classe} text-uo-crimson dark:text-uo-gold mb-1 leading-normal`}
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {texto}
                    </div>
                    <div className="text-xs text-uo-darkwood/60 dark:text-uo-mist/60">
                      Classe CSS: <code className="bg-uo-darkwood/10 dark:bg-uo-gold/10 px-1 py-0.5 rounded">{fonte.classe}</code>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-sm bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md">
                <p className="font-bold mb-2">Para usar em seus componentes:</p>
                <code className="block bg-white/50 dark:bg-gray-900/50 p-2 rounded">
                  {'<h1 className="' + fonte.classe + ' text-2xl">Seu Texto Aqui</h1>'}
                </code>
              </div>
            </div>
          ))}
          
          <div className="mt-8 p-4 bg-uo-crimson/5 dark:bg-uo-gold/5 rounded-lg">
            <h3 className="font-medieval text-xl mb-2 text-uo-crimson dark:text-uo-gold">Para aplicar a troca globalmente:</h3>
            <p className="mb-4 text-uo-darkwood/80 dark:text-uo-mist/80">
              Para alterar a fonte padrão do sistema, é necessário modificar o arquivo <code className="bg-uo-darkwood/10 dark:bg-uo-gold/10 px-1 py-0.5 rounded">tailwind.config.js</code> e substituir a fonte na classe <code className="bg-uo-darkwood/10 dark:bg-uo-gold/10 px-1 py-0.5 rounded">medieval</code>.
            </p>
            <pre className="bg-white/50 dark:bg-gray-900/50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`fontFamily: {
  medieval: ['NomeDaSuaFonteEscolhida', 'cursive'],
  // outras fontes...
},`}</code>
            </pre>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="btn-primary">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 