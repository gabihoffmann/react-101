import { useCallback, useState } from "react";

const set = new Set();
const setCallback = new Set();
const setCallbackUp = new Set();
export function CallbackHook() {
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

  return (
    <div>
      Contador: {counter}
      <button onClick={handleSetCounter}>Plus</button>
      <br />
      Callback contador: {counterCallback}
      <button onClick={handleSetCounterCallback}>Plus</button>
      <br />
      <button onClick={handleSetCounterCallbackUp}>Plus with dependence</button>
      <button onClick={() => setDependenceCallback((prev) => ++prev)}>
        change dependence
      </button>
    </div>
  );
}
