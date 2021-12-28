import ChartTest from "../ChartTest";
import ListPaseenger from "../passenger/ListPassemger";
import styles from "./financial.module.css";

const FinancialPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTableSlider}>
        <div className={styles.slideShow}>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className={`active ${styles.circleBtn}`}
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                className={styles.circleBtn}
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                className={styles.circleBtn}
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className={`w-100 ${styles.slideContainer}`}>
                  <div className={styles.navSlider}>مسافران تور</div>
                  <ListPaseenger />
                </div>
              </div>
              <div class="carousel-item">
                <div className={`w-100 ${styles.slideContainer}`}>
                  <div className={styles.navSlider}>مسافران تور</div>
                  <ListPaseenger />
                </div>
              </div>
              <div class="carousel-item">
                <div className={`w-100 ${styles.slideContainer}`}>
                  <div className={styles.navSlider}>مسافران تور</div>
                  <ListPaseenger />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` d-flex justify-content-between m-2 ${styles.chartCostBox}`}
      >
        <div className={`  ${styles.chartBox}`}>
          <ChartTest />
        </div>
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
      </div>
    </div>
  );
};

export default FinancialPage;
