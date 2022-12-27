import React, { useContext } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import "./Singlesection.css";
import { ButtonGroup } from "react-bootstrap";
import { Authcontext } from "../Context/Authprovider";
import { Link } from "react-router-dom";

const Singlesection = ({ singlesec }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={singlesec.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>{singlesec.textarea.slice(0, 100) + "..."}</p>
          <div className="card-actions justify-start">
            <button>
              <span>{singlesec.love}</span>
              <BsSuitHeartFill className="love-react"></BsSuitHeartFill>
            </button>
            <button>
              <AiTwotoneLike className="like-react"></AiTwotoneLike>
            </button>
          </div>
          <Link to={`detail/${singlesec._id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Singlesection;
