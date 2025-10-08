// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import ProjectsPage from "./Projects";
import ContactForm from "../components/ContactForm";
import Education from "./Education";
import Experiences from "./Experiences";
import Langues from "./Langues";
import SkillsSection from "./SkillsSection";
import Certifications from "./Certifications";

export default function Home() {
  return (
    <div>
      <section id="home" className="mt-8">
        <Hero />
      </section>
      <section id="projets" className="mt-8">
        <ProjectsPage />
      </section>
      <section id="skills" className="mt-8">
        <SkillsSection />
      </section>
      <section id="formation" className="mt-8">
        <Education />
      </section>
      <section id="langues" className="mt-8">
        <Langues />
      </section>
      <section id="experiences-professionnelles" className="mt-8">
        <Experiences />
      </section>
      <section id="certifications" className="mt-8">
        <Certifications />
      </section>
      <section id="contact" className="mt-8">
        <ContactForm />
      </section>
    </div>
  );
}
