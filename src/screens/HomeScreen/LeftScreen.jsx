import React from "react";

const LeftScreen = () => {
  return (
    <div className="left-container">
      <div className="items-container">
        <img src="logo.png" alt="" />
        <h1>CODE DESK</h1>
        <h2>Code. Compile. Debug.</h2>
        <button>
          <span class="material-icons">add</span>
          <span>Create Playground</span>
        </button>
      </div>
    </div>
  );
};

export default LeftScreen;
