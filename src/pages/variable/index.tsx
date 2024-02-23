import { useState } from "react";

const code = `let text = "text";

function changeText() {
  text = text_\${Math.random().toFixed(2)};
  console.log("change text value: ", text);
}

console.log("render component:", text);
`;

export function LocalVariablePage() {
  const [, setState] = useState(0);

  let text = "text";

  function changeText() {
    text = `text_${Math.random().toFixed(2)}`;
    console.log(`%c change text value: ${text}`, "color: red");
  }

  console.log("render component:", text);

  return (
    <section about="variable">
      <div className="title">
        <h2>Local variable</h2>
        <span>Look the console 👀</span>
      </div>
      <div className="content">
        <div className="container">
          <div className="box">
            <div>
              Text: <span className="secondary">{text}</span>
            </div>
            <button onClick={changeText}>change text</button>
            <br />
            <br />
            <button onClick={() => setState(Math.random())}>
              force re-render
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
