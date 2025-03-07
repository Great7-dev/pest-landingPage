import React from "react";
import Slider from "./Sections/slider";
import About from "./Sections/about";
import Offer from "./Sections/offer";
import Logo from "../../assets/mt-2048-logo-.png";
import { IoIosCall } from "react-icons/io";
import { useRef } from "react";
import Review from "./Sections/review";
import Faq from "./Sections/faq";
import Contact from "./Sections/contact";
import Footer from "./Footer/Footer";

const Landingpage = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 w-full px-[17%] py-9 z-50 flex flex-row flex-wrap items-center justify-between bg-white/10 p-2 backdrop-blur-xl dark:bg-[#063f93]">
        {" "}
        <img src={Logo} alt="logo" />
        <ul className="text-white font-bold font-sans">
          <div className="flex items-center space-x-5">
            <li>
              <button onClick={() => scrollToSection(homeRef)}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(servicesRef)}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(aboutRef)}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(contactRef)}>
                Contact
              </button>
            </li>
          </div>
        </ul>
        <div className="flex items-center space-x-2">
          <IoIosCall className="text-red-500" />
          <p className="text-white font-bold text-l font-sans">
            Call Us +234 7067653341
          </p>
        </div>
      </nav>
      <div>
        <section ref={homeRef} className="mt-[9em] scroll-mt-[10rem]">
          <Slider />
        </section>
        <section ref={aboutRef} className="scroll-mt-[12rem]">
          <About />
        </section>
        <section ref={servicesRef} className="scroll-mt-[10rem]">
          <Offer />
        </section>
        <Review />
        <Faq />
        <section ref={contactRef} className="scroll-mt-[8rem]">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Landingpage;
