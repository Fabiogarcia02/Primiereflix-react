Primiereflix React 🎬
<img width="2559" height="1301" alt="image" src="https://github.com/user-attachments/assets/afb0c0e0-789c-4ef3-8e83-80147f23b51d" />
<img width="2555" height="1288" alt="image" src="https://github.com/user-attachments/assets/c9dc0c51-aa71-44c9-b77f-03d4f5b2746f" />
<img width="2559" height="1286" alt="image" src="https://github.com/user-attachments/assets/d048ea71-e863-439d-85ac-10522920a5e4" />




Um projeto de frontend em React com backend em Node.js/Express, simulando uma plataforma de filmes onde o usuário pode se cadastrar, fazer login e gerenciar seus filmes favoritos.

O projeto consome dados da The Movie Database (TMDB) e permite visualizar detalhes de filmes em uma interface moderna e responsiva.

Funcionalidades

Cadastro de usuário com hash de senha (bcrypt)

Login com JWT para autenticação de rotas privadas

Adição e remoção de filmes favoritos com persistência em localStorage

Visualização de filmes em destaque, detalhes de cada filme e trailers

Rotas privadas protegidas por token JWT

Interface responsiva e amigável, com notificações usando react-toastify

Tecnologias Utilizadas
Frontend

React

React Router DOM

Axios (com instância para backend)

React Toastify

CSS personalizado para formulários e páginas

Backend

Node.js

Express

CORS

bcrypt (hash de senhas)

jsonwebtoken (JWT)

Estrutura do Projeto
primiere/
├─ backend/           # Servidor Node.js
│  ├─ server.js
│  └─ package.json
├─ src/               # Frontend React
│  ├─ pages/
│  │  ├─ Home/
│  │  ├─ Filmes/
│  │  ├─ Favoritos/
│  │  ├─ Login/
│  │  └─ Register/
│  ├─ Components/
│  │  └─ Header.js
│  └─ services/
│     └─ axiosInstance.js
└─ package.json
