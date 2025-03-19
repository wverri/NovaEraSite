'use client';

import Link from 'next/link';
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-uo-darkwood/90 dark:bg-uo-midnight/90 text-uo-parchment mt-20">
      <div className="container-uo py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col items-start">
              <span className="font-berkshire text-2xl text-uo-gold">
                Nova Era Shard
              </span>
            </Link>
            <p className="mt-4 text-sm text-uo-parchment/80">
              Um servidor de Ultima Online dedicado à oferecer a melhor experiência de jogo com equilíbrio entre os sistemas clássicos e modernos.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://discord.gg/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-parchment/80 hover:text-uo-gold transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-parchment/80 hover:text-uo-gold transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-parchment/80 hover:text-uo-gold transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com/novaerashard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-uo-parchment/80 hover:text-uo-gold transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="col-span-1">
            <h3 className="font-medieval text-xl text-uo-gold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account/register" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Criar Conta
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/wiki" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Wiki
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Comunidade
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações do Servidor */}
          <div className="col-span-1">
            <h3 className="font-medieval text-xl text-uo-gold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Sobre o Servidor
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Regras
                </Link>
              </li>
              <li>
                <Link href="/wiki/features" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/wiki/skills" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Skills & Classes
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-uo-parchment/80 hover:text-uo-gold transition-colors">
                  Doações
                </Link>
              </li>
            </ul>
          </div>

          {/* Status do Servidor */}
          <div className="col-span-1">
            <h3 className="font-medieval text-xl text-uo-gold mb-4">Status do Servidor</h3>
            <div className="p-4 bg-uo-darkwood rounded-md shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-uo-parchment/80">Status:</span>
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-green-400">Online</span>
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-uo-parchment/80">Jogadores:</span>
                <span className="text-uo-gold">148 / 500</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-uo-parchment/80">Uptime:</span>
                <span className="text-uo-parchment">7 dias 5 horas</span>
              </div>
              <div className="mt-4 pt-4 border-t border-uo-parchment/20">
                <Link href="/server-status" className="text-uo-gold hover:text-uo-parchment transition-colors text-sm">
                  Ver detalhes completos →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-uo-parchment/20 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-uo-parchment/60">
            © {currentYear} Nova Era Shard. Ultima Online™ é uma marca registrada da Electronic Arts Inc. Este é um servidor não oficial.
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-uo-parchment/60 hover:text-uo-gold transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="text-sm text-uo-parchment/60 hover:text-uo-gold transition-colors">
              Termos de Uso
            </Link>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-uo-parchment/10 hover:bg-uo-gold/20 text-uo-parchment/80 hover:text-uo-gold transition-colors"
              aria-label="Voltar ao topo"
            >
              <FaChevronUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 