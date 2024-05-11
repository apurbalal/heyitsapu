import { HorizontalProductList, HorizontalProductListSkeleton } from "@/component/HorizontalList";
import { useEffect, useState } from "react";

const Comp = ({ type, title }: { type: string, title: string }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const productList = await fetch(`http://localhost:3000/api/${type}`, { method: 'POST' }).then(res => res.json());
      setList(productList);
      setLoading(false);
    }

    void init();
  }, [type]);

  return (
    <>
      {loading ? <HorizontalProductListSkeleton title={title} /> : <HorizontalProductList title={title} products={list} />}
    </>
  )
};

export default function Page() {

  return (
    <main>
      <h2 style={{ padding: 24 }}>Client side rendering example</h2>
      <hr />
      <br /><br />
      <Comp title="Popular Products" type="popular" />
      <Comp title="Suggested Products" type="suggested" />
      <Comp title="Trending Products" type="trending" />
    </main>
  );
};
