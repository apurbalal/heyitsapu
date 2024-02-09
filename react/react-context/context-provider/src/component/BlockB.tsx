import { CounterContex } from "@/context/CounterContext";
import { useState } from "react";
import { Counter } from "./Counter";

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContex.Provider
      value={{
        value: counter,
        increment: () => setCounter(prev => prev + 1),
        decrement: () => setCounter(prev => prev - 1)
      }}
    >
      {children}
    </CounterContex.Provider>
  )
}

export const BlockB = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);
