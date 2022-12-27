import React from "react";

const Firstsection = () => {
  const handlesubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.img.value;
    const textarea = form.textarea.value;

    const response = await fetch("http://localhost:5000/posts/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, textarea }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>First section</h1>
      <div>
        <form onSubmit={handlesubmit}>
          <input
            type="file"
            name="img"
            placeholder="Type here"
            className="input input-bordered w-96  h-28 max-w-xs"
          />
          <br />
          <textarea
            className="textarea mt-6 mb-2 w-96 h-56 textarea-secondary"
            placeholder="..."
            name="textarea"
          ></textarea>
          <br />
          <button className="btn btn-outline" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Firstsection;
