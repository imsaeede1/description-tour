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
                <p className={styles.text}>نوع</p>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  className={styles.inputBox}
                >
                  <option
                    selected
                    hidden
                    disabled
                    className={styles.selected}
                  ></option>
                  <option value="1">قایق</option>
                  <option value="2">نیسان</option>
                  <option value="2">offroad</option>
                  <option value="2">تراکتور</option>
                  <option value="2">موتور سه چرخ</option>
                </select>
              </div>

              <div className={styles.formInput}>
                <p className={styles.text}>ترنسفر</p>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  className={styles.inputBox}
                  value={meals[dayIndex][8].vehValue}
                  onChange={(e) =>
                    dispatch({
                      day: dayIndex,
                      type: "changeHandlerVehicle",

                      id: 8,
                      event: e,
                    })
                  }
                >
                  <option
                    selected
                    hidden
                    disabled
                    className={styles.selected}
                  ></option>
                  <option value="endividual" className={styles.cnterItem}>
                    انفرادی
                  </option>
                  <option value="group">گروهی</option>
                </select>
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>قیمت</p>
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
                <p className={styles.text}>ظرفیت</p>
                <input type="number" className={styles.inputBox} />
              </div>
              <div className={styles.radioBox}>
                <div class="form-check m-2">
                  <label class="form-check-label" for="flexRadioDefault1">
                    خصوصی
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
                <div class="form-check m-2">
                  <label class="form-check-label" for="flexRadioDefault2">
                    عمومی
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acardeon;
