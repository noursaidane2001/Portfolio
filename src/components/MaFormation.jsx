// src/components/MaFormationCard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MaFormation({ edu }) {
  const defaultSrc = edu.logo || null;
  const [src, setSrc] = useState(defaultSrc);
  const [hasImage, setHasImage] = useState(!!defaultSrc);

  const handleError = () => setHasImage(false);

  return (
    <motion.article
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="flex items-center justify-between gap-4 p-6 rounded-2xl shadow-lg hover:shadow-2xl bg-[#2a2f4a] border border-gray-700/40 mb-6 transition-all duration-300 w-full"
    >
      {/* Logo */}
      {hasImage && (
        <motion.div
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#4b5280] to-[#3a3f5c] overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <motion.img
            src={src}
            alt={edu.institut}
            className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-md"
            onError={handleError}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}

      {/* Informations principales */}
      <div className="flex-1 text-left ml-4">
        <h3 className="text-3xl font-bold text-[#6366F1] mb-3">
          {edu.diplome}
        </h3>
        <p className="text-sm md:text-base text-[#E0E0E0] mb-3">
          {edu.fullname} ({edu.institut})
        </p>
        {edu.mention && (
          <p className="text-sm text-[#A5D6A7] mt-1">{`• Mention: ${edu.mention}`}</p>
        )}
      </div>

      {/* Date à droite */}
      <div className="flex-shrink-0 text-right text-sm text-[#91C4C3] font-bold">
        {edu.date}
      </div>
    </motion.article>
  );
}
