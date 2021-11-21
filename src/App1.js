import styles from "./app.module.css";
import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/navbar/Navbar";
import "./fonts/eot/KalamehWeb_Regular.eot";
import "./fonts/ttf/KalamehWeb_Regular.ttf";
import "./fonts/woff/KalamehWeb_Regular.woff";
import "./fonts/woff2/KalamehWeb_Regular.woff2";

const App1 = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainPage />
    </div>
  );
};

export default App1;
