import { motion } from "framer-motion";

export default function About({ theme }) {

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center px-6 py-14 relative overflow-hidden ${
        theme === "dark"
      ? "bg-black text-white"
      : "bg-slate-200 text-slate-900"
      }`}
    >
      <div className="absolute w-100 h-100 bg-purple-600/20 rounded-full blur-3xl top-1/2 left-10 -translate-y-1/2 animate-pulse"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${
              textColor
            }`}>
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className={`${secondaryText} mt-6 leading-relaxed`}>
            I am a passionate MERN Stack Developer who enjoys building modern,
            responsive and user-friendly web applications. I focus on clean UI,
            smooth experience, and performance. My journey into programming
            started with curiosity about how websites work, and it quickly turned
            into a deep love for turning ideas into real products.
          </p>

          <p className={`${secondaryText} mt-4 leading-relaxed`}>
            I enjoy working on frontend development the most, where I can bring
            designs to life with React, Next.js, and Tailwind CSS. I also have
            hands-on experience with backend technologies like Node.js, Express,
            and MongoDB, which gives me a solid understanding of the full
            development cycle.
          </p>

          <p className={`${secondaryText} mt-4 leading-relaxed`}>
            Outside of programming, I love exploring new technologies,
            watching tech talks, and continuously challenging myself to learn
            something new every day. I believe in writing clean code and
            building products that make a difference.
          </p>

          {/* SKILLS TAGS */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Tailwind", "JavaScript", "UI Design"].map((skill, i) => (
              <span
                key={i}
                className={`px-3 py-1 border rounded-full text-sm transition
                ${
                  theme === "dark"
                    ? "border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                    : "border-purple-600/40 text-purple-700 bg-purple-100 hover:bg-purple-200"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* EDUCATION */}
          <div className="mt-10">
            <h3 className={`text-xl font-semibold mb-4 ${
              textColor
            }`}>
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
                <h4 className={`font-medium ${
                  textColor
                }`}>
                  BSc in Computer Science & Engineering
                </h4>
                <p className={`text-gray-400 text-sm ${secondaryText}`}>
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
                <h4 className={`font-medium ${
                  textColor
                }`}>
                  Higher Secondary Certificate (HSC)
                </h4>
                <p className={`text-gray-400 text-sm ${secondaryText}`}>
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
              className={`
                rounded-xl p-6 text-center flex flex-col items-center justify-center
                border border-purple-500/20
                hover:shadow-[0_0_25px_#a855f7]
                transition

                ${
                  theme === "dark"
                    ? "bg-black/40"
                    : "bg-white border-purple-300 shadow-lg"
                }
              `}
            >
              <div>
                <h3 className="text-3xl font-bold text-purple-400">
                  {item.value}
                </h3>

                <p
                  className={`mt-2 ${
                    theme === "dark"
                      ? "text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
