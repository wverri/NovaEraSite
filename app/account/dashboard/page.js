'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaUserTag, FaSpinner, FaExclamationTriangle, FaHeart, FaBrain, FaRunning } from 'react-icons/fa';
import Link from 'next/link';
import uoService from '../../services/uoService';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [characters, setCharacters] = useState([]);
  const [accountDetails, setAccountDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function loadUserData() {
      try {
        // Verificar se o usuário está logado
        if (!uoService.isLoggedIn()) {
          // Redirecionar para a página de login
          router.push('/account/login');
          return;
        }

        // Carregar nome de usuário
        const currentUsername = uoService.getLoggedUsername();
        setUsername(currentUsername);
        console.log('Nome de usuário carregado:', currentUsername);
        console.log('Token disponível:', !!uoService.getAuthToken());

        // Carregar detalhes da conta
        try {
          const accountData = await uoService.getAccountDetails(currentUsername);
          console.log('Detalhes da conta:', accountData);
          setAccountDetails(accountData);
        } catch (accountErr) {
          console.error('Erro ao carregar detalhes da conta:', accountErr);
        }

        // Carregar personagens
        const charactersData = await uoService.getCharacters();
        console.log('Dados de personagens recebidos:', charactersData);
        
        if (charactersData.success) {
          // Verificar se characters é um array de strings ou de objetos
          let charactersList = charactersData.characters || [];
          
          // Se for um array de strings, converter para objetos com propriedade name
          if (charactersList.length > 0 && typeof charactersList[0] === 'string') {
            charactersList = charactersList.map(name => ({ name }));
          }
          
          setCharacters(charactersList);
          
          // Se tiver personagens, carregar detalhes de cada um
          if (charactersList.length > 0) {
            console.log('Carregando detalhes dos personagens...');
            
            // Carregar detalhes de cada personagem
            for (const character of charactersList) {
              try {
                const characterName = character.name;
                console.log(`Carregando detalhes para: ${characterName}`);
                
                const details = await uoService.getCharacterDetails(characterName);
                console.log(`Detalhes recebidos para ${characterName}:`, details);
                
                // Atualizar o personagem na lista com os detalhes completos
                if (details.success && details.character) {
                  setCharacters(prevChars => 
                    prevChars.map(c => 
                      c.name === characterName ? {...c, ...details.character} : c
                    )
                  );
                }
              } catch (detailErr) {
                console.error(`Erro ao carregar detalhes para personagem:`, detailErr);
              }
            }
          }
        } else {
          if (charactersData.sessionExpired) {
            router.push('/account/login');
            return;
          }
          setError(charactersData.message || 'Não foi possível carregar seus personagens.');
        }
      } catch (err) {
        console.error('Erro ao carregar dados do usuário:', err);
        setError('Falha ao carregar dados. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    loadUserData();
  }, [router]);

  const handleLogout = () => {
    uoService.logout();
    router.push('/account/login');
  };

  // Função para formatar data do formato ISO para um formato legível
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR');
    } catch (e) {
      return dateString;
    }
  };

  // Função para extrair coordenadas da localização
  const formatLocation = (location) => {
    if (!location) return 'Desconhecida';
    
    const match = location.match(/\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match) {
      const [_, x, y, z] = match;
      return `(${x}, ${y}, ${z})`;
    }
    
    return location;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center">
        <div className="text-center">
          <FaSpinner className="text-uo-gold text-4xl mx-auto animate-spin mb-4" />
          <p className="text-white text-lg">Carregando dados da conta...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Painel da Conta</h1>
          <button 
            onClick={handleLogout}
            className="btn-secondary"
          >
            Sair
          </button>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-700 p-4 rounded mb-6 text-white flex items-center">
            <FaExclamationTriangle className="text-red-500 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-gray-800 p-3 rounded-full mr-4">
              <FaUser className="text-uo-gold text-3xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{username}</h2>
              {accountDetails && (
                <p className="text-gray-400">Conta criada em: {formatDate(accountDetails.created)}</p>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Email:</p>
                <p className="text-white">{accountDetails?.email || 'Não cadastrado'}</p>
              </div>
              <div>
                <p className="text-gray-400">Último login:</p>
                <p className="text-white">{accountDetails ? formatDate(accountDetails.lastLogin) : 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-400">Status da Conta:</p>
                <p className="text-green-500">Ativa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <FaUserTag className="text-uo-gold mr-2" />
            Seus Personagens
          </h3>

          {characters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {characters.map((character, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-bold text-lg mb-2">{character.name}</h4>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div className="text-gray-400">Localização:</div>
                    <div className="text-white">{formatLocation(character.location)}</div>
                    
                    <div className="text-gray-400 flex items-center">
                      <FaHeart className="mr-1 text-red-500" /> HP:
                    </div>
                    <div className="text-white">{character.hits}/{character.maxHits}</div>
                    
                    <div className="text-gray-400 flex items-center">
                      <FaBrain className="mr-1 text-blue-400" /> Mana:
                    </div>
                    <div className="text-white">{character.mana}/{character.maxMana}</div>
                    
                    <div className="text-gray-400 flex items-center">
                      <FaRunning className="mr-1 text-green-400" /> Stamina:
                    </div>
                    <div className="text-white">{character.stamina}/{character.maxStamina}</div>
                    
                    <div className="text-gray-400">Ouro:</div>
                    <div className="text-white">{character.gold || 0}</div>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="text-white font-semibold mb-1">Atributos</h5>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="bg-gray-700 p-2 rounded text-center">
                        <div className="text-red-400 font-bold">{character.strength}</div>
                        <div className="text-gray-400 text-xs">Força</div>
                      </div>
                      <div className="bg-gray-700 p-2 rounded text-center">
                        <div className="text-green-400 font-bold">{character.dexterity}</div>
                        <div className="text-gray-400 text-xs">Destreza</div>
                      </div>
                      <div className="bg-gray-700 p-2 rounded text-center">
                        <div className="text-blue-400 font-bold">{character.intelligence}</div>
                        <div className="text-gray-400 text-xs">Inteligência</div>
                      </div>
                    </div>
                  </div>
                  
                  {character.classesPvM && character.classesPvM.length > 0 ? (
                    <div className="mb-3">
                      <h5 className="text-white font-semibold mb-1">Classes PvM</h5>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {character.classesPvM.map((classe, idx) => (
                          <div key={idx} className="bg-gray-700 p-2 rounded">
                            <div className="text-uo-gold font-bold">{classe.nome}</div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Nível:</span>
                              <span className="text-white">{classe.nivel}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Exp:</span>
                              <span className="text-white">{classe.experiencia}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-3">
                      <h5 className="text-white font-semibold mb-1">Classes PvM</h5>
                      <div className="bg-gray-700 p-2 rounded text-center">
                        <span className="text-gray-400 text-sm">Nenhuma classe treinada</span>
                      </div>
                    </div>
                  )}
                  
                  {character.skills && character.skills.length > 0 ? (
                    <div className="mb-3">
                      <h5 className="text-white font-semibold mb-1">Principais Habilidades</h5>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {character.skills.slice(0, 8).map((skill, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-gray-400">{skill.name}:</span>
                            <span className="text-white">{skill.value}</span>
                          </div>
                        ))}
                        {character.skills.length > 8 && (
                          <div className="text-gray-400 text-xs col-span-2 text-center mt-1">
                            + {character.skills.length - 8} outras habilidades
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-3">
                      <h5 className="text-white font-semibold mb-1">Principais Habilidades</h5>
                      <div className="bg-gray-700 p-2 rounded text-center">
                        <span className="text-gray-400 text-sm">Nenhuma habilidade treinada</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-300 mb-4">Você ainda não possui personagens.</p>
              <p className="text-gray-400 text-sm">
                Para criar um personagem, acesse o jogo com sua conta e escolha a opção "Criar novo personagem".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}