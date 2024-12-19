import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () => {
  const { todos } = useContext(TodoListContext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        textAlign: "center",
        height: "140px",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p className="item" key={todo.id}>
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos</div>
      )}
      <button className="ui button primary" onClick={changeTheme}>
        Change the theme
      </button>
    </div>
  );
};

export default TodoList;
