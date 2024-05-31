import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Views/Login";
import LandingPage from "./Views/LandingPage";
import Employee from "./Views/Employee";
import Admin from "./Views/Admin";
import Teams from "./Views/Teams";
import Layout from "./Views/Layout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/landing',
    element: <Layout flag={"landing"}/>
  },
  {
    path: '/Employee',
    element: <Layout flag={"employee"}/>
    
  },
  {
    path: '/Admin',
    element: <Layout flag={"admin"}/>
  },
  {
    path: '/Teams',
    element: <Layout flag={"teams"}/>
  },
]);
   

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
