import { useEffect, useState } from "react";
import EquipCard from "../components/EquipCard";
import { useAuth } from "../provider/AuthProvider";

export default function MyProductsPage() {
  const [products, setProducts] = useState([]);
  const { authInfo } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/equip?email=${authInfo.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [authInfo.email]);
  if(products.length < 1) return <h3 className="text-3xl my-10 text-center font-semibold">No Products Available</h3>
  return (
    <div className="py-10 bg-gray-200">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h3 className="text-3xl text-center font-semibold mb-8 text-gray-800">
          My Equipment
        </h3>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <EquipCard key={product._id} product={product} />
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
