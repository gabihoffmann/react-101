import { useCallback, useState } from "react";

const code = `
const set = new Set();
const setCallback = new Set();
const setCallbackUp = new Set();
-------------------------------------------
const [counter, setCounter] = useState(0);
const [counterCallback, setCounterCallback] = useState(0);
const [dependenceCallback, setDependenceCallback] = useState(0);

function handleSetCounter() {
  setCounter((prev) => ++prev);
  set.add(handleSetCounter);
}

console.log("Set function: ", set);

const handleSetCounterCallback = useCallback(() => {
  setCounterCallback((prev) => ++prev);
  setCallback.add(handleSetCounterCallback);
}, []);

console.log("Set callback:", setCallback);

const handleSetCounterCallbackUp = useCallback(() => {
  setCounterCallback((prev) => ++prev);
  alert("dependence:", dependenceCallback);
  setCallbackUp.add(handleSetCounterCallbackUp);
}, [dependenceCallback]);

console.log("Set callback with dependence: ", setCallbackUp);
`;

const set = new Set();
const setCallback = new Set();
const setCallbackUp = new Set();
export function CallbackHookPage() {
  const [counter, setCounter] = useState(0);
  const [counterCallback, setCounterCallback] = useState(0);
  const [dependenceCallback, setDependenceCallback] = useState(0);

  function handleSetCounter() {
    setCounter((prev) => ++prev);
    set.add(handleSetCounter);
  }

  console.log("Set function: ", set);

  const handleSetCounterCallback = useCallback(() => {
    setCounterCallback((prev) => ++prev);
    setCallback.add(handleSetCounterCallback);
  }, []);

  console.log("Set callback:", setCallback);

  const handleSetCounterCallbackUp = useCallback(() => {
    setCounterCallback((prev) => ++prev);
    console.log("dependence:", dependenceCallback);
    setCallbackUp.add(handleSetCounterCallbackUp);
  }, [dependenceCallback]);

  console.log("Set callback with dependence: ", setCallbackUp);

  return (
    <section about="useCallback">
      <div className="title">
        <h2>useCallback</h2>
        <span>Look the console 👀</span>
      </div>

      <div className="content">
        <div className="container">
          <div className="box">
            Contador: {counter}
            <button onClick={handleSetCounter}>Plus</button>
            <br />
            Callback contador: {counterCallback}
            <button onClick={handleSetCounterCallback}>Plus</button>
            <br />
            <button onClick={handleSetCounterCallbackUp}>
              Plus with dependence
            </button>
            <button onClick={() => setDependenceCallback((prev) => ++prev)}>
              change dependence
            </button>
          </div>
          <div className="code">
            <div>
              <pre>
                <code>{code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
