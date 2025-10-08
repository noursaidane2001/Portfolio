import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ExperiencesCard({ experience }) {
  // --- Normalisation du nom de fichier ---
  const normalize = (s) =>
    s
      ? s
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace(/[^\w_-]/g, "")
      : "";

  // --- Sous-composant : Badge techno ---
  function TechBadge({ t }) {
    let name, imageFile;

    if (Array.isArray(t)) {
      name = t[0];
      imageFile = t[1];
    } else if (t && typeof t === "object") {
      name = t.name;
      imageFile = t.image;
    } else {
      name = t;
      imageFile = normalize(t);
    }

    const defaultSrc = `/Photos/Logos/${imageFile || normalize(name)}.svg`;
    const [src, setSrc] = useState(defaultSrc);
    const [hasImage, setHasImage] = useState(true);

    return (
      <motion.span
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex items-center gap-2 bg-[#2a2f4a] px-3 py-1.5 rounded-full text-xs font-medium text-[#E8F0F2] shadow-md hover:bg-[#4b5280] transition"
      >
        {hasImage && (
          <img
            src={src}
            alt={name}
            onError={() => setHasImage(false)}
            className="w-4 h-4 object-contain"
          />
        )}
        <span>{name}</span>
      </motion.span>
    );
  }

  // --- Carte principale ---
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="border border-gray-700/40 rounded-2xl p-8 bg-[#1E40AF] dark:bg-[#2a2f4a] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* --- En-tête --- */}
      <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-700/30">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#6366F1] mb-1">
            {experience.entreprise}
          </h3>
          <p className="text-gray-400 italic text-sm">{experience.periode}</p>
        </div>
        <div className="text-right ml-4">
          <p className="text-gray-300 text-sm font-medium">{experience.lieu}</p>
        </div>
      </div>

      {/* --- Projet --- */}
      {experience.projet && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🚀</span>
            <h4 className="text-lg font-semibold text-[#A5D6A7]">Projet</h4>
          </div>
          <p className="text-gray-200 text-base pl-7">{experience.projet}</p>
        </div>
      )}

      {/* --- Missions principales --- */}
      {experience.missions && experience.missions.length > 0 && (
        <div className="mb-6 flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📋</span>
            <h4 className="text-lg font-semibold text-[#A5D6A7]">Missions</h4>
          </div>
          <ul className="space-y-2.5 pl-7">
            {experience.missions.map((mission, index) => (
              <li
                key={index}
                className="text-[#E0E0E0] text-sm leading-relaxed flex items-start"
              >
                <span className="text-[#6366F1] mr-2 mt-1">•</span>
                <span className="flex-1">{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* --- Technologies utilisées --- */}
      <div className="mt-auto pt-5 border-t border-gray-700/30">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">⚙️</span>
          <h4 className="text-lg font-semibold text-[#6366F1]">Technologies</h4>
        </div>
        <div className="flex flex-wrap gap-2 pl-7">
          {experience.technologies && experience.technologies.length > 0 ? (
            experience.technologies.map((tech, i) => (
              <TechBadge key={i} t={tech} />
            ))
          ) : (
            <span className="text-sm text-[#C5C6CA]">
              Aucune technologie renseignée
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
