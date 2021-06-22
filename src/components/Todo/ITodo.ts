
export interface Todo {
  name: string,
  status: boolean
  id: number
}
export interface TodoList {
  [index: number]: [Todo]
}
export interface TodoProps {
  todo: Todo
}

