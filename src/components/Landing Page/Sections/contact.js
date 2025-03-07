// import react from "react";
// import { FaRegClock } from "react-icons/fa6";
// import { FaHouseChimney } from "react-icons/fa6";
// import { IoIosCall } from "react-icons/io";

// const Contact = () => {
//   return (
//     <div className="h-[400px] px-[20em] mt-10">
//       <h1 className="font-extrabold text-[46px] font-sans text-left mb-10 ">
//         Our Location
//       </h1>
//       <div className="flex items-center space-x-2 pb-10">
//         <FaRegClock className="text-[22px] text-[#ff621c]" />
//         <p className="text-[18px] font-sans px-10 ">
//           Opening Hours:
//           <br /> Mon - Sun 24Hrs
//         </p>
//       </div>
//       <div className="flex items-center space-x-2 pb-10">
//         <FaHouseChimney className="text-[22px] text-[#ff621c]" />
//         <p className="text-[18px] font-sans px-10 ">
//           Address: 10, Along Osanoyen Street, <br />
//           Idowina Qtrs, Isihor, Benin city, Nigeria.
//         </p>
//       </div>
//       <div className="flex items-center space-x-2 ">
//         <IoIosCall className="text-[22px] text-[#ff621c]" />
//         <p className="text-[18px] font-sans px-10 ">Phone: +234 7067653341</p>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { FaRegClock, FaHouseChimney } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  return (
    <div className="h-auto py-10 px-4 sm:px-6 lg:px-2 max-w-3xl mx-auto">
      <h1 className="font-extrabold text-2xl sm:text-4xl font-sans text-left mb-8">
        Our Location
      </h1>
      <div className="space-y-6">
        {/* Opening Hours */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <FaRegClock className="text-xl sm:text-2xl text-[#ff621c]" />
          <p className="text-lg sm:text-xl font-sans">
            <span className="font-bold">Opening Hours:</span> <br />
            Mon - Sun 24Hrs
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <FaHouseChimney className="text-xl sm:text-2xl text-[#ff621c]" />
          <p className="text-lg sm:text-xl font-sans">
            <span className="font-bold">Address:</span> <br />
            10, Along Osanoyen Street, Idowina Qtrs, <br /> Isihor, Benin City,
            Nigeria.
          </p>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <IoIosCall className="text-xl sm:text-2xl text-[#ff621c]" />
          <p className="text-lg sm:text-xl font-sans">
            <span className="font-bold">Phone:</span> +234 7067653341
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
