import styles from "./day.module.css";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegSnowflake } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import Modal from "./Modal";
import MealList from "./MealList";
import { useMeals, useMealsAction } from "../../context/MealsProvider";
const Day = ({
  day,
  deleteHandler,
  index,
  allMealsHandler,
  name,
  catValue,
  changeHandlerNaghlie,
  carValue,
  vehValue,
  changeHandlerVehicle,
}) => {
  const meals = useMeals();
  const dispatch = useMealsAction();
  const [isOn, setIsOn] = useState([
    { status: false, id: 0 },
    { status: false, id: 1 },
    { status: false, id: 2 },
  ]);
  const statusChanger = (id) => {
    setIsOn((prevState) => {
      return [...prevState, (isOn[id].status = !isOn[id].status)];
    });
  };
  const addMealsHandler = () =>
    dispatch({ type: "addMealsHandler", id: meals.id });

  const [isKhareji, setIsKhareji] = useState(false);
  useEffect(() => {
    let flag = false;
    for (let index = 0; index < catValue.length; index++) {
      if (catValue[index].value == "khareji") {
        setIsKhareji(true);
        flag = true;
      }
    }
    if (!flag) setIsKhareji(false);
  }, [catValue]);

  useEffect(() => {
    allMealsHandler(meals, index);
  }, [meals]);

  const renderdays = () => {
    if (index === 0) {
      return (
        <div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>روز حرکت</p>
            <input
              type="text"
              className={styles.inputBoxs}
              value={meals[index][9].name}
              onChange={(e) =>
                dispatch({
                  type: "changer",

                  id: 9,
                  event: e,
                })
              }
            />
          </div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>زمان حرکت</p>
            <input
              type="text"
              className={styles.inputBoxs}
              value={meals[index][10].name}
              onChange={(e) =>
                dispatch({
                  type: "changer",

                  id: 10,
                  event: e,
                })
              }
            />
          </div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>محل حرکت</p>
            <input
              type="text"
              className={styles.inputBoxs}
              value={meals[index][11].name}
              onChange={(e) =>
                dispatch({
                  type: "changer",

                  id: 11,
                  event: e,
                })
              }
            />
          </div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>مبدا</p>
            <input
              type="text"
              className={styles.inputBoxs}
              value={meals[0][12].name}
              onChange={(e) =>
                dispatch({
                  type: "changer",

                  id: 12,
                  event: e,
                })
              }
            />
          </div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>ظرفیت کامل تور</p>
            <input
              type="text"
              className={styles.inputBoxs}
              value={meals[0][13].name}
              onChange={(e) =>
                dispatch({
                  type: "changer",

                  id: 13,
                  event: e,
                })
              }
            />
          </div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>ظرفیت نمایشی</p>

            <input
              type="text"
              className={styles.inputBoxs}
              value={meals[0][14].name}
              onChange={(e) =>
                dispatch({
                  type: "changer",

                  id: 14,
                  event: e,
                })
              }
            />
            {parseInt(meals[0][14].name) > parseInt(meals[0][13].name) && (
              <p className={styles.tedadi}>از ظرفیت کامل بیشتر نباشد</p>
            )}
          </div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>مبلغ بیمه</p>
            <input
              type="text"
              className={styles.inputBoxs}
              value={meals[index][15].price}
              onChange={(e) =>
                dispatch({
                  type: "changing",

                  id: 15,
                  event: e,
                })
              }
            />
          </div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>ترنسفر اصلی</p>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              className={styles.inputBoxs}
              value={meals[index][16].trans}
              onChange={(e) =>
                dispatch({
                  type: "changeHandlerTrans",

                  id: 16,
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
              <option value="omumi">عمومی</option>
              <option value="darbasti">دربستی</option>
            </select>
          </div>
          <div className={styles.flewRowDay}>
            <p className={styles.detailp}>قیمت ترنسفر</p>
            <input
              type="text"
              className={styles.inputBoxs}
              value={meals[0][17].price}
              onChange={(e) =>
                dispatch({
                  type: "changing",

                  id: 17,
                  event: e,
                })
              }
            />
          </div>
          {isKhareji && (
            <div className={styles.flewRowDay}>
              <p className={styles.detailp}>مبلغ سیم کارت</p>
              <input
                type="text"
                className={styles.inputBoxs}
                value={meals[index][18].price}
                onChange={(e) =>
                  dispatch({
                    type: "changing",

                    id: 18,
                    event: e,
                  })
                }
              />
            </div>
          )}
        </div>
      );
    }
  };
  const renderbtn = () => {
    if (index === 0) {
      return (
        <div>
          {/* <button
            type="button"
            className={styles.modalBtn}
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${index}`}
          >
            <AiOutlinePlus />
          </button> */}
        </div>
      );
    }
  };
  return (
    <div className={styles.dayBox}>
      <p className={styles.headTitle}>{name}</p>

      {renderdays()}
      <MealList
        meals={meals}
        dayIndex={index}
        vehValue={vehValue}
        changeHandlerVehicle={changeHandlerVehicle}
      />
      <div className={styles.flewRowCost}>
        <p className={styles.weather}> پیش بینی هوا</p>
        <div
          className={styles.detailCost}
          className={`d-flex flex-column  ${styles.imgWeatherBox} ${
            isOn[0].status && styles.green2
          }`}
          onClick={() => statusChanger(0)}
        >
          <FaRegSnowflake />
        </div>
        <div
          className={styles.detailCost2}
          className={`d-flex flex-column  ${styles.imgWeatherBox} ${
            isOn[1].status && styles.green2
          }`}
          onClick={() => statusChanger(1)}
        >
          <FaCloudRain />
        </div>
        <div
          className={styles.detailCost3}
          className={`d-flex flex-column  ${styles.imgWeatherBox} ${
            isOn[2].status && styles.green2
          }`}
          onClick={() => statusChanger(2)}
        >
          <IoSunnySharp />
        </div>
      </div>
      <div className={styles.btns}>
        {!renderbtn() ? (
          <div>
            <button
              type="button"
              className={styles.modalBtn}
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal-${index}`}
            >
              <AiOutlinePlus />
            </button>

            <button className={styles.deleteBtn} onClick={deleteHandler}>
              <AiFillDelete />
            </button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              className={styles.modalBtn}
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal-${index}`}
            >
              <AiOutlinePlus />
            </button>
          </div>
        )}
      </div>

      <Modal addMealsHandler={addMealsHandler} index={index} />
    </div>
  );
};

export default Day;
