import React from "react";
import HeaderComponent from "./components/HeaderComponent.jsx";
import CardContainer from "./components/CardContainer.jsx";

import "./style.css";

const App = () => {
  return (
    <div className="app-container">
      <HeaderComponent />
      <CardContainer />
    </div>
  );
};

export default App;