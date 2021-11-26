import styles from "./day.module.css";
import { useState } from "react";
const Modal = ({ meals, addMealsHandler }) => {
  const [currentMeals, setCurrentMeals] = useState(meals);
  const onChange = (event, index) => {
    let ids = [...currentMeals]; // create the copy of state array
    ids[index].price = event.target.value; //new value
    setCurrentMeals(() => [...ids]);
  };

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div className={`modal-body d-flex flex-column  ${styles.mainBox}`}>
            <div
              className={`d-flex flex-row justify-content-around  ${styles.rowItemsBox}`}
            >
              <div className={`d-flex flex-column  ${styles.imgPriceBox}`}>
                <img
                  alt=""
                  src="../../images/morning.png"
                  className={styles.imgBox}
                />

                <p className={styles.textModal}>{meals[0].title}</p>
                <input
                  className={styles.inputBox}
                  type="text"
                  defaultValue={meals[0].price}
                  value={currentMeals[0].price}
                  onChange={(e) => onChange(e, 0)}
                />
              </div>
              <div className={`d-flex flex-column  ${styles.imgPriceBox}`}>
                <img
                  alt=""
                  src="../../images/braekefast.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[1].title}</p>
                <input
                  className={styles.inputBox}
                  type="text"
                  defaultValue={meals[1].price}
                  value={currentMeals[1].price}
                  onChange={(e) => onChange(e, 1)}
                />
              </div>
            </div>
            <div
              className={`d-flex flex-row justify-content-around  ${styles.rowItemsBox}`}
            >
              <div className={`d-flex flex-column  ${styles.imgPriceBox}`}>
                <img
                  alt=""
                  src="../../images/afternoon.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[2].title}</p>
                <input
                  className={styles.inputBox}
                  type="text"
                  defaultValue={meals[2].price}
                  value={currentMeals[2].price}
                  onChange={(e) => onChange(e, 2)}
                />
              </div>
              <div className={`d-flex flex-column  ${styles.imgPriceBox}`}>
                <img
                  alt=""
                  src="../../images/lunch.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[3].title}</p>
                <input
                  className={styles.inputBox}
                  type="text"
                  defaultValue={meals[3].price}
                  value={currentMeals[3].price}
                  onChange={(e) => onChange(e, 3)}
                />
              </div>
            </div>
            <div
              className={`d-flex flex-row justify-content-around  ${styles.rowItemsBox}`}
            >
              <div className={`d-flex flex-column  ${styles.imgPriceBox}`}>
                <img
                  alt=""
                  src="../../images/braekefast.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[4].title}</p>
                <input
                  className={styles.inputBox}
                  type="text"
                  defaultValue={meals[4].price}
                  value={currentMeals[4].price}
                  onChange={(e) => onChange(e, 4)}
                />
              </div>
              <div className={`d-flex flex-column  ${styles.imgPriceBox}`}>
                <img
                  alt=""
                  src="../../images/afternoon.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[5].title}</p>
                <input
                  className={styles.inputBox}
                  type="text"
                  defaultValue={meals[5].price}
                  value={currentMeals[5].price}
                  onChange={(e) => onChange(e, 5)}
                />
              </div>
            </div>
            <div
              className={`d-flex flex-row justify-content-around  ${styles.rowItemsBox}`}
            >
              <div className={`d-flex flex-column  ${styles.imgPriceBox}`}>
                <img
                  alt=""
                  src="../../images/braekefast.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[6].title}</p>
                <input
                  className={styles.inputBox}
                  type="text"
                  defaultValue={meals[6].price}
                  value={currentMeals[6].price}
                  onChange={(e) => onChange(e, 6)}
                />
              </div>
              <div className={`d-flex flex-column  ${styles.imgPriceBox}`}>
                <img
                  alt=""
                  src="../../images/lunch.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[7].title}</p>
                <input
                  className={styles.inputBox}
                  type="text"
                  defaultValue={meals[7].price}
                  value={currentMeals[7].price}
                  onChange={(e) => onChange(e, 7)}
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              بستن
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => {
                addMealsHandler(currentMeals);
              }}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

/* <button
onClick={() =>
  setIsShow((prevState) => {
    return [
      ...prevState,
      (isShow[3].status = !isShow[3].status),
    ];
  })
}
>
+
</button>
{isShow[3].status && (
<input
  type="text"
  value={meals.price}
  onChange={(e) => onChange(e, meals.id)}
/>
)} */

// const [isShow, setIsShow] = useState([
//   { status: false },
//   { status: false },
//   { status: false },
//   { status: false },
//   { status: false },
//   { status: false },
//   { status: false },
//   { status: false },
// ]);
