import React from "react";
import { useLoaderData } from "react-router-dom";
import Singlesection from "./Singlesection";

const Sectionsection = () => {
  const section = useLoaderData();
  console.log(section);
  return (
    <div>
      {/* <h1 className="text-3xl text-center mb-4 font-thin text-pink-700">
        All post
      </h1> */}
      <div>
        {section.map((singlesec) => (
          <Singlesection
            singlesec={singlesec}
            key={singlesec._id}
          ></Singlesection>
        ))}
      </div>
    </div>
  );
};

export default Sectionsection;
