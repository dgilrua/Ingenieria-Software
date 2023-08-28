import { type TodoId, type Todo as TodoType } from '../types'

interface props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <div className="view">
    <input
      className="toggle"
      type="checkbox"
      checked={completed}
      onChange={() => {}}
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
