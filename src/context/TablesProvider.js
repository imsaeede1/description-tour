import React, { useReducer } from "react";
import { useContext } from "react";

const TableContext = React.createContext();
const TableContextDispatcher = React.createContext();

const initialState = [
  {
    name: "صبحانه",
    nafar: "0",
    tedad: 0,
    gheimatVahed: 0,
    gheimatKol: 0,
    badeEjra: 0,
    id: 1,
  },
  {
    name: "ناهار",
    nafar: "0",
    tedad: 0,
    gheimatVahed: 0,
    gheimatKol: 0,
    badeEjra: 0,
    id: 2,
  },
  {
    name: "شام",
    nafar: "0",
    tedad: 0,
    gheimatVahed: 0,
    gheimatKol: 0,
    badeEjra: 0,
    id: 3,
  },
  {
    name: "اقامت",
    nafar: "0",
    tedad: 0,
    gheimatVahed: 0,
    gheimatKol: 0,
    badeEjra: 0,
    id: 4,
  },
  {
    name: "ترنسفر اصلی لیدر",
    nafar: "0",
    tedad: 0,
    gheimatVahed: 0,
    gheimatKol: 0,
    badeEjra: 0,
    id: 5,
  },
  {
    name: "ترنسفر کمکی لیدر",
    nafar: "0",
    tedad: 0,
    gheimatVahed: 0,
    gheimatKol: 0,
    badeEjra: 0,
    id: 6,
  },
  {
    name: "دستمزد لیدر",
    nafar: 0,
    tedad: 0,
    gheimatVahed: 0,
    gheimatKol: 0,
    badeEjra: 0,
    id: 7,
  },
  {
    name: "لیدر محلی",
    nafar: 0,
    tedad: 0,
    gheimatVahed: 0,
    gheimatKol: 0,
    badeEjra: 0,
    id: 8,
  },
  {
    name: "جمع کل هزینه های ثابت",

    gheimatKol: 0,
    badeEjra: 0,
    id: 9,
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

      return Table;
    }

    default:
      return state;
  }
};

const TableProvider = ({ children }) => {
  const [Tables, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TableContext.Provider value={Tables}>
        <TableContextDispatcher.Provider value={dispatch}>
          {children}
        </TableContextDispatcher.Provider>
      </TableContext.Provider>
    </div>
  );
};

export default TableProvider;

export const useTables = () => useContext(TableContext);
export const useTablesAction = () => useContext(TableContextDispatcher);
