import { useRoutes } from "react-router-dom";

import { MasterLayout } from "../layout";
import ContactUs from "../pages/ContactUs";
import { NiaGroupLayout } from "../pages/niaGroup/layout";
import { lazy, Suspense } from "react";
import Home from "../pages/niaGroup/page/home/Home";
const useHandleRoutes = () => {
  const HomePage = lazy(() => import("../pages/niaGroup/page/home/Home"));
  const routes = useRoutes([
    {
      path: "/",
      element: <NiaGroupLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "contact-us", element: <ContactUs /> },
      ],
    },
  ]);
  return { routes };
};

export default useHandleRoutes;
