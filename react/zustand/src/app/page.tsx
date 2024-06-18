"use client";
import styles from "./page.module.css";
import { createStore } from "@/utils";

const useCounterStore = createStore<{ counter: number, increment: () => void, decrement: () => void }>((set) => ({
  counter: 0,
  increment: () => {
    console.log("increment");
    set((state) => ({ ...state, counter: state.counter + 1 }));
  },
  decrement: () => set((state) => ({  ...state, counter: state.counter - 1 })),
}));

const CompA = () => {
  const count = useCounterStore((state) => state.counter);
  return (
    <div>
      <h2>
        {count}
      </h2>
      <button onClick={useCounterStore.getState().decrement}>Decrement</button>
      <button onClick={useCounterStore.getState().increment}>Increment</button>
    </div>
  )
};

const CompB = () => {
  const count = useCounterStore((state) => state.counter);
  return (
    <div>
      <h2>
        {count}
      </h2>
      <button onClick={useCounterStore.getState().decrement}>Decrement</button>
      <button onClick={useCounterStore.getState().increment}>Increment</button>
    </div>
  )
};

export default function Home() {
  return (
    <main className={styles.main}>
      <CompA />
      <CompB />
    </main>
  );
}
