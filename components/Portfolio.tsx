import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Desarrollo Corporativo",
      category: "Diseño Web",
      imageUrl: "/logo.jpg", // Using logo as placeholder for demo
      colSpan: "col-span-1 md:col-span-2 text-white",
      aspectRatio: "aspect-[2/1]",
      theme: "bg-neutral-900 border-white/10"
    },
    {
      id: 2,
      title: "Campaña Veo 3.1",
      category: "Producción AI",
      imageUrl: "/logo.jpg",
      colSpan: "col-span-1 border-white/10 text-white",
      aspectRatio: "aspect-square",
      theme: "bg-black"
    },
    {
      id: 3,
      title: "Rebranding Minimalista",
      category: "Identidad Visual",
      imageUrl: "/logo.jpg",
      colSpan: "col-span-1 border-black/10 text-black",
      aspectRatio: "aspect-square",
      theme: "bg-white"
    },
    {
      id: 4,
      title: "Spot Publicitario 30s",
      category: "Audiovisual",
      imageUrl: "/logo.jpg",
      colSpan: "col-span-1 md:col-span-2 text-white",
      aspectRatio: "aspect-[2/1]",
      theme: "bg-neutral-900 border-white/10"
    }
  ];

  return (
    <section id="portafolio" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
              Showcase
            </h2>
            <p className="max-w-xl text-gray-400 font-light text-lg">
              Una selección de proyectos donde la estética brutalista y el rendimiento técnico se encuentran.
            </p>
          </div>
          <a
            href="https://www.instagram.com/insanitymediaof?igsh=ZHo3ZmI0dGEyajJp"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm"
          >
            Ver en Instagram
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden flex flex-col justify-end p-8 border ${project.colSpan} ${project.aspectRatio} ${project.theme} cursor-crosshair`}
            >
               {/* Abstract background elements based on logo to avoid actual generic placeholders */}
               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 flex items-center justify-center">
                  <Image 
                     src={project.imageUrl}
                     alt={project.title}
                     fill
                     className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale brightness-50"
                  />
               </div>
               
               <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                 <span className="text-xs font-bold tracking-[0.2em] uppercase mb-2 block opacity-70">
                   {project.category}
                 </span>
                 <h3 className="text-2xl font-bold uppercase tracking-wide">
                   {project.title}
                 </h3>
               </div>
               
               <div className="absolute top-8 right-8 w-10 h-10 border border-current rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -rotate-45 group-hover:rotate-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
