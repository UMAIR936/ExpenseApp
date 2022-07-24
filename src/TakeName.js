import React, { useState } from "react";

function TakeName(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addDataHandler = (event) => {
    event.preventDefault();
    const ourData = {
      name: enteredName,
      age: enteredAge,
    };
    props.onGetData(ourData);
  };

  return (
    <form onSubmit={addDataHandler}>
      <div>
        <h1>Add Name</h1>
        <input type="text" onChange={changeNameHandler} />
      </div>
      <h1>Add Age</h1>
      <input type="text" onChange={changeAgeHandler} />
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default TakeName;
