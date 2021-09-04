@Sc691bb17
Feature: Persist Todos

Background:
    Given I have these todos on my list
      | name         |
      | Milk         |
      | Butter       |
      | Bread        |

@T57f9d270
Scenario: Todos survive a page refresh
  When I mark the first one as completed
  Then I still see the same todos