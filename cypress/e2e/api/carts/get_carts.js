import { CartArraySchema } from '../../../schemas/cart.schema';

describe('Fake Store API - Carts', { tags: '@api' }, () => {
  const API_BASE = 'https://fakestoreapi.com';

  it('GET /carts - Retrieve user carts and validate schema', () => {
    cy.request('GET', `${API_BASE}/carts`).then((response) => {
      expect(response.status).to.eq(200);
      
      const validation = CartArraySchema.safeParse(response.body);
      if (!validation.success) {
        cy.log(JSON.stringify(validation.error.format()));
      }
      expect(validation.success, 'Response should match CartArraySchema').to.be.true;
    });
  });
});
