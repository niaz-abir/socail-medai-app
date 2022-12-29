import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Singlesection from "./Singlesection";

const Sectionsection = ({ count }) => {
  // const section = useLoaderData();
  const [section, setsection] = useState();

  useEffect(() => {
    fetch("https://socail-app-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        setsection(data);
      });
  }, [count]);
  console.log(section);
  return (
    <div>
      {/* <h1 className="text-3xl text-center mb-4 font-thin text-pink-700">
        All post
      </h1> */}
      <div>
        {section?.map((singlesec) => (
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
