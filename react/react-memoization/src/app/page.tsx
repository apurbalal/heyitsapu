"use client";
import { FunctionComp } from "@/component/FunctionComp";
import { MemoizedClassComp } from "@/component/MemoizedClassComp";
import { MemoizedFunctionComp } from "@/component/MemoizedFunctionComp";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

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
      <FunctionComp title="Non memoized component" />
      <MemoizedClassComp title="Memoized class component" />
      <MemoizedFunctionComp title="Memoized function component" />
    </div>
  );
}
