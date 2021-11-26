import styles from "../detailPage/detail.module.css";
const NextDay = ({ addDayHandler }) => {
  return (
    <div>
      <button className={styles.nextBtn} onClick={() => addDayHandler()}>
        <span>+</span> روز بعدی
      </button>
    </div>
  );
};

export default NextDay;
