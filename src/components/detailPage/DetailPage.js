import { useState, useEffect } from "react";
import NextDay from "../nextDay/NextDay";
import DayList from "../dayList/DayList";
import styles from "./detail.module.css";
import Cost from "../cost/Cost";
import SignupForm from "../SignupForm/SignUpForm";
import { useMeals } from "../../context/MealsProvider";
import { useTables, useTablesAction } from "../../context/TablesProvider";
import {
  useTableFixeds,
  useTableFixedsAction,
} from "../../context/TableFixedProvider";
import {
  useTableFinacials,
  useTableFinacialsAction,
} from "../../context/TableFinancial";
import { string } from "yup";

const DetailPage = ({ catValue }) => {
  const tables = useTables();
  const dispatch = useTablesAction();
  const meals = useMeals();
  const tableFixed = useTableFixeds();
  const dispatchFixed = useTableFixedsAction();
  const tableFinancial = useTableFinacials();
  const dispatchFinacial = useTableFinacialsAction();

  const [carValue, setCarValue] = useState("");

  const [days, setDays] = useState([{ name: "روز حرکت", id: 0 }]);
  const [isYekruze, setIsYekruze] = useState(false);
  useEffect(() => {
    let flag = false;
    for (let index = 0; index < catValue.length; index++) {
      if (catValue[index].value == "yekruze") {
        setIsYekruze(true);
        flag = true;
      }
    }
    if (!flag) setIsYekruze(false);
  }, [catValue]);

  const addDayHandler = () => {
    if (days.length < 10) {
      let newDay = {
        id: Math.floor(Math.random() * 1000),
        dayNum: days.length,
      };
      setDays([...days, newDay]);
    }
  };

  const [allMeals, setAllMeals] = useState([]);
  function allMealsHandler(newMeals, index) {
    let ids = [...allMeals];
    ids[index] = newMeals;
    setAllMeals(() => [...ids]);
  }

  function priceChecker(id2) {
    let totalPrice = 0;
    if (id2 == 8) {
      for (let dayId = 0; dayId < 10; dayId++) {
        if (
          meals[dayId][id2] != undefined &&
          meals[dayId][id2].vehValue == "endividual"
        ) {
          totalPrice += parseInt(meals[dayId][id2].price);
        }
      }
      if (totalPrice) return totalPrice;
      return false;
    } else if (id2 == 16) {
      for (let dayId = 0; dayId < 10; dayId++) {
        if (
          meals[dayId][id2] != undefined &&
          meals[dayId][id2].trans == "omumi"
        ) {
          totalPrice += parseInt(meals[dayId][17].price);
        }
      }
      if (totalPrice) return totalPrice;
      return false;
    } else {
      for (let dayId = 0; dayId < 10; dayId++) {
        if (meals[dayId][id2] != undefined) {
          totalPrice += parseInt(meals[dayId][id2].price);
        }
      }
    }

    if (totalPrice) return totalPrice;
    return false;
  }
  function transChecker(id2) {
    let totalPrice = 0;
    if (id2 == 8) {
      for (let dayId = 0; dayId < 10; dayId++) {
        if (
          meals[dayId][id2] != undefined &&
          meals[dayId][id2].vehValue == "group"
        ) {
          totalPrice += parseInt(meals[dayId][id2].price);
        }
      }
      if (totalPrice) return totalPrice;
      return false;
    } else if (id2 == 16) {
      for (let dayId = 0; dayId < 10; dayId++) {
        if (
          meals[dayId][id2] != undefined &&
          meals[dayId][id2].trans == "darbasti"
        ) {
          totalPrice += parseInt(meals[dayId][17].price);
        }
      }
      if (totalPrice) return totalPrice;
      return false;
    }
    // else {
    //   for (let dayId = 0; dayId < 10; dayId++) {
    //     if (meals[dayId][id2] != undefined) {
    //       totalPrice += parseInt(meals[dayId][id2].price);
    //     }
    //   }
    // }

    // if (totalPrice) return totalPrice;
    // return false;
  }
  function priceTranfer() {
    let a = transChecker(8);
    let b = transChecker(16);

    return a + b;
  }
  function sumChecker() {
    let sum = 0;
    for (let dayId = 0; dayId < 10; dayId++) {
      if (meals[dayId] != undefined) {
        for (let index2 = 0; index2 < meals[dayId].length; index2++) {
          if (index2 == 8 && meals[dayId][8].vehValue == "group") continue;
          if (index2 == 17 && meals[dayId][16].trans == "darbasti") continue;
          if (meals[dayId][index2].price != undefined) {
            sum += parseInt(meals[dayId][index2].price);
          }
        }
      }
    }

    if (sum) return sum;
    return 0;
  }

  function sum(row) {
    let a = parseInt(tables[row].nafar);
    let b = parseInt(tables[row].tedad);
    let c = parseInt(tables[row].gheimatVahed);
    if (!a) a = 0;
    if (!b) b = 0;
    if (!c) c = 0;

    return a * b * c;
  }
  function sumRun() {
    let a = parseInt(tables[0].badeEjra);
    let b = parseInt(tables[1].badeEjra);
    let c = parseInt(tables[2].badeEjra);
    let d = parseInt(tables[3].badeEjra);
    let e = parseInt(tables[4].badeEjra);
    let f = parseInt(tables[5].badeEjra);
    let g = parseInt(tables[6].badeEjra);
    let h = parseInt(tables[7].badeEjra);
    if (!a) a = 0;
    if (!b) b = 0;
    if (!c) c = 0;
    if (!d) d = 0;
    if (!e) e = 0;
    if (!f) f = 0;
    if (!g) g = 0;
    if (!h) h = 0;
    return a + b + c + d + e + f + g + h;
  }
  function sumFixedCost() {
    let a = parseInt(tableFixed[0].fixedCosts);
    let b = sumPrice();
    let c = parseInt(tableFixed[2].fixedCosts);
    let d = parseInt(tableFixed[3].fixedCosts);
    let e = parseInt(tableFixed[4].fixedCosts);
    let f = parseInt(tableFixed[5].fixedCosts);
    let g = parseInt(tableFixed[6].fixedCosts);
    let h = parseInt(tableFixed[7].fixedCosts);
    let p = parseInt(tableFixed[1].fixedCosts);

    if (!a) a = 0;
    if (!b) b = 0;
    if (!c) c = 0;
    if (!d) d = 0;
    if (!e) e = 0;
    if (!f) f = 0;
    if (!g) g = 0;
    if (!h) h = 0;
    if (!p) p = 0;
    return a + b + c + d + e + f + g + h + p;
  }
  function fivePrecent() {
    let a = sumFixedCost();
    let b = 5;
    if (!a) a = 0;
    return Math.round(((((a + b) * 100) / 100) * 5) / 100);
  }
  function sumfivePrecent() {
    let a = sumFixedCost();
    let b = 5;
    if (!a) a = 0;
    return Math.round(((((a + b) * 100) / 100) * 5) / 100) + a;
  }
  function RunfivePrecent() {
    let a = sumFixedRun();
    let b = 5;
    if (!a) a = 0;
    return Math.round(((((a + b) * 100) / 100) * 5) / 100);
  }
  function sumRunfivePrecent() {
    let a = sumFixedRun();
    let b = 5;
    if (!a) a = 0;
    return Math.round(((((a + b) * 100) / 100) * 5) / 100) + a;
  }
  function totalSumCost() {
    return sumfivePrecent();
  }
  function totalSumRun() {
    return sumRunfivePrecent();
  }
  function sumFixedRun() {
    let a = parseInt(tableFixed[0].nextRun);
    let b = parseInt(tableFixed[1].nextRun);
    let c = parseInt(tableFixed[2].nextRun);
    let d = parseInt(tableFixed[3].nextRun);
    let e = parseInt(tableFixed[4].nextRun);
    let f = parseInt(tableFixed[5].nextRun);
    let g = parseInt(tableFixed[6].nextRun);
    let h = parseInt(tableFixed[7].nextRun);
    if (!a) a = 0;
    if (!b) b = 0;
    if (!c) c = 0;
    if (!d) d = 0;
    if (!e) e = 0;
    if (!f) f = 0;
    if (!g) g = 0;
    if (!h) h = 0;
    return a + b + c + d + e + f + g + h;
  }
  function sumPrice() {
    let a = sum(0);
    let b = sum(1);
    let c = sum(2);
    let d = sum(3);
    let e = sum(4);
    let f = sum(5);
    let g = sum(6);
    let h = sum(7);

    return a + b + c + d + e + f + g + h;
  }
  function estimatePerPerson() {
    let a = totalSumCost();
    let b = parseInt(tableFinancial[7].estimate);
    if (!b) b = 0;
    if (!a) a = 0;

    if (!(a / b)) {
      return 0;
    } else {
      return Math.round(a / b);
    }
  }
  function copacityPerPerson() {
    let a = totalSumCost();
    let b = parseInt(meals[0][13].name);
    if (!b) b = 0;
    if (!a) a = 0;

    if (!(a / b)) {
      return 0;
    } else {
      return Math.round(a / b);
    }
  }
  function packageEstimate() {
    let a = estimatePerPerson();
    let c = sumChecker();
    let b = parseInt(tableFinancial[2].estimate);
    if (!b) b = 0;
    return a + b + c;
  }
  function packageCopacity() {
    let a = copacityPerPerson();
    let c = sumChecker();
    let b = parseInt(tableFinancial[2].estimate);
    if (!b) b = 0;
    return a + b + c;
  }
  function hashiesudEstimate() {
    let a = packageEstimate();
    let b = parseInt(tableFinancial[4].estimate);

    return b - a;
  }
  function hashiesudCopacity() {
    let a = packageCopacity();
    let b = parseInt(tableFinancial[4].estimate);

    return b - a;
  }

  function sodNahaiEstimate() {
    let a = hashiesudEstimate();
    let b = parseInt(tableFinancial[7].estimate);

    return b * a;
  }
  function sodNahaiCapacity() {
    let a = hashiesudCopacity();
    let b = parseInt(meals[0][13].name);

    return b * a;
  }
  // function tedadBarovordi(){
  //   (meals[0][13].name < tableFinancial[7].estimate)
  //     return <p>hi</p>

  // }

  return (
    <div className={styles.container} id="detail">
      <div id="#days">
        {!isYekruze && <NextDay addDayHandler={addDayHandler} />}
        <div className={` ${styles.containerMain}`}>
          <div className={styles.costBoxex}>
            <Cost
              allMeals={allMeals}
              sumChecker={sumChecker}
              priceChecker={priceChecker}
              carValue={carValue}
            />
          </div>

          <div className={styles.dayBox}>
            <DayList
              days={days}
              allMealsHandler={allMealsHandler}
              setDays={setDays}
              catValue={catValue}
            />
          </div>
        </div>
      </div>
      {/* <SignupForm /> */}
      <div className={styles.tablesContainer} id="financial">
        <div className={styles.tableContainer}>
          <table className={`table mb-0 ${styles.sotun}`}>
            <thead>
              <tr>
                <th scope="col">بعد اجرا</th>
                <th colspan="2">هزینه های ثابت</th>
              </tr>
            </thead>
            <tbody className={styles.radif}>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[0].nextRun}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 0,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={priceTranfer()}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 0,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th width="250" scope="row">
                  هزینه ترنسفر
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[1].nextRun}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 1,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={!isYekruze ? sumPrice() : tableFixed[1].fixedCosts}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 1,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  هزینه های ثابت لیدر و راننده
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[2].nextRun}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 2,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[2].fixedCosts}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 2,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  هزینه اقامتگاه در حالت دربستی
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[3].nextRun}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 3,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[3].fixedCosts}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 3,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  موسیقی محلی و سورپرایز
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[4].nextRun}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 4,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[4].fixedCosts}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 4,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  ورودی های اتوبوس
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[5].nextRun}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 5,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[5].fixedCosts}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 5,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  ورودی گروهی
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[6].nextRun}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 6,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[6].fixedCosts}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 6,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  هزینه تبلیغات برای این تور
                </th>
              </tr>

              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[7].nextRun}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 7,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFixed[7].fixedCosts}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 7,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  پورسانت کل کانتر فروش
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={sumFixedRun()}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 8,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={sumFixedCost()}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 8,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  مجموعه هزینه های ثابت
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={RunfivePrecent()}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 9,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={fivePrecent()}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 9,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  هزینه های پیشبینی نشد ( ۵% هزینه ها)
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={totalSumRun()}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 10,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={totalSumCost()}
                    onChange={(e) =>
                      dispatchFixed({
                        type: "changeHandler",
                        id: 10,
                        event: e,
                        case: "fixedCosts",
                      })
                    }
                  />{" "}
                </td>
                <th className="rowHead" scope="row">
                  جمع نهایی
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        {!isYekruze && (
          <div className={styles.tableContainerlast}>
            <table height="400" className={`table mb-0 ${styles.sotun}`}>
              <thead>
                <tr>
                  <th colSpan="6" scope="col">
                    هزینه نیرو ها (راننده و لیدرها)
                  </th>
                </tr>
                <tr>
                  <th scope="col">بعد اجرا</th>
                  <th scope="col">قیمت کل</th>
                  <th scope="col">قیمت واحد</th>
                  <th scope="col"> تعداد وعده</th>
                  <th scope="col">نفر</th>
                  <th width="100" scope="col"></th>
                </tr>
              </thead>
              <tbody className={styles.radif}>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[0].badeEjra}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 0,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sum(0)}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 0,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[0].gheimatVahed}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 0,
                          event: e,
                          case: "gheimatVahed",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[0].tedad}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 0,
                          event: e,
                          case: "tedad",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[0].nafar}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 0,
                          event: e,
                          case: "nafar",
                        })
                      }
                    />
                  </td>
                  <th scope="row" width="150">
                    صبحانه
                  </th>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[1].badeEjra}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 1,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sum(1)}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 1,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[1].gheimatVahed}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 1,
                          event: e,
                          case: "gheimatVahed",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[1].tedad}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 1,
                          event: e,
                          case: "tedad",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[1].nafar}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 1,
                          event: e,
                          case: "nafar",
                        })
                      }
                    />
                  </td>
                  <th scope="row">ناهار</th>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[2].badeEjra}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 2,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sum(2)}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 2,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[2].gheimatVahed}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 2,
                          event: e,
                          case: "gheimatVahed",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[2].tedad}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 2,
                          event: e,
                          case: "tedad",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[2].nafar}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 2,
                          event: e,
                          case: "nafar",
                        })
                      }
                    />
                  </td>
                  <th scope="row">شام</th>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[3].badeEjra}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 3,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sum(3)}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 3,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[3].gheimatVahed}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 3,
                          event: e,
                          case: "gheimatVahed",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[3].tedad}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 3,
                          event: e,
                          case: "tedad",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[3].nafar}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 3,
                          event: e,
                          case: "nafar",
                        })
                      }
                    />
                  </td>
                  <th scope="row">اقامت</th>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[4].badeEjra}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 4,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sum(4)}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 4,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[4].gheimatVahed}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 4,
                          event: e,
                          case: "gheimatVahed",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[4].tedad}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 4,
                          event: e,
                          case: "tedad",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[4].nafar}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 4,
                          event: e,
                          case: "nafar",
                        })
                      }
                    />
                  </td>
                  <th scope="row">ترنسفر اصلی لیدر</th>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[5].badeEjra}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 5,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sum(5)}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 5,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[5].gheimatVahed}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 5,
                          event: e,
                          case: "gheimatVahed",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[5].tedad}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 5,
                          event: e,
                          case: "tedad",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[5].nafar}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 5,
                          event: e,
                          case: "nafar",
                        })
                      }
                    />
                  </td>
                  <th scope="row">ترنسفر کمکی لیدر</th>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[6].badeEjra}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 6,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sum(6)}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 6,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[6].gheimatVahed}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 6,
                          event: e,
                          case: "gheimatVahed",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[6].tedad}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 6,
                          event: e,
                          case: "tedad",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[6].nafar}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 6,
                          event: e,
                          case: "nafar",
                        })
                      }
                    />
                  </td>
                  <th scope="row">دستمزد لیدر</th>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[7].badeEjra}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 7,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sum(7)}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 7,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[7].gheimatVahed}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 7,
                          event: e,
                          case: "gheimatVahed",
                        })
                      }
                    />
                  </td>
                  <td>
                    {""}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[7].tedad}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 7,
                          event: e,
                          case: "tedad",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={tables[7].nafar}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 7,
                          event: e,
                          case: "nafar",
                        })
                      }
                    />
                  </td>
                  <th scope="row">لیدر محلی</th>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sumRun()}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 8,
                          event: e,
                          case: "badeEjra",
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="number"
                      className={styles.inputRes}
                      value={sumPrice()}
                      onChange={(e) =>
                        dispatch({
                          type: "changeHandler",
                          id: 8,
                          event: e,
                          case: "gheimatKol",
                        })
                      }
                    />
                  </td>

                  <th colSpan="4" scope="row">
                    جمع کل هزینه ثابت نیروها
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div class="d-flex justify-content-end">
        <div className={styles.table1Container}>
          <table className={`table mb-0 ${styles.sotun}`}>
            <thead>
              <tr>
                <th scope="col">بعد اجرا</th>
                <th scope="col" className={styles.thstyle}>
                  <input
                    type="number"
                    className={styles.inputRe}
                    value={meals[0][13].name}
                  />
                  ظرفیت کامل
                </th>
                <th scope="col" className={styles.thstyle}>
                  <input
                    type="number"
                    className={styles.inputRe}
                    value={tableFinancial[7].estimate}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 7,
                        event: e,
                        case: "estimate",
                      })
                    }
                  />
                  تعداد برآوردی
                  {parseInt(meals[0][13].name) <
                    parseInt(tableFinancial[7].estimate) && (
                    <p className={styles.tedadi}>
                      {" "}
                      تعداد از ظرفیت کامل بیشتر نباشد{" "}
                    </p>
                  )}
                </th>
                <th scope="col" className="topziro">
                  تحلیل مالی
                </th>
              </tr>
            </thead>
            <tbody className={styles.radif}>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[0].nextRun}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 0,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={copacityPerPerson()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 0,
                        event: e,
                        case: "capacity",
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={estimatePerPerson()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 0,
                        event: e,
                        case: "estimate",
                      })
                    }
                  />
                </td>
                <th scope="row">هزینه های ثابت به ازای هر نفر</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[1].nextRun}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 1,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td colSpan="2" scope="row">
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={sumChecker()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 1,
                        event: e,
                        case: "estimate",
                      })
                    }
                  />
                </td>
                <th scope="row">هزینه های متغیر برای هر نفر</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[2].nextRun}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 2,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td colSpan="2" scope="row">
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[2].estimate}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 2,
                        event: e,
                        case: "estimate",
                      })
                    }
                  />
                </td>
                <th scope="row">کمیسیون آژانس همکاری برای هر مسافر</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[3].nextRun}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 3,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={packageCopacity()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 3,
                        event: e,
                        case: "capacity",
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={packageEstimate()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 3,
                        event: e,
                        case: "estimate",
                      })
                    }
                  />
                </td>
                <th scope="row">مجموعه هزینه نهایی پکیج نفری</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[4].nextRun}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 4,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>

                <td colSpan="2" scope="row">
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[4].estimate}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 4,
                        event: e,
                        case: "estimate",
                      })
                    }
                  />
                </td>
                <th scope="row">قیمت فروش پکیج</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[5].nextRun}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 5,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={hashiesudCopacity()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 5,
                        event: e,
                        case: "capacity",
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={hashiesudEstimate()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 5,
                        event: e,
                        case: "estimate",
                      })
                    }
                  />
                </td>
                <th scope="row">حاشیه سود هر نفر</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={tableFinancial[6].nextRun}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 6,
                        event: e,
                        case: "nextRun",
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={sodNahaiCapacity()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 6,
                        event: e,
                        case: "capacity",
                      })
                    }
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className={styles.inputRes}
                    value={sodNahaiEstimate()}
                    onChange={(e) =>
                      dispatchFinacial({
                        type: "changeHandler",
                        id: 6,
                        event: e,
                        case: "estimate",
                      })
                    }
                  />
                </td>
                <th scope="row">برآورد سود نهایی این تور</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button type="button" className={`btn btn-light ${styles.btnLast}`}>
        انتشار
      </button>
      <button type="button" className={`btn btn-light ${styles.btnLast}`}>
        ثبت موقت
      </button>
      <button type="button" className={`btn btn-light ${styles.btnLast}`}>
        ثبت نهایی
      </button>
    </div>
  );
};

export default DetailPage;
