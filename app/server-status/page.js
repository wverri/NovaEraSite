'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaServer, FaUsers, FaClock, FaCalendarAlt, FaCircle, FaMemory, FaMicrochip, FaTachometerAlt } from 'react-icons/fa';

export default function ServerStatusPage() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServerStatus() {
      try {
        setLoading(true);
        const response = await fetch('/api/server-status');
        
        if (!response.ok) {
          throw new Error('Falha ao obter o status do servidor');
        }
        
        const data = await response.json();
        setStatus(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchServerStatus();
    
    // Atualizar a cada 60 segundos
    const interval = setInterval(fetchServerStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  function formatDate(dateString) {
    const options = { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  }

  return (
    <div className="container-uo py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="header-medieval text-3xl md:text-5xl mb-4">Status do Servidor</h1>
          <p className="text-lg text-uo-darkwood/80 dark:text-uo-mist/80 max-w-3xl mx-auto">
            Verifique informações em tempo real sobre o Nova Era Shard.
          </p>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center min-h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-uo-crimson dark:border-uo-gold"></div>
          </div>
        ) : error ? (
          <div className="card-medieval text-center p-8">
            <div className="text-red-600 text-xl mb-4">
              <FaServer className="h-12 w-12 mx-auto mb-4" />
              <p>Servidor em Manutenção</p>
            </div>
            <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mb-6">
              {error}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Tentar Novamente
            </button>
          </div>
        ) : (
          <>
            {/* Status Principal */}
            <div className="card-medieval mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FaServer className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
                  <h2 className="font-medieval text-2xl">Status Atual</h2>
                </div>
                <div className="flex items-center">
                  <FaCircle className={`h-3 w-3 mr-2 ${
                    status.status === 'online' ? 'text-green-500' :
                    status.status === 'maintenance' ? 'text-yellow-500' :
                    'text-red-500'
                  }`} />
                  <span className={`font-medieval ${
                    status.status === 'online' ? 'text-green-600 dark:text-green-400' :
                    status.status === 'maintenance' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {status.status === 'online' ? 'Online' :
                     status.status === 'maintenance' ? 'Em Manutenção' :
                     'Offline'}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FaUsers className="h-5 w-5 mr-2 text-uo-crimson dark:text-uo-gold" />
                    <h3 className="font-medieval text-lg">Jogadores</h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between text-uo-darkwood/80 dark:text-uo-mist/80">
                      <span>Online:</span>
                      <span className="font-medium">{status.players.online} / {status.players.max}</span>
                    </div>
                    <div className="flex justify-between text-uo-darkwood/80 dark:text-uo-mist/80">
                      <span>Pico hoje:</span>
                      <span className="font-medium">{status.players.peak}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                      <div 
                        className="bg-uo-crimson dark:bg-uo-gold h-2.5 rounded-full" 
                        style={{ width: `${(status.players.online / status.players.max) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FaClock className="h-5 w-5 mr-2 text-uo-crimson dark:text-uo-gold" />
                    <h3 className="font-medieval text-lg">Uptime</h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between text-uo-darkwood/80 dark:text-uo-mist/80">
                      <span>Tempo online:</span>
                      <span className="font-medium" style={{ fontSize: '14px' }}>
                        {status.uptime.days}d {status.uptime.hours}h {status.uptime.minutes}m
                      </span>
                    </div>
                    <div className="flex justify-between text-uo-darkwood/80 dark:text-uo-mist/80">
                      <span>Último reinício:</span>
                      <span className="font-medium" style={{ fontSize: '14px' }}>{formatDate(status.lastRestart)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/40 dark:bg-gray-900/40 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FaTachometerAlt className="h-5 w-5 mr-2 text-uo-crimson dark:text-uo-gold" />
                    <h3 className="font-medieval text-lg">Performance</h3>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div>
                      <div className="flex justify-between text-uo-darkwood/80 dark:text-uo-mist/80 mb-1">
                        <span className="flex items-center">
                          <FaMicrochip className="h-3 w-3 mr-1" /> CPU:
                        </span>
                        <span className="font-medium">{Math.round(status.performance.cpu * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${
                            status.performance.cpu * 100 > 80 ? 'bg-red-500' :
                            status.performance.cpu * 100 > 60 ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(status.performance.cpu * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-uo-darkwood/80 dark:text-uo-mist/80 mb-1">
                        <span className="flex items-center">
                          <FaMemory className="h-3 w-3 mr-1" /> Memória:
                        </span>
                        <span className="font-medium">
                          {Math.round((status.performance.memory / (status.performance.memory + status.performance.availableMemory)) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${
                            (status.performance.memory / (status.performance.memory + status.performance.availableMemory)) * 100 > 80 ? 'bg-red-500' :
                            (status.performance.memory / (status.performance.memory + status.performance.availableMemory)) * 100 > 60 ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${Math.min((status.performance.memory / (status.performance.memory + status.performance.availableMemory)) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-uo-darkwood/80 dark:text-uo-mist/80">
                      <span>Memória Disponível:</span>
                      <span className="font-medium">{status.performance.availableMemory.toFixed(2)} GB</span>
                    </div>
                    
                    <div className="flex justify-between text-uo-darkwood/80 dark:text-uo-mist/80">
                      <span>Ping:</span>
                      <span className="font-medium">{status.performance.ping} ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Próximos Eventos */}
            <div className="card-medieval mb-8">
              <div className="flex items-center mb-6">
                <FaCalendarAlt className="h-6 w-6 mr-2 text-uo-crimson dark:text-uo-gold" />
                <h2 className="font-medieval text-2xl">Próximos Eventos</h2>
              </div>
              
              {status.nextEvents.length > 0 ? (
                <div className="space-y-4">
                  {status.nextEvents.map((event, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg border-l-4 border-uo-crimson dark:border-uo-gold"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h3 className="font-medieval text-xl mb-2 md:mb-0">{event.name}</h3>
                        <span className="text-uo-darkwood/80 dark:text-uo-mist/80 text-sm">
                          {formatDate(event.date)}
                        </span>
                      </div>
                      <p className="text-uo-darkwood/80 dark:text-uo-mist/80 mt-2">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-uo-darkwood/80 dark:text-uo-mist/80 py-4">
                  Não há eventos agendados no momento.
                </p>
              )}
            </div>
          </>
        )}
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-uo-crimson dark:text-uo-gold hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
} 