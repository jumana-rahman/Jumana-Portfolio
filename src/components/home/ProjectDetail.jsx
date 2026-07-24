import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiTypescript,
  SiGoogle,
} from "react-icons/si";

import projects from "../../data/projects";

const techIconMap = {
  "HTML5": <FaHtml5 />,
  "Tailwind CSS": <SiTailwindcss />,
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "React JS": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "Figma": <SiFigma />,
  "Google Gemini AI": <SiGoogle />,
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const handleStorage = () => setTheme(localStorage.getItem("theme") || "dark");
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-black/40" : "bg-white";
  const cardBorder = theme === "dark" ? "border-purple-500/20" : "border-purple-200";

  if (!project) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center px-6 ${
        theme === "dark" ? "bg-black text-white" : "bg-slate-100 text-slate-900"
      }`}>
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className={`mb-8 ${secondaryText}`}>
          The project you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-black font-semibold rounded-lg hover:shadow-[0_0_20px_#a855f7] transition"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      theme === "dark" ? "bg-black text-white" : "bg-slate-100 text-slate-900"
    }`}>
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-800/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 hover:drop-shadow-[0_0_10px_#a855f7] transition mb-8"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`rounded-2xl overflow-hidden border ${cardBorder} mb-10`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>

        {/* Project Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-purple-400 mb-6"
        >
          {project.title}
        </motion.h1>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className={`text-xl font-semibold ${textColor} mb-3`}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-4 text-purple-400 text-3xl">
            {project.tech.map((techName, index) => (
              <div
                key={index}
                title={techName}
                className={`p-3 rounded-xl border ${cardBorder} ${cardBg}`}
              >
                {techIconMap[techName]}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className={`text-xl font-semibold ${textColor} mb-3`}>
            Description
          </h2>
          <p className={`${secondaryText} leading-relaxed text-lg`}>
            {project.description}
          </p>
        </motion.div>

        {/* Live & GitHub Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-black font-semibold rounded-lg hover:shadow-[0_0_20px_#a855f7] transition"
          >
            <FaExternalLinkAlt />
            Live Project
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition
              ${cardBorder} ${
                theme === "dark"
                  ? "text-purple-300 hover:bg-purple-500 hover:text-black"
                  : "text-purple-700 hover:bg-purple-500 hover:text-white"
              }
            `}
          >
            <FaGithub />
            GitHub Repository
          </a>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`border ${cardBorder} ${cardBg} rounded-2xl p-8 mb-8`}
        >
          <h2 className={`text-xl font-semibold ${textColor} mb-4`}>
            Challenges Faced
          </h2>
          <p className={`${secondaryText} leading-relaxed`}>
            {project.challenges}
          </p>
        </motion.div>

        {/* Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`border ${cardBorder} ${cardBg} rounded-2xl p-8 mb-10`}
        >
          <h2 className={`text-xl font-semibold ${textColor} mb-4`}>
            Potential Improvements & Future Plans
          </h2>
          <p className={`${secondaryText} leading-relaxed`}>
            {project.improvements}
          </p>
        </motion.div>

        {/* Bottom Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center pb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-black transition"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
