// import react, { useState } from "react";

// const FAQItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b py-4">
//       <div className="flex justify-between items-center">
//         <p className="text-[26px] font-bold text-black font-sans">{question}</p>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center font-extrabold text-[24px] justify-center text-[#ff621c]"
//         >
//           {isOpen ? "−" : "+"}
//         </button>
//       </div>
//       {isOpen && <p className="mt-2 text-gray-700 font-sans">{answer}</p>}
//     </div>
//   );
// };

// const Faq = () => {
//   const faqs = [
//     {
//       question:
//         "Why should i hire a professional when i can try and do it myself?",
//       answer:
//         "Pests are a resilient bunch and are adept at hiding and entering a home in places you would never think. A pest management professional will know where to look for pests and make expert recommendations on what it will take to prevent or eliminate pests. Also, a licensed pest professional is the only person who can apply pesticides",
//     },
//     {
//       question: "What is included in pest control?",
//       answer:
//         "A regularly scheduled pest service will stop pests before they become a problem. It allows our technicians to watch for and spot possible signs of pest activity and act immediately to eliminate any threat. A preventative, proactive approach to managing pests will keep your home and family safe from annoying and potentially harmful pests",
//     },
//     {
//       question: "What is the difference between baits vs sprays?",
//       answer:
//         "Bait treatments offer consumers peace of mind if they prefer not to have liquid chemicals applied in their home. The type of pest, the severity of the problem and other factors determine the type of treatment we implement.",
//     },
//     {
//       question:
//         "Why do pleas, bed bugs require more than one treatment to control",
//       answer:
//         "A regularly scheduled pest service will stop pests before they become a problem. It allows our technicians to watch for and spot possible signs of pest activity and act immediately to eliminate any threat. A preventative, proactive approach to managing pests will keep your home and family safe from annoying and potentially harmful pests.",
//     },
//   ];

//   return (
//     <div className="bg-[#eff2f8] h-[600px]">
//       <h1 className="text-[#ff621c] text-center font-extrabold tracking-[4px] text-[20px] pt-[3%]">
//         FAQ
//       </h1>
//       <h1 className="font-extrabold text-[46px] font-sans text-center mb-10 ">
//         Frequently Asked Questions
//       </h1>
//       <div className="w-[50%] mx-auto p-6 ">
//         {faqs.map((faq, index) => (
//           <FAQItem key={index} {...faq} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;

import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <div className="flex justify-between items-center">
        <p className="text-lg sm:text-[22px] font-bold text-black font-sans">
          {question}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center font-extrabold text-xl sm:text-2xl justify-center text-[#ff621c]"
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-700 font-sans text-sm sm:text-base">
          {answer}
        </p>
      )}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "Why should I hire a professional instead of doing it myself?",
      answer:
        "Pests are experts at hiding in places you may not consider. A pest professional knows where to look and how to apply treatments effectively. Also, only licensed professionals can apply certain pesticides.",
    },
    {
      question: "What is included in pest control?",
      answer:
        "Regular pest control prevents infestations before they occur. Technicians monitor signs of activity and take action immediately to eliminate potential threats, keeping your home safe.",
    },
    {
      question: "What is the difference between baits and sprays?",
      answer:
        "Baits provide a long-term solution, while sprays offer immediate relief. The best treatment depends on the pest type, severity, and environment.",
    },
    {
      question: "Why do fleas and bed bugs need multiple treatments?",
      answer:
        "Some pests have life cycles that require multiple treatments to fully eliminate them. Eggs may survive initial treatments, so follow-ups ensure complete eradication.",
    },
  ];

  return (
    <div className="bg-[#eff2f8] py-10 px-4 sm:px-6">
      <h1 className="text-[#ff621c] text-center font-extrabold tracking-[4px] text-lg sm:text-[20px]">
        FAQ
      </h1>
      <h2 className="font-extrabold text-4xl sm:text-[36px] font-sans text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
