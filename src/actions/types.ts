import { DeleteTodosAction, FetchTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = DeleteTodosAction | FetchTodosAction;
