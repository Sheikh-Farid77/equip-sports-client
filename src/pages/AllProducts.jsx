import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="py-10 bg-gray-200">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h3 className="text-3xl text-center font-semibold mb-8 text-gray-800">
          All Equipment
        </h3>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
