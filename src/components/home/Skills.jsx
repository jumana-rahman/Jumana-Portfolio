import { motion } from "framer-motion";

export default function Skills({ theme }) {

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-black/40" : "bg-white";
  const cardBorder = theme === "dark" ? "border-purple-500/20" : "border-purple-200";
  const barBg = theme === "dark" ? "bg-gray-700" : "bg-gray-300";

  const categories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3 / Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React JS", level: 88 },
        { name: "Next JS", level: 80 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node JS", level: 78 },
        { name: "Express JS", level: 75 },
        { name: "MongoDB", level: 72 },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git & GitHub", level: 82 },
        { name: "Figma", level: 70 },
        { name: "VS Code", level: 90 },
        { name: "Vercel / Netlify", level: 75 },
      ],
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

        {/* SKILL CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`
                border ${cardBg} ${cardBorder} rounded-2xl p-8 backdrop-blur-md
                hover:shadow-[0_0_30px_#a855f7]
                hover:-translate-y-2
                transition duration-300
              `}
            >
              <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-1">
                      <span className={`text-sm font-medium ${textColor}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${secondaryText}`}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className={`w-full h-2.5 ${barBg} rounded-full overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: j * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
