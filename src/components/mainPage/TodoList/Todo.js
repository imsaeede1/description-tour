import styles from "./todoList.module.css";
import { BiTrash } from "react-icons/bi";
const Todo = ({ todo, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.todoContainer} key={todo.id}>
        <div>
          <button className={styles.btn} onClick={onDelete}>
            <BiTrash />
          </button>
        </div>
        <div className={`${todo.isCompleted ? styles.complete : styles.red}`}>
          {todo.price}
        </div>
        <div className={`${todo.isCompleted ? styles.complete : styles.red}`}>
          {todo.text}
        </div>
      </div>
    </div>
  );
};

export default Todo;
