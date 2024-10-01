import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { primaryRoutes } from "./routes";
import useTheme from "../store/theme";
import { Container, Footer, Header } from "../components";
import { Suspense } from "react";

const AppRoutes = () => {
  const { isDarkTheme, setTheme } = useTheme();
  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <Container>
        <Router>
          <Header switchMode={setTheme} />
          <Suspense
            fallback={
              <img
                className="fixed size-20 bottom-[50%]"
                src="/loading.gif"
                loading="lazy"
              />
            }
          >
            <Routes>
              {primaryRoutes.map(({ Component, id, path }) => (
                <Route key={id} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </Container>
    </div>
  );
};

export default AppRoutes;
