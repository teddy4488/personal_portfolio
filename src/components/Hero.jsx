import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import Slider from "react-slick";

// Replace these with your actual images or illustrations
import DroneImage from "../assets/hero/drone.png"; // Your quadcopter
import CodeImage from "../assets/hero/code.png"; // Code screenshot
import HardwareImage from "../assets/hero/hardware.png"; // ESP32/3D printer

const HeroContent = [
  {
    id: 1,
    img: DroneImage,
    title: "Building Autonomous Systems",
    subtitle: "Quadcopters | ESP32 | NRF24L01+",
    description:
      "I design and program drones that navigate real-world environments with sensor fusion.",
    cta: "See Project",
    link: "#projects",
  },
  {
    id: 2,
    img: CodeImage,
    title: "Full-Stack Developer",
    subtitle: "React | Tailwind | Node.js",
    description:
      "I build responsive web apps with clean UI and efficient backend systems.",
    cta: "View Code",
    link: "https://github.com/yourusername",
  },
  {
    id: 3,
    img: HardwareImage,
    title: "Hardware Tinkerer",
    subtitle: "3D Printing | Arduino | Robotics",
    description:
      "From PCB designs to 3D-printed enclosures, I bring ideas to physical life.",
    cta: "Learn More",
    link: "#skills",
  },
];

const Hero = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-3 w-3 rounded-full bg-gray-500 transition-colors hover:bg-blue-400"></div>
    ),
  };

  return (
    <div
      id="home"
      className="relative min-h-[600px] overflow-hidden bg-gray-900 sm:min-h-[700px]"
    >
      {/* Animated grid background (tech vibe) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Hero slider */}
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <Slider {...sliderSettings} className="h-[600px]">
          {HeroContent.map((slide) => (
            <div key={slide.id} className="pt-16 sm:pt-0">
              <div className="grid h-[550px] grid-cols-1 place-items-center sm:h-[650px] md:grid-cols-2">
                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 text-center sm:space-y-6 md:text-left"
                >
                  <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-blue-400 sm:text-xl">
                    {slide.subtitle}
                  </p>
                  <p className="mx-auto max-w-md text-gray-300 md:mx-0">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                    <motion.a
                      href={slide.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                    >
                      {slide.cta}
                    </motion.a>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg border border-blue-400 px-6 py-3 font-medium text-blue-400 hover:bg-blue-400/10"
                    >
                      Contact Me
                    </motion.a>
                  </div>
                  {/* Social links (small screens) */}
                  <div className="flex justify-center space-x-4 pt-4 md:hidden md:justify-start">
                    <a
                      href="https://github.com/yourusername"
                      className="text-gray-400 hover:text-white"
                    >
                      <FiGithub className="text-xl" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      className="text-gray-400 hover:text-white"
                    >
                      <FiLinkedin className="text-xl" />
                    </a>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="mx-auto w-full max-w-md transition-transform duration-300 hover:scale-105"
                  />
                  {/* Floating tech badges */}
                  {slide.id === 1 && (
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -bottom-4 left-8 rounded-full border border-blue-400/50 bg-gray-800/80 px-3 py-1 text-xs text-blue-400 backdrop-blur-sm"
                    >
                      MQTT + Socket.io
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Social links (large screens) */}
      <div className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 transform flex-col space-y-4 md:flex">
        <motion.a
          href="https://github.com/yourusername"
          whileHover={{ y: -3 }}
          className="text-gray-400 hover:text-white"
        >
          <FiGithub className="text-xl" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourusername"
          whileHover={{ y: -3 }}
          className="text-gray-400 hover:text-white"
        >
          <FiLinkedin className="text-xl" />
        </motion.a>
        <motion.a
          href="/resume.pdf"
          whileHover={{ y: -3 }}
          className="text-gray-400 hover:text-white"
        >
          <FiDownload className="text-xl" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
