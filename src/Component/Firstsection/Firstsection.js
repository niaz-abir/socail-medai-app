import React from "react";
import "./Firstsection.css";

const Firstsection = () => {
  const handlesubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.img.value;
    const textarea = form.textarea.value;

    const response = await fetch(
      "https://socail-app-server.vercel.app/posts/new",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img, textarea }),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="pl-16">
      <h1 className="text-3xl font-bold font-thin mb-6 text-pink-700">
        {" "}
        What do you think?
      </h1>
      <div>
        <form onSubmit={handlesubmit}>
          <input
            type="file"
            name="img"
            placeholder="Type here"
            className="input input-bordered w-96 bg-purple-300  h-28 max-w-xs"
          />
          <br />
          <textarea
            className="textarea mt-4 mb-2 w-80 h-56 bg-purple-00  textarea-secondary"
            placeholder="..."
            name="textarea"
          ></textarea>
          <br />
          <button
            className="btn all-btn w-80 bg-purple-300 text-pink-700 "
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Firstsection;
