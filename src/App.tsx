import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId } from './types'

const mocktodo = [
  {
    id: 1,
    title: 'todo1',
    completed: true
  },
  {
    id: 2,
    title: 'todo2',
    completed: false
  },
  {
    id: 3,
    title: 'todo3',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mocktodo)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App
