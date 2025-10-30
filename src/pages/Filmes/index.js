import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Services/api";
import "./filmes.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // corrigido

  useEffect(() => {
    async function loadFilme() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "d9bace77444306ce3d18fc8f8b400725",
            language: "pt-BR",
          },
        });

        setFilme(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Filme não encontrado 😢");
        navigate("/", { replace: true });
        setLoading(false);
      }
    }

    loadFilme();
  }, [id]);

  function salvarFilme() {
    const minhalista = localStorage.getItem("@primiereflix");
    let filmesSalvos = JSON.parse(minhalista) || [];

    const filmeExistente = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);
    if (filmeExistente) {
      toast.warn("Esse filme já está na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primiereflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h2>Carregando detalhes...</h2>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>⭐ Avaliação IMDb: {filme.vote_average} / 10</strong>

      <div className="botoes">
        <button onClick={salvarFilme} className="btn-salvar">💾 Salvar</button>
        <button className="btn-trailer">
          🎬 <a target="_blank" rel="noopener noreferrer"
            href={`https://youtube.com/results?search_query=${filme.title}Trailer`}>
            Trailer
          </a>
        </button>
      </div>

      {/* ToastContainer precisa estar em algum lugar do JSX */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default Filme;
