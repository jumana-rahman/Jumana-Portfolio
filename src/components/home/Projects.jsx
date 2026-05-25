import { useState } from "react";
import { motion } from "framer-motion";

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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Figma to HTML",
    "Tracking Websites",
    "Frontend Development",
    "Full Stack Development",
  ];

  const projects = [
    {
      title: "Job Application Tracker",
      category: "Tracking Websites",
      image: "/projects/project1.png",
      description:
        "A clean and responsive job application tracker built to manage and organize job search activities efficiently.",

      tech: [
        <FaHtml5 />,
        <SiTailwindcss />,
        <SiJavascript/>
      ],

      live: "https://jumana-rahman.github.io/A04-Job-Application-Tracker/",
      github: "https://github.com/jumana-rahman/A04-Job-Application-Tracker",
    },

    {
      title: "GitHub Issues Tracker",
      category: "Tracking Websites",
      image: "/projects/project2.png",
      description:
        "A modern issue management application designed to simplify bug tracking, task organization and project workflow management with login system",

      tech: [
        <FaHtml5 />,
        <SiTailwindcss />,
        <SiJavascript/>
      ],

      live: "https://jumana-rahman.github.io/A05-GitHub-Issues_Tracker/",
      github: "https://github.com/jumana-rahman/A05-GitHub-Issues_Tracker",
    },

    {
      title: "TechWave Landing Page",
      category: "Figma to HTML",
      image: "/projects/project3.png",
      description:
        "Converted a professional Figma landing page into a fully responsive pixel-perfect website.",

      tech: [
        <FaHtml5 />,
        <SiTailwindcss />,
        <SiFigma />,
      ],

      live: "https://jumana-rahman.github.io/A02-TechWave/",
      github: "https://github.com/jumana-rahman/A02-TechWave",
    },

    {
      title: "DriveFleet",
      category: "Full Stack Development",
      image: "/projects/project4.png",
      description:
        "A full-stack task management application with CRUD operations and authentication system.",

      tech: [
        <SiTailwindcss/>,
        <FaNodeJs />,
        <SiExpress />,
        <SiMongodb />,
      ],

      live: "https://a09-drive-fleet-client.vercel.app/",
      github: "https://github.com/jumana-rahman/A09-DriveFleet-Client",
    },

    {
      title: "KeenKeeper",
      category: "Frontend Development",
      image: "/projects/project5.png",
      description:
        "A modern Next.js application that helps users track friendships, monitor interactions, and stay connected through meaningful communication.",

      tech: [
        <SiNextdotjs />,
        <SiTailwindcss />,
      ],

      live: "https://keenkeeper007.vercel.app/",
      github: "https://github.com/jumana-rahman/A07-Keen-Keeper",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="bg-black min-h-screen px-6 py-14 relative overflow-hidden"
    >
      {/* 💜 Background Glow */}
      <div className="absolute bottom-0 left-0 w-112.5 h-112.5 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-purple-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
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
                  : "border-purple-500/30 text-purple-300 hover:bg-purple-500 hover:text-black"
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
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-purple-500/20 rounded-2xl overflow-hidden backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_0_35px_#a855f7] transition duration-300"
            >
              {/* PROJECT IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex items-center gap-4 text-purple-400 text-2xl mb-6">
                  {project.tech.map((icon, index) => (
                    <span key={index}>
                      {icon}
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
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500 hover:text-black transition"
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