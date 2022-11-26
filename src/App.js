import React from "react";
import Header from "./components/Header/Header.jsx";
import Heading from "./components/Heading/Heading.jsx";
import HeadingElement from "./components/HeadingElement/HeadingElement.jsx";

import "./style.css";

const App = () => {
  return (
    <div className="container">
    {/* Header with Logo */}
      <Header/>
    {/* Heading Using JSX & createElement */}
      <div className="heading">
        <Heading/>
        <HeadingElement/>
      </div>
    </div>
  );
};

export default App;