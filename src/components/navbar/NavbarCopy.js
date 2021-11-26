import styles from "./navbar.module.css";

const NavbarCopy = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div div class="navbarNavDropdown collapse navbar-collapse  " id="">
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
          </div>
          <div
            class="navbarNavDropdown collapse navbar-collapse justify-content-end"
            id=""
          >
            <ul class="navbar-nav">
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  خدمات
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  بلاگ ها
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  تور ها
                </a>
              </li>
              <li class="nav-item p-2">
                <a class="nav-link" href="#">
                  صفحه اول
                </a>
              </li>
            </ul>
          </div>
          <a class="navbar-brand" href="#">
            <img
              alt="logo"
              src="../../../images/logo-js.png"
              className={styles.logoJome}
            />
          </a>
        </div>
      </nav>
    </div>
    // <nav className={styles.nav}>
    //   <div className={styles.menuLogo}>
    //     <img
    //       alt="logo"
    //       src="../../../images/logo-js.png"
    //       className={styles.logoJome}
    //     />
    //     <div className={styles.menu}>
    //       <ul>
    //         <li>
    //           <a href="#h">صفحه اول</a>
    //         </li>
    //         <li>
    //           <a href="#t">تور ها</a>
    //         </li>
    //         <li>
    //           <a href="#B">بلاگ ها</a>
    //         </li>
    //         <li>
    //           <a href="#K">خدمات</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className={styles.menuOrder}>
    //     <div className={styles.boxOrder}>
    //       <img
    //         alt="logo"
    //         src="../../../images/order.png"
    //         className={styles.logoOrder}
    //       />
    //       <p className={styles.text}>پیگیری سفارش ها</p>
    //     </div>
    //     <div className={styles.boxOrder}>
    //       <img
    //         alt="logo"
    //         src="../../../images/user.png"
    //         className={styles.logoUser}
    //       />
    //       <p className={styles.text}>ورود یا ثبت نام</p>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavbarCopy;
