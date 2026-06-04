import { useState, useMemo, useCallback } from "react";
import ProductList from "../ProductList/ProductList"

export default function Dashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
  ]);

  const [count, setCount] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating total...");
    return products.reduce((sum, product) => {
      return sum + product.price;
    }, 0);
  }, [products]);

  const deleteProduct = useCallback((id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>

      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Re-render Dashboard ({count})
      </button>

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}