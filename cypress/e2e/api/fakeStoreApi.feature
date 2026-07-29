Feature: Fake Store API Automation
  As a QA engineer
  I want to validate the Fake Store API endpoints
  So that I can ensure API responses match expected schemas

  Scenario: Retrieve existing users and validate schema
    When I send a GET request to "/users"
    Then the response status should be 200
    And the response should match the User array schema

  Scenario: Positive auth with valid credentials
    When I send a POST request to "/auth/login" with body:
      | username | password  |
      | mor_2314 | 83r5^_    |
    Then the response status should be 200
    And the response should contain a token

  Scenario: Negative auth with invalid password
    When I send a POST request to "/auth/login" with body:
      | username | password       |
      | mor_2314 | wrongpassword  |
    Then the request should fail or return an error

  Scenario: Retrieve all products and validate schema
    When I send a GET request to "/products"
    Then the response status should be 200
    And the response should match the Product array schema

  Scenario: Retrieve single product detail
    When I send a GET request to "/products/1"
    Then the response status should be 200
    And the response should match the Product schema

  Scenario: Retrieve product categories list
    When I send a GET request to "/products/categories"
    Then the response status should be 200
    And the response should be a non-empty array of strings

  Scenario: Retrieve user carts and validate schema
    When I send a GET request to "/carts"
    Then the response status should be 200
    And the response should match the Cart array schema
