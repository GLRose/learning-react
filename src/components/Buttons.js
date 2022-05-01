import React, { useState } from "react";

const Buttons = () => {
  const [count, setCount] = useState(1);

  function decrementCount(){
    //the "prev" can be called anything it understands because the setCount function is a hook function
    setCount(prev => prev -1)
    console.log('run function')
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
    </div>
  )
}

export default Buttons