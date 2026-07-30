@all @ui @cart
Feature: SauceDemo Shopping Cart
  As a logged-in user
  I want to manage products in my shopping cart
  So that I can prepare items for checkout

  Background:
    Given I am logged in as "standard_user" 

  Scenario: Add product to cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart item count should show "1"
    When I go to the cart
    Then I should see the product "Sauce Labs Backpack" in the cart
  Scenario: Remove product from cart
    Given I have "Sauce Labs Backpack" in the cart
    When I remove "Sauce Labs Backpack" from the cart
    Then the cart item count should not be visible
  Scenario: Remove product from inside cart page
    Given I have "Sauce Labs Backpack" in the cart
    When I go to the cart
    And I remove "Sauce Labs Backpack" from the cart page
    Then I should not see the product "Sauce Labs Backpack" in the cart
    And the cart item count should not be visible
