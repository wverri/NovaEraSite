'use client';

import Link from 'next/link';
import { FaDownload, FaWindows, FaApple, FaLinux, FaQuestionCircle, FaArrowLeft, FaScroll, FaTools, FaServer, FaLaptop } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DownloadPage() {
  // Variantes de animação para elementos da página
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container-uo py-12 relative min-h-screen">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-40 left-10 w-64 h-64 hero-decoration opacity-10 z-0"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 hero-decoration opacity-10 z-0" style={{ transform: 'rotate(180deg)' }}></div>
      
      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <Link href="/" className="inline-flex items-center text-uo-crimson dark:text-uo-gold hover:underline mb-6 group">
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> 
            Voltar para a página inicial
          </Link>
          
          <div className="mb-4">
            <FaScroll className="h-16 w-16 mx-auto text-uo-crimson dark:text-uo-gold mb-4" />
          </div>
          
          <h1 className="title-uo mb-4">Download</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Baixe tudo o que você precisa para começar sua jornada no Nova Era Shard.
          </p>
        </motion.div>
        
        {/* Cliente UO */}
        <motion.div 
          className="card-medieval mb-8 relative overflow-hidden"
          variants={itemVariants}
        >
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold flex items-center">
            <FaDownload className="mr-2" /> Cliente Ultima Online
          </h2>
          
          <p className="mb-6 text-uo-darkwood/80 dark:text-uo-mist/80">
            Para jogar no Nova Era Shard você precisará do cliente oficial do Ultima Online. Escolha seu sistema operacional abaixo:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.a 
              href="/downloads/uo-client-windows.zip" 
              className="flex flex-col items-center p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors hover:shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <FaWindows className="h-12 w-12 mb-2 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-lg mb-1">Windows</h3>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60 mb-2">1.2 GB</span>
              <span className="btn-primary text-sm py-1 px-3 flex items-center gap-1">
                <FaDownload className="h-4 w-4" /> Download
              </span>
            </motion.a>
            
            <motion.a 
              href="/downloads/uo-client-mac.zip" 
              className="flex flex-col items-center p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors hover:shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <FaApple className="h-12 w-12 mb-2 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-lg mb-1">Mac OS</h3>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60 mb-2">1.3 GB</span>
              <span className="btn-primary text-sm py-1 px-3 flex items-center gap-1">
                <FaDownload className="h-4 w-4" /> Download
              </span>
            </motion.a>
            
            <motion.a 
              href="/downloads/uo-client-linux.zip" 
              className="flex flex-col items-center p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:bg-uo-crimson/10 dark:hover:bg-uo-gold/10 transition-colors hover:shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <FaLinux className="h-12 w-12 mb-2 text-uo-crimson dark:text-uo-gold" />
              <h3 className="font-medieval text-lg mb-1">Linux</h3>
              <span className="text-sm text-uo-darkwood/60 dark:text-uo-mist/60 mb-2">1.1 GB</span>
              <span className="btn-primary text-sm py-1 px-3 flex items-center gap-1">
                <FaDownload className="h-4 w-4" /> Download
              </span>
            </motion.a>
          </div>
        </motion.div>
        
        {/* Patch */}
        <motion.div 
          className="card-medieval mb-8 relative overflow-hidden"
          variants={itemVariants}
        >
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold flex items-center">
            <FaServer className="mr-2" /> Patch Nova Era Shard
          </h2>
          
          <p className="mb-6 text-uo-darkwood/80 dark:text-uo-mist/80">
            Depois de instalar o cliente, você precisará do patch específico do Nova Era Shard para conectar-se ao nosso servidor.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <motion.a 
              href="/downloads/patch-nova-era.zip" 
              className="btn-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaDownload /> Baixar Patch (350 MB)
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/wiki/installation-guide"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <FaQuestionCircle /> Guia de Instalação
              </Link>
            </motion.div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md text-sm border-l-4 border-yellow-400">
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80">
              <strong>Nota:</strong> Após baixar o patch, extraia o conteúdo para a pasta do seu cliente Ultima Online e execute o arquivo "NovaEraShard.exe" para jogar.
            </p>
          </div>
        </motion.div>
        
        {/* Ferramentas Utilitárias */}
        <motion.div 
          className="card-medieval mb-8 relative overflow-hidden"
          variants={itemVariants}
        >
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold flex items-center">
            <FaTools className="mr-2" /> Ferramentas Utilitárias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:shadow-md transition-all"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>
            
            <motion.div 
              className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg border border-uo-darkwood/10 dark:border-uo-gold/10 hover:shadow-md transition-all"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>
          </div>
        </motion.div>
        
        {/* Requisitos do Sistema */}
        <motion.div 
          className="card-medieval mb-8 relative overflow-hidden"
          variants={itemVariants}
        >
          <h2 className="font-medieval text-2xl mb-4 text-uo-crimson dark:text-uo-gold flex items-center">
            <FaLaptop className="mr-2" /> Requisitos do Sistema
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/30 dark:bg-gray-900/30 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Requisitos Mínimos</h3>
              <ul className="space-y-1 text-uo-darkwood/80 dark:text-uo-mist/80">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Sistema Operacional: Windows 7/8/10/11, MacOS 10.12+, Linux</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Processador: Dual Core 2GHz ou superior</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Memória: 2GB RAM</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Vídeo: Placa de vídeo com 256MB</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Armazenamento: 2GB de espaço livre</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Conexão: Internet banda larga</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/30 dark:bg-gray-900/30 p-4 rounded-lg">
              <h3 className="font-medieval text-lg mb-2 text-uo-crimson dark:text-uo-gold">Requisitos Recomendados</h3>
              <ul className="space-y-1 text-uo-darkwood/80 dark:text-uo-mist/80">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Sistema Operacional: Windows 10/11, MacOS 11+, Linux</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Processador: Quad Core 2.5GHz ou superior</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Memória: 4GB RAM</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Vídeo: Placa de vídeo com 512MB</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Armazenamento: 5GB de espaço livre (SSD recomendado)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-uo-crimson dark:bg-uo-gold mt-1.5 mr-2"></span>
                  <span>Conexão: Internet banda larga 10Mbps+</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Suporte */}
        <motion.div 
          className="card-parchment p-6 rounded-lg text-center"
          variants={itemVariants}
        >
          <h2 className="font-medieval text-xl mb-2 text-uo-crimson dark:text-uo-gold">Precisa de ajuda com a instalação?</h2>
          <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
            Entre em contato com nosso suporte ou visite nosso Discord para assistência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/support" className="btn-primary">
                Contatar Suporte
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a 
                href="https://discord.gg/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Discord
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center"
          variants={itemVariants}
        >
          <Link href="/" className="text-uo-crimson dark:text-uo-gold hover:underline inline-flex items-center group">
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> 
            Voltar para a página inicial
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}