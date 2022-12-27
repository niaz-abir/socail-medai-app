import React, { useContext } from "react";
import { Authcontext } from "../Context/Authprovider";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(Authcontext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen pb-32 bg-black">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-purple-600 font-bold">Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  shadow-purple-500">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-1xl text-purple-700 ">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input bg-gray-400 input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className=" text-1xl text-purple-700 label-text">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input bg-gray-400 input-bordered"
                />
                <label className="label">
                  <Link to="/signup">
                    {" "}
                    <a
                      href="#"
                      className="label-text-alt text-1xl text-purple-700  link link-hover"
                    >
                      Sign up please
                    </a>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn all-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
