import { App } from "@/App";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
