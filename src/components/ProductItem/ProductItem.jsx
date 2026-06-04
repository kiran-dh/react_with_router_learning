import { memo } from "react";

function ProductItem({ product, deleteProduct }) {
  console.log(product.name, "rendered");

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button
        onClick={() => deleteProduct(product.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default memo(ProductItem);