import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../Component/Context/Authprovider";

const Privateroute = ({ children }) => {
  const { user } = useContext(Authcontext);
  let location = useLocation();
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Privateroute;
