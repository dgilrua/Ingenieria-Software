import { useState } from "react"
import { type TodoTitle } from "../types"

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [imputValue, setImputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onAddTodo({ title: imputValue })
    setImputValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="new-todo"
        value={imputValue}
        autoFocus
        placeholder="Que necesitas hacer?"
        onChange={event => {
          setImputValue(event.target.value)
        }}
      />
    </form>
  )
}
