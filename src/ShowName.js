import React from "react";
import EachName from "./EachName";
const ShowName = (props) => {
  return (
    <ul>
      {props.items.map((expense) => (
        <EachName name={expense.name} age={expense.age} />
      ))}
    </ul>
    // <ul>
    //   {props.items.map((expense) => (
    //     <EachName name={expense.name} age={expense.age} />
    //   ))}
    // </ul>
  );
};

export default ShowName;
