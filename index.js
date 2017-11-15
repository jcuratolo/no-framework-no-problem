const React = require('react')
const ReactDOM = require("react-dom")
const EventEmitter = require("events")

const bus = new EventEmitter()

const todos = {
  service: {},
  collection: {},
  controller: {
    create: todo => {},
    edit: todo => {},
    delete: id => {}
  }
}

const subscribeController = (bus, name, controller) => {
  for (let key in controller) {
    bus.on(`${name}.${key}`, controller[key])
  }
}

connect(todos.controller).to(bus).as("todos")

subscribeController(bus, "todos", todos.controller)

const TodoList = () => <table>
  <tbody>
    <tr>
      <th>ID</th>
      <th>Text</th>
      <th>Completed</th>
    </tr>
    {state.todos.map((todo, i) => {
      return <tr key={i}>
        <td>{todo.id}</td>
        <td>{todo.text}</td>
        <td>{todo.completed}</td>
      </tr>
    })}
  </tbody>
</table>

const App = () => <TodoList />

const state = {
  todos: [
    {
      id: 1,
      text: "Do Leg Workout",
      completed: false
    }
  ]
}

window.state = state

setInterval(() => {
  ReactDOM.render(<App />, window.appContainer)  
}, 15)