"use client";
import React, { useEffect, useRef } from "react";
import { LayoutDashboard, Send } from "lucide-react";

// Button component
const Button = ({ children, size, className, variant, onClick, href }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  let sizeClasses = "h-10 px-4 py-2 text-sm";
  if (size === "lg") sizeClasses = "h-11 px-8 py-3 text-base";

  let variantClasses = "bg-blue-600 text-white shadow hover:bg-blue-700";
  if (variant === "outline")
    variantClasses =
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

// Custom link
const CustomLink = ({ href, children, target }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
  >
    {children}
  </a>
);

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = imageRef.current;
      if (!imageElement) return;

      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-36 pb-12">
      <div className="container mx-auto text-center px-6 space-y-12">
        {/* Title Section */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-slate-400">
               GradKit,
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-200">
              Powered by AI. Driven by You
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-400 md:text-lg lg:text-xl leading-relaxed">
              GradKit curates personalized learning feeds, courses, and insights tailored to your skills,
  interests, and career goals — powered by advanced AI.
</p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <CustomLink href="/dashboard">
            <Button size="lg" className="px-8 shadow-lg shadow-blue-500/50">
              <LayoutDashboard size={18} className="mr-2" />
              Lets go
            </Button>
          </CustomLink>
          <CustomLink href="https://www.google.com" target="_blank">
            <Button size="lg" className="px-8" variant="outline">
              <Send size={18} className="mr-2" />
              See Demo
            </Button>
          </CustomLink>
        </div>

        {/* Image Section */}
        <div className="hero-image-wrapper mt-12 md:mt-16 lg:mt-20">
          <div ref={imageRef} className="transition-all duration-300 transform">
            <img
              src="banner1.jpg"
              width={1280}
              height={720}
              alt="banner"
              className="rounded-2xl border border-gray-700/50 shadow-lg shadow-black/20 mx-auto max-w-5xl w-full hero-image transition-transform duration-300"
            />
            <style jsx>{`
              .scrolled {
                filter: grayscale(0%) blur(0px) !important;
                transform: scale(1) !important;
                opacity: 1 !important;
              }
              .hero-image {
                opacity: 0.9;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
