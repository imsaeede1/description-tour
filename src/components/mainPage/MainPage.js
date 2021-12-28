import styles from "./mainPage.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import "./mainPage.css";
import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import TodoApp from "./TodoApp/TodoApp";
import TransForm from "./TransForm";
import { useState } from "react";

const MainPage = ({ changeHandlerDaste, value }) => {
  const [isShow, setIsShow] = useState(false);
  const option = [
    { label: " آبشار", value: "abshar" },
    { label: " دریاچه", value: "daryache" },
  ];
  const optionDasteBandi = [
    { label: " ایران گردی", value: "irangardi" },
    { label: " کمپینگ", value: "camping" },
    { label: " انفرادی", value: "enferadi" },
    { label: " خارجی", value: "khareji" },
    { label: " یکروزه", value: "yekruze" },
  ];
  const optionDaraje = [
    { label: " 1", value: "1" },
    { label: "2", value: "2" },
    { label: " 3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
  const optionlavazem = [
    { label: " کوله پشتی", value: "kuleposhti" },
    { label: " لباس گرم", value: " lebasgarm" },
    { label: " پاسپورت", value: "passport" },
  ];

  const animatedComponents = makeAnimated();
  function AnimatedMulti() {
    return (
      <CreatableSelect
        closeMenuOnSelect={false}
        components={animatedComponents}
        className={styles.filterSelect}
        isMulti
        options={option}
      />
    );
  }
  return (
    <div className={styles.container} id="specification">
      <div
        className={`mt-2 d-flex justify-content-lg-around justify-content-md-end justify-content-sx-center ${styles.mainForm}`}
      >
        <div className={styles.formInput}>
          <p className="textDateBox">زمان پایان </p>
          <div className="boxDate">
            <DatePicker
              className="rmdp-prime"
              showOtherDays
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </div>
        </div>
        <div className={styles.formInput}>
          <p className="textDateBox">زمان شروع </p>
          <div className="boxDate">
            <DatePicker
              className="rmdp-prime"
              showOtherDays
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </div>
        </div>
        <div className={styles.formInput}>
          <p className="textBox">نام تور</p>
          <input type="text" className={styles.inputBox} />
        </div>
        <div className={styles.formInput}>
          <p className="textBox">هزینه</p>
          <input type="text" className={styles.inputBox} />
        </div>

        <div className={styles.formInput}>
          <p className="textBox">اسم تور لیدر</p>
          <input type="text" className={styles.inputBox} />
        </div>

        <div className={styles.formInput}>
          <p className="textBox">درجه سختی</p>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            className="inputBoxSelect"
          >
            <option
              selected
              hidden
              disabled
              className={styles.selected}
            ></option>
            <option className="It" value="omumi">
              1
            </option>
            <option className="It" value="darbasti">
              2
            </option>
            <option className="It" value="omumi">
              3
            </option>
            <option className="It" value="darbasti">
              4
            </option>
            <option className="It" value="darbasti">
              5
            </option>
          </select>
        </div>
        <div className={styles.formInput}>
          <p className="textBox">جاذبه ها</p>
          {AnimatedMulti()}
        </div>
        <div className={styles.formInput}>
          <p className="textBox">دسته بندی</p>
          <CreatableSelect
            value={value}
            onChange={changeHandlerDaste}
            closeMenuOnSelect={false}
            components={animatedComponents}
            className={styles.filterSelect}
            isMulti
            options={optionDasteBandi}
          />
        </div>
        <div className={`d-flex justify-self-md-end ${styles.formInput}`}>
          <p className="textBox">لوازم ضروری</p>
          <CreatableSelect
            closeMenuOnSelect={false}
            components={animatedComponents}
            className={styles.filterSelect}
            isMulti
            options={optionlavazem}
          />
        </div>

        {/* <div className={styles.mainForm3}>
          <div className={styles.formInput22}>
            <p className="textMavaredBox">موارد ضروری</p>
            <input type="text" className={styles.inputbig2Box} />
          </div>
        </div>
        <div className={styles.mainFormTodo}>
          <TodoApp />
          <p className="textCost">هرینه مازاد</p>
        </div> */}
        <div className={` ${styles.formInput}`}>
          <p className="textBox">موارد ضروری</p>
          <textarea className={styles.inputBoxbig}></textarea>
        </div>
        <div className={`d-flex justify-self-md-end ${styles.formInput}`}>
          <p className="textBox">هزینه مازاد</p>
          <TodoApp />
        </div>
        <div className={styles.formBox2}>
          <div className={styles.formChecked}>
            <p className={styles.text}>:نوع سفر</p>
            <div className={styles.checkBox}>
              <div class="form-check">
                <input
                  className={`form-check-input ${styles.check}`}
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  هوایی
                </label>
              </div>
              <div class="form-check">
                <input
                  className={`form-check-input ${styles.check}`}
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  defaultChecked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  زمینی
                </label>
              </div>
              <div class="form-check">
                <input
                  className={`form-check-input ${styles.check}`}
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  ریلی
                </label>
              </div>
            </div>
          </div>
          <div className={styles.formChecked2}>
            <p className={styles.text}>:بیمه</p>
            <div className={styles.checkBox2}>
              <div class="form-check">
                <input
                  className={`form-check-input ${styles.check2}`}
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
          </div>
          <div className={styles.formChecked3}>
            <p className={styles.text}>:ویزا</p>
            <div className={styles.checkBox3}>
              <div class="form-check">
                <input
                  className={`form-check-input ${styles.check2}`}
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
          </div>
          <div className={styles.formReserv}>
            <div className={styles.formCheckedRezerv}>
              <p className={styles.text}>:رزرو</p>
              <div className={styles.checkBox3}>
                <div class="form-check">
                  <input
                    onClick={() => setIsShow((prevState) => !prevState)}
                    className={`form-check-input ${styles.check2}`}
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </div>
              {isShow && <TransForm setIsShow={setIsShow} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
