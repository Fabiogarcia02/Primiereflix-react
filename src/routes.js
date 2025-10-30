import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Filme from './pages/Filmes';
import Erro from './pages/Erro';
import Header from './Componentes/Header';
import Favoritos from './pages/Favoritos';
import Login from './pages/Loguin';        // Login via index.js
import Register from './pages/Registrer';  // Cadastro via index.js

// Componente para rotas privadas
function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

// Recebe loggedIn e setLoggedIn do App.js
function RoutesApp({ loggedIn, setLoggedIn }) {
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        {/* Rota privada */}
        <Route 
          path="/favoritos" 
          element={
            <PrivateRoute>
              <Favoritos />
            </PrivateRoute>
          } 
        />

        {/* Rotas de login e cadastro */}
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        {/* Rota para erros 404 */}
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
