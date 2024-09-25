import { Home, Projects, Resume } from "../pages";

type Routes = {
  id: string;
  path: string;
  component: JSX.Element;
};

export const primaryRoutes: Routes[] = [
  { id: "root", path: "/", component: <Home /> },
  { id: "projects", path: "projects", component: <Projects /> },
  { id: "resume", path: "resume", component: <Resume /> },
];
