import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";

const Singlemedia = ({ single }) => {
  const loveHandler = () => {
    fetch("https://localhost:5000/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  };

  return (
    <div className="pb-32">
      <div className="card w-full mb-4 lg:w-3/4  shadow-md shadow-pink-400">
        <figure>
          <img src={single.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-1xl text-white">{single.textarea}</p>
          <div className="card-actions justify-start">
            <button onClick={loveHandler}>
              <BsSuitHeartFill className="love-react text-2xl text-white"></BsSuitHeartFill>
            </button>
            <AiTwotoneLike className="like-react text-2xl text-white"></AiTwotoneLike>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlemedia;
