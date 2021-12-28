import styles from "./day.module.css";
import Acardeon from "./acardeon/Acardeon";
import AcarderonEghamat from "./acardeon/acardeonEghamat";
import AcardeonTransfer from "./acardeon/AcardeonTransfer";
import AcardeonGashtha from "./acardeon/AcardeonGashtha";
import { useState } from "react";
import { useMeals, useMealsAction } from "../../context/MealsProvider";

const MealList = ({ dayIndex }) => {
  const meals = useMeals();

  return (
    <div className={styles.containerMeal}>
      {meals[dayIndex].map((meal, index) => {
        return (
          meal.status &&
          (meal.id == 8 ? (
            <div className={styles.mealRow}>
              <p className={styles.titlepText}>{meal.title}</p>
              <p>{meals[dayIndex][index].price}</p>
              <div className={styles.priceOtherBox}>
                <div className={styles.acaardeon}>
                  <Acardeon index={index} dayIndex={dayIndex} />
                </div>
              </div>
            </div>
          ) : meal.id == 6 ? (
            <div className={styles.mealRow}>
              <p className={styles.titlepText}>{meal.title}</p>
              <p>{meals[dayIndex][index].price}</p>
              <div className={styles.priceOtherBox}>
                <div className={styles.acaardeon}>
                  <AcarderonEghamat index={index} dayIndex={dayIndex} />
                </div>
              </div>
            </div>
          ) : meal.id == 0 ? (
            <div className={styles.mealRow}>
              <p className={styles.titlepText}>{meal.title}</p>
              <p>{meals[dayIndex][index].price}</p>
              <div className={styles.priceOtherBox}>
                <div className={styles.acaardeon}>
                  <AcardeonGashtha index={index} dayIndex={dayIndex} />
                </div>
              </div>
            </div>
          ) : meal.id == 4 ? (
            <div className={styles.mealRow}>
              <p className={styles.titlepText}>{meal.title}</p>
              <p>{meals[dayIndex][index].price}</p>
              <div className={styles.priceOtherBox}>
                <div className={styles.acaardeon}>
                  <AcardeonGashtha index={index} dayIndex={dayIndex} />
                </div>
              </div>
            </div>
          ) : meal.id == 7 ? (
            <div className={styles.mealRow}>
              <p className={styles.titlepText}>{meal.title}</p>
              <p>{meals[dayIndex][index].price}</p>
              <div className={styles.priceOtherBox}>
                <div className={styles.acaardeon}>
                  <AcardeonGashtha index={index} dayIndex={dayIndex} />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.mealRow}>
              <p className={styles.titlepText}>{meal.title}</p>
              <p>{meals[dayIndex][index].price}</p>
              <div className={styles.priceOtherBox}>
                <div className={styles.acaardeon}>
                  <AcardeonTransfer index={index} dayIndex={dayIndex} />
                </div>
              </div>
            </div>
          ))
        );
      })}
    </div>
  );
};

export default MealList;
