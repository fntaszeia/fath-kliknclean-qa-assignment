describe('Fake Store API - Categories', { tags: '@api' }, () => {
  const API_BASE = 'https://fakestoreapi.com';

  it('GET /products/categories - Retrieve product categories list', () => {
    cy.request('GET', `${API_BASE}/products/categories`).then((response) => {
      expect(response.status).to.eq(200);
      
      expect(response.body).to.be.an('array').that.is.not.empty;
      response.body.forEach((item) => {
        expect(item).to.be.a('string');
      });
    });
  });
});
