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
    <div>
      <h1>name:{about?.name}</h1>
      <h1>email:{about?.email}</h1>
      <h1>university:{about?.university}</h1>
      <h1>address:{about?.address}</h1>
    </div>
  );
};

export default About;
