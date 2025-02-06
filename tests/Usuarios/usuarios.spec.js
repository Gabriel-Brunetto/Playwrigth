// @ts-check
const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

const baseURL = "http://localhost:3000"

test('get USERS', async ({request}) => {
  let response = await request.get(`${baseURL}/usuarios`)
  let jsonResponse = await response.json();

  console.log(jsonResponse);
  expect(jsonResponse).toHaveProperty('usuarios');
  expect(jsonResponse).toHaveProperty('quantidade');
});


test('post USERS', async ({request}) => {
  let body = {
    "nome": "Fulano da Silva",
    "email": faker.internet.email(),
    "password": "teste",
    "administrador": "true"
  }
  let response = await request.post(`${baseURL}/usuarios`,{ data: body });
  let jsonResponse = await response.json();
  
  console.log(jsonResponse);
  expect(jsonResponse).toHaveProperty('message');
  expect(jsonResponse).toHaveProperty('_id');
  expect(jsonResponse.message).toEqual('Cadastro realizado com sucesso')

});


test('put USERS', async ({request}) => {
  let body = {
    "nome": "Fulano da Silva",
    "email": faker.internet.email(),
    "password": "teste",
    "administrador": "true"
  }
  let response = await request.post("http://localhost:3000/usuarios",{ data: body });
  let jsonResponse = await response.json();
  
  console.log(jsonResponse);
  expect(jsonResponse).toHaveProperty('message');
  expect(jsonResponse).toHaveProperty('_id');
  expect(jsonResponse.message).toEqual('Cadastro realizado com sucesso')

  let userId = jsonResponse._id;
  let bodyUpdate = body;
  bodyUpdate.nome = "Gabriel123"

  let responseUpdate = await request.put(`http://localhost:3000/usuarios/"${userId}`, { data:bodyUpdate });
  let updateJson = await responseUpdate.json();
  
  console.log(updateJson)
  expect(updateJson).toHaveProperty('message');

});

test('delete USERS', async ({request}) => {
  let body = {
    "nome": "Fulano da Silva",
    "email": faker.internet.email(),
    "password": "teste",
    "administrador": "true"
  }
  let response = await request.post(`${baseURL}/usuarios`, { data: body });
  let jsonResponse = await response.json();

  console.log(jsonResponse);
  expect(jsonResponse).toHaveProperty('message');
  expect(jsonResponse).toHaveProperty('_id');
  expect(jsonResponse.message).toEqual('Cadastro realizado com sucesso')

  let userId = jsonResponse._id;
  let responseDelete = await request.delete(`${baseURL}/usuarios/${userId}`);
  let deleteJson = await responseDelete.json();

  console.log(deleteJson);
  expect(jsonResponse).toHaveProperty('message');
});