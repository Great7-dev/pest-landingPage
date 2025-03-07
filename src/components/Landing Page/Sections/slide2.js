import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Abraham Omogiate",
    review:
      "The team was punctual and very professional. My home is now completely pest-free. I’m super satisfied!",
  },
  {
    name: "Ifeanyi Frank",
    review:
      "Excellent service! They were professional, thorough, and the chemicals used were safe for my family.",
  },
  {
    name: "Precious Olodu",
    review:
      "I had a serious cockroach problem, but after their fumigation, I haven’t seen a single one! Definitely worth it.",
  },
  {
    name: "Loveth Aigbe",
    review:
      "Fast, reliable, and affordable fumigation service. I will be booking them again for my warehouse.",
  },
  {
    name: "Suzzy Festus",
    review:
      "Very effective fumigation! They explained the process clearly and ensured my pets were safe. Highly recommended!",
  },
  {
    name: "Peter Oghogho",
    review:
      "I struggled with bedbugs for months, but after just one session, they were all gone. Amazing service.",
  },
];

const Slide = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, []);

  return (
    <div className="relative w-4/5 mx-auto h-[200px]">
      {/* Swiper Container */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          550: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        className="py-6"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-gray-100 p-8  min-h-[17em] rounded-lg shadow-md"
          >
            <p className="text-[24px] font-bold font-sans text-black">
              {item.name}
            </p>
            <p className="text-[16px] text-black font-normal font-sans leading-6 mt-2">
              {item.review}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons (Now Fully Functional) */}
      <button
        ref={prevRef}
        className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-blue-900" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-blue-900" />
      </button>
    </div>
  );
};

export default Slide;

// 1.	John Adewale – “The fumigation service was top-notch! Our home has been pest-free since they came. Highly recommend!”
// 2.	Grace Okonkwo – “Excellent service! They were professional, thorough, and the chemicals used were safe for my family.”
// 3.	Emeka Uche – “I had a serious cockroach problem, but after their fumigation, I haven’t seen a single one! Definitely worth it.”
// 4.	Sophia Daniels – “Great customer service and effective fumigation. My office space feels fresh and pest-free!”
// 5.	David Olorunfemi – “Fast, reliable, and affordable fumigation service. I’ll be booking them again for my warehouse.”
// 6.	Amaka Johnson – “The team was punctual and very professional. My home is now completely pest-free. I’m super satisfied!”
// 7.	Chinedu Obi – “I struggled with bedbugs for months, but after just one session, they were all gone. Amazing service!”
// 8.	Fatima Suleiman – “Very effective fumigation! They explained the process clearly and ensured my pets were safe. Highly recommended!”
// 9.	Tunde Adebayo – “Top-quality service at a great price. They fumigated my restaurant, and I haven’t had any pest issues since.”
// 10.	Jessica Chukwu – “I love how thorough and efficient their fumigation service is. My house feels fresher and completely bug-free!”
