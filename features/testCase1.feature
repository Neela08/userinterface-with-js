Feature: User Interface

  Background: Start
    Given I am on the Home Page

  Scenario: task 1
    When I Click the link to navigate the next page
    Then The '1' card is open
    When I Input random valid password, email, accept the terms of use
    And I choose random domain
    And I click next button
    Then The '2' card is open
    When I Choose "3" random interests
    And upload image
    And click Next button
    Then The '3' card is open
