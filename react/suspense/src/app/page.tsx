"use client";
import { cache, suspendedFetch } from "@/utils/suspendedFetch";
import styles from "./page.module.css";
import { Suspense } from "react";

const CompA = () => {
  const result = suspendedFetch(new URL("https://jsonplaceholder.typicode.com/posts/1"));
  return <div>{JSON.stringify(result)}</div>;
}

export default function Home() {
  // Clear the cache to see the suspense fallback every time
  cache.clear();
  return (
    <main className={styles.main}>
      <h2>Suspense</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <CompA />
      </Suspense>
    </main>
  );
}
