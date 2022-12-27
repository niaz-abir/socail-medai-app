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
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={single.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>{single.textarea}</p>
          <div className="card-actions justify-start">
            <button onClick={loveHandler}>
              <BsSuitHeartFill></BsSuitHeartFill>
            </button>
            <AiTwotoneLike></AiTwotoneLike>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlemedia;
