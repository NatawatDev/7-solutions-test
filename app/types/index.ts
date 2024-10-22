export type BaseButtonProps = {
  title: string,
  action: () => void,
  isDisable? : boolean
}

export type TaskButton = {
  title: string;
  path: string;
}

export type TodoItems = {
  type: string,
  name: string
}

export interface MapIdTodoItems extends TodoItems {
  id: number,
  isSelected: boolean
}

export type ItemColumnProps = {
  dataList: MapIdTodoItems[]
  action: (parameters: MapIdTodoItems) => void;
}
