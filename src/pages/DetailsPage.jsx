import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading product details...
        </p>
      </div>
    );
  }

  return (
    <div className="py-10 bg-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-10 p-6 md:p-12">
          {/* Image Section */}
          <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-4 md:p-6 hover:scale-105 transition-transform duration-300">
            <img
              className="w-full max-h-96 object-contain rounded-xl"
              src={product.photo}
              alt={product.name}
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Name & Category */}
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-1">
                {product.name}
              </h1>
              <p className="text-indigo-600 font-medium text-lg">
                {product.category}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Price & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-green-600">
                ${product.price}
              </span>
              <span className="flex items-center text-yellow-400 font-semibold">
                ⭐ {product.rating}
              </span>
            </div>

            {/* Customization */}
            {product.extraItem && product.extraItem.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Customization:
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.extraItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Processing Time & Stock */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Processing Time:
                </h3>
                <p className="text-gray-600">{product.deliveryTime} day</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Stock Status:</h3>
                <p className={`font-medium text-green-600`}>{product.stock}</p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg text-lg transition-all shadow-md hover:shadow-xl mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
