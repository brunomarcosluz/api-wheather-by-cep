const express = require('express'); // inicializando o package Express.js
const req = require('express/lib/request');
const res = require('express/lib/response');
const server = express();

server.get('/testeapi', (req, res) => {
  return res.json({usuario: 'Bruno Marcos Luz'})
});

server.listen(3000)

// teste de leitura no console 

var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual o CEP da sua residência?\n", function(answer) {
    var cep = answer;
    console.log("\nSua resposta '" + cep + "' foi grava com sucesso numa variável inútil");
    leitor.close();
});