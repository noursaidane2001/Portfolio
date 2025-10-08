import React from "react";
import { motion } from "framer-motion";

const langues = [
  { code: "fr", name: "Français", level: "Niveau Avancé" },
  { code: "en", name: "English", level: "Niveau Intermédiaire" },
  { code: "ar", name: "Arabe", level: "Langue Maternelle" },
];

const centresInterets = ["Peinture", "Voyages", "Musique", "Natation"];
const qualites = ["Créative", "Organisée", "Curieuse", "Rigoureuse"];

export default function Langues() {
  const getLevelPercent = (level) => {
    if (level.includes("Maternelle")) return 100;
    if (level.includes("Avancé")) return 85;
    if (level.includes("Intermédiaire")) return 65;
    return 40;
  };

  return (
    <section className="py-16 px-4 container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Section Langues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-2xl"
        >
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-[#6366F1] blur-2xl opacity-30 rounded-full"></div>
            <img
              src="/Photos/MesAvatars/Etudes.png"
              alt="Langues"
              className="w-32 h-32 object-cover rounded-full border-4 border-[#6366F1] relative z-10"
            />
          </div>

          <h2 className="text-4xl font-bold text-[#6366F1] mb-8">Langues</h2>

          <div className="flex flex-col gap-6 w-full">
            {langues.map((lang, index) => {
              const percent = getLevelPercent(lang.level);
              const circleRadius = 50;
              const circumference = 2 * Math.PI * circleRadius;
              const offset = circumference - (percent / 100) * circumference;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex items-center gap-4 w-full"
                >
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r={circleRadius}
                        stroke="#2D3748"
                        strokeWidth="10"
                        fill="none"
                      />
                      <motion.circle
                        cx="60"
                        cy="60"
                        r={circleRadius}
                        stroke="url(#gradient)"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        animate={{ strokeDashoffset: offset }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.15,
                          ease: "easeOut",
                        }}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#6366F1" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {lang.code.toUpperCase()}
                      </span>
                      <span className="text-xs text-[#6366F1] font-semibold">
                        {percent}%
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-lg font-bold text-white">{lang.name}</p>
                    <p className="text-gray-400 text-sm">{lang.level}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section Centres d'intérêts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-2xl"
        >
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-[#6366F1] blur-2xl opacity-30 rounded-full"></div>
            <img
              src="/Photos/MesAvatars/Peinture.png"
              alt="Centres d'intérêts"
              className="w-32 h-32 object-cover rounded-full border-4 border-[#6366F1] relative z-10"
            />
          </div>

          <h2 className="text-4xl font-bold text-[#6366F1] mb-8">
            Centres d'intérêts
          </h2>

          <div className="flex flex-col gap-4 w-full">
            {centresInterets.map((interet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-3 rounded-full shadow-lg cursor-pointer hover:shadow-2xl transition-all text-lg font-semibold relative overflow-hidden group w-full text-center"
              >
                <span className="relative z-10">{interet}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Qualités */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-2xl"
        >
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-[#6366F1] blur-2xl opacity-30 rounded-full"></div>
            <img
              src="/Photos/MesAvatars/Pro.png"
              alt="Qualités"
              className="w-32 h-32 object-cover rounded-full border-4 border-[#6366F1] relative z-10"
            />
          </div>

          <h2 className="text-4xl font-bold text-[#6366F1] mb-8">Qualités</h2>

          <div className="flex flex-col gap-4 w-full">
            {qualites.map((qualite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-gradient-to-r from-[#4b80a0] to-[#6370b0] text-white px-6 py-3 rounded-full shadow-lg cursor-pointer hover:shadow-2xl transition-all text-lg font-semibold relative overflow-hidden group w-full text-center"
              >
                <span className="relative z-10">{qualite}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
