import styles from "./day.module.css";
import Acardeon from "./acardeon/Acardeon";
const MealList = ({ meals }) => {
  return (
    <div className={styles.containerMeal}>
      {meals.map((meal, index) => {
        return (
          meal.price != "" && (
            <div className={styles.mealRow}>
              <p className={styles.titlepText}>{meal.title}</p>
              <div className={styles.priceOtherBox}>
                <div className={styles.acaardeon}>
                  <Acardeon index={index} />
                </div>
                <p className={styles.titlepText}>{meal.price}</p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default MealList;
