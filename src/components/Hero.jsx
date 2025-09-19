// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Img1 from "../assets/photo-1652497213813-89e58c19f678.avif";
import Img2 from "../assets/photo-1674023797493-e332aa4c6f4b.avif";
import Img3 from "../assets/photo-1676701495925-aca08e3b8316.avif";
import Img4 from "../assets/premium_photo-1666913667023-4bfd0f6cff0a.avif";
import Img5 from "../assets/premium_photo-1682435566673-cedb75cd7459.avif";

export default function Hero() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl overflow-hidden shadow-xl"
      >
        {[Img1, Img2, Img3, Img4, Img5].map((img, i) => (
          <SwiperSlide key={i} className="relative">
            {/* Background image */}
            <img
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px] object-cover"
              src={img}
              alt={`slide-${i}`}
            />

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Elevate Your Game
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
                Discover top-quality sports gear crafted for champions — from
                training to match day.
              </p>
              <button className="mt-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper styles */}
      <style>{`
        .mySwiper .swiper-button-prev,
        .mySwiper .swiper-button-next {
          color: white;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .mySwiper .swiper-button-prev:hover,
        .mySwiper .swiper-button-next:hover {
          color: #f87171; /* Tailwind red-400 */
        }
        .mySwiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
        }
        .mySwiper .swiper-pagination-bullet-active {
          background: #ef4444; /* Tailwind red-500 */
        }
      `}</style>
    </div>
  );
}
