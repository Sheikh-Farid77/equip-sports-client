// MasonryGallery.jsx
import React from "react";
import Img1 from "../assets/photo-1652497213813-89e58c19f678.avif";
import Img2 from "../assets/photo-1674023797493-e332aa4c6f4b.avif";
import Img3 from "../assets/photo-1676701495925-aca08e3b8316.avif";
import Img4 from "../assets/premium_photo-1666913667023-4bfd0f6cff0a.avif";
import Img5 from "../assets/premium_photo-1682435566673-cedb75cd7459.avif";


export default function MasonryGallery() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img1, Img4, Img3, Img5, Img1];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
          Stunning Masonry Gallery
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative mb-4 rounded-xl overflow-hidden shadow-lg break-inside-avoid transform hover:scale-105 transition duration-500"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full object-cover h-auto"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
