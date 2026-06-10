import { motion } from "framer-motion";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Skills({ theme }) {

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-black/40" : "bg-white";
  const cardBorder = theme === "dark" ? "border-purple-500/20" : "border-purple-200";

  const skills = [
    {
      icon: <FaHtml5 size={42} />,
      title: "HTML5",
      description:
        "Building clean, semantic and responsive website structures.",
    },
    {
      icon: <SiTailwindcss size={42} />,
      title: "Tailwind CSS",
      description:
        "Creating modern UI with utility-first responsive styling.",
    },
    {
      icon: <FaReact size={42} />,
      title: "React JS",
      description:
        "Developing interactive and component-based frontend applications.",
    },
    {
      icon: <FaNodeJs size={42} />,
      title: "Node JS",
      description:
        "Building fast and scalable backend applications with JavaScript.",
    },
    {
      icon: <SiNextdotjs size={42} />,
      title: "Next JS",
      description:
        "Creating optimized full-stack and SEO-friendly web applications.",
    },
    {
      icon: <SiExpress size={42} />,
      title: "Express JS",
      description:
        "Developing REST APIs and backend services efficiently.",
    },
    {
      icon: <SiMongodb size={42} />,
      title: "MongoDB",
      description:
        "Managing NoSQL databases for dynamic web applications.",
    },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen px-6 py-14 relative overflow-hidden ${
        theme === "dark"
      ? "bg-black text-white"
      : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* 💜 Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-112.5 h-112.5 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor}`}>
            My <span className="text-purple-400">Skills</span>
          </h2>

          <p className={`mt-4 max-w-2xl mx-auto ${secondaryText}`}>
            Technologies and tools I use to build modern, responsive and
            user-friendly web applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className={`
                border
                ${cardBg}
                ${cardBorder}
                rounded-2xl p-8 backdrop-blur-md
                hover:shadow-[0_0_30px_#a855f7]
                hover:-translate-y-2
                transition duration-300
              `}
            >
              {/* ICON */}
              <div className="text-purple-400 mb-5">
                {skill.icon}
              </div>

              {/* TITLE */}
              <h3 className={`text-2xl font-semibold ${textColor} mb-3`}>
                {skill.title}
              </h3>

              {/* DESCRIPTION */}
              <p className={`${secondaryText} leading-relaxed text-sm`}>
                {skill.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}