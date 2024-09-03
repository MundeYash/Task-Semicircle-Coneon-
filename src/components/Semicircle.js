// src/components/Semicircle.js
import React, { useState } from "react";
import "./Semicircle.css";
import MoveButton from "./MoveButton";

const Semicircle = () => {
  const [position, setPosition] = useState("a");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); // Set the button to clicked state immediately
    alert(`You are on point ${position.toUpperCase()}`);
    const newPosition = prompt(
      `You are at point ${position.toUpperCase()}. Enter new position (a, b, c):`
    );
    if (newPosition === "a" || newPosition === "b" || newPosition === "c") {
      setPosition(newPosition);
    }
    else{
      alert("Invalid position. Please enter a, b, or c.");
    }
  };

  return (
    <div className="semicircle-container">
      <div className="semicircle">
        <div
          className="point point-a"
          onMouseEnter={() => {
            setPosition("a");
            setIsClicked(false);
          }}
        >
          A
        </div>
        <div
          className="point point-b"
          onMouseEnter={() => {
            setPosition("b");
            setIsClicked(false);
          }}
        >
          B
        </div>
        <div
          className="point point-c"
          onMouseEnter={() => {
            setPosition("c");
            setIsClicked(false);
          }}
        >
          C
        </div>
        <MoveButton
          position={position}
          onClick={handleClick}
          isClicked={isClicked}
        />
      </div>
    </div>
  );
};

export default Semicircle;
