import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Heart,
  ExternalLink,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/noursaidane2001",
      color: "#333",
    },
    {
      icon: Linkedin,
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/nour-saidane2001/",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:saidanenour2001@gmail.com",
      color: "#6366F1",
    },
    {
      icon: Phone,
      label: "Téléphone",
      href: "tel:+21658829251",
      color: "#10B981",
    },
  ];

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Compétences", href: "#skills" },
    { name: "Expériences", href: "#experiences" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1a1f3a] to-[#0f1221] border-t border-[#6366F1]/20 overflow-hidden">
      {/* Effet de lumière en arrière-plan */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A5D6A7]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Colonne 1: À propos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#6366F1] mb-4 flex items-center gap-2">
              Nour SAIDANE
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Élève ingénieur en Génie Logiciel passionnée par le développement
              et l'innovation technologique.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Tunis, Tunisie</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Monastir, Tunisie</span>
            </div>
          </motion.div>

          {/* Colonne 2: Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-[#6366F1] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#A5D6A7] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#A5D6A7] transition-all duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3: Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#6366F1] mb-4">
              Restons connectés
            </h3>
            <p className="text-gray-300 mb-4">
              N'hésitez pas à me contacter pour toute collaboration ou
              opportunité.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="p-3 rounded-xl bg-[#2a2f4a] border-2 border-[#6366F1]/30 hover:border-[#6366F1] transition-all shadow-lg">
                    <social.icon className="w-5 h-5 text-[#6366F1] group-hover:text-[#A5D6A7] transition-colors" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-[#2a2f4a] text-white text-xs px-2 py-1 rounded border border-[#6366F1]/30 whitespace-nowrap">
                      {social.label}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Séparateur */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent mb-8"
        ></motion.div>

        {/* Bas du footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center text-center text-gray-400 text-sm"
        >
          <p>© {currentYear} Nour SAIDANE. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}
