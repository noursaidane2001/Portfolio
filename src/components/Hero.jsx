import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Sparkles,
  Download,
} from "lucide-react";

export default function Hero() {
  const contacts = [
    {
      icon: Phone,
      value: "+216 58 829 251",
      href: "tel:+21658829251",
    },
    {
      icon: Mail,
      value: "saidanenour2001@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=saidanenour2001@gmail.com&su=Contact%20depuis%20votre%20portfolio&body=Bonjour%20Nour,%0D%0A%0D%0A",
    },
    {
      icon: Github,
      value: "GitHub",
      href: "https://github.com/noursaidane2001",
    },
    {
      icon: Linkedin,
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/nour-saidane2001/",
    },
  ];

  return (
    <section className="py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-20">
          {/* Image à droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative md:w-5/12"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#A5D6A7]/20 rounded-full blur-2xl"
            />
            <img
              src="/Photos/Me.jpg"
              alt="Nour Saidane"
              className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-[#6366F1]/40"
            />
          </motion.div>

          {/* Contenu à gauche */}
          <div className="md:w-7/12 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#A5D6A7] font-medium text-xl">
                  Bonjour, je suis
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-[#6366F1] mb-4">
                Nour SAIDANE
              </h1>
              <div className="h-1.5 w-40 bg-gradient-to-r from-[#6366F1] to-[#A5D6A7] rounded-full mb-8"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-semibold text-[#A5D6A7]"
            >
              Élève Ingénieur en Génie Logiciel
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-300 text-xl leading-relaxed"
            >
              Étudiante à l'
              <span className="text-[#6366F1] font-semibold">ISAMM</span>,
              passionnée par le développement logiciel et la conception de
              solutions innovantes. Je possède des compétences solides en
              gestion de projets et souhaite contribuer à des initiatives à
              forte valeur ajoutée.
            </motion.p>

            {/* Bouton CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-4"
            >
              <motion.a
                href="/Nour_Saidane_CV.pdf" // le fichier doit être à la racine de public
                download="Nour_Saidane_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#A5D6A7] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <Download className="w-5 h-5" />
                Télécharger CV
              </motion.a>
            </motion.div>

            {/* Contacts minimalistes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-5 pt-6"
            >
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="p-4 bg-gradient-to-br from-[#2a2f4a] to-[#1a1f3a] rounded-xl border-2 border-[#6366F1]/30 hover:border-[#6366F1] transition-all shadow-lg hover:shadow-xl">
                    <contact.icon className="w-6 h-6 text-[#6366F1] group-hover:text-[#A5D6A7] transition-colors" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-[#2a2f4a] text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap border border-[#6366F1]/30">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
