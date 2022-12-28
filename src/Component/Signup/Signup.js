import React, { useContext } from "react";
import { json } from "react-router-dom";
import { Authcontext } from "../Context/Authprovider";

const Signup = () => {
  const { createuser } = useContext(Authcontext);

  const handlesignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const university = form.university.value;
    const address = form.address.value;
    const password = form.password.value;
    createuser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          fetch("http://localhost:5000/users/new", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ name, email, university, address }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-purple-600 font-bold">Sign up</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-purple-500 ">
            <form onSubmit={handlesignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-1xl text-purple-700 ">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="email"
                  className="input bg-gray-400 input-bordered"
                />
              </div>
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
                  <span className="label-text text-1xl text-purple-700 ">
                    university
                  </span>
                </label>
                <input
                  type="text"
                  name="university"
                  placeholder="email"
                  className="input bg-gray-400 input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-1xl text-purple-700 ">
                    address
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="email"
                  className="input bg-gray-400 input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-1xl text-purple-700 ">
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
                  <a
                    href="#"
                    className="label-text-alt text-purple-600 link link-hover"
                  >
                    Login please
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn all-btn">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
