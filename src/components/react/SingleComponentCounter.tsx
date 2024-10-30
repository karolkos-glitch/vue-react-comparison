import { useState } from "react";

const SingleComponentCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Single Component Counter</h1>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default SingleComponentCounter;
