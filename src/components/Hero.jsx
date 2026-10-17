import React from "react";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";

const contacts = [
  { icon: Phone, value: "+33 6 10 23 79 33", href: "tel:+33610237933" },
  { icon: Mail, value: "saidanenour2001@gmail.com", href: "mailto:saidanenour2001@gmail.com" },
  { icon: Github, value: "GitHub", href: "https://github.com/noursaidane2001" },
  { icon: Linkedin, value: "LinkedIn", href: "https://linkedin.com/in/nour-saidane2001/" },
];

export default function Hero() {
  return (
    <section className="py-12 md:py-16 min-h-0 flex items-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="relative md:w-5/12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#A5D6A7]/20 rounded-full blur-2xl" />
            <img src="/Nour.jpg" alt="Portrait de Nour Saidane" className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-[#6366F1]/40" />
          </div>
          <div className="md:w-7/12 space-y-7">
            <div>
              <span className="text-[#A5D6A7] font-medium text-xl">Bonjour, je suis</span>
              <h1 className="text-5xl md:text-7xl font-bold text-[#6366F1] mt-3 mb-4">Nour SAIDANE</h1>
              <div className="h-1.5 w-40 bg-gradient-to-r from-[#6366F1] to-[#A5D6A7] rounded-full" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#A5D6A7]">Étudiante en Master Génie de l’Informatique Logicielle</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Étudiante en Master Informatique à l’Université de Rouen Normandie et diplômée d’un cycle ingénieur en Génie logiciel, je m’intéresse à l’architecture logicielle, au développement Full-Stack, à la CI/CD et à la qualité logicielle. Mes expériences m’ont appris à privilégier des applications maintenables et le travail en équipe Agile. Je recherche un stage de fin d’études de six mois à partir du 1er avril 2027 pour contribuer à des projets d’ingénierie logicielle.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/Nour_Saidane_CV.pdf" download="Nour_Saidane_CV.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#A5D6A7] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                <Download className="w-5 h-5" /> Télécharger mon CV
              </a>
              <a href="mailto:saidanenour2001@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#A5D6A7]/50 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">Me contacter</a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {contacts.map((contact) => {
                const ContactIcon = contact.icon;
                return (
                  <a key={contact.value} href={contact.href} aria-label={contact.value} title={contact.value} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined} className="p-3 bg-[#2a2f4a] rounded-xl border border-[#6366F1]/30 hover:border-[#6366F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                    <ContactIcon aria-hidden="true" className="w-5 h-5 text-[#A5D6A7]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
