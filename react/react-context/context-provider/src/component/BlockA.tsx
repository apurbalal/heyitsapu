import { CounterContext } from "@/context/CounterContext";
import { useState } from "react";
import { Counter } from "./Counter";

export const BlockA = () => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider
      value={{
        value: counter,
        increment: () => setCounter(prev => prev + 1),
        decrement: () => setCounter(prev => prev - 1)
      }}
    >
      <Counter />
    </CounterContext.Provider>
  )
};
