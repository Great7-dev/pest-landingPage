// import React from "react";

// const About = () => {
//   return (
//     <div className="h-[700px] flex items-center justify-between px-[15%] pt-[80px]">
//       {/* Left Side - Text Content */}
//       <div className="text-white w-2/3">
//         <h1 className="text-[#ff621c] font-bold text-[18px] font-sans tracking-[2px]">
//           ABOUT OUR PEST GUARD
//         </h1>
//         <h1 className="text-black font-bold text-[46px] font-sans leading-tight">
//           Welcome to ClearWay - a <br />
//           Leading Pest Control Company
//         </h1>
//         <p className="text-black font-medium font-sans">
//           Our high-quality and professional group is based on a team of experts,
//           quality assurance <br /> program, and universal documentation of
//           findings and service, all of which guarantees our <br /> insect
//           control service meets our high-quality standards and norms.
//         </p>
//         <p className="text-black my-5 font-medium font-sans">
//           We are leaders in the industry specializing in protection against
//           common insects, including <br /> termites, rodents, and spiders. We
//           have more than 50 years of experience in bug control <br /> services.
//         </p>

//         {/* Services */}
//         <div className="mb-5">
//           <p className="text-black font-bold font-sans">
//             Residence Pest Control
//           </p>
//           <div className="bg-[#ff621c] h-2 rounded-lg w-[65%]"></div>
//         </div>
//         <div className="mb-5">
//           <p className="text-black font-bold font-sans">
//             Commercial Pest Control
//           </p>
//           <div className="bg-[#ff621c] h-2 rounded-lg w-[55%]"></div>
//         </div>
//         <div className="mb-5">
//           <p className="text-black font-bold font-sans">Mosquito Control</p>
//           <div className="bg-[#ff621c] h-2 rounded-lg w-[25%]"></div>
//         </div>
//       </div>

//       {/* Right Side - Form */}
//       <div className="w-1/3">
//         <form className="bg-[#ff621c] p-6 rounded-lg shadow-md h-[550px] flex flex-col justify-center">
//           <h2 className="text-white text-[30px] font-bold mb-4 text-center">
//             Get a Free Estimate
//           </h2>
//           <p className="text-white font-bold mb-4 text-center">
//             Our highly trained pest control professionals have a consistent,
//             proven approach to addressing your unique pest problems.
//           </p>
//           <div className="mb-4">
//             <input
//               type="fullName"
//               placeholder="Full name*"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
//             />
//           </div>
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Phone Number*"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-1/2 bg-[#ff621c] text-white p-3 border-white border rounded-md hover:bg-white hover:text-[#ff621c] justify-content-center mx-auto block"
//           >
//             Appointment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-[15%] py-10">
      {/* Left Side - Text Content */}
      <div className="text-white w-full md:w-2/3 mb-10 md:mb-0">
        <h1 className="text-[#ff621c] font-bold text-[16px] md:text-[18px] tracking-[2px]">
          ABOUT OUR PEST GUARD
        </h1>
        <h1 className="text-black font-bold text-[30px] md:text-[46px] leading-tight">
          Welcome to ClearWay - a <br className="hidden md:block" />
          Leading Pest Control Company
        </h1>
        <p className="text-black font-medium font-sans">
          Our high-quality and professional group is based on a team of experts,
          quality assurance <br /> program, and universal documentation of
          findings and service, all of which guarantees our <br /> insect
          control service meets our high-quality standards and norms.
        </p>
        <p className="text-black my-5 font-medium font-sans">
          We are leaders in the industry specializing in protection against
          common insects, including <br /> termites, rodents, and spiders. We
          have more than 50 years of experience in bug control <br /> services.
        </p>

        {/* Services */}
        <div className="mb-5">
          <p className="text-black font-bold">Residence Pest Control</p>
          <div className="bg-[#ff621c] h-2 rounded-lg w-[80%] md:w-[65%]"></div>
        </div>
        <div className="mb-5">
          <p className="text-black font-bold">Commercial Pest Control</p>
          <div className="bg-[#ff621c] h-2 rounded-lg w-[70%] md:w-[55%]"></div>
        </div>
        <div className="mb-5">
          <p className="text-black font-bold">Mosquito Control</p>
          <div className="bg-[#ff621c] h-2 rounded-lg w-[40%] md:w-[25%]"></div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/3">
        <form className="bg-[#ff621c] p-6 rounded-lg shadow-md flex flex-col justify-center">
          <h2 className="text-white text-[24px] md:text-[30px] font-bold mb-4 text-center">
            Get a Free Estimate
          </h2>
          <p className="text-white font-bold mb-4 text-center">
            Our pest control professionals have a consistent, proven approach to
            addressing your unique pest problems.
          </p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full name*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-1/2 bg-[#ff621c] text-white p-3 border-white border rounded-md hover:bg-white hover:text-[#ff621c] mx-auto block"
          >
            Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
