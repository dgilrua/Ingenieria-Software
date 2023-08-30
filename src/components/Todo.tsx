import { type TodoId, type Todo as TodoType, type CheckTodo } from '../types'

interface props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  handleCheckTodo: CheckTodo
}

export const Todo: React.FC<props> = ({ id, title, completed, onRemoveTodo, handleCheckTodo }) => {
  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCheckTodo({
      id,
      completed: event.target.checked
    })
  }
  return (
    <div className="view">
    <input
      className="toggle"
      type="checkbox"
      checked={completed}
      onChange={handleChangeEvent}
    />
    <label htmlFor="">{title}</label>
    <button
      className="destroy"
      onClick={() => {
        onRemoveTodo({ id })
      }}
    />
    </div>
  )
}
