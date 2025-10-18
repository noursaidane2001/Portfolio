import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CertificationCard from "../components/CertificationCard";
import CertificationModal from "../components/CertificationModal";
import { certifications } from "../data/certifications";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const normalize = (s) =>
    s
      ? s
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace(/[^\w_-]/g, "")
      : "";

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <img
              src="/Photos/MesAvatars/Certif.png"
              alt="Certifications"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-[#6366F1] relative z-10"
            />
            <h2 className="text-3xl sm:text-5xl font-bold text-[#6366F1]">
              Mes Certifications
            </h2>
          </div>
          <p className="text-gray-300 text-base sm:text-lg px-4">
            Validations professionnelles de mes compétences techniques
          </p>
        </motion.div>

        {/* Grille de certifications en forme de badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={() => setSelectedCert(cert)}
              normalize={normalize}
            />
          ))}
        </div>

        {/* Modal détaillé */}
        <AnimatePresence>
          {selectedCert && (
            <CertificationModal
              cert={selectedCert}
              onClose={() => setSelectedCert(null)}
              normalize={normalize}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
