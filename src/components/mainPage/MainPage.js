import styles from "./mainPage.module.css";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.menu}>
          <ul>
            <li>
              <a href="#h">گزارشات</a>
            </li>
            <li>
              <a href="#t">جزییات تور</a>
            </li>
            <li>
              <a href="#B">مشخصات اولیه</a>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
      <div className={styles.mainForm}>
        <div className={styles.formBox}>
          <div className={styles.formInput}>
            <p className={styles.text}>زمان پایان تور</p>
            <input type="text" className={styles.inputBox} />
          </div>
          <div className={styles.formInput}>
            <p className={styles.text}>هزینه</p>
            <input type="text" className={styles.inputBox} />
          </div>
          <div className={styles.formInput}>
            <p className={styles.text}>درجه سختی</p>
            <input type="text" className={styles.inputBox} />
          </div>
        </div>

        <div className={styles.formBox}>
          <div className={styles.formInput}>
            <p className={styles.text}>زمان شروع تور</p>
            <input type="text" className={styles.inputBox} />
          </div>
          <div className={styles.formInput}>
            <p className={styles.text}>جاذبه ها</p>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              className={styles.inputBox}
            >
              <option selected className={styles.selected}></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className={styles.formInput}>
            <p className={styles.text}>بیمه</p>
            <input type="text" className={styles.inputBox} />
          </div>
        </div>
        <div className={styles.formBox}>
          <div className={styles.formInput}>
            <p className={styles.text}>نام تور</p>
            <input type="text" className={styles.inputBox} />
          </div>
          <div className={styles.formInput}>
            <p className={styles.text}>دسته بندی</p>
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              className={styles.inputBox}
            >
              <option selected className={styles.selected}></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className={styles.formInput}>
            <p className={styles.text}>ویزا</p>
            <input type="text" className={styles.inputBox} />
          </div>
        </div>
      </div>
      <div className={styles.checkInputBox}>
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
                لوکس
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
                نقلی
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
                عادی
              </label>
            </div>
          </div>
        </div>
        <div className={styles.formInput}>
          <p className={styles.text}>دسته بندی</p>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            className={styles.inputBox}
          >
            <option selected className={styles.selected}></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className={styles.bigInput}>
        <div className={styles.flexInput}>
          <div className={styles.formInput}>
            <p className={styles.textInput}>محل حرکت</p>
            <input type="text" className={styles.inputbigBox} />
          </div>
          <div className={styles.formInput}>
            <p className={styles.text}>محتوای تور</p>
            <input type="text" className={styles.inputbig2Box} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
