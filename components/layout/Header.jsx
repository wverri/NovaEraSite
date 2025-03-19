'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaDiscord, FaFacebook } from 'react-icons/fa';
import { ThemeToggle } from '../ui/ThemeToggle';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Registrar', href: '/account/register' },
    { name: 'Download', href: '/download' },
    { name: 'Wiki', href: '/wiki' },
    { name: 'Comunidade', href: '/community' },
    { name: 'Suporte', href: '/support' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-uo-parchment/95 dark:bg-uo-midnight/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="container-uo py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-berkshire text-2xl md:text-3xl text-uo-crimson dark:text-uo-gold">
              Nova Era Shard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medieval text-base ${
                  pathname === item.href
                    ? 'text-uo-crimson dark:text-uo-gold font-bold'
                    : 'text-uo-darkwood dark:text-uo-mist hover:text-uo-crimson dark:hover:text-uo-gold'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="flex space-x-2">
              <a 
                href="https://discord.gg/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-darkwood dark:text-uo-mist hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Discord"
              >
                <FaDiscord className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-darkwood dark:text-uo-mist hover:text-blue-800 dark:hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>

            <Link 
              href="/account/login" 
              className="btn-primary"
            >
              Entrar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-uo-darkwood dark:text-uo-mist"
              aria-label="Menu Principal"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-uo py-4 bg-uo-parchment/95 dark:bg-uo-midnight/95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medieval text-lg px-2 py-1 rounded-md ${
                  pathname === item.href
                    ? 'text-uo-crimson dark:text-uo-gold font-bold bg-uo-darkwood/5 dark:bg-uo-gold/5'
                    : 'text-uo-darkwood dark:text-uo-mist hover:bg-uo-darkwood/5 dark:hover:bg-uo-gold/5'
                } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-2 pt-2">
              <a 
                href="https://discord.gg/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-darkwood dark:text-uo-mist hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Discord"
              >
                <FaDiscord className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-darkwood dark:text-uo-mist hover:text-blue-800 dark:hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
            <Link 
              href="/account/login" 
              className="btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Entrar
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
} 