import { CounterContext } from "@/context/CounterContext"
import { useContext, useRef } from "react"

const Count = () => {
  const { value } = useContext(CounterContext);
  console.log("Count rendering!");

  return (
    <h2>
      {value}
    </h2>
  )
}

const CountController = () => {
  const { increment, decrement } = useContext(CounterContext);
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

  // Simulate a heavy computation you can change the number to block the main thread to affect UI
  for (let i = 0; i < 5000000; i++) {
    // do nothing
  }

  return (
    <h2 style={{ marginTop: 12 }}>
      Not using counter component
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