import { type TODO_FILTERS } from "./consts"

export interface TodoType {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, "id">
export type TodoTitle = Pick<Todo, "title">
export type TodoCompleted = Pick<Todo, "completed">

export type ListOfTodos = TodoType[]
export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
