import { useState } from 'react'
import { Todos } from './components/Todos'
import type { TodoId, Todo as TodoType, FilterValue, TodoTitle } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mocktodo = [
  {
    id: crypto.randomUUID(),
    title: 'todo1',
    completed: true
  },
  {
    id: crypto.randomUUID(),
    title: 'todo2',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'todo3',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mocktodo)
  const [filterSelected, setfilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCheckTodo = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const onFilterSelected = (filter: FilterValue): void => {
    setfilterSelected(filter)
  }

  const onClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    return todo
  })

  const onAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const activeCounts = todos.filter(todo => !todo.completed).length
  const completedCounts = todos.length - activeCounts

  return (
    <div className='todoapp'>
      <h1>To-do App</h1>
      <Header
        onAddTodo={onAddTodo}
      />
      <Todos
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
        handleCheckTodo={handleCheckTodo}
      />
      <Footer
        onFilterSelected={onFilterSelected}
        filterSelected={filterSelected}
        activeCounts={activeCounts}
        completedCounts={completedCounts}
        onClearCompleted={onClearCompleted}
      />
    </div>
  )
}

export default App
