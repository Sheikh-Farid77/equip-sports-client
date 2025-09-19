import { Link } from "react-router";

export default function ProductCard({ product }) {
  const handleEquip = () => {
    const newProduct = {
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      stock: product.stock,
      rating: product.rating,
      extraItem: product.extraItem,
      deliveryTime: product.deliveryTime,
      photo: product.photo,
    };

    fetch("http://localhost:5000/equip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
        src={product.photo}
        alt={product.name}
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Name + Category */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
            {product.name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">{product.category}</p>
        </div>

        {/* Price + Rating */}
        <div className="flex items-center justify-between text-sm sm:text-base font-medium">
          <span className="text-green-600">${product.price}</span>
          <span className="text-yellow-500">⭐ {product.rating}</span>
        </div>

        {/* Customization */}
        {product.extraItem?.length > 0 && (
          <div className="text-xs sm:text-sm text-gray-600">
            <span className="font-medium text-gray-800">Customization: </span>
            {product.extraItem.join(", ")}
          </div>
        )}

        {/* Delivery + Stock */}
        <div className="flex justify-between text-xs sm:text-sm text-gray-600">
          <span>
            <span className="font-medium text-gray-800">Delivery:</span> {product.deliveryTime}d
          </span>
          <span>
            <span className="font-medium text-gray-800">Stock:</span> {product.stock}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <Link to={`/details/${product._id}`}>
            <button className="w-full py-2 text-sm sm:text-base font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Details
            </button>
          </Link>
          <button
            onClick={handleEquip}
            className="w-full py-2 text-sm sm:text-base font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Equip
          </button>
        </div>
      </div>
    </div>
  );
}
