const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = process.env.SECRET_KEY || "supersecreta";

// "Banco de dados" em memória (para teste)
const users = [];

// Rota de cadastro
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "Usuário criado com sucesso!" });
});

// rota de login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if(!user) return res.status(400).json({ message: "Usuário ou senha incorretos" });

  const isValid = await bcrypt.compare(password, user.password);
  if(!isValid) return res.status(400).json({ message: "Usuário ou senha incorretos" });

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

app.listen(5000, () => console.log("Backend rodando na porta 5000"));
