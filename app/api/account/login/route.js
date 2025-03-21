// Endpoint proxy para login
export async function POST(request) {
  try {
    // Obter dados do corpo da requisição
    const data = await request.json();
    
    // Usa a mesma URL base que o uoService
    const API_BASE_URL = process.env.NEXT_PUBLIC_UO_API_URL || 'http://localhost:8080/api';
    
    console.log('Proxy de login: Enviando requisição para', `${API_BASE_URL}/account/login`);
    
    // Faz a requisição para o servidor a partir do lado do servidor Next.js
    const response = await fetch(`${API_BASE_URL}/account/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    // Obtém a resposta como JSON
    const responseData = await response.json();
    
    console.log('Proxy de login: Resposta recebida com status', response.status);
    
    // Retorna a resposta para o cliente
    return Response.json(responseData, { status: response.status });
  } catch (error) {
    console.error('Erro no proxy de login:', error);
    return Response.json(
      { error: true, message: 'Erro ao processar login via proxy' },
      { status: 500 }
    );
  }
} 