import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

export default function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/limit_products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Products
        </h3>
        <p className="text-gray-500 mt-2">
          Explore our premium sports equipment collection, carefully curated for every athlete.
        </p>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
     
          <Link to={'/products'}>
            <button className="w-full mt-8 py-2 text-sm sm:text-base font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              See All Products
            </button>
          </Link>
      </div>
    </section>
  );
}
