import { AuthTokenSchema } from '../../../utils/apiSchemas';

describe('Fake Store API - Auth', () => {
  const API_BASE = 'https://fakestoreapi.com';

  it('POST /auth/login - Positive auth with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: `${API_BASE}/auth/login`,
      body: {
        username: 'mor_2314',
        password: '83r5^_'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      
      const validation = AuthTokenSchema.safeParse(response.body);
      if (!validation.success) {
        cy.log(JSON.stringify(validation.error.format()));
      }
      expect(validation.success, 'Response should match AuthTokenSchema').to.be.true;
      expect(response.body).to.have.property('token');
    });
  });

  it('POST /auth/login - Negative auth with invalid password', () => {
    cy.request({
      method: 'POST',
      url: `${API_BASE}/auth/login`,
      body: {
        username: 'mor_2314',
        password: 'wrongpassword'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([400, 401]);
    });
  });
});
