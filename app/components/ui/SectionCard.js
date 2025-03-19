'use client';

import { motion } from 'framer-motion';

export default function SectionCard({ 
  title, 
  icon = null, 
  children, 
  className = "",
  noBorder = false
}) {
  return (
    <motion.div 
      className={`card-medieval relative overflow-hidden ${className} ${noBorder ? '' : 'border-2 border-uo-darkwood/10 dark:border-uo-gold/10'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Decoração de cantos */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-uo-crimson/30 dark:border-uo-gold/30 -ml-1 -mt-1 rounded-tl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-uo-crimson/30 dark:border-uo-gold/30 -mr-1 -mt-1 rounded-tr"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-uo-crimson/30 dark:border-uo-gold/30 -ml-1 -mb-1 rounded-bl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-uo-crimson/30 dark:border-uo-gold/30 -mr-1 -mb-1 rounded-br"></div>
      
      {/* Fundo estilizado */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/parchment-texture.jpg')] bg-cover mix-blend-overlay"></div>
      </div>
      
      {title && (
        <div className={`flex items-center mb-${icon ? '4' : '6'}`}>
          {icon && <span className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold">{icon}</span>}
          <h2 className="font-medieval text-2xl text-uo-crimson dark:text-uo-gold">{title}</h2>
          
          {/* Linha decorativa */}
          <div className="flex-grow ml-4 h-px bg-gradient-to-r from-uo-crimson/30 dark:from-uo-gold/30 to-transparent"></div>
        </div>
      )}
      
      <div>
        {children}
      </div>
    </motion.div>
  );
} 