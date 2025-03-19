import Link from 'next/link';
import { FaDownload, FaWindows, FaApple, FaLinux, FaQuestionCircle } from 'react-icons/fa';

export default function DownloadPage() {
  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Download</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Baixe tudo o que você precisa para começar sua jornada no Nova Era Shard.
          </p>
        </div>
        
        {/* Cliente UO */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Cliente Ultima Online</h2>
          
          <p className="mb-6 text-uo-darkwood/80 dark:text-uo-mist/80">
            Para jogar no Nova Era Shard você precisará do cliente oficial do Ultima Online. Escolha seu sistema operacional abaixo:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="/downloads/uo-client-windows.zip" 
              className="flex flex-col items-center p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors"
            >
              <FaWindows className="h-12 w-12 mb-2 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-lg mb-1">Windows</h3>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60 mb-2">1.2 GB</span>
              <span className="btn-primary text-sm py-1 px-3 flex items-center gap-1">
                <FaDownload className="h-4 w-4" /> Download
              </span>
            </a>
            
            <a 
              href="/downloads/uo-client-mac.zip" 
              className="flex flex-col items-center p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors"
            >
              <FaApple className="h-12 w-12 mb-2 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-lg mb-1">Mac OS</h3>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60 mb-2">1.3 GB</span>
              <span className="btn-primary text-sm py-1 px-3 flex items-center gap-1">
                <FaDownload className="h-4 w-4" /> Download
              </span>
            </a>
            
            <a 
              href="/downloads/uo-client-linux.zip" 
              className="flex flex-col items-center p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors"
            >
              <FaLinux className="h-12 w-12 mb-2 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-lg mb-1">Linux</h3>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60 mb-2">1.1 GB</span>
              <span className="btn-primary text-sm py-1 px-3 flex items-center gap-1">
                <FaDownload className="h-4 w-4" /> Download
              </span>
            </a>
          </div>
        </div>
        
        {/* Patch */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Patch Nova Era Shard</h2>
          
          <p className="mb-6 text-uo-darkwood/80 dark:text-uo-mist/80">
            Depois de instalar o cliente, você precisará do patch específico do Nova Era Shard para conectar-se ao nosso servidor.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a 
              href="/downloads/patch-nova-era.zip" 
              className="btn-primary flex items-center justify-center gap-2"
            >
              <FaDownload /> Baixar Patch (350 MB)
            </a>
            
            <Link
              href="/wiki/installation-guide"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FaQuestionCircle /> Guia de Instalação
            </Link>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md text-sm">
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
              <strong>Nota:</strong> Após baixar o patch, extraia o conteúdo para a pasta do seu cliente Ultima Online e execute o arquivo "NovaEraShard.exe" para jogar.
            </p>
          </div>
        </div>
        
        {/* Ferramentas Utilitárias */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Ferramentas Utilitárias</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10">
              <h3 className="font-medieval text-xl mb-2">UOAssist</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm mb-3">
                Assistente de jogo com várias ferramentas úteis para melhorar sua experiência.
              </p>
              <a 
                href="/downloads/uoassist.zip" 
                className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center gap-1"
              >
                <FaDownload className="h-4 w-4" /> Baixar (15 MB)
              </a>
            </div>
            
            <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10">
              <h3 className="font-medieval text-xl mb-2">UOSteam</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm mb-3">
                Ferramenta para macros e automação de tarefas repetitivas.
              </p>
              <a 
                href="/downloads/uosteam.zip" 
                className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center gap-1"
              >
                <FaDownload className="h-4 w-4" /> Baixar (22 MB)
              </a>
            </div>
          </div>
        </div>
        
        {/* Requisitos do Sistema */}
        <div className="card-medieval mb-8">
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold">Requisitos do Sistema</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medieval text-lg mb-2">Requisitos Mínimos</h3>
              <ul className="space-y-1 text-uo-darkwood/80 dark:text-uo-mist/80">
                <li>• Sistema Operacional: Windows 7/8/10/11, MacOS 10.12+, Linux</li>
                <li>• Processador: Dual Core 2GHz ou superior</li>
                <li>• Memória: 2GB RAM</li>
                <li>• Vídeo: Placa de vídeo com 256MB</li>
                <li>• Armazenamento: 2GB de espaço livre</li>
                <li>• Conexão: Internet banda larga</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medieval text-lg mb-2">Requisitos Recomendados</h3>
              <ul className="space-y-1 text-uo-darkwood/80 dark:text-uo-mist/80">
                <li>• Sistema Operacional: Windows 10/11, MacOS 11+, Linux</li>
                <li>• Processador: Quad Core 2.5GHz ou superior</li>
                <li>• Memória: 4GB RAM</li>
                <li>• Vídeo: Placa de vídeo com 512MB</li>
                <li>• Armazenamento: 5GB de espaço livre (SSD recomendado)</li>
                <li>• Conexão: Internet banda larga 10Mbps+</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Suporte */}
        <div className="bg-uo-crimson/10 dark:bg-uo-gold/10 p-6 rounded-lg text-center">
          <h2 className="font-medieval text-xl mb-2">Precisa de ajuda com a instalação?</h2>
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
            Entre em contato com nosso suporte ou visite nosso Discord para assistência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="btn-primary">
              Contatar Suporte
            </Link>
            <a 
              href="https://discord.gg/novaerashard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Discord
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}