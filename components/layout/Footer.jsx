'use client';

import Link from 'next/link';
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube, FaChevronUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [serverStatus, setServerStatus] = useState({
    status: 'offline',
    players: { online: 0, max: 0 },
    uptime: { days: 0, hours: 0, minutes: 0 }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch('/api/server-status');
        if (response.ok) {
          const data = await response.json();
          setServerStatus(data);
        }
      } catch (error) {
        console.error('Erro ao buscar status do servidor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServerStatus();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  // Formata o tempo de uptime
  const formatUptime = () => {
    if (loading) return 'Carregando...';
    
    const { days, hours, minutes } = serverStatus.uptime;
    let uptimeText = '';
    
    if (days > 0) uptimeText += `${days} dia${days !== 1 ? 's' : ''} `;
    if (hours > 0) uptimeText += `${hours} hora${hours !== 1 ? 's' : ''} `;
    if (days === 0 && hours === 0 && minutes > 0) uptimeText += `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
    
    return uptimeText.trim() || 'Indisponível';
  };

  return (
    <footer className="bg-uo-darkwood/90 dark:bg-uo-midnight/90 text-uo-parchment mt-20">
      <div className="container-uo py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col items-start">
              <span className="font-medieval text-2xl text-uo-gold">
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
                {loading ? (
                  <span className="text-uo-parchment/60">Carregando...</span>
                ) : (
                  <span className="flex items-center">
                    <span className={`w-3 h-3 rounded-full mr-2 ${serverStatus.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span className={serverStatus.status === 'online' ? 'text-green-400' : 'text-red-400'}>
                      {serverStatus.status === 'online' ? 'Online' : 'Offline'}
                    </span>
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-uo-parchment/80">Jogadores:</span>
                {loading ? (
                  <span className="text-uo-parchment/60">Carregando...</span>
                ) : (
                  <span className="text-uo-gold">
                    {serverStatus.players.online} / {serverStatus.players.max}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-uo-parchment/80">Uptime:</span>
                <span className="text-uo-parchment">{formatUptime()}</span>
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

        {/* Links de Suporte */}
        <div className="mb-8">
          <h3 className="font-medieval text-xl text-uo-crimson dark:text-uo-gold mb-4">Suporte</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/support" className="hover:text-uo-crimson dark:hover:text-uo-gold transition-colors">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-uo-crimson dark:hover:text-uo-gold transition-colors">
                Perguntas Frequentes
              </Link>
            </li>
            <li>
              <Link href="/report-bug" className="hover:text-uo-crimson dark:hover:text-uo-gold transition-colors">
                Reportar Bug
              </Link>
            </li>
            <li>
              <Link href="/fontes-demo" className="hover:text-uo-crimson dark:hover:text-uo-gold transition-colors">
                Demonstração de Fontes
              </Link>
            </li>
          </ul>
        </div>

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