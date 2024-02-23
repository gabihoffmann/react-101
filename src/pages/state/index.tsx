import { Counter } from "./Counter";

export function StatePage() {
  return (
    <section about="state and useState">
      <div className="title">
        <h2>State and UseState</h2>
        <span>Look the console 👀</span>
      </div>
      <div className="content">
        <Counter />
      </div>
    </section>
  );
}
