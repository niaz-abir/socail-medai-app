import { createBrowserRouter } from "react-router-dom";
import About from "../../Component/About/About";
import Blog from "../../Component/Blog/Blog";
import Details from "../../Component/Details/Details";
import Edit from "../../Component/Edit/Edit";
import Home from "../../Component/Home/Home/Home";
import Login from "../../Component/Login/Login";
import Media from "../../Component/Media/Media";
import Message from "../../Component/Message/Message";
import Sectionsection from "../../Component/Secondsection/Sectionsection";
import Signup from "../../Component/Signup/Signup";
import Main from "../../layout/Main";
import Privateroute from "../Privateroute/Privateroute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch("https://socail-app-server.vercel.app/posts"),
      },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/message", element: <Message></Message> },
      { path: "/about", element: <About></About> },
      { path: "/edit/:id", element: <Edit></Edit> },

      {
        path: "/detail/:id",
        element: (
          <Privateroute>
            <Details></Details>
          </Privateroute>
        ),
      },
      {
        path: "/section",
        element: <Sectionsection></Sectionsection>,
        loader: async () => fetch("https://socail-app-server.vercel.app/posts"),
      },
      {
        path: "/media",
        element: <Media></Media>,
        loader: async () => fetch("https://socail-app-server.vercel.app/posts"),
      },
    ],
  },
]);
