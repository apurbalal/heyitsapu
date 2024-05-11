import { HorizontalProductList } from "@/component/HorizontalList";

export default function Page ({ popular, suggested, trending }: any) {
  return (
    <main>
      <h2 style={{ padding: 24 }}>Server side rendering example</h2>
      <hr />
      <br /><br />
      <HorizontalProductList title="Popular Products" products={popular} />
      <HorizontalProductList title="Suggested Products" products={suggested} />
      <HorizontalProductList title="Trending Products" products={trending} />
    </main>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const [popular, suggested, trending] = await Promise.all([
    fetch('http://localhost:3000/api/popular', { method: 'POST' }).then(res => res.json()),
    fetch('http://localhost:3000/api/suggested', { method: 'POST' }).then(res => res.json()),
    fetch('http://localhost:3000/api/trending', { method: 'POST' }).then(res => res.json()),
  ]);

  return {
    props: { 
      popular,
      suggested,
      trending,
   }}
};
