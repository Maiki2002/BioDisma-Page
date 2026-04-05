import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/header.jsx";
import Inicio from "./components/inicio.jsx";
import ParallaxVideo from "./components/parallaxvideo.jsx";
import Certificaciones from "./components/certificaciones.jsx";
import Productos from "./components/productos.jsx";
import ProductosPage from "./pages/ProductosPage.jsx";
import Nosotros from "./components/nosotros.jsx";
import Clientes from "./components/clientes.jsx";
import Contacto from "./components/contacto.jsx";
import Footer from "./components/footer.jsx"
import ChatbotWidget from "./components/chatbotwidget.jsx";

function Home() {
  const { t, i18n } = useTranslation();
  const snapRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || "es").split("-")[0];

  const goToNosotros = () => {
    const el = snapRef.current;
    if (!el) return;

    const target = el.querySelector("#inicio");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const el = snapRef.current;
    if (!el) return undefined;

    const onScroll = () => {
      const threshold = el.clientHeight * 0.9;
      setShowHeader(el.scrollTop >= threshold);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || i18n.language || "es";
  }, [i18n.language, i18n.resolvedLanguage]);

  return (
    <div ref={snapRef} className="App relative snap-page">

      <ParallaxVideo />

      {/* Header fijo */}
      <div
        className={[
          "fixed top-0 left-0 w-full z-50 transform-gpu transition-all duration-300",
          showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <Header forceScrolled />
      </div>

      <div className="absolute inset-x-0 top-0 h-[100svh] md:h-screen z-30 flex items-center justify-center md:justify-start px-5 sm:px-8 md:px-16 pointer-events-none">
        <div className="w-full max-w-3xl text-white text-center md:text-left">
          <div className="mx-auto md:mx-0 max-w-[22rem] sm:max-w-xl">
            <img src="/images/Logo completo BD.png"
            alt="Biodisma Logo" 
            className="mx-auto md:mx-0 w-[15.5rem] sm:w-[22rem] md:w-[29rem] lg:w-[32rem] object-contain" />
            <span className="lead block mt-1 max-w-xl mx-auto md:mx-0 text-[1rem] sm:text-[1.12rem] md:text-[1.3rem]">
              {t("hero.description")}
            </span>
          </div>
        </div>
      </div>

      <div
        className={[
          "absolute top-4 right-4 sm:top-5 sm:right-8 md:right-12 z-40 transition-all duration-300",
          showHeader ? "opacity-0 pointer-events-none -translate-y-2" : "opacity-100 translate-y-0",
        ].join(" ")}
      >
        <label className="sr-only" htmlFor="hero-language">
          {t("header.languageLabel")}
        </label>
        <select
          id="hero-language"
          value={currentLanguage}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
          aria-label={t("header.languageLabel")}
          className="rounded-md border border-white/60 bg-black/25 text-white text-xs sm:text-sm font-semibold px-2.5 py-1.5 backdrop-blur-sm"
        >
          <option value="es" className="text-black">{t("header.languages.es")}</option>
          <option value="en" className="text-black">{t("header.languages.en")}</option>
          <option value="de" className="text-black">{t("header.languages.de")}</option>
          <option value="zh" className="text-black">{t("header.languages.zh")}</option>
        </select>
      </div>

      <div
        className={[
          "absolute inset-x-0 bottom-6 z-40 flex justify-center md:inset-x-auto md:right-4 md:bottom-auto md:top-[50dvh] md:-translate-y-1/2",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={goToNosotros}
          className={[
            "hero-scroll-cue transition-all duration-300",
            showHeader ? "opacity-0 pointer-events-none md:translate-x-4" : "opacity-100 md:translate-x-0",
          ].join(" ")}
          aria-label={t("hero.goToAbout")}
        >
          <span className="hero-scroll-cue__text">{t("hero.explore")}</span>
          <span className="hero-scroll-cue__line" aria-hidden="true" />
          <span className="hero-scroll-cue__circle" aria-hidden="true">
            <span className="hero-scroll-cue__arrow" />
          </span>
        </button>
      </div>

      {/* Scroll */}
      <section className="snap-block snap-block--hero h-screen" aria-hidden="true" />

      {/* Contenido principal */}
      <main className="relative z-40 bg-white">
        <div className="snap-block bg-white">
          <div className="min-h-[100dvh] pt-[4.5rem]">
            <div className="mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-7xl flex-col justify-center gap-4 md:gap-5">
              <Inicio compact />
              <Certificaciones compact />
            </div>
          </div>
        </div>
        <div className="snap-block bg-[#2ca6bc]">
          <Productos />
        </div>
        <div className="snap-block">
          <Nosotros />
        </div>
        <div className="snap-block">
          <Clientes/>
        </div>
        <div className="snap-block">
          <Contacto/>
        </div>
        <div className="snap-block">
          <Footer/>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Página dedicada de productos */}
        <Route path="/productos" element={<ProductosPage />} />
      </Routes>
      <ChatbotWidget />
    </Router>

  );
}

export default App;
