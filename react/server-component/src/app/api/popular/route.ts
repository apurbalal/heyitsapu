export async function POST() {
  console.log("Popular products requested")
  const data = await new Promise((res, rej) => {
    setTimeout(() => {
      const products = [];
      for (let i = 0; i < 100; i++) {
        products.push({
          id: i,
          name: `Popular Product ${i}`,
          price: Math.random() * 100,
        });
      }
      res(products);
    }, 2000);
  });

  return Response.json(data);
};
