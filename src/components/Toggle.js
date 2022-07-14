import React, { useState } from "react";

function Toggle() {

  const [ isOn, setIsOn ] = useState(false);
  //click event function
  function handleClick() {
    // updating state directly is a no-no!
    setIsOn((isOn) => !isOn);
  
  }
  const color = isOn ? "red" : "white";

  return <button style={{ background: color }}  onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
