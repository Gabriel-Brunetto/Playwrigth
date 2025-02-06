// @ts-check
const { test, expect } = require('@playwright/test');

const baseURL = "http://localhost:3000"


test('post USERS', async ({request}) => {
  let body = {
    "email": "fulano@qa.com",
    "password": "teste"
  }
  let response = await request.post(`${baseURL}/login`,{ data: body });
  let jsonResponse = await response.json();
  
  console.log(jsonResponse);
  expect(jsonResponse).toHaveProperty('message');
  expect(jsonResponse).toHaveProperty('authorization');
});
