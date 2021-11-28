import styles from "./day.module.css";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegSnowflake } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import Modal from "./Modal";
import MealList from "./MealList";

const Day = ({ day, deleteHandler }) => {
  const [meals, setMeals] = useState([
    { title: "گشت صبحگاهی", price: "", id: 1 },
    { title: "صبحانه", price: "", id: 2 },
    { title: "ناهار", price: "", id: 3 },
    { title: "میان وعده", price: "", id: 4 },
    { title: "گشت عصر گاهی", price: "", id: 5 },
    { title: "شام", price: "", id: 6 },
    { title: "اقامت", price: "", id: 7 },
    { title: "برنامه شب", price: "", id: 8 },
  ]);
  const addMealsHandler = (meals) => {
    setMeals([...meals]);
  };

  return (
    <div className={styles.dayBox}>
      <p className={styles.headTitle}>{day.name}</p>
      <MealList meals={meals} />
      <div className={styles.flewRowCost}>
        <p className={styles.detailCost}>
          <FaRegSnowflake className={styles.icon} />
          پیش بینی هوا
        </p>
        <p className={styles.detailCost2}>
          <FaCloudRain />
        </p>
        <p className={styles.detailCost3}>
          <IoSunnySharp />
        </p>
      </div>
      <div className={styles.btns}>
        <button
          type="button"
          className={styles.modalBtn}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <AiOutlinePlus />
        </button>
        <button className={styles.deleteBtn} onClick={deleteHandler}>
          <AiFillDelete />
        </button>
      </div>

      <Modal meals={meals} addMealsHandler={addMealsHandler} id={day.id} />
    </div>
  );
};

export default Day;
