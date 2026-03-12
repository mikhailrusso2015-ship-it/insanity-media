import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-gray-500">
              Liderazgo & Visión Global
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              Mikhail Russo
              <span className="block text-gray-400 text-3xl md:text-5xl mt-2">C.E.O.</span>
            </h3>
            
            <div className="space-y-6 text-lg text-gray-800 font-light leading-relaxed max-w-xl">
              <p>
                Perfil multidisciplinario y trilingüe. Combina habilidades técnicas y creativas que abarcan diseño gráfico, desarrollo web, y gestión estratégica de redes sociales.
              </p>
              <p>
                Productor audiovisual integral con ventaja tecnológica absoluta. Dominamos motores de IA generativa de vanguardia (Veo 3.1, Nano Banana Pro) para la creación de contenido dinámico.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-black/10">
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Presencia Operativa Global
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Venezuela", "Colombia", "Brasil", "Perú", "Chile", "Ecuador", "Costa Rica", "Panamá", "EE.UU.", "Italia", "Turquía", "España"].map((country) => (
                  <span 
                    key={country}
                    className="px-4 py-2 border border-black/20 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract Image / Data Vis */}
          <div className="lg:w-1/2 order-1 lg:order-2 w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-neutral-100 flex items-center justify-center relative">
               <div className="absolute inset-4 border-2 border-black/5 flex items-center justify-center overflow-hidden group">
                  <div className="w-3/4 h-3/4 bg-black flex items-center justify-center text-white text-9xl font-black tracking-tighter transition-transform duration-700 group-hover:scale-95">
                     IM
                  </div>
                  {/* Decorative crosshairs */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5"></div>
                  <div className="absolute left-1/2 top-0 w-[1px] h-full bg-black/5"></div>
               </div>
          </div>

        </div>
      </div>
    </section>
  );
}
