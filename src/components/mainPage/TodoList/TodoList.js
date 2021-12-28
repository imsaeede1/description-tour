import { useState } from "react";
import styles from "./todoList.module.css";
import Todo from "./Todo";

const TodoList = ({ todos, deleteHandler }) => {
  const renderTodos = () => {
    if (todos.length === 0) return;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => deleteHandler(todo.id)}
        />
      );
    });
  };

  return <div className={styles.felan}>{renderTodos()}</div>;
};

export default TodoList;
