export async function GET() {
  // Em um ambiente real, aqui você faria uma conexão com o ServUO para obter o status real
  // Esta é uma implementação de exemplo que retorna dados simulados
  
  try {
    // Simula o tempo de resposta de uma API real
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Dados simulados do status do servidor
    const serverStatus = {
      status: 'online', // 'online', 'offline', 'maintenance'
      players: {
        online: 148,
        max: 500,
        peak: 312
      },
      uptime: {
        days: 7,
        hours: 5,
        minutes: 42
      },
      lastRestart: '2024-03-15T08:30:00Z',
      performance: {
        cpu: 32, // porcentagem
        memory: 48, // porcentagem
        ping: 85 // ms
      },
      nextEvents: [
        {
          name: 'Invasão Demoníaca',
          date: '2024-03-28T20:00:00Z',
          description: 'Prepare-se para enfrentar ondas de demônios'
        },
        {
          name: 'Evento PvP',
          date: '2024-03-30T15:00:00Z',
          description: 'Torneio de PvP com prêmios especiais'
        }
      ]
    };
    
    return Response.json(serverStatus);
  } catch (error) {
    console.error('Erro ao obter status do servidor:', error);
    return Response.json(
      { error: 'Falha ao obter status do servidor' },
      { status: 500 }
    );
  }
} 