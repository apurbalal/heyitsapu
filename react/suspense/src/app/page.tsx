"use client";
import { cache, suspendedFetch } from "@/utils/suspendedFetch";
import styles from "./page.module.css";
import { Suspense, useEffect, useState } from "react";

const SuspendedComp = () => {
  const result = suspendedFetch(new URL("https://jsonplaceholder.typicode.com/posts/1"));
  return (
    <div style={{ border: "1px solid white", borderRadius: 8, padding: 12 }}>
      <h2>With suspense</h2>
      {JSON.stringify(result)}
    </div>
  );
}

const NormalComp = () => {
  const [result, setResult] = useState<unknown>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(resp => resp.json());
      setResult(resp);
      setLoading(false);
    }
    void init();
  }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div style={{ border: "1px solid white", borderRadius: 8, padding: 12 }}>
      <h2>Without suspense</h2>
      {JSON.stringify(result)}
    </div>
  )
}

export default function Home() {
  // Clear the cache to see the suspense fallback every time
  cache.clear();
  return (
    <main className={styles.main}>
      <h2>Suspense Data Fetching</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspendedComp />
      </Suspense>
      <NormalComp />
    </main>
  );
}
