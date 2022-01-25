import React from "react";
import { connect } from "react-redux";

import { fetchTodos, Todo, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map(todo => {
      return (
        <div key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
