// // src/components/MoveButton.js

import React, { useEffect, useRef } from "react";
import "./MoveButton.css";

const MoveButton = ({ position, onClick, isClicked }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    button.className = `move-button ${position} ${isClicked ? "clicked" : ""}`;
  }, [position, isClicked]);

  return (
    <button ref={buttonRef} className="move-button a" onClick={onClick}>
      Move
    </button>
  );
};

export default MoveButton;
