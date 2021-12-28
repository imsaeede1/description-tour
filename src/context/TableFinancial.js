import React, { useReducer } from "react";
import { useContext } from "react";

const TableFinacialContext = React.createContext();
const TableFinacialContextDispatcher = React.createContext();

const initialState = [
  {
    name: "هزینه ثابت",
    estimate: 0,
    capacity: 0,
    nextRun: 0,
    id: 1,
  },
  {
    name: "هزینه های متغیر",
    estimate: 0,
    capacity: 0,
    nextRun: 0,
    id: 2,
  },
  {
    name: "کمسیون آزانس",
    estimate: 0,
    nextRun: 0,
    id: 3,
  },
  {
    name: "هزینه نهایی",
    estimate: 0,
    capacity: 0,
    nextRun: 0,
    id: 4,
  },
  {
    name: "قیمت فروش",
    estimate: 0,
    nextRun: 0,
    id: 5,
  },
  {
    name: "حاشیه سود",
    estimate: 0,
    capacity: 0,
    nextRun: 0,
    id: 6,
  },
  {
    name: "براورد سود",
    estimate: 0,
    capacity: 0,
    nextRun: 0,
    id: 7,
  },
  {
    name: "",
    estimate: 0,
    capacity: 0,

    id: 8,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "changeHandler": {
      const Table = [...state];
      Table[action.id][action.case] = action.event.target.value;
      return Table;
    }
    case "changeHandlerTedad": {
      const Table = [...state];
      Table[action.id][action.case] = action.event.target.value;
      return Table;
    }

    default:
      return state;
  }
};

const TableFinacialProvider = ({ children }) => {
  const [TableFinacials, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TableFinacialContext.Provider value={TableFinacials}>
        <TableFinacialContextDispatcher.Provider value={dispatch}>
          {children}
        </TableFinacialContextDispatcher.Provider>
      </TableFinacialContext.Provider>
    </div>
  );
};

export default TableFinacialProvider;

export const useTableFinacials = () => useContext(TableFinacialContext);
export const useTableFinacialsAction = () =>
  useContext(TableFinacialContextDispatcher);
