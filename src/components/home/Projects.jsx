import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiFigma,
  SiJavascript,
} from "react-icons/si";

import projects from "../../data/projects";

const techIconMap = {
  "HTML5": <FaHtml5 />,
  "Tailwind CSS": <SiTailwindcss />,
  "JavaScript": <SiJavascript />,
  "React JS": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "Figma": <SiFigma />,
};

export default function Projects({ theme }) {
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-black/40" : "bg-white";
  const cardBorder = theme === "dark" ? "border-purple-500/20" : "border-purple-200";

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Figma to HTML",
    "Tracking Websites",
    "Frontend Development",
    "Full Stack Development",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? [...projects].reverse()
      : projects.filter(
          (project) => project.category === activeCategory
        ).reverse();

  return (
    <section
      id="projects"
      className= {`min-h-screen px-6 py-14 relative overflow-hidden ${
        theme === "dark"
      ? "bg-black text-white"
      : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className={`absolute bottom-0 left-0 w-112.5 h-112.5  rounded-full blur-3xl animate-pulse ${theme === "dark" ? "bg-purple-600/10" : "bg-purple-500/20"}`}></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor}`}>
            My <span className="text-purple-400">Projects</span>
          </h2>

          <p className={`mt-4 max-w-2xl mx-auto ${secondaryText}`}>
            Some of my featured works showcasing frontend, full-stack and
            responsive web development projects.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">

          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition duration-300
                ${
                  activeCategory === category
                    ? "bg-purple-500 text-black border-purple-500 shadow-[0_0_15px_#a855f7]"
                    : theme === "dark"
                      ? "border-purple-500/30 text-purple-300 hover:bg-purple-500 hover:text-black"
                      : "border-purple-400 text-purple-700 hover:bg-purple-500 hover:text-white"
                }`}
              >
              {category}
            </button>
          ))}

        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`${cardBg} border ${cardBorder} rounded-2xl overflow-hidden backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_0_35px_#a855f7] transition duration-300`}
            >
              {/* PROJECT IMAGE */}
              <div className="overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover Overlay with View More button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <Link
                    to={`/projects/${project.id}`}
                    className="px-6 py-2.5 bg-purple-500 text-black font-semibold rounded-lg hover:shadow-[0_0_20px_#a855f7] transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TITLE */}
                <h3 className={`text-2xl font-semibold ${textColor} mb-3`}>
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className={`${secondaryText} text-sm leading-relaxed mb-5`}>
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex items-center gap-4 text-purple-400 text-2xl mb-6">
                  {project.tech.map((techName, index) => (
                    <span key={index} title={techName}>
                      {techIconMap[techName]}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  {/* LIVE BUTTON */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 text-black font-medium hover:shadow-[0_0_15px_#a855f7] transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  {/* GITHUB BUTTON */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
                      ${
                        theme === "dark"
                          ? "border-purple-500/30 text-purple-300 hover:bg-purple-500 hover:text-black"
                          : "border-purple-400 text-purple-700 hover:bg-purple-500 hover:text-white"
                      }`}
                    >
                      <FaGithub />
                      Github
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
