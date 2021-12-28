import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import "./transform.css";
import styles from "./mainPage.module.css";
const TransForm = () => {
  return (
    <div className="dateBoxex date-picker1">
      <input
        type="number"
        placeholder="پیش پرداخت"
        className={styles.inputBoxRezerv}
      />
      <DatePicker
        className=" "
        showOtherDays
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        placeholder="زمان پایان رزرو"
      />
      <DatePicker
        className={`rmdp-prime  dateBox`}
        showOtherDays
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        placeholder="زمان شروع رزرو"
      />
    </div>
  );
};

export default TransForm;
