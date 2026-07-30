import { ProductSchema } from '../../../schemas/product.schema';

describe('Fake Store API - Product Details', () => {
  const API_BASE = 'https://fakestoreapi.com';

  it('GET /products/1 - Retrieve single product detail and validate schema', () => {
    cy.request('GET', `${API_BASE}/products/1`).then((response) => {
      expect(response.status).to.eq(200);
      
      const validation = ProductSchema.safeParse(response.body);
      if (!validation.success) {
        cy.log(JSON.stringify(validation.error.format()));
      }
      expect(validation.success, 'Response should match ProductSchema').to.be.true;
    });
  });
});
