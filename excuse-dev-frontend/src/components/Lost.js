import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Lost = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate.push("/");
    }, 5000);
  }, [navigate]);

  return (
    <div className="lost">
      <h1>i'm lost</h1>
      <img
        src="https://media.giphy.com/media/gKsJUddjnpPG0/giphy.gif"
        alt="Description of the gif"
      />
    </div>
  );
};

export default Lost;
