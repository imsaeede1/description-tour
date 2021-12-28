import React, { useReducer } from "react";
import { useContext } from "react";

const MealContext = React.createContext();
const MealContextDispatcher = React.createContext();

const initialState = [
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, vehValue: "", id: 8, status: false },
    { title: "روز", name: "", id: 9 },
    { title: " زمان", name: "", id: 10 },
    { title: " محل", name: "", id: 11 },
    { title: " مبدا", name: "", id: 12 },
    { title: "ظرفیت", name: 0, id: 13 },
    { title: "نمایشی", name: 0, id: 14 },
    { title: " بیمه", price: 0, id: 15 },
    { title: " ترنسفر", name: "", value: "", trans: "", id: 16 },
    { title: " ترنسفر قیمت", price: 0, id: 17 },
    { title: " سیم کارت", price: 0, id: 18 },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, id: 8, vehValue: "", status: false },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, vehValue: "", id: 8, status: false },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, id: 8, vehValue: "", status: false },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, id: 8, vehValue: "", status: false },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, id: 8, vehValue: "", status: false },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, id: 8, vehValue: "", status: false },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, id: 8, vehValue: "", status: false },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, id: 8, vehValue: "", status: false },
  ],
  [
    { title: "گشت صبح", price: 0, id: 0, status: false },
    { title: "صبحانه", price: 0, id: 1, status: false },
    { title: "ناهار", price: 0, id: 2, status: false },
    { title: "میان وعده", price: 0, id: 3, status: false },
    { title: "گشت عصر ", price: 0, id: 4, status: false },
    { title: "شام", price: 0, id: 5, status: false },
    { title: "اقامت", price: 0, id: 6, status: false },
    { title: "برنامه شب", price: 0, id: 7, status: false },
    { title: " نقلیه کمکی", price: 0, id: 8, vehValue: "", status: false },
  ],
];

const reducer = (state, action) => {
  switch (action.type) {
    case "changeHandler": {
      const allDays = [...state];
      allDays[action.day][action.id].price = action.event.target.value;

      return allDays;
    }
    case "changer": {
      const allDays = [...state];
      allDays[0][action.id].name = action.event.target.value;

      return allDays;
    }

    case "changeHandlerVehicle": {
      const allDays = [...state];
      allDays[action.day][action.id].vehValue = action.event.target.value;
      return allDays;
    }
    case "changeHandlerTrans": {
      const allDays = [...state];
      allDays[0][action.id].trans = action.event.target.value;
      return allDays;
    }
    case "changing": {
      const allDays = [...state];
      allDays[0][action.id].price = action.event.target.value;

      return allDays;
    }
    case "addMealsHandler": {
      const allDays = [...state];
      for (let index1 = 0; index1 < allDays[action.day].length; index1++) {
        let temp = false;
        for (let index2 = 0; index2 < action.activeItems.length; index2++) {
          if (state[action.day][index1].id == action.activeItems[index2]) {
            temp = true;
            allDays[action.day][index1].status = true;
          }
        }
        if (!temp) {
          allDays[action.day][index1].status = false;
        }
      }
      return allDays;
    }
    case "reset": {
      const allDays = [...state];
      for (let index = 0; index < allDays[action.dayNum].length; index++) {
        allDays[action.dayNum][index].price = 0;
      }
      return allDays;
    }
    default:
      return state;
  }
};

const MealProvider = ({ children }) => {
  const [Meals, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <MealContext.Provider value={Meals}>
        <MealContextDispatcher.Provider value={dispatch}>
          {children}
        </MealContextDispatcher.Provider>
      </MealContext.Provider>
    </div>
  );
};

export default MealProvider;

export const useMeals = () => useContext(MealContext);
export const useMealsAction = () => useContext(MealContextDispatcher);
