import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Wrench, Layers } from "lucide-react";

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
        whileHover={{ scale: 1.08, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="inline-flex items-center gap-2 bg-[#2a2f4a] px-3 py-1.5 rounded-lg text-xs font-medium text-[#E8F0F2] shadow-sm hover:bg-[#4b5280] hover:shadow-md transition-all duration-200 border border-gray-700/30"
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
      className="border-2 border-gray-700/50 rounded-xl p-8 bg-[#2a2f4a] shadow-lg hover:shadow-2xl hover:border-[#6366F1]/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* --- En-tête --- */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#6366F1] mb-2 flex items-center gap-2">
              <Briefcase className="w-6 h-6" strokeWidth={2.5} />
              {experience.entreprise}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span className="italic">{experience.periode}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-gray-300 text-sm font-medium bg-[#1f243d]/60 px-3 py-2 rounded-lg">
            <MapPin className="w-4 h-4 text-[#A5D6A7]" />
            <span>{experience.lieu}</span>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
      </div>

      {/* --- Projet --- */}
      {experience.projet && (
        <div className="mb-5 pl-4 border-l-4 border-[#A5D6A7]">
          <h4 className="text-lg font-semibold text-[#A5D6A7] mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5" />
            Projet
          </h4>
          <p className="text-gray-200 text-base leading-relaxed">
            {experience.projet}
          </p>
        </div>
      )}

      {/* --- Missions principales --- */}
      {experience.missions && experience.missions.length > 0 && (
        <div className="mb-6 flex-1">
          <h4 className="text-lg font-semibold text-[#A5D6A7] mb-3">
            Missions
          </h4>
          <ul className="space-y-2.5">
            {experience.missions.map((mission, index) => (
              <li
                key={index}
                className="text-[#E0E0E0] text-sm leading-relaxed flex items-start gap-3 pl-1"
              >
                <span className="text-[#6366F1] text-lg font-bold mt-0.5 flex-shrink-0">
                  ▸
                </span>
                <span className="flex-1">{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* --- Technologies utilisées --- */}
      <div className="mt-auto pt-5">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-4"></div>

        <h4 className="text-lg font-semibold text-[#6366F1] mb-3 flex items-center gap-2">
          <Wrench className="w-5 h-5" />
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
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
