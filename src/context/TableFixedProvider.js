import React, { useReducer } from "react";
import { useContext } from "react";

const TableFixedContext = React.createContext();
const TableFixedContextDispatcher = React.createContext();

const initialState = [
  {
    name: "هزینه ترنسفر",
    fixedCosts: 0,
    nextRun: 0,
    id: 1,
  },
  {
    name: "هزینه های ثابت راننده و لیدر",
    fixedCosts: 0,
    nextRun: 0,
    id: 2,
  },
  {
    name: "هزینه اقامتگاه در حالت دربستی",
    fixedCosts: 0,
    nextRun: 0,
    id: 3,
  },
  {
    name: "موسیقی محلی و سورپرایز",
    fixedCosts: 0,
    nextRun: 0,
    id: 4,
  },
  {
    name: "وروذی های اتوبوس",
    fixedCosts: 0,
    nextRun: 0,
    id: 5,
  },
  {
    name: "وروذی های اتوبوس",
    fixedCosts: 0,
    nextRun: 0,
    id: 6,
  },
  {
    name: "هزینه تبلیغات",
    fixedCosts: 0,
    nextRun: 0,
    id: 7,
  },
  {
    name: "پورسانت کل کانتر فروش",
    fixedCosts: 0,
    nextRun: 0,
    id: 8,
  },
  {
    name: "مجموعه هزینه های ثابت",
    fixedCosts: 0,
    nextRun: 0,
    id: 9,
  },
  {
    name: "هزینه های پیش بینی نشد",
    fixedCosts: 0,
    nextRun: 0,
    id: 10,
  },
  {
    name: "جمع نهایی",
    fixedCosts: 0,
    nextRun: 0,
    id: 11,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "changeHandler": {
      // const index = state.findIndex((item) => item.id === action.id);
      const Table = [...state];

      Table[action.id][action.case] = action.event.target.value;
      // const updatedTables = [...state];
      // updatedTables[index] = Table;
      // console.log(updatedTables, "updatedTables");
      return Table;
    }

    default:
      return state;
  }
};

const TableFixedProvider = ({ children }) => {
  const [TableFixeds, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TableFixedContext.Provider value={TableFixeds}>
        <TableFixedContextDispatcher.Provider value={dispatch}>
          {children}
        </TableFixedContextDispatcher.Provider>
      </TableFixedContext.Provider>
    </div>
  );
};

export default TableFixedProvider;

export const useTableFixeds = () => useContext(TableFixedContext);
export const useTableFixedsAction = () =>
  useContext(TableFixedContextDispatcher);
