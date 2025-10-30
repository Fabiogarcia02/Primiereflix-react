import './favoritos.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhalista = localStorage.getItem("@primiereflix");
    setFilmes(JSON.parse(minhalista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((filme) => filme.id !== id);
    setFilmes(filtroFilmes);
    localStorage.setItem("@primiereflix", JSON.stringify(filtroFilmes));
    toast.info("Filme removido da lista!");
  }

  return (
    <div className='meus-filmes'>
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span className="sem-filmes">Você não possui nenhum filme salvo 😢</span>}

      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>
            <span>{filme.title}</span>
            <div className="acoes">
              <Link className="btn-ver" to={`/filme/${filme.id}`}>Ver detalhes</Link>
              <button className="btn-excluir" onClick={() => excluirFilme(filme.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>

      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
      />
    </div>
  );
}

export default Favoritos;
