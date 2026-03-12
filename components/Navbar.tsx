import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="relative w-12 h-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
             <Image
                src="/logo.jpg"
                alt="Insanity Media Logo"
                fill
                className="object-contain"
                priority
             />
           </div>
           <span className="font-bold text-xl tracking-wider uppercase text-white hidden sm:block">
             Insanity Media
           </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#portafolio">Portafolio</NavLink>
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/message/DZCWL5LRFTQRE1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium uppercase tracking-wide"
          >
            Contactar
          </a>
          
          <button className="md:hidden text-white p-2" aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm text-gray-300 hover:text-white transition-colors duration-300 uppercase tracking-widest relative group"
    >
      {children}
      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
