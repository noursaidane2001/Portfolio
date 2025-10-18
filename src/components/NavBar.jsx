// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Accueil");

  const links = [
    { name: "Accueil", id: "home" },
    { name: "Projets", id: "projets" },
    { name: "Compétances", id: "skills" },
    { name: "Formation", id: "formation" },
    { name: "Langues", id: "langues" },
    { name: "Experiences-Pro", id: "experiences-professionnelles" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  // ✅ Détecter le scroll pour le style du navbar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Changer le lien actif + l’URL en scrollant
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 4;

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveLink(link.name);

            // ✅ Mettre à jour l'URL sans recharger la page
            const newHash = `/#${link.id}`;
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, "", newHash);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // ✅ Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // ✅ Défilement fluide (smooth scroll)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/#home"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setActiveLink("Accueil")}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#6366F1] blur-xl opacity-40 rounded-full scale-110 group-hover:opacity-60 transition-opacity"></div>
            <motion.img
              src="/Photos/Me.jpg"
              alt="Logo"
              className="relative w-12 h-12 rounded-full border-2 border-[#6366F1] object-cover shadow-lg z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
            Nour SAIDANE
          </span>
        </motion.a>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-2 text-lg relative">
          {links.map((link) => (
            <motion.div
              key={link.id}
              className="relative"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`/#${link.id}`}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative z-10 ${
                  activeLink === link.name
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </a>

              {activeLink === link.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg shadow-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Hamburger menu */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-all"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          aria-label="menu"
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              animate={{
                d: open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16",
              }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </motion.button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ top: "72px" }}
            />
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800/50 shadow-2xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-6 flex flex-col gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`/#${link.id}`}
                      onClick={() => {
                        setOpen(false);
                        setActiveLink(link.name);
                      }}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeLink === link.name
                          ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold shadow-lg"
                          : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
