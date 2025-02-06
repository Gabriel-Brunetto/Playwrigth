// login.js
const { expect } = require('@playwright/test');

const baseURL = "http://localhost:3000";

// Função para realizar o login e obter o token
async function getAuthToken(request) {
  const loginPayload = {
    email: "fulano@qa.com",
    password: "teste"
  };

  const response = await request.post(`${baseURL}/login`, { data: loginPayload });
  const responseJson = await response.json();

  console.log(response.status())
  expect(response.status()).toBe(200);
  const token = responseJson.authorization.split(' ')[1]; // Remove "Bearer "
  return token;
}

module.exports = { getAuthToken };
