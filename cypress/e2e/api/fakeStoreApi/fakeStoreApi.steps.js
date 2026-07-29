import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

const API_BASE = 'https://fakestoreapi.com';

let response;

When('I send a GET request to {string}', (endpoint) => {
  cy.request(`${API_BASE}${endpoint}`).then((res) => {
    response = res;
  });
});

When('I send a POST request to {string} with body:', (endpoint, dataTable) => {
  const rows = dataTable.hashes();
  const body = rows[0];
  cy.request({
    method: 'POST',
    url: `${API_BASE}${endpoint}`,
    body,
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
});

Then('the response status should be {int}', (statusCode) => {
  // TODO: Assert response.status equals statusCode
});

Then('the response should match the User array schema', () => {
  // TODO: Validate response.body with UserArraySchema from Zod
});

Then('the response should contain a token', () => {
  // TODO: Assert response.body has a token property
});

Then('the request should fail or return an error', () => {
  // TODO: Assert response indicates an error (status or body message)
});

Then('the response should match the Product array schema', () => {
  // TODO: Validate response.body with ProductArraySchema from Zod
});

Then('the response should match the Product schema', () => {
  // TODO: Validate response.body with ProductSchema from Zod
});

Then('the response should be a non-empty array of strings', () => {
  // TODO: Assert response.body is an array with string elements
});

Then('the response should match the Cart array schema', () => {
  // TODO: Validate response.body with CartArraySchema from Zod
});
