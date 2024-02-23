import { createBrowserRouter } from "react-router-dom";
import { LocalVariablePage } from "./pages/variable";
import { PropsAndChildrenPage } from "./pages/props&children";
import { StatePage } from "./pages/state";
import { LifeCyclePage } from "./pages/lifecycle";
import { CallbackHookPage } from "./pages/useCallback";

export const routersName = [
  {
    name: "Home",
    path: "/",
    element: <h2>Hello React App!</h2>,
  },
  {
    name: "Local variable",
    path: "/variable",
    element: <LocalVariablePage />,
  },
  {
    name: "Props and Children",
    path: "/pros",
    element: <PropsAndChildrenPage />,
  },
  {
    name: "State",
    path: "/state",
    element: <StatePage />,
  },
  {
    name: "Life Cycle",
    path: "/lifecycle",
    element: <LifeCyclePage />,
  },
  {
    name: "useCallback",
    path: "/usecallback",
    element: <CallbackHookPage />,
  },
];
export const routes = createBrowserRouter(routersName);
