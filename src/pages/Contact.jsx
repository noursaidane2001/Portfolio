import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Envoi-moi un message via le formulaire :</p>
      <div className="mt-6 max-w-xl">
        <ContactForm />
      </div>
    </section>
  );
}
