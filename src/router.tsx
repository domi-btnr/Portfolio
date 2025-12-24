import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router";

const App = lazy(() => import("@pages/App"));

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [{ index: true, Component: App }],
  },
]);

export default router;
