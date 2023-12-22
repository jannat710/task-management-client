import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Task from "../pages/Dashboard/Task/Task";
import AssignTask from "../pages/Dashboard/AssignTask/AssignTask";
import Todo from "../pages/Dashboard/ToDo/Todo";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        }
      ]
    },
    {
        path: '/signIn',
        element: <SignIn></SignIn>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'task',
          element:<Task></Task>
        },
        {
          path:'assignTask',
          element:<AssignTask></AssignTask>
        },
        {
          path:'todo',
          element:<Todo></Todo>
        }
      ]
    }
  ]);
  export default router;