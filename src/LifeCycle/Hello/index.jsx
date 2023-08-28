import { useEffect, useState } from "react";

export function Hello(props) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Life Cycle - hello - mounted");

    return () => {
      console.log("unmounted effect []");
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("Life Cycle - hello - unmounted");
    };
  }, []);

  useEffect(() => {
    setNumber((prev) => ++prev);
    console.log("hello mount and set number without deps");

    return () => {
      console.log("hello unmount and set number without deps");
    };
  }, []);

  useEffect(() => {
    console.log("number updated: ", number);

    return () => {
      console.log("number update umount");
    };
  }, [number]);

  /**
   * This code create a infinity loop
   *  useEffect(() => {
   *     setNumber((prev) => ++prev);
   *  }, [number]);
   */

  useEffect(() => {
    console.log("effect without array");
  });

  return (
    <div>
      <span>props: {String(props.status)}</span>
      <br />
      <span>hello {number}</span>
      <br />
      <button onClick={() => setNumber((prev) => ++prev)}>change number</button>
    </div>
  );
}
