Feature('@first Create Todos @step:06 @smoke @story:12345 @Sdb19bc6e')

Before(async ({ I, TodosPage }) => {
  TodosPage.goto()
});

/**
 * Happy Path tests
 */
Scenario('Create a new todo item @Tdda8f6a9', async ({ I, TodosPage }) => {
  I.say('Given I have an empty todo list')

  I.say('When I create a todo "foo"')
  TodosPage.enterTodo('foo')

  I.say('Then I see the new todo on my list')
  TodosPage.seeNumberOfTodos(1)

  I.saveScreenshot('create-todo-item.png')
});

Scenario('Create multiple todo items @T14ef7ab9', async ({ I, TodosPage }) => {
  I.say('Given I have an empty todo list')
  I.say('When I create todos "foo", "bar" and "baz"')
  TodosPage.enterTodo('foo')
  TodosPage.enterTodo('bar')
  TodosPage.enterTodo('baz')

  I.say('Then I have these 3 todos on my list')
  TodosPage.seeNumberOfTodos(3)

  I.saveScreenshot('create-multiple-todo-items.png')
})

/**
 * Edge cases
 */

const examples = new DataTable(['Todo Text', 'Result'])
examples.add(['Todo with umlauts äöü', 'is in list'])
examples.add(['Very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong TooooooooooooooooooooooooooooooooooooooooDooooooooooooooo', 'is in list'])
examples.add(['Todo with html code <script>alert("hello")</script>', 'is in list'])

Data(examples).
Scenario('Todos containing weird characters @T91db8c42', async ({ I, current, TodosPage }) => {
  I.say('When I enter {Todo Text}')
  TodosPage.enterTodo(current['Todo Text'])

  I.say('Then I see {Result}')
  if (current['Result'] === 'is in list') {
    TodosPage.seeNthTodoEquals(1, current['Todo Text'])
  }
})

Scenario('Text input field should be cleared after each item @Tc3af96c1', async ({ I, TodosPage }) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a new todo')
  TodosPage.enterTodo('foo')

  I.say('Then I see that the input field has been cleared')
  TodosPage.seeEmptyTodoInput()
})

Scenario('Text input should be trimmed @Tb94015b6', async ({ I, TodosPage }) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a todo with whitespace around the text')
  TodosPage.enterTodo('       Todo with lots of whitespace around       ')

  I.say('Then I see the trimmed text of the todo in the list')
  await TodosPage.seeNthTodoEquals(1, 'Todo with lots of whitespace around')
})


Scenario('New todos should be added to the bottom of the list @T45ec38f8', async ({ I, TodosPage }) => {
  I.say('Given I added some todos')
  TodosPage.enterTodo('first')
  TodosPage.enterTodo('second')
  TodosPage.enterTodo('last')

  I.say('When I look at my todo list')
  I.say('Then I see the todos in the order in which I added them')
  await TodosPage.seeNthTodoEquals(1, 'first')
  await TodosPage.seeNthTodoEquals(2, 'second')
  await TodosPage.seeNthTodoEquals(3, 'last')
})


Scenario('Footer should be visible when adding TODOs @T011d94e5', async ({ I, TodosPage }) => {
  I.say('Given I am adding todos')
  TodosPage.seeFooter()
  I.say('When I add a todo')
  TodosPage.enterTodo('first')
  I.say('Then I always see the footer')
  TodosPage.seeFooter()
})



