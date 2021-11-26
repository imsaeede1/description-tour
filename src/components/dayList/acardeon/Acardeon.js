import styles from "./acardeon.module.css";

import { AiOutlinePlus } from "react-icons/ai";
const Acardeon = ({ index }) => {
  return (
    <div>
      <p>
        <button
          className={`btn ${styles.btnacardeon}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#acardeon-${index}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <AiOutlinePlus />
        </button>
      </p>
      <div className="collapse" id={`acardeon-${index}`}>
        <div>
          <div className={styles.containerAcardeon}>
            <div className={styles.containerMain}>
              <div className={styles.formInput}>
                <p className={styles.text}>نام رستوران</p>
                <input type="text" className={styles.inputBox} />
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>شماره</p>
                <input type="text" className={styles.inputBox} />
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>آدرس</p>
                <input type="text" className={styles.inputBox2} />
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>قیمت </p>
                <div className={styles.boxes}>
                  <div>
                    <p className={styles.titles}>نهایی</p>
                    <input type="text" className={styles.inputBox1} />
                  </div>
                  <div>
                    <p className={styles.titles}>اجرا</p>
                    <input type="text" className={styles.inputBox1} />
                  </div>
                  <div>
                    <p className={styles.titles}>پیش بینی</p>
                    <input type="text" className={styles.inputBox1} />
                  </div>
                </div>
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>زمان </p>
                <div className={styles.boxes}>
                  <div>
                    <p className={styles.titles}>نهایی</p>
                    <input type="text" className={styles.inputBox1} />
                  </div>
                  <div>
                    <p className={styles.titles}>اجرا</p>
                    <input type="text" className={styles.inputBox1} />
                  </div>
                  <div>
                    <p className={styles.titles}>پیش بینی</p>
                    <input type="text" className={styles.inputBox1} />
                  </div>
                </div>
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>وسیله نقلیه</p>
                <input type="text" className={styles.inputBox} />
              </div>
              <div className={styles.formInput}>
                <p className={styles.text}>ورودی نفر</p>
                <input type="text" className={styles.inputBox} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acardeon;
