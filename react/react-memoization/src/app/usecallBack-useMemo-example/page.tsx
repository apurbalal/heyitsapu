"use client";
import { MemoizedClassComp } from "@/component/MemoizedClassComp";
import { useCallback, useMemo, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const value = { data: "" }
  const memoizedValue = useMemo(() => ({ data: "" }), []);

  const callback = () => { console.log("Clicked me") }
  const memoizedCallback = useCallback(() => {
    console.log("Clicked me")
  }, []);

  return (
    <div style={{ margin: "auto", padding: 24, textAlign: "center", display: "flex", flexDirection: "column", rowGap: 24 }}>
      <h2>
        Count: {count}
      </h2>
      <div>
        <button onClick={() => setCount(prev => prev + 1) }>
          Increment
        </button>
        <button onClick={() => setCount(prev => prev - 1) }>
          Decrement
        </button>
      </div>
      <MemoizedClassComp title="Memoized class component, not memoized value, callback" value={value} callback={callback} />
      <MemoizedClassComp title="Memoized Function component, not memoized value, callback" value={value} callback={callback} />
      <div style={{ marginTop: 48 }} />
      <MemoizedClassComp title="Memoized class component, memoized value, callback" value={memoizedValue} callback={memoizedCallback} />
      <MemoizedClassComp title="Memoized Function component, memoized value, callback" value={memoizedValue} callback={memoizedCallback} />
    </div>
  );
}
