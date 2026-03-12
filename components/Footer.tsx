import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-10 border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          
          {/* Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 max-w-md">
                Eleva tu <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Marca</span>
              </h2>
              <p className="text-gray-400 font-light text-xl max-w-sm mb-12">
                Ponte en contacto para discutir tu próximo proyecto y obtener un presupuesto competitivo.
              </p>
            </div>
            
            <div className="space-y-6">
              <a 
                href="mailto:contactoim21@gmail.com" 
                className="block text-2xl font-bold uppercase tracking-wider hover:text-gray-400 transition-colors"
              >
                contactoim21@gmail.com
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/insanitymediaof?igsh=ZHo3ZmI0dGEyajJp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://wa.me/message/DZCWL5LRFTQRE1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                     <path fillRule="evenodd" d="M12.015 2C6.486 2 2 6.486 2 12.015c0 1.758.455 3.442 1.32 4.93L2 22l5.244-1.28c1.439.816 3.067 1.246 4.771 1.246C17.544 21.966 22 17.48 22 11.951 22 6.422 17.544 2 12.015 2zm5.722 14.156c-.244.686-1.407 1.306-1.956 1.353-.518.043-1.18-.086-3.899-1.201-3.284-1.348-5.385-4.697-5.548-4.914-.16-.216-1.322-1.751-1.322-3.344 0-1.594.825-2.38 1.123-2.695.295-.316.643-.396.856-.396.216 0 .432.001.62.01.216.01.503-.083.787.604.286.685.95 2.32 1.034 2.489.083.17.14.368.032.585-.107.215-.16.352-.32.536-.16.183-.338.411-.482.559-.16.158-.33.33-.146.645.184.315.82 1.352 1.763 2.193 1.218 1.087 2.222 1.419 2.538 1.571.316.15.502.13.69-.086.19-.215.825-.961 1.045-1.29.215-.331.43-.275.727-.162.296.11 1.868.88 2.19.104.321-.106.321-.497.266-.759-.053-.261-.243-.686-.487-1.371z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <ContactForm />
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium tracking-widest uppercase border-t border-white/10 pt-8 mt-12">
          <span>&copy; {new Date().getFullYear()} Insanity Media. Todos los derechos reservados.</span>
          <span className="mt-4 md:mt-0">Diseñado con <span className="text-white">Next.js & Tailwind</span></span>
        </div>
      </div>
    </footer>
  );
}
