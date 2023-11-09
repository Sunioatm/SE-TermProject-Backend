import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './Login';
import Routefinder from "./Routefinder";
import Home from "./Home"
import Favouriteroute from "./Favouriteroute"

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
    path: "/routefinder",
    element: <Routefinder />,
  },
  {
    path: "/favouriteroute", 
    element: <Favouriteroute />, 
  },
  
  
  
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
