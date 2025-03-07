// import react from "react";
// import Logo from "../../../assets/sprayer.png";
// import Logo1 from "../../../assets/Fly.png";
// import Logo2 from "../../../assets/Snake.jpeg";
// import Logo3 from "../../../assets/Insect.png";
// import Logo4 from "../../../assets/Termite.jpeg";
// import Logo5 from "../../../assets/Mole.webp";
// import Logo6 from "../../../assets/Rat.png";

// const Offer = () => {
//   return (
//     <div className="bg-gray-200 h-[600px] flex items-center justify-between px-[10%] ">
//       <div className="w-2/3 ">
//         <img src={Logo} alt="logo" className="w-[79%]" />
//       </div>
//       <div className="w-1/3">
//         <h1 className="text-[#ff621c] font-bold tracking-[2px] text-[20px]">
//           WHAT WE OFFER
//         </h1>
//         <h2 className="font-extrabold text-[46px] font-sans"> Our Services</h2>
//         <p className="font-sans font-medium tracking-2px text-[20px]">
//           As one of the premier pest control companies in the <br /> industry,
//           we offer advanced protection against many <br /> common pests.
//         </p>
//         <div className="flex items-center justify-between gap-5 my-5">
//           <div className="bg-[#F8F8FF] h-[80px] w-[100%] border border-white rounded-md flex items-center justify-between">
//             <img src={Logo6} alt="logo" className="w-20 h-20" />
//             <h1 className="text-center font-sans font-bold text-[20px] pr-4">
//               Rodent Removal
//             </h1>
//           </div>
//           <div className="bg-[#F8F8FF] h-[80px] w-[100%] border border-white rounded-md flex items-center justify-between ">
//             <img src={Logo1} alt="logo" className="w-20 h-20" />
//             <h1 className="text-center font-sans font-bold text-[20px] pr-5">
//               Aphid Removal
//             </h1>
//           </div>
//         </div>
//         <div className="flex items-center justify-between gap-5 mb-5">
//           <div className="bg-[#F8F8FF] h-[80px] w-[50%] border border-white rounded-md flex items-center justify-between">
//             <img src={Logo3} alt="logo" className="w-20 h-20" />
//             <h1 className="text-center font-sans font-bold text-[20px] pr-5">
//               Insect Control
//             </h1>
//           </div>
//           <div className="bg-[#F8F8FF] h-[80px] w-[50%] border border-white rounded-md flex items-center justify-between">
//             <img src={Logo4} alt="logo" className="w-20 h-20" />
//             <h1 className="text-center font-sans font-bold text-[20px]">
//               Termite Extermination
//             </h1>
//           </div>
//         </div>
//         <div className="flex items-center justify-between gap-5 ">
//           <div className="bg-[#F8F8FF] h-[80px] w-[50%] border border-white rounded-md flex items-center justify-between">
//             <img src={Logo2} alt="logo" className="w-20 h-20" />
//             <h1 className="text-center font-sans font-bold text-[20px] pr-5">
//               Reptiles Control
//             </h1>
//           </div>
//           <div className="bg-[#F8F8FF] h-[80px] w-[50%] border border-white rounded-md flex items-center justify-between">
//             <img src={Logo5} alt="logo" className="w-20 h-20" />
//             <h1 className="text-center font-sans font-bold text-[20px] pr-5">
//               Mole Control
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offer;

import React from "react";
import Logo from "../../../assets/sprayer.png";
import Logo1 from "../../../assets/Fly.png";
import Logo2 from "../../../assets/Snake.jpeg";
import Logo3 from "../../../assets/Insect.png";
import Logo4 from "../../../assets/Termite.jpeg";
import Logo5 from "../../../assets/Mole.webp";
import Logo6 from "../../../assets/Rat.png";

const Offer = () => {
  return (
    <div className="bg-gray-200 pt-10 px-5 flex flex-col lg:flex-row items-center justify-between">
      {/* Left - Image */}
      <div className="lg:w-2/3 w-full flex justify-center">
        <img src={Logo} alt="logo" className="w-[90%] max-w-[700px]" />
      </div>

      {/* Right - Content */}
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 text-center lg:text-left">
        <h1 className="text-[#ff621c] font-bold tracking-[2px] text-[18px]">
          WHAT WE OFFER
        </h1>
        <h2 className="font-extrabold text-[36px] lg:text-[46px] font-sans">
          Our Services
        </h2>
        <p className="font-sans font-medium text-[16px] lg:text-[20px] mt-3">
          As one of the premier pest control companies in the industry, we offer
          advanced protection against many common pests.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {/* Service Cards */}
          {[
            { img: Logo6, title: "Rodent Removal" },
            { img: Logo1, title: "Aphid Removal" },
            { img: Logo3, title: "Insect Control" },
            { img: Logo4, title: "Termite Extermination" },
            { img: Logo2, title: "Reptiles Control" },
            { img: Logo5, title: "Mole Control" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white h-[90px] flex items-center justify-between px-4 shadow-md rounded-md"
            >
              <img src={service.img} alt="logo" className="w-16 h-16" />
              <h1 className="font-sans font-bold text-[18px]">
                {service.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
