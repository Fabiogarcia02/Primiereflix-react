import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from "react-router-dom";
import "../styles/forms.css";
import axiosInstance from "../../Services/axiosInstance"; // importa a instância

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Usa a instância do Axios com baseURL configurada
      await axiosInstance.post("/register", { username, password });
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Erro no cadastro");
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister} className="form">
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
        <button type="submit">Cadastrar</button>
      </form>
      <div className="links">
        <span>Já tem conta? <Link to="/login">Faça login</Link></span>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Register;
