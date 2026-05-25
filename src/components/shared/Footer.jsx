import { FaGithub, FaLinkedin, FaSnapchatGhost, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black relative px-6 pt-14 pb-6 overflow-hidden border-t border-purple-500/20"
    >
      {/* 💜 Background glow */}
      <div className="absolute w-100 h-100 bg-purple-600/10 rounded-full blur-3xl bottom-0 right-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

        {/* 📞 CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Contact <span className="text-purple-400">Me</span>
          </h2>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              <span>jumana.rahman001@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-purple-400" />
              <span>+880 1318578173</span>
            </div>

          </div>
        </motion.div>

        {/* 🌐 SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Social <span className="text-purple-400">Links</span>
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">

            <a
              href="https://github.com/jumana-rahman"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jumana-bint-rahman"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="#"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaSnapchatGhost />
              Snapchat
            </a>

          </div>
        </motion.div>

        {/* 💬 MESSAGE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Send <span className="text-purple-400">Message</span>
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/40 border border-purple-500/20 p-3 rounded-lg text-white outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/40 border border-purple-500/20 p-3 rounded-lg text-white outline-none focus:border-purple-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-black/40 border border-purple-500/20 p-3 rounded-lg text-white outline-none focus:border-purple-500"
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

      {/* 🔻 Bottom Text */}
      <div className="text-center text-gray-500 mt-16 text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}