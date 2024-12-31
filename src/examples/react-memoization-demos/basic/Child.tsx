interface ChildProps {
  count: number;
  handleCount: () => void;
}

const Child = ({ count, handleCount }: ChildProps) => {
  console.info("Child rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default Child;
