const CounterIncrementer = ({
  setCount,
}: {
  setCount: React.Dispatch<(numb: number) => number>;
}) => {
  return (
    <button 
      className="btn btn-primary"
      onClick={() => setCount((count) => count + 1)}>
        Increment
    </button>
  );
};

export default CounterIncrementer;
