import { useEffect, useState } from "react";

export const code = `const [number, setNumber] = useState(0);

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
`;
export function EffectComponent() {
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
    <div className="box">
      <span>hello {number}</span>
      <br />
      <button onClick={() => setNumber((prev) => ++prev)}>change number</button>
    </div>
  );
}
