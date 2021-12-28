import styles from "./acardeon.module.css";
import { useMeals, useMealsAction } from "../../../context/MealsProvider";

import { AiOutlinePlus } from "react-icons/ai";
const Acardeon = ({ index, dayIndex }) => {
  const meals = useMeals();
  const dispatch = useMealsAction();
  return (
    <div>
      <p>
        <button
          className={`btn ${styles.btnacardeon}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#acardeon-${index}-${dayIndex}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <AiOutlinePlus />
        </button>
      </p>
      <div className="collapse" id={`acardeon-${index}-${dayIndex}`}>
        <div>
          <div className={styles.containerAcardeon}>
            <div className={styles.containerMain}>
              <div className={styles.formInput}>
                <p className={styles.text}> نوع اقامت</p>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  className={styles.inputBox}
                >
                  <option selected className={styles.selected}></option>
                  <option value="1">هتل</option>
                  <option value="2">هتل آپارتمان</option>
                  <option value="2">اقامتگاه بوم گردی</option>
                  <option value="2">خانه محلی</option>
                  <option value="2">کمپ</option>
                </select>
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>
                  قیمت <span className={styles.shabi}>(شبی/نفری)</span>
                </p>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={meals[dayIndex][index].price}
                  onChange={(e) =>
                    dispatch({
                      type: "changeHandler",
                      day: dayIndex,
                      id: index,
                      event: e,
                    })
                  }
                />
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>نام</p>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={meals[dayIndex][index].name}
                  onChange={(e) =>
                    dispatch({
                      type: "changeHandl",
                      day: dayIndex,
                      id: index,
                      event: e,
                    })
                  }
                />
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>شماره</p>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={meals[dayIndex][index].name}
                  onChange={(e) =>
                    dispatch({
                      type: "changeHandl",
                      day: dayIndex,
                      id: index,
                      event: e,
                    })
                  }
                />
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>آدرس</p>
                <input type="text" className={styles.inputBox2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acardeon;
