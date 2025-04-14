import { motion } from "framer-motion";
import { FiGlobe, FiCpu } from "react-icons/fi"; // Removed FiWifi since we're not using it
import { FaRocket, FaSpaceShuttle } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";

export default function About() {
  const passions = [
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Web Development",
      description: "Crafting digital experiences with React & Tailwind",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Aviation Enthusiast",
      description: "Fascinated by aerodynamics and flight systems",
      color: "text-red-400",
      bg: "bg-red-400/10",
    },
    {
      icon: <GiCircuitry className="text-3xl" />,
      title: "Electronics Tinkerer",
      description: "Exploring circuits from sensors to microcontrollers",
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      icon: <FaSpaceShuttle className="text-3xl" />,
      title: "Space Technology",
      description: "Following advancements in orbital mechanics and propulsion",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-20"
    >
      <div
        id="home"
        className="relative min-h-[600px] overflow-hidden bg-gray-900 sm:min-h-[700px]"
      >
        {/* Animated grid background (tech vibe) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center gap-12 lg:flex-row"
          >
            {/* Profile Image with Decorative Elements */}
            <div className="relative w-full lg:w-2/5">
              <div className="h-90 relative z-10 mx-auto w-64 overflow-hidden rounded-2xl border-4 border-blue-400/30 lg:mx-0">
                <img
                  src="src/assets/teddy.jpg"
                  alt="Teddy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating hobby icons around photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -left-8 -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-400/10"
              >
                <FaRocket className="text-xl text-blue-400" />{" "}
                {/* Changed to FaRocket */}
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-400/10"
              >
                <GiCircuitry className="text-2xl text-purple-400" />{" "}
                {/* Changed to GiCircuitry */}
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-3/5">
              <motion.h2
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                className="mb-6 text-4xl font-bold text-white"
              >
                About <span className="text-blue-400">Me</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 text-lg text-gray-300"
              >
                Computer Science student with a passion for{" "}
                <span className="font-medium text-blue-400">
                  where code meets hardware
                </span>
                . I bridge the digital and physical worlds through embedded
                systems and web interfaces.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8 text-lg text-gray-300"
              >
                When I'm not debugging React components, you'll find me{" "}
                <span className="font-medium text-red-400">
                  analyzing aircraft designs
                </span>
                ,
                <span className="font-medium text-green-400">
                  {" "}
                  soldering circuit boards
                </span>
                , or{" "}
                <span className="font-medium text-purple-400">
                  reading about rocket propulsion
                </span>
                .
              </motion.p>

              {/* Passion Grid */}
              <div className="grid grid-cols-2 gap-4">
                {passions.map((passion, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                    className={`rounded-xl p-4 ${passion.bg} border border-gray-700`}
                  >
                    <div className={`${passion.color} mb-2`}>
                      {passion.icon}
                    </div>
                    <h3 className="mb-1 font-medium text-white">
                      {passion.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {passion.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
