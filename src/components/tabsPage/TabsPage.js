import DetailPage from "../detailPage/DetailPage";
import FinancialPage from "../financialPage/FinancialPage";
import MainPage from "../mainPage/MainPage";
import styles from "./tabsPage.module.css";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { BsCalendarWeek } from "react-icons/bs";
import { BsTable } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

const TabsPage = () => {
  const [value, setValue] = useState("");

  const changeHandlerDaste = (option) => {
    setValue(option);
  };
  return (
    <div className={styles.container}>
      <ul className={`nav nav-tabs ${styles.nav}`} id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            مشخصات تور
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            گزارشات
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className={styles.toolTip}>
            <Link to="specification" smooth={true} duration={1000}>
              <h3 data-tip="مشخصات">
                <BiDetail className={styles.imgIcon} />
              </h3>
              <ReactTooltip />
            </Link>
            <Link to="detail" smooth={true} duration={1000}>
              <h4 data-tip="روزها">
                <BsCalendarWeek className={styles.imgIcon} />
              </h4>
              <ReactTooltip />
            </Link>
            <Link to="financial" smooth={true} duration={1000}>
              <h4 data-tip="جداول">
                <BsTable className={styles.imgIcon} />
              </h4>
              <ReactTooltip />
            </Link>
          </div>

          <MainPage changeHandlerDaste={changeHandlerDaste} catValue={value} />
          <DetailPage
            changeHandlerDaste={changeHandlerDaste}
            catValue={value}
          />
        </div>

        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <FinancialPage />
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
