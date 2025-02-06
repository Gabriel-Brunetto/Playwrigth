// usuarios.js
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

const baseURL = "http://localhost:3000";

//Função para criar um usuário
async function createUser(request) {
  const userPayload = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: "teste123",
    administrador: "true"
  };

  const response = await request.post(`${baseURL}/usuarios`, { data: userPayload });
  const responseJson = await response.json();

  console.log('Status da criação do usuário:', response.status());
  expect(response.status()).toBe(201);  // Espera código 201 Created
  expect(responseJson).toHaveProperty('_id');  // Garante que retorna um ID

  return responseJson._id; // Retorna o ID do usuário criado
}

// Função para atualizar o nome de um usuário
async function updateUserName(request, userId) {
  const userResponse = await request.get(`${baseURL}/usuarios/${userId}`);
  const userData = await userResponse.json();

  const updatedUserPayload = {
    nome: "Novo Nome do Usuário",  // Atualiza com o novo nome
    email: userData.email,
    password: userData.password,
    administrador: userData.administrador
  };

  const updateResponse = await request.put(`${baseURL}/usuarios/${userId}`, { data: updatedUserPayload });
  const updateResponseJson = await updateResponse.json();

  // Exibe o status da resposta do PUT
  console.log('Status da atualização do usuário:', updateResponse.status());
  expect(updateResponse.status()).toBe(200);  // Espera o código 200 OK
  expect(updateResponseJson).toHaveProperty('message');  // Verifica se a resposta tem a propriedade 'message'

  return updateResponseJson;
}

// Função para obter a lista de usuários
async function getUsers(request) {
  const response = await request.get(`${baseURL}/usuarios`);
  const responseJson = await response.json();

  console.log(response.status());
  expect(response.status()).toBe(200);
  return responseJson;
}

module.exports = { updateUserName, getUsers, createUser};
