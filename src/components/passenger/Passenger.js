import styles from "./passenger.module.css";
const Passenger = ({ passenger }) => {
  return (
    <div>
      <div
        class=""
        className={`d-flex flex-row-reverse justify-content-evenly ${styles.rowText}`}
      >
        <img alt="man" src="../../images/mannn.svg" className={styles.manImg} />
        <div className={`d-flex flex-column    ${styles.columnUser}`}>
          <div
            className={`d-flex flex-row-reverse justify-content-between align-items-center ${styles.textContent}`}
          >
            <p className={styles.pBold}>نام و نام خانوادگی </p>
            <p className={`fw-bold  ${styles.camaName}`}>:</p>
            <p className={styles.pNormal}>{passenger.name}</p>
          </div>
          <div
            className={`d-flex flex-row-reverse justify-content-between  align-items-center ${styles.textContent}`}
          >
            <p className={styles.pBold}>کد ملی </p>
            <p className={`fw-bold  ${styles.cama}`}>:</p>
            <p className={styles.pNormal}>{passenger.codeMeli}</p>
          </div>
          <div
            className={`d-flex flex-row-reverse justify-content-between  align-items-center ${styles.textContent}`}
          >
            <p className={styles.pBold}>شماره تماس</p>
            <p class="fw-bold ">:</p>
            <p className={styles.pNormal}>{passenger.number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passenger;
