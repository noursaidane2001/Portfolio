import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  // --- Normalise le nom pour construire un chemin de logo ---
  const normalize = (s) =>
    s
      ? s
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace(/[^\w_-]/g, "")
      : "";

  // --- Sous-composant pour chaque technologie ---
  function TechBadge({ t }) {
    let name, imageFile;
    if (Array.isArray(t)) {
      // format [name, imageFile]
      name = t[0];
      imageFile = t[1];
    } else if (t && typeof t === "object") {
      // format { name, image }
      name = t.name;
      imageFile = t.image;
    } else {
      // format string
      name = t;
      imageFile = normalize(t);
    }
    const defaultSrc = `/Photos/Logos/${imageFile || normalize(name)}.svg`;
    const [src, setSrc] = useState(defaultSrc);
    const [hasImage, setHasImage] = useState(true);
    const handleError = () => setHasImage(false);

    return (
      <motion.span
        layout
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180, damping: 15 }}
        className="flex items-center gap-3 bg-[#2a2f4a] px-3 py-2 rounded-full text-sm font-medium text-[#E8F0F2] shadow-md hover:bg-[#4b5280] transition-colors duration-300"
      >
        {/* Afficher le logo seulement s'il existe */}
        {hasImage && (
          <motion.div
            className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden group"
            whileHover={{ scale: 1.1 }}
          >
            {/* Effet de halo lumineux */}
            <div className="absolute inset-0 bg-[#6366F1] blur-xl opacity-40"></div>

            <motion.img
              src={src}
              alt={name}
              loading="lazy"
              className="w-6 h-6 object-contain relative z-10 drop-shadow-md"
              onError={handleError}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
        {/* Nom de la techno */}
        <span className="whitespace-nowrap">{name}</span>
      </motion.span>
    );
  }

  return (
    <motion.article
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="border border-gray-700/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl bg-[#2a2f4a] transition-all duration-300 w-full mb-8"
    >
      {/* --- Titre du projet --- */}
      <h3 className="text-3xl font-bold text-[#6366F1] mb-3">
        {project.title}
      </h3>
      {/* --- Description --- */}
      <p className="text-lg text-[#E0E0E0] leading-relaxed">
        {project.description}
      </p>
      {/* --- Tâches --- */}
      {project.tache && project.tache.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#A5D6A7] mb-3">
            Mes Tâches :
          </h4>
          <ul className="list-disc list-inside text-[#E0E0E0] space-y-2">
            {project.tache.map((task, index) => (
              <li key={index} className="text-base leading-relaxed">
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* --- Technologies utilisées --- */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold text-[#6366F1] mb-3">
          Technologies utilisées :
        </h4>
        <div className="flex flex-wrap gap-4">
          {project.tech && project.tech.length > 0 ? (
            project.tech.map((t, i) => <TechBadge t={t} key={i} />)
          ) : (
            <span className="text-sm text-[#C5C6CA]">
              Aucune technologie renseignée
            </span>
          )}
        </div>
      </div>
      {/* --- Liens (code / post) --- */}
      <div className="mt-8 flex gap-6">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-base font-semibold text-[#4FC3F7] hover:text-[#81D4FA] transition-colors"
          >
            <FaGithub className="text-xl" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
