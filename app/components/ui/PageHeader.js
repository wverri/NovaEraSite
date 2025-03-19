'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function PageHeader({ 
  title, 
  description, 
  backLink = "/wiki", 
  backLinkText = "Voltar para Wiki",
  icon = null 
}) {
  return (
    <>
      <div className="mb-8 flex items-center">
        <Link href={backLink} className="text-uo-crimson dark:text-uo-gold hover:underline flex items-center group transition-all duration-300 ease-in-out">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> 
          {backLinkText}
        </Link>
      </div>
      
      <motion.div 
        className="relative text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-full max-w-2xl border-t border-uo-darkwood/20 dark:border-uo-gold/20"></div>
        </div>
        
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-transparent via-uo-crimson/20 dark:via-uo-gold/20 to-transparent"></div>
          <div className="bg-uo-parchment dark:bg-uo-midnight px-6 py-1 flex items-center space-x-4">
            {icon && <span className="text-uo-crimson dark:text-uo-gold text-3xl">{icon}</span>}
            <h1 className="header-medieval text-3xl md:text-5xl whitespace-nowrap">{title}</h1>
          </div>
        </div>
        
        <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto mt-6 relative">
          <span className="relative inline-block">
            <span className="absolute -left-6 -top-4 text-4xl opacity-20 text-uo-crimson dark:text-uo-gold">"</span>
            {description}
            <span className="absolute -right-6 -bottom-4 text-4xl opacity-20 text-uo-crimson dark:text-uo-gold">"</span>
          </span>
        </p>
      </motion.div>
    </>
  );
} 