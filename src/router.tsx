import { ThemeProvider } from "@contexts/ThemeProvider";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router";

const PageWrapper = lazy(() => import("@pages/PageWrapper"));

const HomePage = lazy(() => import("@pages/Home"));

const router = createBrowserRouter([
  {
    element: (
      <ThemeProvider>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </ThemeProvider>
    ),
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: HomePage },
      { path: "projects", Component: HomePage },
    ],
  },
]);

export default router;
