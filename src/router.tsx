import TanstackQueryProvider from "@contexts/TanstackQueryProvider";
import { ThemeProvider } from "@contexts/ThemeProvider";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router";

const PageWrapper = lazy(() => import("@pages/PageWrapper"));

const HomePage = lazy(() => import("@pages/Home"));
const AboutMePage = lazy(() => import("@pages/AboutMe"));
const ProjectsPage = lazy(() => import("@pages/Projects"));
const NotFoundPage = lazy(() => import("@pages/NotFound"));

const router = createBrowserRouter([
  {
    element: (
      <ThemeProvider>
        <TanstackQueryProvider>
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        </TanstackQueryProvider>
      </ThemeProvider>
    ),
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutMePage },
      { path: "projects", Component: ProjectsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default router;
