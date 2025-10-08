import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-12">
    

      {/* Texte + Formulaire */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact</h2>
        <p className="text-gray-600 mb-6">
          Envoie-moi un message via le formulaire ci-dessous :
        </p>
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
