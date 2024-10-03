import React from "react";
import "./home.scss";
import LeftScreen from "./LeftScreen/LeftScreen";
import RightScreen from "./RightScreen/RightScreen";
import Modal from "../../providers/modals/Modal";

const HomeScreen = () => {
  return (
    <div className="home-container">
      <LeftScreen />
      <RightScreen />
      <Modal />
    </div>
  );
};

export default HomeScreen;
