import { test, expect } from '@playwright/test';

const API_BASE = 'https://fakestoreapi.com';

test.describe('Fake Store API Automation Suite', () => {

  test('GET /users - Retrieve existing users and validate user schema', async ({ request }) => {
    // TODO: Send GET request to /users and validate response
  });

  test('POST /auth/login - Positive auth with valid credentials', async ({ request }) => {
    // TODO: Send POST request to /auth/login with valid username and password
  });

  test('POST /auth/login - Negative auth with invalid password', async ({ request }) => {
    // TODO: Send POST request to /auth/login with invalid password
  });

  test('GET /products - Retrieve all products and validate schema', async ({ request }) => {
    // TODO: Send GET request to /products
  });

  test('GET /products/1 - Retrieve single product detail', async ({ request }) => {
    // TODO: Send GET request to /products/1
  });

  test('GET /products/categories - Retrieve product categories list', async ({ request }) => {
    // TODO: Send GET request to /products/categories
  });

  test('GET /carts - Retrieve user carts and validate schema', async ({ request }) => {
    // TODO: Send GET request to /carts
  });
});
