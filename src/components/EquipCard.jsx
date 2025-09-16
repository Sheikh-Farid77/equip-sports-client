import { Link } from "react-router";

export default function EquipCard({ product }) {
  const handleDeleteCard = () => {
    fetch(`http://localhost:5000/equip/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Image */}
      <img
        className="w-full max-h-64 object-cover rounded-t-2xl"
        src={product.photo}
        alt="Product"
      />

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Item Name + Category */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">{product?.name}</h2>
          <p className="text-sm text-gray-500">{product?.category}</p>
        </div>

        {/* Price + Rating */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-green-600">
            ${product?.price}
          </span>
          <span className="text-yellow-500 font-medium">
            ⭐ {product?.rating}
          </span>
        </div>

        {/* Customization */}
        <div>
          <h3 className="font-medium text-gray-800">Customization:</h3>
          {product?.extraItem.map((item) => (
            <span key={item} className="text-sm text-gray-600">
              {item},
            </span>
          ))}
        </div>

        {/* Processing Time */}
        <div>
          <h3 className="font-medium text-gray-800">Delivery Time:</h3>
          <p className="text-sm text-gray-600">{product?.deliveryTime} Days</p>
        </div>

        {/* Stock Status */}
        <div>
          <h3 className="font-medium text-gray-800">Stock Status:</h3>
          <p className="text-sm text-gray-600">{product?.stock}</p>
        </div>

        {/* Action Button */}
        <Link to={`/edit_equip_product/${product._id}`}>
          <button className="w-full mt-3 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
            Edit
          </button>
        </Link>

        <button
          onClick={handleDeleteCard}
          className="w-full mt-3 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
