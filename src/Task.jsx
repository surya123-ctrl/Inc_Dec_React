import React, { useState } from "react";
const Task = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    value >= 1 ? setValue(value - 1) : alert("Can't decrement below 0");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{value}</h1>
          <div className="btn_div">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Task;
