import styles from "../detailPage/detail.module.css";
const NextDay = ({ addDayHandler }) => {
  return (
    <div class="d-flex justify-content-end">
      <button className={styles.nextBtn} onClick={() => addDayHandler()}>
        <span>+</span> روز بعدی
      </button>
    </div>
  );
};

export default NextDay;
