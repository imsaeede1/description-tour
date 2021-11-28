import Day from "./Day";
import styles from "./day.module.css";
const DayList = ({ days, setDays }) => {
  const deleteHandler = (id) => {
    const filterItem = days.filter((p) => p.id !== id);
    setDays(filterItem);
  };
  return (
    <div className={styles.container}>
      {days.map((day, index) => {
        return (
          <Day
            day={day}
            key={day.id}
            deleteHandler={() => deleteHandler(day.id)}
          />
        );
      })}
    </div>
  );
};

export default DayList;
