import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function Experience({ theme }) {
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-black/40" : "bg-white";
  const cardBorder = theme === "dark" ? "border-purple-500/20" : "border-purple-200";

  return (
    <section
      id="experience"
      className={`min-h-[60vh] px-6 py-14 relative overflow-hidden ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-slate-200 text-slate-900"
      }`}
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-112.5 h-112.5 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor}`}>
            My <span className="text-purple-400">Experience</span>
          </h2>

          <p className={`mt-4 max-w-2xl mx-auto ${secondaryText}`}>
            My professional journey and what I am looking for next.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div
            className={`
              border ${cardBorder} ${cardBg} rounded-2xl p-8 backdrop-blur-md
              hover:shadow-[0_0_30px_#a855f7]
              transition duration-300
            `}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-purple-400">
                <FaRocket size={36} />
              </div>
              <div>
                <h3 className={`text-2xl font-semibold ${textColor}`}>
                  Open to Opportunities
                </h3>
                <p className={`text-sm ${secondaryText}`}>
                  Looking for internships and entry-level roles
                </p>
              </div>
            </div>

            <p className={`${secondaryText} leading-relaxed mb-4`}>
              I am a motivated Computer Science student with hands-on experience
              in the MERN stack, Next.js, and modern web technologies. Through
              academic projects and personal builds, I have developed strong
              skills in frontend development, UI/UX design, and full-stack
              application development.
            </p>

            <p className={`${secondaryText} leading-relaxed mb-6`}>
              I am currently seeking internship or junior developer positions
              where I can contribute to real-world projects, collaborate with
              experienced teams, and continue growing as a developer.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "MERN Stack",
                "Next.js",
                "Tailwind CSS",
                "REST APIs",
                "Git & GitHub",
                "Responsive Design",
              ].map((skill, i) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
