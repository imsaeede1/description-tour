import { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from "../mainPage.module.css";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input, price) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      price: price,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className={styles.inputBox2}>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} deleteHandler={deleteHandler} />
    </div>
  );
};

export default TodoApp;
