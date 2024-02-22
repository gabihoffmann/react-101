import { Component } from "./component";

export function PropsAndChildrenPage() {
  let state = 0;
  function updateVariable() {
    state = Math.random().toFixed(2);
    console.log(`%c update variable: ${state}`, "color: red");
  }
  return (
    <section about="props and children">
      <div className="title">
        <h2>Props and Children</h2>
        <span>Look the console 👀</span>
      </div>
      <div className="content box">
        <h3>Component Father</h3>
        <button onClick={updateVariable}>update let</button>
        <br />
        <br />
        <Component text={"hello"} let={state}>
          <strong>Hello</strong>
        </Component>
      </div>
    </section>
  );
}
