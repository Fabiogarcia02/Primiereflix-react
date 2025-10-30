import { Link, useNavigate } from 'react-router-dom';
import './header.css';

function Header({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login");
  }

  return (
    <header>
      <Link className='logo' to="/">Primiere Flix</Link>

      <div className="header-links">
        <Link className='favoritos' to="/favoritos">Meus Filmes</Link>

        {loggedIn ? (
          <button className='btn-logout' onClick={logout}>Logout</button>
        ) : (
          <>
            <Link className='favoritos' to="/login">Login</Link>
            <Link className='favoritos' to="/register">Cadastro</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
