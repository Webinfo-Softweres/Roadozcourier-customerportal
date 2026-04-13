import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 300;
    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const reviews = [
    {
      name: "Mark Jones",
      role: "Shop Owner, Kozhikode",
      text: "Roadoz changed the way I do business. Their 24hr delivery to even remote locations in Wayanad is unbelievable.",
      img: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Anil Kumar",
      role: "E-commerce Seller, Kochi",
      text: "Reliable and fast courier service. COD settlements are quick and customer support is excellent.",
      img: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Rahul Nair",
      role: "Business Owner, Trivandrum",
      text: "Professional logistics partner with strong network across Kerala. Highly recommended.",
      img: "https://i.pravatar.cc/150?img=8"
    }
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-5 sm:px-6 md:px-10 lg:px-16 bg-[#fdfcf5]">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1a1a1a] mb-2">
            Voices of Trust
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto md:mx-0">
            Our commitment to excellence is reflected in the success stories of our clients across the state.
          </p>
        </div>

        <div className="flex justify-center md:justify-end gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="min-w-[260px] sm:min-w-[300px] md:min-w-[48%] lg:min-w-[32%] bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col"
          >

            <div className="flex gap-1 mb-3 sm:mb-4">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5 flex-grow">
              "{review.text}"
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <img
                src={review.img}
                alt={review.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
              />

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#1a1a1a]">
                  {review.name}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-400">
                  {review.role}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}