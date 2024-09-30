import React from "react";
import "./home.scss";
import LeftScreen from "./LeftScreen/LeftScreen";
import RightScreen from "./RightScreen/RightScreen";

const HomeScreen = () => {
  return (
    <div className="home-container">
      <LeftScreen />
      <RightScreen />
    </div>
  );
};

export default HomeScreen;
