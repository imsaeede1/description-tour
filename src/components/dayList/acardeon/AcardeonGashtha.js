import styles from "./acardeon.module.css";
import { useMeals, useMealsAction } from "../../../context/MealsProvider";

import { AiOutlinePlus } from "react-icons/ai";
const AcardeonGashtha = ({ index, dayIndex }) => {
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
                <p className={styles.text}>عنوان</p>
                <input type="text" className={styles.inputBox} />
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>ورودی نفری</p>
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
                <p className={styles.text}>توضیحات</p>
                <input type="text" className={styles.inputBox2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcardeonGashtha;
