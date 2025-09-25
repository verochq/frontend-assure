import { useState, useEffect } from "react";

function KeyboardControlledCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {setCount(count + 1);};
  const decrement = () => {setCount(count - 1);};

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {increment();}
      else if (event.key === "ArrowDown") {decrement();};
    }

    window.addEventListener("keydown", handleKeyDown);

    return() => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [])



  return (
    <>
      <h1>Keyboard Controlled Counter</h1>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default KeyboardControlledCounter;
 