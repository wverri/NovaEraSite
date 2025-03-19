'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ItemCard({ 
  title, 
  icon, 
  description, 
  link = "#",
  linkText = "Ver detalhes",
  image = null,
  fallbackImage = null,
  stats = null
}) {
  return (
    <motion.div 
      className="card-medieval relative flex flex-col h-full overflow-hidden border border-uo-darkwood/20 dark:border-uo-gold/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)", 
        y: -5
      }}
    >
      {/* Cantos decorativos */}
      <svg className="absolute top-0 left-0 w-6 h-6 text-uo-crimson/30 dark:text-uo-gold/30" viewBox="0 0 24 24">
        <path fill="currentColor" d="M0,0 L12,0 L12,1 L1,1 L1,12 L0,12 Z" />
      </svg>
      <svg className="absolute top-0 right-0 w-6 h-6 text-uo-crimson/30 dark:text-uo-gold/30" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,0 L24,0 L24,12 L23,12 L23,1 L12,1 Z" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-6 h-6 text-uo-crimson/30 dark:text-uo-gold/30" viewBox="0 0 24 24">
        <path fill="currentColor" d="M0,12 L1,12 L1,23 L12,23 L12,24 L0,24 Z" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-6 h-6 text-uo-crimson/30 dark:text-uo-gold/30" viewBox="0 0 24 24">
        <path fill="currentColor" d="M23,12 L24,12 L24,24 L12,24 L12,23 L23,23 Z" />
      </svg>
      
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <span className="h-8 w-8 text-uo-crimson dark:text-uo-gold">{icon}</span>
          <h3 className="font-medieval text-2xl ml-3">{title}</h3>
        </div>
        
        {image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-110"
              onError={(e) => {
                if (fallbackImage) {
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }
              }}
            />
          </div>
        )}
        
        <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-4">
          {description}
        </p>
        
        {stats && (
          <div className="bg-white/40 dark:bg-gray-900/40 p-3 rounded-lg mb-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(stats).map(([key, values], idx) => (
                <div key={idx}>
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
        )}
        
        <div className="mt-auto pt-4">
          <Link 
            href={link} 
            className="text-uo-crimson dark:text-uo-gold hover:underline inline-flex items-center group"
          >
            {linkText} 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 