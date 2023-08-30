import { type TodoId, type listOfTodos, type CheckTodo } from '../types'
import { Todo } from './Todo'

interface props {
  todos: listOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  handleCheckTodo: CheckTodo
}

export const Todos: React.FC<props> = ({ todos, onRemoveTodo, handleCheckTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            handleCheckTodo={handleCheckTodo}
          />
        </li>
      ))}
    </ul>
  )
}
