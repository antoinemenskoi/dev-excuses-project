import React from "react";
import ExcuseGenerator from "./ExcuseGenerator";
import AddExcuseModal from "./AddExcuseModal";

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Les excuses de dev</h1>
      <ExcuseGenerator />
    </div>
  );
};

export default MainPage;
