import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Header({ forceScrolled = false }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolledInternal, setScrolledInternal] = useState(false);

  const goToSection = (event, href, closeMenu = false) => {
    event.preventDefault();

    if (href === "#logo") {
      const snapPage = document.querySelector(".snap-page");
      if (snapPage) {
        snapPage.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    if (closeMenu) setOpen(false);
  };

  useEffect(() => {
    if (forceScrolled) return undefined;
    const onScroll = () => setScrolledInternal(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceScrolled]);

  const scrolled = forceScrolled || scrolledInternal;

  const menu = [
    { label: t("header.menu.home"), href: "#inicio" },
    { label: t("header.menu.products"), href: "#productos" },
    { label: t("header.menu.about"), href: "#nosotros" },
    { label: t("header.menu.contact"), href: "#contacto" },
  ];

  const textBase = scrolled ? "text-gray-900" : "text-white";
  const hoverColor = scrolled ? "hover:text-green-500" : "hover:text-green-500";

  return (
    <nav
      className={[
      
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
  
        scrolled
          ? "bg-white/92 backdrop-blur-xl border-b border-white/80 shadow-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="font-bold flex items-center justify-between py-1.5">
          {/* Logo / Marca */}
          <a
            href="#logo"
            className={`${textBase} font-bold leading-none`}
            onClick={(event) => goToSection(event, "#logo")}
          >
            <img src="/images/Letras%20BD.png" 
            alt="Biodisma Logo" 
            className="mx-auto h-9 sm:h-11 md:h-11 w-auto object-contain scale-180 origin-center translate-x-6 sm:translate-x-8 md:translate-x-10"/>
          </a>

          {/* Botón hamburguesa celular */}
          <button
            className={`${textBase} sm:hidden text-2xl focus:outline-none`}
            onClick={() => setOpen(!open)}
            aria-label={t("header.openMenu")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <ul className={`hidden sm:flex items-center gap-5 ${textBase}`}>
            {menu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-base transition-colors duration-300 ${hoverColor}`}
                  onClick={(event) => goToSection(event, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú celular */}
        <div
          className={[
            "sm:hidden transition-all duration-300 overflow-hidden",
            open ? "max-h-64" : "max-h-0",
            scrolled ? "bg-white/95 border-t border-gray-200" : "",
          ].join(" ")}
        >
          <ul className={[ "flex flex-col gap-2 pb-4", scrolled ? "text-gray-900" : "text-white" ].join(" ")}>
            {menu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block px-2 py-2 rounded-lg transition-colors duration-300 ${
                    scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
                  }`}
                  onClick={(event) => goToSection(event, item.href, true)}
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
