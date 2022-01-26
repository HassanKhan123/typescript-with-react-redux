import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTodos, Todo, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

const App2 = () => {
  const [fetching, setFetching] = useState(false);
  const todos = useSelector((state: StoreState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    setFetching(false);
  }, [todos]);

  const renderList = (): JSX.Element[] => {
    return todos.map(todo => {
      return (
        <div key={todo.id} onClick={() => onDeleteClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  const onDeleteClick = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const onButtonClick = (): void => {
    setFetching(true);
    dispatch(fetchTodos());
  };
  return (
    <div>
      <div>
        <button onClick={onButtonClick}>Fetch</button>
        {fetching ? <p>Loading !!! </p> : renderList()}
      </div>
    </div>
  );
};

export default App2;
