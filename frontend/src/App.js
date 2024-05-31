import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Views/Login";
import LandingPage from "./Views/LandingPage";

const router= createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/landing',
    element: <LandingPage/>
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
