import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";
export default function CertificationModal({ cert, onClose, normalize }) {
  const [hasImage, setHasImage] = useState(true);
  const imageSrc = `/Photos/Logos/${normalize(cert.logo)}.svg`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-[#2a2f4a] to-[#1a1f3a] rounded-3xl p-8 max-w-2xl w-full border-2 border-[#6366F1] shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500 text-white flex items-center justify-center transition-all duration-300 z-10"
        >
          ✕
        </button>

        {/* Contenu */}
        <div className="flex flex-col items-center text-center">
          {/* Logo grand format */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1a1f3a] to-[#2a2f4a] border-4 border-[#6366F1] flex items-center justify-center mb-6 shadow-xl">
            {hasImage && (
              <img
                src={imageSrc}
                alt={cert.title}
                onError={() => setHasImage(false)}
                className="w-20 h-20 object-contain"
              />
            )}
            {!hasImage && <Award className="w-20 h-20 text-[#6366F1]" />}
          </div>

          <h3 className="text-3xl font-bold text-white mb-2">{cert.title}</h3>
          <p className="text-[#6366F1] text-lg mb-2">{cert.organization}</p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-gray-400 mb-6"
          >
            <Calendar className="w-5 h-5" />
            <span>
              Obtenu le{" "}
              {new Date(cert.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-base mb-6 leading-relaxed"
          >
            {cert.description}
            <br></br>
            <br></br>
            <p className="text-gray-400 text-sm mb-1">Durée</p>
            <p className="text-white font-semibold text-lg">{cert.hours}h</p>
          </motion.p>

          {/* Compétences */}
          <div className="mb-8 w-full">
            <h4 className="text-lg font-semibold text-[#A5D6A7] mb-4">
              Compétences validées
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#6366F1]/30 text-white text-sm rounded-full border border-[#6366F1]/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
