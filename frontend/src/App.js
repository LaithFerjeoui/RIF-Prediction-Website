import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Views/Login";
import LandingPage from "./Views/LandingPage";
import Employee from "./Views/Employee";
import Admin from "./Views/Admin";
import Teams from "./Views/Teams";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/landing',
    element: <LandingPage />
  },
  {
    path: '/Employee',
    element: <Employee/>
    
  },
  {
    path: '/Admin',
    element: <Admin />
  },
  {
    path: '/Teams',
    element: <Teams />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
