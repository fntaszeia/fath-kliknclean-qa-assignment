import { test, expect } from '@playwright/test';
import { UserArraySchema, ProductSchema, ProductArraySchema, CartArraySchema, AuthTokenSchema } from '../../utils/apiSchemas';

const API_BASE = 'https://fakestoreapi.com';

test.describe('Fake Store API Automation Suite', () => {

  test('GET /users - Retrieve existing users and validate user schema', async ({ request }) => {
    const response = await request.get(`${API_BASE}/users`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);

    // Schema validation using Zod
    const validation = UserArraySchema.safeParse(body);
    expect(validation.success).toBeTruthy();
  });

  test('POST /auth/login - Positive auth with valid credentials', async ({ request }) => {
    // 1. Get an existing user credentials from /users
    const usersResponse = await request.get(`${API_BASE}/users`);
    const users = await usersResponse.json();
    const existingUser = users[0];

    // 2. Perform authentication request
    const authResponse = await request.post(`${API_BASE}/auth/login`, {
      data: {
        username: existingUser.username,
        password: existingUser.password,
      },
    });

    expect([200, 201]).toContain(authResponse.status());
    const body = await authResponse.json();
    
    // Assert JWT token returned
    const validation = AuthTokenSchema.safeParse(body);
    expect(validation.success).toBeTruthy();
    expect(body.token).toBeDefined();
  });

  test('POST /auth/login - Negative auth with invalid password', async ({ request }) => {
    const authResponse = await request.post(`${API_BASE}/auth/login`, {
      data: {
        username: 'johnd',
        password: 'wrong_password_123',
      },
    });

    // FakeStore API returns HTTP 401 or 400 for invalid auth
    expect([400, 401]).toContain(authResponse.status());
  });

  test('GET /products - Retrieve all products and validate schema', async ({ request }) => {
    const response = await request.get(`${API_BASE}/products`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    const validation = ProductArraySchema.safeParse(body);
    expect(validation.success).toBeTruthy();
  });

  test('GET /products/1 - Retrieve single product detail', async ({ request }) => {
    const response = await request.get(`${API_BASE}/products/1`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);

    const validation = ProductSchema.safeParse(body);
    expect(validation.success).toBeTruthy();
  });

  test('GET /products/categories - Retrieve product categories list', async ({ request }) => {
    const response = await request.get(`${API_BASE}/products/categories`);
    expect(response.status()).toBe(200);

    const categories = await response.json();
    expect(Array.isArray(categories)).toBeTruthy();
    expect(categories).toContain('electronics');
  });

  test('GET /carts - Retrieve user carts and validate schema', async ({ request }) => {
    const response = await request.get(`${API_BASE}/carts`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    const validation = CartArraySchema.safeParse(body);
    expect(validation.success).toBeTruthy();
  });
});
