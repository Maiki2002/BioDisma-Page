import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  const textBase = scrolled ? "text-gray-900" : "text-white";
  const hoverColor = scrolled ? "hover:text-green-500" : "hover:text-green-500";

  return (
    <nav
      className={[
      
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
  
        scrolled
          ? "bg-white/60 backdrop-blur-xl border-b border-white/50 shadow-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="font-bold flex items-center justify-between py-4">
          {/* Logo / Marca */}
          <a href="#logo" className={`${textBase} text-2xl font-bold`}>
            <img src="/images/logoBD.png" 
            alt="Biodisma Logo" 
            className="mx-auto w-30 sm:w-140 md:w-40 object-contain"/>
          </a>

          {/* Botón hamburguesa celular */}
          <button
            className={`${textBase} sm:hidden text-3xl focus:outline-none`}
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Menú desktop */}
          <ul className={`hidden sm:flex items-center gap-8 ${textBase}`}>
            {menu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-lg transition-colors duration-300 ${hoverColor}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú celular */}
        <div className={`sm:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-64" : "max-h-0"}`}>
          <ul className={[ "flex flex-col gap-2 pb-4", scrolled ? "text-gray-900" : "text-white" ].join(" ")}>
            {menu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block px-2 py-2 rounded-lg transition-colors duration-300 ${
                    scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;