import "./App.css";
import { EasyModale } from "./lib";
import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const show = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <EasyModale
        text="Mon texte long doit s'afficher entierement jusqu'a ce mot fin"
        isOpen={isModalOpen}
        animated1
        closeModal={closeModal}
        textColor="blue"
        fontSize="30px"
        modalBorder="5px solid grey"
      />
      <button onClick={() => show()}>show</button>
    </div>
  );
}

export default App;
