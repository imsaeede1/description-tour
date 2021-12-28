import styles from "./day.module.css";
import { useState, useEffect } from "react";
import { useMeals, useMealsAction } from "../../context/MealsProvider";

const Modal = ({ index }) => {
  const dispatch = useMealsAction();

  const meals = useMeals();
  const [isShow, setIsShow] = useState([
    { status: false, id: 0 },
    { status: false, id: 1 },
    { status: false, id: 2 },
    { status: false, id: 3 },
    { status: false, id: 4 },
    { status: false, id: 5 },
    { status: false, id: 6 },
    { status: false, id: 7 },
    { status: false, id: 8 },
  ]);

  const statusChanger = (id) => {
    setIsShow((prevState) => {
      return [...prevState, (isShow[id].status = !isShow[id].status)];
    });
  };

  return (
    <div
      class="modal fade"
      id={`exampleModal-${index}`}
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
              <div
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[0].status && styles.green
                }`}
                onClick={() => statusChanger(0)}
              >
                <img
                  alt=""
                  src="../../images/morning.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[index][0].title}</p>
              </div>
              <div
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[1].status && styles.green
                }`}
                onClick={() => statusChanger(1)}
              >
                <img
                  alt=""
                  src="../../images/braekefast.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[index][1].title}</p>
              </div>
            </div>
            <div
              className={`d-flex flex-row justify-content-around  ${styles.rowItemsBox}`}
            >
              <div
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[2].status && styles.green
                }`}
                onClick={() => statusChanger(2)}
              >
                <img
                  alt=""
                  src="../../images/lunch.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[index][2].title}</p>
              </div>
              <div
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[3].status && styles.green
                }`}
                onClick={() => statusChanger(3)}
              >
                <img
                  alt=""
                  src="../../images/mianvade.png"
                  className={styles.imgBox2}
                />
                <p className={styles.textModal}>{meals[index][3].title}</p>
              </div>
            </div>
            <div
              className={`d-flex flex-row justify-content-around  ${styles.rowItemsBox}`}
            >
              <div
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[4].status && styles.green
                }`}
                onClick={() => statusChanger(4)}
              >
                <img
                  alt=""
                  src="../../images/afternoon.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[index][4].title}</p>
              </div>
              <div
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[5].status && styles.green
                }`}
                onClick={() => statusChanger(5)}
              >
                <img
                  alt=""
                  src="../../images/dinner.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[index][5].title}</p>
              </div>
            </div>
            <div
              className={`d-flex flex-row justify-content-around  ${styles.rowItemsBox}`}
            >
              <div
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[6].status && styles.green
                }`}
                onClick={() => statusChanger(6)}
              >
                <img
                  alt=""
                  src="../../images/eghamat.svg"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[index][6].title}</p>
              </div>
              <div
                onClick={() => statusChanger(7)}
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[7].status && styles.green
                }`}
              >
                <img
                  alt=""
                  src="../../images/night.png"
                  className={styles.imgBox}
                />
                <p className={styles.textModal}>{meals[index][7].title}</p>
              </div>
            </div>
            <div
              className={`d-flex flex-row justify-content-around  ${styles.rowItemsBox}`}
            >
              <div
                onClick={() => statusChanger(8)}
                className={`d-flex flex-column  ${styles.imgPriceBox} ${
                  isShow[8].status && styles.green
                }`}
              >
                <img
                  alt=""
                  src="../../images/vehicl.png"
                  className={styles.imgBox2}
                />
                <p className={styles.textModal}>{meals[index][8].title}</p>
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
              data-bs-dismiss="modal"
              onClick={() => {
                const activeItems = [];
                for (let index = 0; index < 9; index++) {
                  if (isShow[index].status) {
                    activeItems.push(isShow[index].id);
                  }
                }
                dispatch({
                  type: "addMealsHandler",
                  activeItems: activeItems,
                  day: index,
                });
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
