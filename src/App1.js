import styles from "./app.module.css";
import NavbarCopy from "./components/navbar/NavbarCopy";
import TabsPage from "./components/tabsPage/TabsPage";
import "./fonts/eot/KalamehWeb_Regular.eot";
import "./fonts/ttf/KalamehWeb_Regular.ttf";
import "./fonts/woff/KalamehWeb_Regular.woff";
import "./fonts/woff2/KalamehWeb_Regular.woff2";
import MealProvider from "./context/MealsProvider";
import TableProvider from "./context/TablesProvider";
import TableFixedProvider from "./context/TableFixedProvider";
import TableFinacialProvider from "./context/TableFinancial";

const App1 = () => {
  return (
    <div className={styles.container}>
      <MealProvider>
        <TableProvider>
          <TableFixedProvider>
            <TableFinacialProvider>
              <NavbarCopy />
              <TabsPage />
            </TableFinacialProvider>
          </TableFixedProvider>
        </TableProvider>
      </MealProvider>
    </div>
  );
};

export default App1;
