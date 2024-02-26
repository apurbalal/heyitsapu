"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  // Clear the cache to see the suspense fallback every time
  const [counter, setCounter] = useState(0);
  return (
    <>
      <span className="noise-bg" />
      <div className="center-container">
        <div className="counter">
          <h1 key={counter}>{counter}</h1>
        </div>
        <div className="divider" />
        <div className="row">
          <button onClick={() => setCounter(prev => prev + 1)}>
            Increment
          </button>
          <button onClick={() => setCounter(prev => prev - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
