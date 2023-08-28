import { useState } from "react";

export function Counter() {
  console.log("render Counter");
  const [counter, setCounter] = useState(0);
  console.log("<Counter> counter: ", counter);

  function sum() {
    setCounter((prev) => prev + 1);
  }

  function force() {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
      // setCounter(counter + 1);
    }, 2000);
  }

  return (
    <div>
      <span>Contador: {counter}</span>
      <br />
      <button onClick={sum}>counter ++</button>
      <button onClick={force}>force counter ++</button>
    </div>
  );
}
