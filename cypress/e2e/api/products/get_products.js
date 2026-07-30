import { ProductArraySchema } from '../../../schemas/product.schema';

describe('Fake Store API - Products', () => {
  const API_BASE = 'https://fakestoreapi.com';

  it('GET /products - Retrieve all products and validate schema', () => {
    cy.request('GET', `${API_BASE}/products`).then((response) => {
      expect(response.status).to.eq(200);
      
      const validation = ProductArraySchema.safeParse(response.body);
      if (!validation.success) {
        cy.log(JSON.stringify(validation.error.format()));
      }
      expect(validation.success, 'Response should match ProductArraySchema').to.be.true;
    });
  });
});
