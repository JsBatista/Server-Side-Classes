const express = require('express');

// Usaremos o roteador do express
const routes = express.Router();

// Vamos importar os métodos que criamos para utilizarmos aqui
const methods = require('./methods.js');

// Rota que vai nos retornar todos os nossos membros
routes.get('/allmembers', methods.index);


// Define as rotas e suas devidas respostas
// O verbo http da rota define sua função principal
// A rota abaixo vai buscar um membro com uma certa idade
// Usar : antes do nome vai dizer que isso representa uma variável
// Podemos acessar essa variável com o nosso objeto de request (req)
routes.get('/membro/:age', methods.getMembersByAge);

// A rota abaixo vai pegar parâmetros via query
// Definimos uma query através de uma interrogação (?)
// Cada valor de variavel deve ser declarado com um =
// Separamos os valores com um E comercial (&)
// Ex: localhost:3333/dados/?idade=20&nome=Batista
routes.get('/dados', (req, res) => {
        return res.send(req.query);
    }
);


module.exports = routes;