import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase";

export const Authcontext = createContext();
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      console.log(currentuser);
      setloading(false);
    });
    return () => unsubscribe();
  }, []);
  const authinfo = {
    createuser,
    login,
    googleSignin,
    user,
    loading,
  };

  return (
    <div>
      <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    </div>
  );
};

export default Authprovider;
