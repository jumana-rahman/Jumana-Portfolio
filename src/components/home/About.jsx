import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-black px-6 py-14 relative overflow-hidden"
    >
      {/* 💜 LEFT GLOW BACKGROUND */}
      <div className="absolute w-100 h-100 bg-purple-600/20 rounded-full blur-3xl top-1/2 left-10 -translate-y-1/2 animate-pulse"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I am a passionate MERN Stack Developer who enjoys building modern,
            responsive and user-friendly web applications. I focus on clean UI,
            smooth experience, and performance.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I love turning ideas into real-world projects using modern web technologies.
          </p>

          {/* SKILLS */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Tailwind", "JavaScript", "UI Design"].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-purple-500/30 text-purple-300 rounded-full text-sm hover:bg-purple-500/10 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* EDUCATION */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Education
            </h3>

            <div className="space-y-4">

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="border-l-2 border-purple-500 pl-4"
              >
                <h4 className="text-white font-medium">
                  BSc in Computer Science & Engineering
                </h4>
                <p className="text-gray-400 text-sm">
                  October, 2021 - Present
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="border-l-2 border-purple-500 pl-4"
              >
                <h4 className="text-white font-medium">
                  Higher Secondary Certificate (HSC)
                </h4>
                <p className="text-gray-400 text-sm">
                  Passing year: 2019
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - STATS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >

          {[
            { value: "2+", label: "Years Learning" },
            { value: "10+", label: "Projects" },
            { value: "6+", label: "Technologies" },
            { value: "100%", label: "Dedication" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-purple-500/20 rounded-xl p-6 text-center hover:shadow-[0_0_25px_#a855f7] transition flex flex-col items-center justify-center"
            >
              <div>
                <h3 className="text-3xl font-bold text-purple-400">
                    {item.value}
                </h3>
                <p className="text-gray-400 mt-2">{item.label}</p>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}