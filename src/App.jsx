import { Button } from "./Button";
import { Counter } from "./Counter";
import { LifeCycle } from "./LifeCycle";
import { WrongCounter } from "./WrongCounter";

function App() {
  return (
    <div>
      <h1>Hello React App!</h1>
      <section>
        <h2>Props and Children</h2>
        <Button text={"olá"}>
          <strong>Hello</strong>
        </Button>
      </section>

      <section>
        <h2>State and useState</h2>
        <WrongCounter />
        <br />
        <Counter />
      </section>

      <section>
        <h2>useEffect and Life Cycle</h2>
        <LifeCycle />
      </section>
    </div>
  );
}

export default App;
