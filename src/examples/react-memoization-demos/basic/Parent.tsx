import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleName = () => {
    setName(() => Math.random().toString(36).substring(7));
  };

  return (
    <div>
      <Child count={count} handleCount={handleCount} />
      <h1>Name: {name}</h1>
      <button onClick={handleName}>Set name</button>
    </div>
  );
};

export default Parent;
