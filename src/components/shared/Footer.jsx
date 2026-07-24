import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer({ theme }) {
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const secondaryText = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-black/40" : "bg-white";
  const cardBorder = theme === "dark" ? "border-purple-500/20" : "border-purple-200";

  return (
    <footer
      id="contact"
      className={`relative px-6 pt-14 pb-6 overflow-hidden border-t border-purple-500/20 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-slate-200 text-slate-900"
      }`}
    >
      <div
        className={`absolute w-100 h-100 rounded-full blur-3xl bottom-0 right-10 animate-pulse ${
          theme === "dark" ? "bg-purple-600/10" : "bg-purple-400/20"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
            Contact <span className="text-purple-400">Me</span>
          </h2>

          <div className={secondaryText + " space-y-4"}>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              <span className={textColor}>jumana.rahman001@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-purple-400" />
              <span className={textColor}>+880 1318578173</span>
            </div>

          </div>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
            Social <span className="text-purple-400">Links</span>
          </h2>

          <div className={`flex flex-col gap-4 ${secondaryText}`}>

            <a
              href="https://github.com/jumana-rahman"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jumana-bint-rahman"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>
        </motion.div>

        {/* MESSAGE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
            Send <span className="text-purple-400">Message</span>
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className={`${cardBg} ${cardBorder} p-3 rounded-lg outline-none focus:border-purple-500 ${
                  theme === "dark"
                    ? "text-white placeholder-gray-400"
                    : "text-black placeholder-gray-500"
              }`}
            />

            <input
              type="email"
              placeholder="Your Email"
              className={`${cardBg} ${cardBorder} p-3 rounded-lg outline-none focus:border-purple-500 ${
                theme === "dark"
                  ? "text-white placeholder-gray-400"
                  : "text-black placeholder-gray-500"
              }`}
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className={`${cardBg} ${cardBorder} p-3 rounded-lg outline-none focus:border-purple-500 ${
                theme === "dark"
                  ? "text-white placeholder-gray-400"
                  : "text-black placeholder-gray-500"
              }`}
            ></textarea>

            <button
              type="submit"
              className="bg-purple-500 text-black font-medium py-2 rounded-lg hover:shadow-[0_0_20px_#a855f7] transition"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>

      {/* Bottom Text */}
      <div className={`text-center mt-16 text-sm ${secondaryText}`}>
        &copy; {new Date().getFullYear()} Jumana. All rights reserved.
      </div>
    </footer>
  );
}
