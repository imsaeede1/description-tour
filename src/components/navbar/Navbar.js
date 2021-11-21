import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menuLogo}>
        <img
          alt="logo"
          src="../../../images/logo-js.png"
          className={styles.logoJome}
        />
        <div className={styles.menu}>
          <ul>
            <li>
              <a href="#h">صفحه اول</a>
            </li>
            <li>
              <a href="#t">تور ها</a>
            </li>
            <li>
              <a href="#B">بلاگ ها</a>
            </li>
            <li>
              <a href="#K">خدمات</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.menuOrder}>
        <div className={styles.boxOrder}>
          <img
            alt="logo"
            src="../../../images/order.png"
            className={styles.logoOrder}
          />
          <p className={styles.text}>پیگیری سفارش ها</p>
        </div>
        <div className={styles.boxOrder}>
          <img
            alt="logo"
            src="../../../images/user.png"
            className={styles.logoUser}
          />
          <p className={styles.text}>ورود یا ثبت نام</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
