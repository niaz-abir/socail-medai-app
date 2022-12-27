import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const postId = useParams().id;

  const [details, setdetails] = useState([]);

  useEffect(() => {
    fetch(` https://socail-app-server.vercel.app/detail/${postId}`)
      .then((res) => res.json())
      .then((data) => setdetails(data));
  }, []);

  return (
    <div className="bg-black pt-8 pb-96">
      <div className="card w-3/4 text-white text-2xl shadow-xl">
        <div className="card-body">{details.textarea}</div>
      </div>
    </div>
  );
};

export default Details;
