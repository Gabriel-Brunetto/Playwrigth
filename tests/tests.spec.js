// tests.js
const { test, expect } = require('@playwright/test');
const { getAuthToken } = require('../src/login');
const { updateUserName, getUsers, createUser} = require('../src/usuarios');
const { createProduct, deleteProduct, getProducts } = require('../src/produtos');


let userId;

// Teste de obtenção de usuários
test('get USERS', async ({ request }) => {
  const users = await getUsers(request);
  console.log('Usuários:', users);
});

// Teste de criação de um novo usuário
test('post USERS', async ({ request }) => {
  userId = await createUser(request);  // Armazena o ID na variável global
  console.log('Usuário criado com ID:', userId);
});

// Teste de atualização do nome de um usuário
test('put USERS - Update Name', async ({ request }) => {
  const updatedUser = await updateUserName(request, userId);
  console.log('Usuário atualizado:', updatedUser);
});

// Teste de login e obtenção do token
test('post LOGIN', async ({ request }) => {
  const token = await getAuthToken(request);
  console.log('Token de autenticação:', token);
});

// Teste de obtenção de produtos
test('get PRODUCTS', async ({ request }) => {
  const products = await getProducts(request);
  console.log('Produtos:', products);
});

test('post PRODUCT - Create', async ({ request }) => {
  const token = await getAuthToken(request);
  const productId = await createProduct(request, token);
  console.log('Produto criado com ID:', productId);
  expect(productId).toBeDefined();
});

// Teste de exclusão de produto
test('delete PRODUCT - Remove', async ({ request }) => {
  const token = await getAuthToken(request);
  const productId = await createProduct(request, token);
  console.log('Produto criado com ID:', productId);
  const deleteResponse = await deleteProduct(request, token, productId);
  console.log('Resposta da exclusão do produto:', deleteResponse);
});