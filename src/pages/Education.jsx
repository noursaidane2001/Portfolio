import React from "react";
import { motion } from "framer-motion";
import education from "../data/education";
import MaFormation from "../components/MaFormation";

export default function Education() {
  return (
    <section className="py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#6366F1]"
          >
            Ma Formation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-[#E0E0E0] leading-relaxed"
          >
            Voici mon parcours d’études, où chaque étape m’a permis d’acquérir
            de nouvelles compétences, d’explorer le monde du développement et de
            renforcer ma passion pour l’ingénierie logicielle.
          </motion.p>
        </div>

        {/* Image à droite */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="/Photos/Parcours.png"
            alt="Parcours"
            className="w-80 md:w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          />
        </div>
      </div>

      {/* Liste de la formation */}
      <div className="container mx-auto mt-12 flex flex-col gap-4">
        {education.map((edu) => (
          <MaFormation key={edu.id} edu={edu} />
        ))}
      </div>
    </section>
  );
}
