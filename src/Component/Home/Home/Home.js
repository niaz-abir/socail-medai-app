import React from "react";
import Firstsection from "../../Firstsection/Firstsection";
import Sectionsection from "../../Secondsection/Sectionsection";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Firstsection></Firstsection>
      <Sectionsection></Sectionsection>
    </div>
  );
};

export default Home;