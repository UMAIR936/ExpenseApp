import React from "react";
const EachName = (props) => {
  return (
    <li>
      <div>
        <h1>My name is {props.name}</h1>
        <h1>My age is {props.age}</h1>
      </div>
    </li>
  );
};

export default EachName;
