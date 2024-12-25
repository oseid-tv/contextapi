import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const { todos, dispatch } = useContext(TodoListContext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todo });
    setTodo("");
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              className="item"
              id={todo.id}
              key={todo.id}
              onClick={handleRemoveTodo}
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos</div>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo">Add todo:</label>
        <input type="text" id="todo" value={todo} onChange={handleChange} />
        <input
          type="submit"
          className="ui button primary"
          value="Add New Todo"
        />
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        Change the theme
      </button>
    </div>
  );
};

export default TodoList;
