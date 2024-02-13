import { useState } from "react";

const code = `const [, setState] = useState();

let text = "text";

function changeText() {
  text = text-random(${Math.random().toFixed(2)});
  console.log("chamei o change text: ", text);
}

console.log("log do app:", text);
`;

export function LocalVariablePage() {
  const [, setState] = useState();

  let text = "text";

  function changeText() {
    text = `text-random(${Math.random().toFixed(2)})`;
    console.log("chamei o change text: ", text);
  }

  console.log("log do app:", text);

  return (
    <section about="variable">
      <div className="title">
        <h2>Local variable</h2>
        <span>Look the console 👀</span>
      </div>
      <div className="content">
        <div className="container">
          <div className="box">
            <div>Teste: {text}</div>
            <button onClick={changeText}>change text</button>
            <br />
            <br />
            <button onClick={setState}>force re-render</button>
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
