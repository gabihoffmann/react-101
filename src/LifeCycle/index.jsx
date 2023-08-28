import { useState } from "react";
import { Hello } from "./Hello";

export function LifeCycle() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <button onClick={() => setIsShow((prev) => !prev)}>click</button>
      <span>{String(isShow)}</span>
      {isShow && <Hello />}
      {/* <Hello status={isShow} /> */}
    </div>
  );
}
