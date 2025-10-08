import React, { useState } from "react";
import { motion } from "framer-motion";
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message)
      return setStatus({ type: "error", text: "Remplis tous les champs." });

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({
          type: "success",
          text: data.message || "Message envoyé !",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          text: data.error || "Erreur lors de l’envoi.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", text: "Erreur réseau." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 py-10 px-4 ">
      {/* IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Photos/Contact.png"
          alt="Nour"
          className="w-80 md:w-[56%] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        />
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="md:w-1/2 w-full p-6 md:p-8 ">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#6366F1]"
        >
          Contactez-moi
        </motion.h1>
        <br></br>
        <br></br>
        <p className="text-xl text-white mb-4">
          N’hésitez pas à m’écrire, je vous répondrai dès que possible.
        </p>

        <div>
          <label className="block text-xl text-white mb-1">Nom</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-xl text-white mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-xl text-white mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-medium shadow-md transition ${
            loading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Envoi en cours..." : "Message envoié"}
        </button>
      </form>
    </div>
  );
}
