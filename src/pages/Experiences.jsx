import React from "react";
import { motion } from "framer-motion";
import experiences from "../data/experiences";
import ExperiencesCard from "../components/ExperiencesCard";

export default function Experiences() {
  return (
    <section className="py-12 container mx-auto">
      {/* --- En-tête avec photo et titre --- */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 mb-16">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/Photos/societe.png"
            alt="Nour"
            className="w-80 md:w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Mes Expériences Professionnelles
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300">
            Voici mes expériences professionnelles, où j'ai pu mettre en
            pratique mes connaissances et mes talents. Chaque expérience m’a
            permis d’acquérir de nouvelles compétences et de m’initier au monde
            professionnel.
          </p>
        </div>
      </div>

      {/* --- Tableau de cartes --- */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ExperiencesCard experience={exp} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
