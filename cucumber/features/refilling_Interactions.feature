Feature: Refillig coffee machine
    As an employee in charge of maintaining the coffe machine
    I want to be able to refill the components in the coffee
    To make sure that we can get the beverages

    Background:
        Given that the machine is plugged in
        And that I have opened the lid to the deposit

    Scenario Outline:
        Given that the <typeOfRefill> deposit contains <startValue>
        And I put in <amountToFill> in the <typeOfRefill> deposit
        When I close the lid of the deposit
        Then I should have <endAmount> in the <typeOfRefill> deposit

        Examples:
            | typeOfRefill | startValue | amountToFill | endAmount |
            | sugar        | 0          | 600          | 600       |
            | sugar        | 200        | 50           | 250       |
            | coffee       | 10         | 720          | 730       |
            | coffee       | 800        | 137          | 937       |
            | milk         | 53         | 500          | 553       |
            | milk         | 40         | 623          | 663       |
            | chocolate    | 250        | 378          | 628       |
            | chocolate    | 0          | 925          | 925       |
            | cup          | 20         | 24           | 30        |
            | cup          | 10         | 72           | 40        |
