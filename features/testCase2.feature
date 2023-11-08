Feature: User Interface

  Background: Start
    Given I am on the Home Page

  Scenario: task 2
    When I Click the link to navigate the next page
    Then I can see a help form
    When I Hide help form
    Then Help form is hidden

  Scenario: task 3
    When I Click the link to navigate the next page
    Then I can see cookies form
    When I accept cookies
    Then Cookies form is closed

  Scenario: task 4
    When I Click the link to navigate the next page
    Then I can see timer starts from  00:00
