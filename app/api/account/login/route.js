// Endpoint proxy para login
export async function POST(request) {
  try {
    console.log('Iniciando requisição de login');
    const data = await request.json();
    
    const API_BASE_URL = process.env.NEXT_PUBLIC_UO_API_URL || 'http://novaerashard.ddns.net:8080/api';
    
    console.log('URL da API:', API_BASE_URL);
    console.log('Enviando para:', `${API_BASE_URL}/account/login`);
    
    // Tente com um timeout menor
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(`${API_BASE_URL}/account/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    console.log('Resposta recebida com status:', response.status);
    const responseData = await response.json();
    
    return Response.json(responseData, { status: response.status });
  } catch (error) {
    console.error('Erro detalhado:', error.name, error.message);
    return Response.json(
      { error: true, message: `Erro: ${error.message}` },
      { status: 500 }
    );
  }
} 