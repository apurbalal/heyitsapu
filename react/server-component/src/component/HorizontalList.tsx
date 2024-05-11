export const HorizontalProductList = ({ title, products }: { title: string, products: any[] }) => (
  <div style={{ marginBottom: 24 }}>
    <h2>{title}</h2>
    <br />
    <div className="horizontal-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
);

export const HorizontalProductListSkeleton = ({ title }: { title: string }) => {
  const array = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div style={{ marginBottom: 24 }}>
      <h2>{title}</h2>
      <br />
      <div className="horizontal-list">
        {array.map((i) => (
          <div key={i} className="loading-card">
            <h3>Loading...</h3>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}