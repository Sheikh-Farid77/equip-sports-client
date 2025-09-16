import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditEquipProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    rating: "",
    extraItem: "",
    deliveryTime: "",
    photo: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "extraItem") {
      value = value.split(",");
    }

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/equip/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct({
          name: "",
          price: "",
          category: "",
          description: "",
          stock: "",
          rating: "",
          extraItem: "",
          deliveryTime: "",
          photo: "",
        });
        navigate("/my_products");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/equip/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <div className="container mx-auto mt-10 bg-gray-300 px-10 py-8 rounded-sm">
        <h2 className="text-3xl font-semibold text-center my-5 text-gray-800">
          Edit Your Equipment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Two Column Layout - Responsive */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-10">
            {/* Left Column */}
            <div className="flex-1 space-y-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Name
                </legend>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={product.name}
                  className="input bg-white text-black w-full"
                  placeholder="Enter product name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Price
                </legend>
                <input
                  name="price"
                  onChange={handleChange}
                  value={product.price}
                  type="number"
                  className="input bg-white text-black w-full"
                  placeholder="Enter price"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Category
                </legend>
                <input
                  type="text"
                  name="category"
                  onChange={handleChange}
                  value={product.category}
                  className="input bg-white text-black w-full"
                  placeholder="Enter product category"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Description
                </legend>
                <input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={product.description}
                  className="input bg-white text-black w-full"
                  placeholder="Enter description"
                />
              </fieldset>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Stock Status
                </legend>
                <input
                  type="text"
                  name="stock"
                  onChange={handleChange}
                  value={product.stock}
                  className="input bg-white text-black w-full"
                  placeholder="Enter stock status"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Rating
                </legend>
                <input
                  name="rating"
                  onChange={handleChange}
                  value={product.rating}
                  type="number"
                  className="input bg-white text-black w-full"
                  placeholder="Enter rating"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Extra Item
                </legend>
                <input
                  type="text"
                  name="extraItem"
                  onChange={handleChange}
                  value={product.extraItem}
                  className="input bg-white text-black w-full"
                  placeholder="Enter extra item name (comma separated)"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-800 text-lg">
                  Delivery Time
                </legend>
                <input
                  type="number"
                  name="deliveryTime"
                  onChange={handleChange}
                  value={product.deliveryTime}
                  className="input bg-white text-black w-full"
                  placeholder="Enter delivery time"
                />
              </fieldset>
            </div>
          </div>

          {/* Full Width Field */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-800 text-lg">
                Photo URL
              </legend>
              <input
                type="text"
                name="photo"
                onChange={handleChange}
                value={product.photo}
                className="input bg-white text-black w-full"
                placeholder="Enter photo URL"
              />
            </fieldset>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#D2B48C] w-full py-3 text-black font-semibold mt-3 rounded-sm cursor-pointer text-lg hover:bg-[#c1a178] transition-colors"
          >
            Complete Edit
          </button>
        </form>
      </div>
    </div>
  );
}
