export function WrongCounter() {
  console.log("render WrongCounter");
  let counter = 1;

  function sum() {
    counter++;
    console.log("<WrongCounter> counter: ", counter);
  }

  return (
    <div>
      <span>Contador sem re-render: {counter}</span>
      <br />
      <button onClick={sum}>counter ++</button>
    </div>
  );
}
