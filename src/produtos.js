// produtos.js
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

const baseURL = "http://localhost:3000";

// Função para criar um produto
async function createProduct(request, token) {
  const productPayload = {
    nome: faker.internet.displayName(),
    preco: 470,
    descricao: "Mouse",
    quantidade: 381
  };

  const response = await request.post(`${baseURL}/produtos`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: productPayload
  });

  const responseJson = await response.json();
  expect(response.status()).toBe(201);

  return responseJson._id; // Retorna o ID do produto criado
}

// Função para deletar um produto
async function deleteProduct(request, token, productId) {
  const response = await request.delete(`${baseURL}/produtos/${productId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const responseJson = await response.json();
  expect(response.status()).toBe(200);
  expect(responseJson).toHaveProperty('message');
  return responseJson;
}

// Função para obter a lista de produtos
async function getProducts(request) {
  const response = await request.get(`${baseURL}/produtos`);
  const responseJson = await response.json();

  console.log(response.status())
  expect(response.status()).toBe(200);
  return responseJson;
}

module.exports = { createProduct, deleteProduct, getProducts };
