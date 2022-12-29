import React, { useState } from "react";
import Firstsection from "../../Firstsection/Firstsection";
import Sectionsection from "../../Secondsection/Sectionsection";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="bg-black">
      <div className="text-center pt-6">
        <h1 className="text-5xl mb-2 text-purple-600">
          Frost<span className="text-pink-700">lite</span>
        </h1>
        {/* <p className="text-1xl text-pink-600">"You Think,we Do"</p> */}
      </div>
      <div className="text-center">
        <TypeAnimation
          sequence={["You Think,we Do", 100, ""]}
          speed={10}
          deletionSpeed={15}
          wrapper="h2"
          repeat={Infinity}
          className="text-1xl text-pink-700"
        />
      </div>

      <div className="grid bg-black pt-8 grid-cols-1 lg:grid-cols-2">
        <Firstsection setcount={setcount}></Firstsection>
        <Sectionsection count={count}></Sectionsection>
      </div>
    </div>
  );
};

export default Home;
