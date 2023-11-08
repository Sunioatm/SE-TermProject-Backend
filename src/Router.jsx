import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './Login';
import Routefinder from "./Routefinder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/rt",
    element: <Routefinder />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
