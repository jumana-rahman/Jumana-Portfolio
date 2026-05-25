import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaPaintBrush,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode size={42} />,
      title: "Frontend Development",
      tools: "React JS • Next JS • Tailwind CSS",
      description:
        "Creating modern, responsive and interactive user interfaces with smooth user experience and clean design systems.",
    },

    {
      icon: <FaServer size={42} />,
      title: "Backend Development",
      tools: "Node JS • Express JS • MongoDB",
      description:
        "Building secure and scalable backend systems, REST APIs and database integrations for modern web applications.",
    },

    {
      icon: <FaPaintBrush size={42} />,
      title: "UI / UX Design",
      tools: "Figma • Responsive Design • Wireframing",
      description:
        "Designing visually engaging layouts with intuitive user experience, modern aesthetics and mobile-first responsiveness.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-black min-h-screen px-6 py-14 relative overflow-hidden"
    >
      {/* 💜 Background Glow */}
      <div className="absolute top-20 right-0 w-100 h-100 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-purple-400">Services</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I provide modern web solutions with clean UI, responsive layouts
            and scalable backend functionality.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-black/40 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-md overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_35px_#a855f7] transition duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/5"></div>

              {/* ICON */}
              <div className="text-purple-400 mb-6 relative z-10">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold text-white mb-3 relative z-10">
                {service.title}
              </h3>

              {/* TOOLS */}
              <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 text-purple-300 text-sm mb-4 relative z-10">
                {service.tools}
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Decorative Neon Line */}
              <div className="w-16 h-0.5 bg-purple-500 mt-6 rounded-full shadow-[0_0_12px_#a855f7]"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}