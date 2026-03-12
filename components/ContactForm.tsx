"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-neutral-900 border border-white/10 p-8 md:p-12 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-8">
          Iniciar Proyecto
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group relative z-0 w-full mb-6">
            <input type="text" name="name" id="name" className="block py-3 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors" placeholder=" " required />
            <label htmlFor="name" className="pb-3 absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 uppercase tracking-widest font-bold">Nombre Completo</label>
          </div>
          
          <div className="group relative z-0 w-full mb-6">
            <input type="email" name="email" id="email" className="block py-3 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors" placeholder=" " required />
            <label htmlFor="email" className="pb-3 absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 uppercase tracking-widest font-bold">Correo Electrónico</label>
          </div>

          <div className="group relative z-0 w-full mb-6">
            <input type="text" name="service" id="service" className="block py-3 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors" placeholder=" " required />
            <label htmlFor="service" className="pb-3 absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 uppercase tracking-widest font-bold">Servicio de Interés</label>
          </div>

          <div className="group relative z-0 w-full mb-6">
            <textarea name="message" id="message" rows={4} className="block py-3 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors resize-none" placeholder=" " required></textarea>
            <label htmlFor="message" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-10 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-10 uppercase tracking-widest font-bold">Cuéntanos sobre tu proyecto</label>
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
          >
            {status === "idle" && "Enviar Solicitud"}
            {status === "loading" && "Procesando..."}
            {status === "success" && "¡Mensaje Enviado!"}
            {status === "error" && "Error. Intenta de nuevo."}
          </button>
        </form>
      </div>
    </div>
  );
}
