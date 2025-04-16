import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

const projects = [
  {
    title: "GPS Sensor and ESP-32 CAM Equiped Quadcopter",
    description: "Arduino-based drone with NRF24L01+ telemetry and PID control",
    tags: [
      "Arduion UNO",
      "Arduion Nano",
      "ESP-32 CAM",
      "NRF24L01+",
      "PID Control",
      "NEO-6M GPS Module",
    ],
    image: "/quadcopter.jpg",
    links: [
      { icon: <FiGithub />, url: "#" },
      { icon: <FiExternalLink />, url: "#" },
    ],
  },
  {
    title: "Drone Delivery Service Website with IoT Dashboard",
    description: "Real-time location monitoring with React and MQTT",
    tags: [
      "React",
      "MQTT",
      "Socket.io",
      "Tailwind",
      "Mongo DB",
      "Node.js",
      "Redux",
    ],
    image: "/dashboard.jpg",
    links: [
      { icon: <FiGithub />, url: "#" },
      { icon: <FiExternalLink />, url: "#" },
    ],
  },
  {
    title: "ESP-32 based Quadcopter controller",
    description:
      "Equiped with internet connectivity and real-time Quadcopter controlling",
    tags: ["ESP-32", "NRF24L01"],
    image: "/robotic-arm.jpg",
    links: [
      { icon: <FiGithub />, url: "#" },
      { icon: <FiExternalLink />, url: "#" },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-gray-900/50 py-20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col overflow-hidden rounded-xl bg-gray-800 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="relative h-48 overflow-hidden bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-300">
                  {project.shortDesc}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-700 px-2 py-1 text-xs text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {project.links.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.url}
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-10 text-gray-400 hover:text-white"
                >
                  <FiX className="text-2xl" />
                </button>
                <div className="relative h-64 overflow-hidden bg-gray-700">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="mb-6 text-gray-300">{selectedProject.fullDesc}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-700 px-3 py-1.5 text-sm text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {selectedProject.links.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.url}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                      <span>{i === 0 ? "View Code" : "Live Demo"}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
