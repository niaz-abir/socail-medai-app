import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const postId = useParams().id;

  const [details, setdetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/detail/${postId}`)
      .then((res) => res.json())
      .then((data) => setdetails(data));
  }, []);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">{details.textarea}</div>
      </div>
    </div>
  );
};

export default Details;
