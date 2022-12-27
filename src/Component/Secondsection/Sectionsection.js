import React from "react";
import { useLoaderData } from "react-router-dom";
import Singlesection from "./Singlesection";

const Sectionsection = () => {
  const section = useLoaderData();
  console.log(section);
  return (
    <div>
      {section.map((singlesec) => (
        <Singlesection
          singlesec={singlesec}
          key={singlesec._id}
        ></Singlesection>
      ))}
    </div>
  );
};

export default Sectionsection;
