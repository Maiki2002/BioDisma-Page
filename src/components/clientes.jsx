import { useTranslation } from "react-i18next";

const CLIENT_LOGOS = [
  { src: "/images/clientes/SanAngel-logo.png", alt: "Hospital San Ángel Inn" },
  { src: "/images/clientes/GrupoAngeles-logo.png", alt: "Grupo Ángeles" },
  { src: "/images/clientes/ABC-logo.png", alt: "Centro Médico ABC" },
  { src: "/images/clientes/StarMedica-logo.png", alt: "Star Médica" },
  { src: "/images/clientes/Medicasur-logo.png", alt: "Médica Sur" },
];

export default function Clientes() {
  const { t } = useTranslation();

  return (
    <section id="clientes" className="relative min-h-[100dvh] text-black flex items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-cover bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: "url('/images/Nosotros-fondo.jpg')" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-white/45" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold mb-5">{t("clientes.title")}</h1>
          <p className="leading-relaxed text-black">
            {t("clientes.description")}
          </p>
        </header>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {CLIENT_LOGOS.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center p-2">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-28 md:h-32 object-contain transition-transform duration-200 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
