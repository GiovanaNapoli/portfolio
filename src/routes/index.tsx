import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { primaryRoutes } from "./routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useTheme from "../store/theme";

const AppRoutes = () => {
  const { isDarkTheme, setTheme } = useTheme();
  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <Router>
        <Header switchMode={setTheme} />
        <Routes>
          {primaryRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRoutes;
