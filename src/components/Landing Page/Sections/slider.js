// import React, { useState, useEffect } from "react";
// import image1 from "../../../assets/pest.jpg";
// import image2 from "../../../assets/IMG_1465.JPG";

// const Slider = () => {
//   const images = [image1, image2];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   //   Autoplay feature
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="relative w-screen h-[700px] overflow-hidden">
//       {/* Images */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="relative w-screen h-full flex-shrink-0">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//             {index === 0 && (
//               <div className="absolute inset-0 flex flex-col items-left justify-center bg-black bg-opacity-50 text-white px-4 mb-20">
//                 <h1 className="text-6xl font-bold text-left px-[15%]">
//                   Termite Treatment, <br /> Pest Control & <br /> Exterminator
//                   Service
//                 </h1>
//                 <p className="text-2xl mt-2 text-left px-[15%] mb-[20%]">
//                   We are open 24/7 including major holidays
//                 </p>
//               </div>
//             )}
//             {index === 1 && (
//               <div className="absolute inset-0 flex flex-col items-left justify-center bg-black bg-opacity-50 text-white px-4 mb-20">
//                 <h1 className="text-6xl font-bold text-left px-[15%]">
//                   Keep Your Home Bug Free <br /> Best Pest Control
//                 </h1>
//                 <p className="text-2xl mt-2 text-left px-[15%] mb-[20%]">
//                   Trusted. Experienced. Dedicated.
//                 </p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-gray-800" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React, { useState, useEffect } from "react";
import image1 from "../../../assets/pest.jpg";
import image2 from "../../../assets/IMG_1465.JPG";

const Slider = () => {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []); // Ensures interval only runs once on mount

  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:h-[700px] overflow-hidden">
      <div
        className="flex w-full pt-5 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50 text-white px-4 sm:px-10 md:px-[15%]">
              <h1 className="text-xl sm:text-3xl md:text-6xl font-bold">
                {index === 0
                  ? "Termite Treatment, Pest Control & Exterminator Service"
                  : "Keep Your Home Bug Free - Best Pest Control"}
              </h1>
              <p className="text-sm sm:text-lg md:text-2xl mt-2">
                {index === 0
                  ? "We are open 24/7 including major holidays"
                  : "Trusted. Experienced. Dedicated."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
