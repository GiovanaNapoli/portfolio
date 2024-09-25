import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { primaryRoutes } from "./routes";
import useTheme from "../store/theme";
import { Container, Footer, Header } from "../components";

const AppRoutes = () => {
  const { isDarkTheme, setTheme } = useTheme();
  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <Container>
        <Router>
          <Header switchMode={setTheme} />
          <Routes>
            {primaryRoutes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Container>
    </div>
  );
};

export default AppRoutes;
