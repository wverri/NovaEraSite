'use client';

import Link from 'next/link';
import { FaUserPlus, FaDownload, FaBook, FaDiscord, FaCalendarAlt, FaShieldAlt, FaDragon, FaGem, FaStar } from 'react-icons/fa';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between bg-black">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('/images/uo-background.jpg')",
          filter: "brightness(0.4)"
        }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-uo-darkwood/20 to-uo-darkwood/80 dark:from-uo-midnight/20 dark:to-uo-midnight/80"></div>
        
        {/* Ornamentos decorativos */}
        <div className="absolute top-20 left-10 w-64 h-64 hero-decoration opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 hero-decoration opacity-20" style={{ transform: 'rotate(180deg)' }}></div>
        
        <div className="container-uo flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-center py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h1 className="font-medieval text-5xl sm:text-7xl lg:text-8xl text-uo-gold mb-6 drop-shadow-lg glow-uo">
                Nova Era Shard
              </h1>
              <p className="font-medieval text-xl md:text-2xl text-white max-w-3xl mx-auto px-4">
                Uma Nova Era em Ultima Online começa agora. Descubra o perfeito equilíbrio 
                entre o clássico e o moderno.
              </p>
            </motion.div>
            
            <div className="corner-decorated p-8 flex flex-col sm:flex-row gap-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full sm:w-auto"
              >
                <Link href="/account/register" className="btn-primary text-base sm:text-lg w-full sm:px-10 py-3 flex items-center justify-center gap-2">
                  <FaUserPlus className="h-4 w-4" /> Criar Conta
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full sm:w-auto"
              >
                <Link href="/download" className="btn-secondary text-base sm:text-lg w-full sm:px-10 py-3 flex items-center justify-center gap-2">
                  <FaDownload className="h-4 w-4" /> Download
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-4 mb-8">
              <Link href="/wiki/novojogador" className="text-white hover:text-uo-gold transition-colors duration-300 font-medieval inline-flex items-center justify-center gap-2">
                <FaBook className="h-4 w-4" /> Guia para Novos Jogadores
              </Link>
            </div>
          </div>
        </div>
        
        <div className="container-uo mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-uo-gold/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between">
                <span className="text-uo-parchment/80">Status:</span>
                <span className="flex items-center text-green-400">
                  <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                  Online
                </span>
              </div>
            </div>
            <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-uo-gold/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between">
                <span className="text-uo-parchment/80">Jogadores:</span>
                <span className="text-uo-gold">157 Online</span>
              </div>
            </div>
            <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg border border-uo-gold/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between">
                <span className="text-uo-parchment/80">Próximo Evento:</span>
                <span className="text-uo-gold">Hoje 20:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Características */}
      <section className="relative py-20">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[url('/images/parchment-texture.jpg')] bg-cover mix-blend-overlay"></div>
        </div>
        
        <div className="container-uo">
          <div className="text-center mb-12">
            <h2 className="title-uo">Características</h2>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
              Descubra o que torna o Nova Era Shard uma experiência única e envolvente no universo de Ultima Online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-medieval"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="h-16 w-16 rounded-full flex items-center justify-center bg-uo-crimson/10 dark:bg-uo-gold/10 mb-4">
                  <FaShieldAlt className="h-8 w-8 text-uo-crimson dark:text-uo-gold" />
                </div>
                <h3 className="font-medieval text-2xl text-uo-crimson dark:text-uo-gold mb-2">PvM Balanceado</h3>
              </div>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-center">
                Sistema de combate refinado que oferece desafios para todos os níveis de jogadores, 
                com criaturas diversas e dungeons empolgantes.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-medieval"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="h-16 w-16 rounded-full flex items-center justify-center bg-uo-crimson/10 dark:bg-uo-gold/10 mb-4">
                  <FaGem className="h-8 w-8 text-uo-crimson dark:text-uo-gold" />
                </div>
                <h3 className="font-medieval text-2xl text-uo-crimson dark:text-uo-gold mb-2">Economia Dinâmica</h3>
              </div>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-center">
                Mercado de jogadores robusto com sistema de crafting aprofundado, 
                recursos limitados e itens únicos que valorizam suas conquistas.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-medieval"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="h-16 w-16 rounded-full flex items-center justify-center bg-uo-crimson/10 dark:bg-uo-gold/10 mb-4">
                  <FaDragon className="h-8 w-8 text-uo-crimson dark:text-uo-gold" />
                </div>
                <h3 className="font-medieval text-2xl text-uo-crimson dark:text-uo-gold mb-2">Conteúdo Original</h3>
              </div>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 text-center">
                Experimente quests exclusivas, eventos sazonais envolventes e um 
                mundo vivo que evolui com as ações dos jogadores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Ornate Divider */}
      <div className="container-uo">
        <div className="ornate-divider">
          <div className="ornate-divider-icon">
            <FaStar />
          </div>
        </div>
      </div>
      
      {/* Últimas Notícias */}
      <section className="relative py-16 bg-uo-crimson/5 dark:bg-uo-gold/5">
        <div className="container-uo">
          <div className="text-center mb-12">
            <h2 className="title-uo">Últimas Notícias</h2>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
              Mantenha-se atualizado com as novidades, eventos e atualizações do Nova Era Shard.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.article 
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-medieval overflow-hidden"
            >
              <div className="h-48 bg-cover bg-center mb-4 rounded-md" style={{ backgroundImage: "url('/images/news/dragon-event.jpg')" }}></div>
              <div className="flex items-center text-sm text-uo-crimson/70 dark:text-uo-gold/70 mb-2">
                <FaCalendarAlt className="mr-2 h-3 w-3" />
                <span>15 de Junho, 2024</span>
              </div>
              <h3 className="font-medieval text-xl text-uo-crimson dark:text-uo-gold mb-2">Invasão Dracônica</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Preparar para a mais grandiosa invasão de dragões já vista em Britannia. 
                Recompensas únicas para os bravos guerreiros que defenderem o reino.
              </p>
              <Link href="/news/dragon-invasion" className="text-uo-crimson dark:text-uo-gold hover:underline inline-flex items-center">
                Ler mais 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.article>
            
            <motion.article 
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-medieval overflow-hidden"
            >
              <div className="h-48 bg-cover bg-center mb-4 rounded-md" style={{ backgroundImage: "url('/images/news/craft-update.jpg')" }}></div>
              <div className="flex items-center text-sm text-uo-crimson/70 dark:text-uo-gold/70 mb-2">
                <FaCalendarAlt className="mr-2 h-3 w-3" />
                <span>10 de Junho, 2024</span>
              </div>
              <h3 className="font-medieval text-xl text-uo-crimson dark:text-uo-gold mb-2">Atualização de Crafting</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Nova atualização traz sistema de crafting expandido com novas receitas, 
                materiais raros e propriedades especiais para seus itens.
              </p>
              <Link href="/news/craft-update" className="text-uo-crimson dark:text-uo-gold hover:underline inline-flex items-center">
                Ler mais 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.article>
            
            <motion.article 
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-medieval overflow-hidden"
            >
              <div className="h-48 bg-cover bg-center mb-4 rounded-md" style={{ backgroundImage: "url('/images/news/new-dungeon.jpg')" }}></div>
              <div className="flex items-center text-sm text-uo-crimson/70 dark:text-uo-gold/70 mb-2">
                <FaCalendarAlt className="mr-2 h-3 w-3" />
                <span>5 de Junho, 2024</span>
              </div>
              <h3 className="font-medieval text-xl text-uo-crimson dark:text-uo-gold mb-2">Nova Dungeon: Catacumbas Profundas</h3>
              <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
                Explore as recém-descobertas Catacumbas Profundas, um labirinto de 
                salas cheias de desafios, tesouros e segredos ocultos.
              </p>
              <Link href="/news/deep-catacombs" className="text-uo-crimson dark:text-uo-gold hover:underline inline-flex items-center">
                Ler mais 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.article>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/news" className="btn-secondary inline-flex items-center justify-center">
              Ver Todas as Notícias
            </Link>
          </div>
        </div>
      </section>
      
      {/* Discord CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/discord-bg.jpg')] bg-cover bg-center"></div>
        </div>
        
        <div className="container-uo relative">
          <div className="card-parchment max-w-4xl mx-auto text-center">
            <FaDiscord className="h-16 w-16 text-uo-crimson dark:text-uo-gold mx-auto mb-4" />
            <h2 className="font-medieval text-3xl text-uo-crimson dark:text-uo-gold mb-4">Junte-se à Nossa Comunidade</h2>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6 max-w-xl mx-auto">
              Conecte-se com outros jogadores, receba anúncios em primeira mão, participe de eventos exclusivos
              e obtenha ajuda dos membros da comunidade e staff.
            </p>
            <a 
              href="https://discord.gg/novaerashard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              <FaDiscord className="mr-2" /> Entrar no Discord
            </a>
          </div>
        </div>
      </section>
      
      <SpeedInsights />
    </>
  );
} 