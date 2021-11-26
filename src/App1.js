import styles from "./app.module.css";
import Navbar from "./components/navbar/Navbar";
import NavbarCopy from "./components/navbar/NavbarCopy";
import TabsPage from "./components/tabsPage/TabsPage";
import "./fonts/eot/KalamehWeb_Regular.eot";
import "./fonts/ttf/KalamehWeb_Regular.ttf";
import "./fonts/woff/KalamehWeb_Regular.woff";
import "./fonts/woff2/KalamehWeb_Regular.woff2";

const App1 = () => {
  return (
    <div className={styles.container}>
      <NavbarCopy />
      <TabsPage />
    </div>
  );
};

export default App1;
