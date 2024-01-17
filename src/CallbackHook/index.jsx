import { useCallback, useState } from "react";

const set = new Set();
const setCallback = new Set();
export function CallbackHook() {
  const [counter, setCounter] = useState(0);
  const [counterCallback, setCounterCallback] = useState(0);

  function handleSetCounter() {
    setCounter((prev) => ++prev);
    set.add(handleSetCounter);
  }

  console.log("Set: ", set);

  const handleSetCounterCallback = useCallback(() => {
    setCounterCallback((prev) => ++prev);
    setCallback.add(handleSetCounterCallback);
  }, []);

  console.log("Set callback: ", setCallback);
  return (
    <div>
      Contador: {counter}
      <button onClick={handleSetCounter}>Plus</button>
      <br />
      Callback contador: {counterCallback}
      <button onClick={handleSetCounterCallback}>Plus</button>
    </div>
  );
}
