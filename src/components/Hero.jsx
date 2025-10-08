import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
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
            Salut, je suis Nour !
          </motion.h1>
          <p className="mt-4 text-lg text-[#A5D6A7]-600">
            Élève ingénieur en informatique spécialité Génie Logiciel
            <br></br>
            Passionnée par le développement logiciel et la conception de
            solutions innovantes, je suis curieuse et motivée. Je possède des
            compétences solides en gestion de projets et souhaite contribuer à
            des initiatives à forte valeur ajoutée tout en renforçant mes
            connaissances techniques.
          </p>
        </div>

        {/* Image à droite */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Photos/Bonjour.png"
            alt="Nour"
            className="w-80 md:w-full rounded-lg shadow-lg mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
