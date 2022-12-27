import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import Details from "../../Component/Details/Details";
import Home from "../../Component/Home/Home/Home";
import Login from "../../Component/Login/Login";
import Media from "../../Component/Media/Media";
import Sectionsection from "../../Component/Secondsection/Sectionsection";
import Signup from "../../Component/Signup/Signup";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch("http://localhost:5000/posts"),
      },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/detail/:id", element: <Details></Details> },
      {
        path: "/section",
        element: <Sectionsection></Sectionsection>,
        loader: async () => fetch("http://localhost:5000/posts"),
      },
      {
        path: "/media",
        element: <Media></Media>,
        loader: async () => fetch("http://localhost:5000/posts"),
      },
    ],
  },
]);
