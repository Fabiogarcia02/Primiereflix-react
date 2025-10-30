import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/forms.css"; // mesmo CSS do cadastro
import axiosInstance from "../../Services/axiosInstance"; // importa a instância

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Usa a instância do Axios com baseURL configurada
      const response = await axiosInstance.post("/login", { username, password });
      
      // Salva token JWT no localStorage
      localStorage.setItem("token", response.data.token);
      setLoggedIn(true);

      toast.success("Login realizado com sucesso!");
      navigate("/favoritos"); // redireciona para rota privada
    } catch (err) {
      toast.error(err.response?.data?.message || "Erro no login");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form">
        <input
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <div className="links">
        <span>Não tem conta? <Link to="/register">Cadastre-se</Link></span>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Login;
