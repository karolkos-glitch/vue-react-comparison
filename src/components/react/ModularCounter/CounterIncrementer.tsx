const CounterIncrementer = ({
  setCount,
}: {
  setCount: React.Dispatch<(numb: number) => number>;
}) => {
  return (
    <button className="btn btn-secondary" onClick={() => setCount((count) => count + 1)}>Increment</button>
  );
};

export default CounterIncrementer;
