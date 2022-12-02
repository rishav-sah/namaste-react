import React from "react";

const HeadingElement = () => {
  return (
    React.createElement("div", {
      tabIndex: 3,
      className: "title"
    },
    [
      React.createElement("h1", null, "Heading 1 using createElement"),
      React.createElement("h2", null, "Heading 2 using createElement"),
      React.createElement("h3", null, "Heading 3 using createElement"),
      React.createElement("h4", null, "Heading 4 using createElement")
    ]
  )
  );
}

export default HeadingElement;