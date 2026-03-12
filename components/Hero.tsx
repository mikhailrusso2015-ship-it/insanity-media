import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-black">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9] flex flex-col">
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>Estándar de</span>
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>Calidad <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Premium</span></span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 mb-10 font-light tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          a un costo estructurado y accesible.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <a
            href="https://wa.me/message/DZCWL5LRFTQRE1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-200 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative flex items-center gap-2">
              Iniciar Proyecto
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
          
          <Link 
            href="#portafolio" 
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white hover:bg-white/5 transition-colors duration-300 uppercase tracking-widest text-sm font-semibold"
          >
            Ver Trabajo
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </div>
    </section>
  );
}
