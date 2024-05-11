export async function POST() {
  console.log("Suggested products requested")
  const data = await new Promise((res, rej) => {
    setTimeout(() => {
      const products = [];
      for (let i = 0; i < 100; i++) {
        products.push({
          id: i,
          name: `Suggested Product ${i}`,
          price: Math.random() * 100,
        });
      }
      res(products);
    }, 5000);
  });

  return Response.json(data);
};
