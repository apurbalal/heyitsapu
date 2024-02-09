import { createContext } from "react";

export const CounterContext = createContext({
  value: 0,
  increment: () => { },
  decrement: () => { }
});
