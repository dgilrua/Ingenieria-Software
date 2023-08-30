import { type TODO_FILTERS } from './consts'

type UUID = `${string}-${string}-${string}-${string}-${string}`

export interface Todo {
  id: UUID
  title: string
  completed: boolean
}

export type TodoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type CheckTodo = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
export type listOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
