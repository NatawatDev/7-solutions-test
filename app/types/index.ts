export type BaseButtonProps = {
  title: string,
  action: () => void,
  isDisable? : boolean
}

export type TaskButton = {
  title: string,
  path: string
}

export type TodoItems = {
  type: string,
  name: string
}

export interface MapIdTodoItems extends TodoItems {
  id: number
}

export type ItemColumnProps = {
  dataList: MapIdTodoItems[],
  action: (parameters: MapIdTodoItems) => void
}

export type UserData = {
  firstName: string,
  lastName: string,
  gender: string,
  age: number,
  hair: { color: string },
  address: { postalCode: string },
  company: { department: string }
}

export type DepartmentData = {
  male: number,
  female: number,
  ageRange: string,
  hair: hairCount,
  addressUser: address
}

export type KeyDepartmentData = {
  [department: string]: DepartmentData
}

type hairCount = {
  [color: string]: number
}

type address = {
  [fullName: string]: string
}