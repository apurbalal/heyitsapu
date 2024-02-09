"use client";

import { BlockA } from "@/component/BlockA";
import { BlockB } from "@/component/BlockB";

export default function Home() {
  return (
    <main>
      <div>
        <div style={{ flex: 1, border: "1px solid white", borderRadius: 8, textAlign: "center", padding: 24 }}>
          <h2>
            More renders
          </h2>
          <p>
            Childs which are not using the value are also re-rending.
          </p>
          <BlockA />
        </div>
        <div style={{ flex: 1, border: "1px solid white", borderRadius: 8, textAlign: "center", padding: 24  }}>
          <h2>
            Less renders
          </h2>
          <p>
            Childs which are not using the value are not re-rendering.
          </p>
          <BlockB />
        </div>
      </div>
    </main>
  );
}
