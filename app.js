const express = require('express');
const app = express();
const port = 3000; // Definindo a porta

// Configuração do mecanismo de template EJS
app.set('view engine', 'ejs');

// Rota 1: Página inicial
app.get('/', (req, res) => {
  const data = {
    pageTitle: 'Página Inicial',
    message: 'Bem-vindo à página inicial!'
  };
  res.render('index', data);
});

// Rota 2: Página sobre
app.get('/sobre', (req, res) => {
  const data = {
    pageTitle: 'Sobre',
    message: 'Esta é a página "Sobre nós".'
  };
  res.render('sobre', data);
});

// Rota 3: Página de contato
app.get('/contato', (req, res) => {
  const data = {
    pageTitle: 'Contato',
    message: 'Entre em contato conosco.'
  };
  res.render('contato', data);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
