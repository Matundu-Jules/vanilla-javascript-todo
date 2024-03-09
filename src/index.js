import './style.css'
import { displayTodos } from './features/displayTodos.js'
import { addTodo } from './features/addTodo.js'

// Get form and input element
const form = document.querySelector('form')
const input = document.querySelector('form > input')

// Array of todos
const todos = [
    {
        text: "I'm a todo",
        done: false,
    },
    {
        text: 'Todo done',
        done: true,
    },
]

// Display todos
displayTodos(todos)

form.addEventListener('submit', (e) => {
    e.preventDefault() // Delete default comportement

    // Save input value and clear input
    const value = input.value
    input.value = ''

    // Add the new todo in the todos array
    addTodo(todos, value)

    // Refresh todo list
    displayTodos(todos)
})
