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

export type ItemColumnProps = {
  dataList: TodoItems[]
  // dataList: ItemColumnData,
  action: (parameters: TodoItems) => void;
}

// export interface ItemColumnData extends TodoItems {
//   id: number
// }