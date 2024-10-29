import { useState } from "react";
import CounterDisplayer from "./CounterDisplayer";
import CounterIncrementer from "./CounterIncrementer";

const ModularCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Modular Counter</h1>
      <CounterDisplayer count={count} />
      <CounterIncrementer setCount={setCount} />
    </div>
  );
};

export default ModularCounter;
