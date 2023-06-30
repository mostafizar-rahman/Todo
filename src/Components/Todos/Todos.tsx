import React from 'react'
import Todo from '../Todo/Todo'
import "./Todos.css"
import TodoTable from '../TodoTable/TodoTable'
const Todos = () => {
  return (
    <div>
      <h3 className='title'>ToDo</h3>
      <Todo/>
      <TodoTable/>
    </div>
  )
}

export default Todos