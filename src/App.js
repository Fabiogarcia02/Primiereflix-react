import './index.css'
import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

function App() {
  // Estado para controlar se o usuário está logado
  const [loggedIn, setLoggedIn] = useState(false);

  // Verifica se existe token no localStorage ao iniciar o app
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
  }, []);

  return (
    <>
      {/* Passa loggedIn e setLoggedIn para gerenciar login/logout nas rotas */}
      <RoutesApp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      {/* ToastContainer global */}
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
    </>
  );
}

export default App;
