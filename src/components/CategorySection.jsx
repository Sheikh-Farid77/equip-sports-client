// CategorySection.jsx
import { Link } from "react-router";
import { Dumbbell, Bike, Trophy, Volleyball, Gamepad2 } from "lucide-react";

export default function CategorySection() {
  const categories = [
    { name: "Football", icon: <Gamepad2 size={40} />, link: "/products?category=football" },
    { name: "Fitness", icon: <Dumbbell size={40} />, link: "/products?category=fitness" },
    { name: "Cycling", icon: <Bike size={40} />, link: "/products?category=cycling" },
    { name: "Trophies", icon: <Trophy size={40} />, link: "/products?category=trophy" },
    { name: "Volleyball", icon: <Volleyball size={40} />, link: "/products?category=volleyball" },
    { name: "Badminton", icon: <Gamepad2 size={40} />, link: "/products?category=badminton" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <Link
              to={cat.link}
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300 group"
            >
              <div className="mb-3 text-blue-600 group-hover:text-blue-800">
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
