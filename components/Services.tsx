export default function Services() {
  const services = [
    {
      title: "Diseño Gráfico",
      description: "Identidad visual corporativa, branding monocromático y diseño publicitario de alto impacto.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
      )
    },
    {
      title: "Diseño Web",
      description: "Arquitectura web impecable, UI/UX brutalista, rendimiento Lighthouse 98+ y diseño mobile-first.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      title: "Producción Audiovisual",
      description: "Videos comerciales de alta gama, integración AI (Veo 3.1, Nano Banana Pro), guiones y locución.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      )
    },
    {
      title: "Marketing Digital",
      description: "Gestión global de redes sociales, estrategias de crecimiento, conversión y posicionamiento de autoridad.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            Servicios <span className="text-gray-600 block sm:inline">Top Tier</span>
          </h2>
          <p className="max-w-xl text-gray-400 font-light text-lg">
            El ecosistema "Todo en Uno". Dominio absoluto técnico y creativo bajo una misma firma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 group overflow-hidden">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black p-12 md:p-16 hover:bg-neutral-900 transition-colors duration-500 flex flex-col items-start border border-transparent hover:border-white/20 relative"
            >
              <div className="mb-6 p-4 bg-white text-black shrink-0 relative overflow-hidden group-hover:scale-110 transition-transform duration-500 ease-out">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-white/20 transition-colors duration-500 m-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
