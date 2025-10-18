import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Auto-hide success message after 10 seconds
  useEffect(() => {
    if (status?.type === "success") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 10000); // 10 secondes

      return () => clearTimeout(timer);
    }
  }, [status]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    // Validation
    if (!form.name || !form.email || !form.message) {
      return setStatus({
        type: "error",
        text: "Veuillez remplir tous les champs.",
      });
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xdkwjnok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: `Nouveau message de ${form.name} - Portfolio`,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          text: "✅ Message envoyé avec succès ! Je vous répondrai bientôt.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erreur d'envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus({
        type: "error",
        text: "❌ Erreur lors de l'envoi. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-10 py-10 px-4 max-w-7xl mx-auto">
      {/* IMAGE */}
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-end items-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/Photos/Contact.png"
          alt="Nour SAIDANE"
          className="w-80 md:w-[65%] lg:w-[70%] rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(99,102,241,0.3)] transition-all duration-300 transform hover:scale-105"
        />
      </motion.div>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        className="md:w-1/2 w-full p-6 md:p-8"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-6"
        >
          Contactez-moi
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          N'hésitez pas à m'écrire, je vous répondrai dès que possible.
        </p>

        {/* Input Nom */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg text-white mb-2 font-medium"
          >
            Nom <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Entrez votre nom"
            className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/50 transition-all duration-300"
            required
          />
        </div>

        {/* Input Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg text-white mb-2 font-medium"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="votre.email@example.com"
            className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/50 transition-all duration-300"
            required
          />
        </div>

        {/* Textarea Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg text-white mb-2 font-medium"
          >
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Votre message..."
            className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-xl px-4 py-3 h-36 resize-none text-white placeholder-gray-500 focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/50 transition-all duration-300"
            required
          ></textarea>
        </div>

        {/* Status Message with Animation */}
        <AnimatePresence mode="wait">
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`mb-6 p-4 rounded-xl font-medium shadow-lg ${
                status.type === "success"
                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-2 border-green-500/50"
                  : "bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-300 border-2 border-red-500/50"
              }`}
            >
              <div className="flex items-center gap-2">
                {status.type === "success" ? (
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span>{status.text}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={
            !loading
              ? {
                  scale: 1.02,
                  boxShadow: "0 10px 40px rgba(99, 102, 241, 0.4)",
                }
              : {}
          }
          whileTap={!loading ? { scale: 0.98 } : {}}
          className={`w-full py-4 rounded-xl text-white font-semibold text-lg shadow-xl transition-all duration-300 ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5558E3] hover:to-[#7C3AED]"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Envoi en cours...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Envoyer le message
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          )}
        </motion.button>
      </motion.form>
    </div>
  );
}
