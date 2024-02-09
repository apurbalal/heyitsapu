import { createContext } from "react";

export const CounterContex = createContext({
  value: 0,
  increment: () => { },
  decrement: () => { }
});
