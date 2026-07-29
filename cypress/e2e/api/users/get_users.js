import { UserArraySchema } from '../../../utils/apiSchemas';

describe('Fake Store API - Users', () => {
  const API_BASE = 'https://fakestoreapi.com';

  it('GET /users - Retrieve existing users and validate schema', () => {
    cy.request('GET', `${API_BASE}/users`).then((response) => {
      expect(response.status).to.eq(200);
      
      const validation = UserArraySchema.safeParse(response.body);
      if (!validation.success) {
        cy.log(JSON.stringify(validation.error.format()));
      }
      expect(validation.success, 'Response should match UserArraySchema').to.be.true;
    });
  });
});
