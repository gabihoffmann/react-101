import { useState } from "react";

const code = `
  const [counter, setCounter] = useState(0);

  function sum() {
    setCounter((prev) => prev + 1);
  }

  function force() {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
      setCounter(counter + 1); //bad
    }, 2000);
  }
`;
export function Counter() {
  const [counter, setCounter] = useState(0);
  console.log(`re-render counter: ${counter}`);

  function sum() {
    setCounter((prev) => prev + 1);
  }

  function force() {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
      //bad
      setCounter(counter + 1);
    }, 2000);
  }

  return (
    <div className="container">
      <div className="box">
        <h3>Counter</h3>
        <span>counter: {counter}</span>
        <br />
        <br />
        <button onClick={sum}>counter ++</button>
        <br />
        <br />
        <button onClick={force}>force counter ++</button>
      </div>
      <div className="code">
        <div>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
