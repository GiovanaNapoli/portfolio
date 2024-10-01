import { lazy, LazyExoticComponent } from "react";
import { resolvePromise } from "../utils/resolvePromise";

type Routes = {
  id: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
};

export const primaryRoutes: Routes[] = [
  {
    id: "root",
    path: "/",
    Component: lazy(() => resolvePromise(import("../pages/home"))),
  },
  {
    id: "projects",
    path: "projects",
    Component: lazy(() => resolvePromise(import("../pages/projects"))),
  },
  {
    id: "resume",
    path: "resume",
    Component: lazy(() => resolvePromise(import("../pages/resume"))),
  },
];
