const code = `console.log("render WrongCounter");
let counter = 1;

function sum() {
  counter++;
  console.log("<WrongCounter> counter: ", counter);
}`;

export function WrongCounter() {
  console.log("render WrongCounter");
  let counter = 1;

  function sum() {
    counter++;
    console.log("<WrongCounter> counter: ", counter);
  }

  return (
    <div className="container">
      <div className="box">
        <h3>Wrong counter</h3>
        <span>Counter without re-render: {counter}</span>
        <br />
        <br />
        <button onClick={sum}>counter ++</button>
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
