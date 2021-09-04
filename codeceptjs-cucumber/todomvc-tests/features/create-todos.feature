@S5c97daee
Feature: Create Todos with BDD

@Te484be08
Scenario: Create a single todo item @bdd
  Given I have an empty todo list
  When I create a todo 1
  Then I see the new todo on my list

@T3b6734d6
Scenario: Create multiple todos @bdd
  Given I have these todos on my list
    | name         |
    | Milk         |
    | Butter       |
    | Bread        |
  Then  I see 4 todos on my list