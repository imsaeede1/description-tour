import styles from "../detailPage/detail.module.css";

const Cost = ({ sumChecker, priceChecker, carValue }) => {
  // const [isOmumi, setIsOmumi] = useState(false);
  // useEffect(() => {
  //   let flag = false;

  //   if (carValue == "omumi") {
  //     setIsOmumi(true);
  //     flag = true;
  //     console.log("carValue", carValue);
  //   }

  //   if (!flag) setIsOmumi(false);
  // }, [carValue]);

  return (
    <div>
      <div className={`d-flex flex-column  ${styles.costBox}`}>
        <div className={styles.costNav}>هزینه های متغییر</div>
        <div className={styles.costOther}>
          <p className={styles.costHeader}>مجموعه هزینه ها</p>
          <div className={styles.flewRowCost}>
            <p className={styles.detailCost}>پیش بینی :{sumChecker()} تومان</p>
            <p className={styles.detailCost2}>اجرا :0</p>
            <p className={styles.detailCost3}>نهایی :0</p>
          </div>
        </div>
        {priceChecker(0) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>گشت صبح </p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی :{priceChecker(0)}تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {priceChecker(1) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>صبحانه</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(1)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}

        {priceChecker(2) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>ناهار</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(2)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {priceChecker(3) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>میان وعده</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(3)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {priceChecker(4) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>گشت عصر</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(4)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {priceChecker(5) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>شام</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(5)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {priceChecker(6) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>اقامت</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(6)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {priceChecker(7) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>برنامه شب</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(7)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {/* {isOmumi && ( */}

        <div>
          {priceChecker(8) && (
            <div className={styles.costOther}>
              <p className={styles.costHeader}>نقلیه کمکی</p>
              <div className={styles.flewRowCost}>
                <p className={styles.detailCost}>
                  پیش بینی : {priceChecker(8)} تومان
                </p>
                <p className={styles.detailCost2}>اجرا :0</p>
                <p className={styles.detailCost3}>نهایی :0</p>
              </div>
            </div>
          )}
        </div>

        {/* )} */}

        {priceChecker(15) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>بیمه</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(15)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {priceChecker(18) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>سیم کارت</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(18)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
        {priceChecker(16) && (
          <div className={styles.costOther}>
            <p className={styles.costHeader}>ترنسفر اصلی</p>
            <div className={styles.flewRowCost}>
              <p className={styles.detailCost}>
                پیش بینی : {priceChecker(16)} تومان
              </p>
              <p className={styles.detailCost2}>اجرا :0</p>
              <p className={styles.detailCost3}>نهایی :0</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cost;
