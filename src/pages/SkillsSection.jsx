import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
export default function SkillsSection() {
  // Dupliquer les compétences pour un défilement infini fluide
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="max-w-full mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/Photos/MesAvatars/Compt.png"
              alt="Certifications"
              className="w-32 h-32 object-cover rounded-full border-4 border-[#6366F1] relative z-10"
            />
            <h2 className="text-5xl font-bold text-[#6366F1] mb-4">
              Mes Compétences
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Carrousel animé */}
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1920], // Ajuster selon le nombre d'éléments
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <SkillCircle key={index} skill={skill} />
          ))}
        </motion.div>

        {/* Gradients de fondu sur les bords */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#2a2f4a] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#2a2f4a] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

function SkillCircle({ skill }) {
  const [hasImage, setHasImage] = React.useState(true);

  // Fonction utilitaire pour normaliser le nom si nécessaire
  const normalize = (str) =>
    str
      ? str
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace(/[^\w_-]/g, "")
      : "";

  const imageSrc = `/Photos/Logos/${skill.logo}.svg`;

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-40 h-40 rounded-full bg-gradient-to-br from-[#2a2f4a] to-[#1a1f3a] border-4 border-[#6366F1]/30 shadow-2xl flex flex-col items-center justify-center gap-3 hover:border-[#6366F1] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300"
      style={{
        boxShadow: `0 10px 40px rgba(99, 102, 241, 0.2)`,
      }}
    >
      {hasImage && (
        <img
          src={imageSrc}
          alt={skill.name}
          onError={() => setHasImage(false)}
          className="w-16 h-16 object-contain"
        />
      )}
      {!hasImage && (
        <span className="text-3xl" style={{ color: skill.color }}>
        </span>
      )}
      <span className="text-white font-semibold text-sm text-center px-2">
        {skill.name}
      </span>
    </motion.div>
  );
}
