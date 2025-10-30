import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api"; // ✅ Importa seu axios configurado
import  './filmes.css'

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({}); // Estado para guardar os dados do filme
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    async function loadFilme() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "d9bace77444306ce3d18fc8f8b400725",
            language: "pt-BR",
          },
        });

        setFilme(response.data); // Salva o filme
        setLoading(false);
      } catch (error) {
        console.log("Filme não encontrado 😢");
        setLoading(false);
      }
    }

    loadFilme();
  }, [id]);

  if (loading) {
    return(
    <div className="filme-info">  
    return <h2>Carregando detalhes...</h2>;
    </div>
    )
  }

  return (
    <div className="filme-info">
        <h1>{filme.titile}</h1>
       <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt = {filme.titile}/>
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>
      <strong>⭐ Avaliação IMDb: {filme.vote_average} / 10</strong>

    </div>
  );
}

export default Filme;
