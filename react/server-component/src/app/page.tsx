import { HorizontalProductListSkeleton } from "@/component/HorizontalList";
import { ServerComponent } from "@/component/ServerComp";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

export default function Page() {
  unstable_noStore();
  return (
    <main>
      <h2 style={{ padding: 24 }}>Server component example</h2>
      <hr />
      <br /><br />
      <Suspense fallback={<HorizontalProductListSkeleton title="Popular Products" />}>
        <ServerComponent title="Popular Products" type="popular" />
      </Suspense>
      <Suspense fallback={<HorizontalProductListSkeleton title="Suggested Products" />}>
        <ServerComponent title="Suggested Products" type="suggested" />
      </Suspense>
      <Suspense fallback={<HorizontalProductListSkeleton title="Trending Products" />}>
        <ServerComponent title="Trending Products" type="trending" />
      </Suspense>
    </main>
  );
};
