Cypress.Commands.overwrite('request', (originalFn, ...options) => {
  let body;
  if (options.length === 1 && typeof options[0] === 'object') {
    body = options[0].body;
  } else if (options.length === 3) {
    body = options[2];
  }

  if (body) {
    Cypress.log({
      name: 'reqBody',
      message: JSON.stringify(body)
    });
  }

  return originalFn(...options).then((response) => {
    if (response.body) {
      Cypress.log({
        name: 'resBody',
        message: JSON.stringify(response.body)
      });
    }
    return response;
  });
});
