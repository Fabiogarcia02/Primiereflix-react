// Importa o React e o ReactDOM para renderização
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa o componente principal da aplicação
import App from './App';

// Importa o CSS global (opcional)
//import './index.css';

// Importa função para medir performance da aplicação (opcional)
//import reportWebVitals from './reportWebVitals';

// Cria a raiz da aplicação, ligando ao elemento com id "root" do index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente principal dentro da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Observação: 
// Se quiser medir performance, você pode usar reportWebVitals.
// Exemplo:
//reportWebVitals(console.log);//
