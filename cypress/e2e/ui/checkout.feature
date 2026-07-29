@all @ui @checkout
Feature: SauceDemo Checkout and Regression
  As a logged-in user
  I want to complete the checkout process
  So that I can purchase products successfully

  Background:
    Given I am logged in as "standard_user" 

  Scenario: Complete checkout flow
    When I add "sauce-labs-backpack" to the cart
    And I go to the cart
    And I proceed to checkout
    And I fill in checkout info with first name "John" last name "Doe" and postal code "12345"
    And I continue to the overview
    And I finish the order
    Then I should see the order confirmation message "Thank you for your order!"

  Scenario: Verify product sorting by price high to low
    When I sort products by "Price (high to low)"
    Then the product prices should be sorted in descending order
