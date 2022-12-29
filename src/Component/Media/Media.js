import React from "react";

import { useLoaderData } from "react-router-dom";
import Singlemedia from "./Singlemedia";

const Media = () => {
  const media = useLoaderData();
  console.log(media);
  return (
    <div className="bg-black pt-36 lg:pt-10 pl-4 lg:pl-16">
      {media.map((single) => (
        <Singlemedia single={single} key={single._id}></Singlemedia>
      ))}
    </div>
  );
};

export default Media;
