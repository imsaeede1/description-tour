import Day from "./Day";
import styles from "./day.module.css";
import { useMeals, useMealsAction } from "../../context/MealsProvider";

const DayList = ({
  days,
  setDays,
  allMealsHandler,
  catValue,
  changeHandlerNaghlie,
  vehValue,
  changeHandlerVehicle,
}) => {
  const meals = useMeals();
  const dispatch = useMealsAction();
  const allDay = [
    "حرکت",
    "دوم",
    "سوم",
    "چهارم",
    "پنجم",
    "ششم",
    "هفتم",
    "هشتم",
    "نهم",
    "دهم",
  ];

  const deleteHandler = (dayNum, id) => {
    dispatch({ type: "reset", id: id, dayNum: dayNum });

    const filterItem = days.filter((p) => {
      console.log("p.id:", p.id, "id:", id);
      return p.id !== id;
    });

    setDays(filterItem);
  };
  return (
    <div className={styles.container}>
      {days.map((day, index) => {
        return (
          <Day
            day={day}
            name={`روز ${allDay[index]}`}
            index={index}
            deleteHandler={() => deleteHandler(day.dayNum, day.id)}
            allMealsHandler={allMealsHandler}
            catValue={catValue}
            changeHandlerNaghlie={changeHandlerNaghlie}
            vehValue={vehValue}
            changeHandlerVehicle={changeHandlerVehicle}
          />
        );
      })}
    </div>
  );
};

export default DayList;
