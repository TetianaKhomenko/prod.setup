@S0cee0838
Feature: Edit/Delete Todos

Background:
    Given I have these todos on my list
      | name         |
      | Milk         |
      | Butter       |
      | Bread        |

@Tbbb00046
Scenario: Edited todo is saved on blur
  When I edit the first todo
  Then I see that the todo text has been changed

@T5fd27e9e
Scenario: Delete todos
  When I delete the first todo
  Then the todo should disappear from the list
