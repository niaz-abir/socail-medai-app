import React, { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import { Authcontext } from "../Context/Authprovider";

const About = () => {
  const { user } = useContext(Authcontext);
  const [about, setabout] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setabout(data));
  }, [user]);
  return (
    <div className="bg-black pt-6 lg:pt-16  pb-96 pl-6 lg:pl-32">
      <h1 className="text-4xl pb-2  font-thin text-pink-700">ABOUT YOURSELF</h1>
      <div className="shadow-md w-full lg:w-3/4 px-6 py-8 shadow-purple-600">
        <h1 className="text-2xl pb-2 text-purple-700">name: {about?.name}</h1>
        <h1 className="text-2xl pb-2 text-purple-700">email: {about?.email}</h1>
        <h1 className="text-2xl pb-2 text-purple-700">
          university: {about?.university}
        </h1>
        <h1 className="text-2xl text-purple-700">address: {about?.address}</h1>
        <button className="text-2xl px-4 py-2  text-white all-btn">Edit</button>
      </div>
    </div>
  );
};

export default About;
