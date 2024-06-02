import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Views/Login";
import LandingPage from "./Views/LandingPage";
import Employee from "./Views/Employee";
import Admin from "./Views/Admin";
import Teams from "./Views/Teams";
import Layout from "./Views/Layout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/landing',
    element: <Layout flag={"landing"} />
  },
  {
    path: '/Employee',
    element: <Layout flag={"employee"} />

  },
  {
    path: '/Admin',
    element: <Layout flag={"admin"} />
  },
  {
    path: '/Teams',
    element: <Layout flag={"teams"} />
  },
  {
    path: '/requests',
    element: <Layout flag={"requests"} />
  },
  {
    path: '/joinTeam',
    element: <Layout flag={"joinTeam"} />
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
/>
    </>

  );
}

export default App;
