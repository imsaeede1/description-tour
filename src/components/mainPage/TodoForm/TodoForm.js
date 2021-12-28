import { useRef, useState, useEffect } from "react";
import styles from "../mainPage.module.css";
const TodoForm = (props) => {
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const changeHandlerPrice = (e) => {
    setPrice(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      alert("enter todo");
      return;
    }
    if (!price) {
      alert("enter todo");
      return;
    }

    props.addTodoHandler(value, price);
    setValue("");
    setPrice("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <button type="submit" className={styles.inputBtn}>
          +
        </button>
        <input
          type="number"
          onChange={changeHandlerPrice}
          value={price}
          ref={inputRef}
          className={styles.inputName}
          placeholder="قیمت "
        />
        <textarea
          placeholder="نام هزینه"
          type="text"
          onChange={changeHandler}
          value={value}
          ref={inputRef}
          className={styles.inputName2}
        ></textarea>
      </form>
    </div>
  );
};

export default TodoForm;
