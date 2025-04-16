import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace these with your actual images
import DroneImage from "../assets/hero/drone.png";
import CodeImage from "../assets/hero/code.png";
import HardwareImage from "../assets/hero/hardware.png";

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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-gray-500 transition-all hover:bg-blue-400" />
    ),
  };

  const slides = [
    {
      title: "Building Autonomous Systems",
      subtitle: "Quadcopters | ESP32 | NRF24L01+",
      description:
        "I design and program drones that navigate real-world environments with sensor fusion.",
      image: DroneImage,
      cta: "See Project",
      link: "#projects",
    },
    {
      title: "Full-Stack Developer",
      subtitle: "React | Tailwind | Node.js",
      description:
        "I build responsive web apps with clean UI and efficient backend systems.",
      image: CodeImage,
      cta: "View Code",
      link: "https://github.com/yourusername",
    },
    {
      title: "Hardware Tinkerer",
      subtitle: "3D Printing | Arduino | Robotics",
      description:
        "From PCB designs to 3D-printed enclosures, I bring ideas to physical life.",
      image: HardwareImage,
      cta: "Learn More",
      link: "#skills",
    },
  ];

  return (
    <section id="home" className="relative min-h-[600px] sm:min-h-[700px]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' width='40' height='40' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'%3E%3Crect width='20' height='20' fill='rgba(255,255,255,0.05)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Slider */}
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <Slider {...sliderSettings} className="h-full">
          {slides.map((slide, index) => (
            <div key={index} className="pt-16 sm:pt-0">
              <div className="grid h-[500px] grid-cols-1 items-center sm:h-[600px] md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 text-center md:text-left"
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative mt-8 md:mt-0"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto w-full max-w-md transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
