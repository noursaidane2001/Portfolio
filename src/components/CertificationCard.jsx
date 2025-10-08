import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";
export default function CertificationCard({ cert, index, onClick, normalize }) {
  const [hasImage, setHasImage] = useState(true);
  const imageSrc = `/Photos/Logos/${normalize(cert.logo)}.svg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="relative bg-gradient-to-br from-[#2a2f4a] to-[#1a1f3a] rounded-2xl p-6 border-2 border-[#6366F1]/20 hover:border-[#6366F1] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Badge "Vérifié" */}
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-2 shadow-lg">
        <CheckCircle className="w-5 h-5 text-white" />
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a1f3a] to-[#2a2f4a] border-4 border-[#6366F1]/30 flex items-center justify-center group-hover:border-[#6366F1] transition-all duration-300 shadow-xl">
          {hasImage && (
            <img
              src={imageSrc}
              alt={cert.title}
              onError={() => setHasImage(false)}
              className="w-12 h-12 object-contain"
            />
          )}
          {!hasImage && <Award className="w-12 h-12 text-[#6366F1]" />}
        </div>
      </div>

      {/* Contenu */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6366F1] transition-colors">
          {cert.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{cert.organization}</p>

        <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mb-4">
          <Calendar className="w-4 h-4" />
          <span>
            {new Date(cert.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </span>
        </div>

        {/* Nombre de compétences */}
        <div className="flex justify-center gap-1">
          {cert.skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[#6366F1]/20 text-[#A5D6A7] text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="px-2 py-1 bg-[#6366F1]/20 text-gray-400 text-xs rounded-full">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Indicateur de clic */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="w-4 h-4 text-[#6366F1]" />
      </div>
    </motion.div>
  );
}
