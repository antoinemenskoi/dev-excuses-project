import React, { useState, useEffect } from "react";
import axios from "axios";
import AddExcuseModal from "./AddExcuseModal";

const ExcuseGenerator = () => {
  const [excuse, setExcuse] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchExcuse = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/excuses`
    );
    const excuses = response.data;
    const randomExcuse =
      excuses[Math.floor(Math.random() * excuses.length)].message;
    setExcuse(randomExcuse);
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  const handleRandomLoading = async () => {
    setLoading(true);
    const randomDelay = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(async () => {
      await fetchExcuse();
      setLoading(false);
    }, randomDelay);
  };

  return (
    <div className="excuse-generator">
      {loading ? <div className="loader">Chargement...</div> : <p>{excuse}</p>}
      <div className="container-buttons">
        <button className="primary-button" onClick={handleRandomLoading}>
          Générer une nouvelle excuse
        </button>
        <AddExcuseModal />
      </div>
    </div>
  );
};

export default ExcuseGenerator;
