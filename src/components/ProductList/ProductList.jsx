import ProductItem from "../ProductItem/ProductItem"

export default function ProductList({
  products,
  deleteProduct,
}) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
}