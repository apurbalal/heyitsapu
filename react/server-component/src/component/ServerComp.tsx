"use server";
import { HorizontalProductList } from "@/component/HorizontalList";

export const ServerComponent = async ({ type, title }: { type: string, title: string }) => {
  const productList = await fetch(`http://localhost:3000/api/${type}`, { method: 'POST' }).then(res => res.json());
  return (
    <HorizontalProductList title={title} products={productList} />
  )
};