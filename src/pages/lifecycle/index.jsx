import { useState } from "react";
import { EffectComponent, code } from "./component";

export function LifeCyclePage() {
  const [isShow, setIsShow] = useState(true);

  return (
    <section about="life cycle">
      <div className="title">
        <h2>Life Cycle and useEffect</h2>
        <span>Look the console 👀</span>
      </div>
      <div className="content">
        <div className="container">
          <div className="box">
            <button onClick={() => setIsShow((prev) => !prev)}>
              {isShow ? "unmount" : "mount"}
            </button>
            <br />
            <br />
            <div>{isShow && <EffectComponent />}</div>
          </div>
          <div className="code">
            <div className="code">
              <div>
                <pre>
                  <code>{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
