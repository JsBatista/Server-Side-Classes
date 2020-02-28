const express = require('express');

// Importamos as rotas definidas em outro arquivo
const routes = require('./routes.js');

// Importamos o body parser para ajudar no corpo das requisições do servidor
const bodyParser = require('body-parser');

// Cria a instancia do meu servidor que vai ter os procolos necessários
const app = express();

// Importando o cors
const cors = require('cors');

// Fazemos com que o nosso servidor entenda a codificação que a resposta irá nos dar
// Não é tão necessário, mas uma hora pode ser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Nosso servidor vai agora usar as rotas que definimos antes
app.use(routes);

// Liberando acesso à minha API para TODO MUNDO
// Passaremos os IPs permitidos aqui, se não passarmos nada, todos podem acessar
app.use(cors());

// Coloca o meu servidor em uma porta, com um callback para ser 
// chamado quando o servidor for iniciado
app.listen(3333, () => {
    console.log(`Success!\nYour server is now running on port 3333!`)
});
