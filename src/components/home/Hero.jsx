import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black relative overflow-hidden px-6"
    >
      {/* 🌌 Background glow blobs */}
      <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-800/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 z-10">

        {/* LEFT SIDE - TEXT CONTENT */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
                Hi, I am{" "}
                {/* <span className="text-purple-400"></span>{" "} */}
                <span className="text-purple-400">
                    <Typewriter
                    words={[
                        "Jumana",
                        "MERN Stack Developer",
                        "UI Designer",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                    />
                </span>
            </h1>

          <p className="text-gray-400 mt-8 max-w-md">
            I build modern, fast, and responsive web applications with clean UI and strong user experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-gray-300">

            <FaHtml5
                size={30}
                className="text-orange-500 transition hover:scale-110"
            />

            <FaCss3Alt
                size={30}
                className="text-blue-500 transition hover:scale-110"
            />

            <SiTailwindcss
                size={30}
                className="text-cyan-400 transition hover:scale-110"
            />

            <FaReact
                size={30}
                className="text-cyan-300 transition hover:scale-110 animate-pulse"
            />

            <SiNextdotjs
                size={30}
                className="text-white transition hover:scale-110"
            />

            <FaNodeJs
                size={30}
                className="text-green-500 transition hover:scale-110"
            />

            </div>

          {/* Button */}
          <div className="mt-10">
            <a
              href="/cv.pdf"
              download
              className="btn btn-outline border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black transition shadow-[0_0_15px_#a855f7]"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Outer glow ring animation */}
            <div className="absolute w-72 h-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>

            {/* Image circle */}
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-purple-500 shadow-[0_0_40px_#a855f7] overflow-hidden relative">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}