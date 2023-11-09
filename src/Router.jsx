import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './Login';
import Routefinder from "./Routefinder";
import Home from "./Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/rt",
    element: <Routefinder />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
