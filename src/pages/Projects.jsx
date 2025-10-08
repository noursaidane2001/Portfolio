import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
export default function ProjectsPage() {
  return (
    <section className="py-12 container mx-auto">
      {/* Photo à gauche, texte à droite */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 mb-12">
        <div className="md:w-1/2 flex justify-center md:justify-start ">
          <img
            src="/Photos/Testtt.png"
            alt="Nour"
            className="w-80 md:w-full rounded-lg shadow-lg"
            hover="shadow-2xl"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#6366F1]"
          >
            Mes Projets
          </motion.h1>
          <p className="mt-4 text-lg text-[#E0E0E0]-600">
            Voici quelques projets sur lesquels j'ai travaillé.
            <br />
            Chacun d’eux reflète ma créativité, mon savoir-faire technique et ma
            passion pour le domaine d'informatique.
          </p>
        </div>
      </div>

      {/* Projets en dessous */}
      <div className="w-full">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
