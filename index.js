const express = require('express'); // inicializando o package Express.js
const req = require('express/lib/request');
const res = require('express/lib/response');
const server_bruno = express();
const axios = require('axios').default;
/*
server_bruno.listen(3000, () => {
  console.log('Servidor na ativa')
}); */

// https://viacep.com.br/ 
// viacep.com.br/ws/13060758/json/ Exemplo de pesquisa por CEP
// https://apiprevmet3.inmet.gov.br/estacao/proxima/<geocode> | geocode = igbe
 
// teste de leitura no console  | após instalaçao do package prompt-sync
const prompt = require('prompt-sync')({sigint:true}); // inicializando pacote prompt-sync
var cep = prompt('Informe seu CEP: ')
const url_cep = 'viacep.com.br/ws/' + cep + '/json/';


// inmet_url = "https://apiprevmet3.inmet.gov.br/estacao/proxima/" + geocode 
