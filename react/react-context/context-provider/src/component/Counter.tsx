import { CounterContex } from "@/context/CounterContext"
import { useContext, useRef } from "react"

const Count = () => {
  const { value } = useContext(CounterContex);
  console.log("Count rendering!");

  return (
    <h2>
      {value}
    </h2>
  )
}

const CountController = () => {
  const { increment, decrement } = useContext(CounterContex);
  console.log("Count controller rendering!");

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

const NotUsingCounter = () => {
  console.log("NotUsingCounter rendering!");
  for (let i = 0; i < 500000000; i++) {
    // do nothing
  }

  return (
    <h2>
      I am not using the counter context values so I shouldn&apos;t re-render
    </h2>
  )
}

export const Counter = () => (
  <>
    <Count />
    <CountController />
    <NotUsingCounter />
  </>
);