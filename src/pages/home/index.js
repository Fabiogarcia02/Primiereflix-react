// Importa os hooks do React e o componente Link do React Router
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Importa o CSS específico da página Home
import './home.css';

// Importa a instância da API configurada (axios com baseURL)
import api from '../../Services/api'; // certifique-se de que o "s" é minúsculo no nome da pasta

function Home() {
  // Estado para armazenar os filmes e controlar o carregamento
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect executa quando o componente é montado
  useEffect(() => {
    async function loadFilmes() {
      try {
        // Faz a requisição para a API
        const response = await api.get('/movie/now_playing', {
          params: {
            api_key: 'd9bace77444306ce3d18fc8f8b400725',
            language: 'pt-BR',
            page: 1,
          },
        });

        // Atualiza o estado com os 10 primeiros filmes
        setFilmes(response.data.results.slice(0, 15));
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      } finally {
        // Finaliza o carregamento
        setLoading(false);
      }
    }

    // Executa a função
    loadFilmes();
  }, []); // executa apenas uma vez na montagem

  // Enquanto estiver carregando
  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando Filmes...</h2>
      </div>
    );
  }

  // Após carregar os filmes
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
              alt={filme.title}
            />
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

// Exporta o componente
export default Home;
