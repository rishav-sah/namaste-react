import React from "react";
import Header from "./components/Header/Header.jsx";
import Heading from "./components/Heading/Heading.jsx";
import HeadingElement from "./components/HeadingElement/HeadingElement.jsx";
import Card from "./components/Card/Card.jsx";
import team from "./utils/userDetails.json"

import "./style.css";

const App = () => {
  return (
    <div className="container">
      {/* Header with Logo */}
      <Header/>
      {/* Heading Using JSX & createElement */}
      {/* <div className="heading">
        <Heading/>
        <HeadingElement/>
      </div> */}

      <div className="card-container">
        {
          team.users.map((user) => {
            const {id, img, name, address, organization, designation} = user;
            return (
              <Card
                key={id}
                img={img}
                name={name}
                address={address}
                organization={organization}
                designation={designation}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default App;