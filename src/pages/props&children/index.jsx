import { Component } from "./component";

export function PropsAndChildrenPage() {
  return (
    <section about="props and children">
      <div className="title">
        <h2>Props and Children</h2>
      </div>
      <div className="content">
        <Component text={"hello"}>
          <strong>Hello</strong>
        </Component>
      </div>
    </section>
  );
}
