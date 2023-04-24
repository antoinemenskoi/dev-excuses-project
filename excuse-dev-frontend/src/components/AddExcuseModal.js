import React, { useState } from "react";
import axios from "axios";

const AddExcuseModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [newExcuse, setNewExcuse] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setNewExcuse(event.target.value);
  };

  const handleSubmit = async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/excuses`, {
      message: newExcuse,
    });
    setNewExcuse("");
    closeModal();
  };

  return (
    <div className="add-excuse-modal">
      <button className="primary-button" onClick={openModal}>
        Ajouter une excuse
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Ajouter une nouvelle excuse</h2>
            <input
              type="text"
              value={newExcuse}
              onChange={handleChange}
              placeholder="Entrez votre excuse ici"
            />
            <button className="secondary-button" onClick={handleSubmit}>
              Valider
            </button>
            <button className="secondary-button" onClick={closeModal}>
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddExcuseModal;
