import { useState } from "react";
import NextDay from "../nextDay/NextDay";
import DayList from "../dayList/DayList";
import styles from "./detail.module.css";
const DetailPage = () => {
  const [days, setDays] = useState([
    { name: "روز اول", id: 1 },
    { name: "روز دوم", id: 2 },
  ]);
  const allDay = ["اول", "دوم", "سوم", "چهارم", "پنجم", "ششم"];
  const addDayHandler = () => {
    const newDay = {
      id: days.length,
      name: `روز ${allDay[days.length]}`,
    };
    setDays([...days, newDay]);
  };

  return (
    <div className={styles.container}>
      <NextDay addDayHandler={addDayHandler} />
      <div className={styles.containerMain}>
        <div className={`d-flex flex-column  ${styles.costBox}`}>
          <div className={styles.costNav}>هزینه ها</div>
          <div className={styles.costOther}>
            <p className={styles.costHeader}>مجموعه هزینه ها</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>پیش بینی : 90هزار تومان</p>
              <p className={styles.detailCost2}>اجرا : 100هزار تومان</p>
              <p className={styles.detailCost3}>نهایی :150هزار تومان</p>
            </div>
          </div>
          <div className={styles.costOther}>
            <p className={styles.costHeader}>مجموعه هزینه ها</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>پیش بینی : 90هزار تومان</p>
              <p className={styles.detailCost2}>اجرا : 100هزار تومان</p>
              <p className={styles.detailCost3}>نهایی :150هزار تومان</p>
            </div>
          </div>
          <div className={styles.costOther}>
            <p className={styles.costHeader}>مجموعه هزینه ها</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>پیش بینی : 90هزار تومان</p>
              <p className={styles.detailCost2}>اجرا : 100هزار تومان</p>
              <p className={styles.detailCost3}>نهایی :150هزار تومان</p>
            </div>
          </div>
        </div>
        <div className={styles.dayBox}>
          <DayList days={days} setDays={setDays} />
        </div>
      </div>
      <div className={styles.tablesContainer}>
        <div className={styles.tableContainer}>
          <table className={`table mb-0 ${styles.sotun}`}>
            <thead>
              <tr>
                <th scope="col">بعد اجرا</th>
                <th colspan="2">ورودی نفری - ورودی گروهی</th>
              </tr>
            </thead>
            <tbody className={styles.radif}>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th width="250" scope="row">
                  هزینه ترنسفر
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  هزینه های ثابت لیدر و راننده
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  هزینه اقامتگاه در حالت دربستی
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  موسیقی محلی و سورپرایز
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  ورودی های اتوبوس
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  هزینه تبلیغات برای این تور
                </th>
              </tr>

              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  پورسانت کل کانتر فروش
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  مجموعه هزینه های ثابت
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  هزینه های پیشبینی نشد (ه۵ ۰ ٪هزینه ها)
                </th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th className="rowHead" scope="row">
                  جمع نهایی
                </th>
              </tr>
            </tbody>
          </table>
        </div>
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
                <th scope="col">تعداد</th>
                <th scope="col">نفر</th>
                <th width="100" scope="col"></th>
              </tr>
            </thead>
            <tbody className={styles.radif}>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th scope="row">صبحانه</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th scope="row">ناهار</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th scope="row">شام</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th scope="row">اقامت</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th scope="row">ترنسفر لیدر</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th scope="row">دستمزد لیدر</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <th scope="row">لیدر محلی</th>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>
                <td>
                  {" "}
                  <input className={styles.inputRes} />
                </td>

                <th colSpan="4" scope="row">
                  جمع کل هزینه ثابت نیروها
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
