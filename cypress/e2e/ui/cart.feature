Feature: SauceDemo Shopping Cart
  As a logged-in user
  I want to manage products in my shopping cart
  So that I can prepare items for checkout

  Background:
    Given I am logged in as "standard_user" 

  Scenario: Add product to cart
    When I add "sauce-labs-backpack" to the cart
    Then the cart badge should show "1"

  Scenario: Remove product from cart
    Given I have "sauce-labs-backpack" in the cart
    When I remove "sauce-labs-backpack" from the cart
    Then the cart badge should not be visible
