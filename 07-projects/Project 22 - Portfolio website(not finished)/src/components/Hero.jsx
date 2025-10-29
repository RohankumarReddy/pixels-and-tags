import React, { useRef } from 'react';
import { PROFILE } from '../constants/index';
import { RiArrowRightUpLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { Typewriter } from 'react-simple-typewriter';
import Rohan from "../assets/Rohan.jpg";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-12 lg:py-8 gap-4 sm:gap-6 lg:gap-4 text-center pb-28 "
    >
      <div className="text-center space-y-2 lg:space-y-3">
        <h1 className="hero-title text-2xl sm:text-3xl lg:text-5xl xl:text-5xl xl:mt-10 uppercase selection:bg-pink-100/50">
          {PROFILE.name}
        </h1>

        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-transparent tracking-tighter text-xl sm:text-2xl lg:text-3xl xl:text-4xl mt-1 lg:mt-1">
          <Typewriter
            words={[PROFILE.role, 'Full Stack Developer', 'ML Enthusiast']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="italic text-stone-400 text-sm sm:text-base lg:text-lg mt-1">
          "Building things that make an impact."
        </p>
      </div>

      <p className="hero-text max-w-md sm:max-w-xl lg:max-w-2xl p-2 text-center text-base sm:text-xl lg:text-xl tracking-tight mt-3 lg:mt-4">
        {PROFILE.subheading}
      </p>

      <div className="mt-4 flex justify-center space-x-6 lg:space-x-8 lg:mt-1">
        <a
          href="https://www.linkedin.com/in/nagaruru-rohankumar-reddy-4420b0285/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Check my LinkedIn profile"
        >
          <RiLinkedinBoxFill className="text-3xl sm:text-4xl hover:text-pink-300 transition" />
        </a>

        <a
          href="https://github.com/RohankumarReddy"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Check my GitHub profile"
        >
          <RiGithubFill className="text-3xl sm:text-4xl hover:text-pink-300 transition" />
        </a>
      </div>

      <a
        href="../assets/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="mb-2 hero-button mt-4 flex items-center gap-2 rounded-full border border-pink-200/50 px-4 py-2 sm:px-6 sm:py-3 tracking-tight transition hover:bg-pink-100/10 text-sm sm:text-base lg:text-lg"
      >
        <span>Download Resume</span>
        <RiArrowRightUpLine className="text-pink-300 text-lg sm:text-xl lg:text-2xl" />
      </a>

      <img
        src={Rohan}
        alt={PROFILE.name}
        className="blob-animation w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 border border-purple-300/20 p-1 mt-4 lg:mt-2 rounded-full"
      />

     <div className="w-full flex justify-center lg:hidden">
  <div className="mt-14 sm:mt-8 animate-bounce text-pink-300 text-sm sm:text-base">
    ↓ Scroll Down
  </div>
</div>
    </section>
  );
};

export default Hero;
