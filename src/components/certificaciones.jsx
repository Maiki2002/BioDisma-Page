import { useTranslation } from "react-i18next";

export default function Certificaciones({ compact = false }) {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-gray-900">
      <div
        className={[
          "max-w-6xl mx-auto px-6 text-center",
          compact ? "py-3 md:py-4" : "",
        ].join(" ")}
      >
        {/* Título */}
        <h1 className={compact ? "text-3xl md:text-4xl font-bold mb-2" : "text-5xl font-bold mb-5"}>
          {t("certificaciones.title")}
        </h1>
        <p className={compact ? "leading-relaxed mb-4 text-sm md:text-base" : "leading-relaxed mb-10"}>
          {t("certificaciones.subtitle")}
        </p>

        {/* Grid de 4 imágenes */}
        <div
          className={[
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center",
            compact ? "gap-4 md:gap-6 mb-0" : "gap-8 mb-30",
          ].join(" ")}
        >
          <img
            src="/images/Cofepris-Logo.png"
            alt={t("certificaciones.alts.0")}
            className={[
              "w-full object-contain transition duration-100",
              compact ? "h-14 md:h-16 hover:scale-110" : "h-24 hover:scale-130",
            ].join(" ")}
          />
          <img
            src="/images/fda-logo.png"
            alt={t("certificaciones.alts.1")}
            className={[
              "w-full object-contain transition duration-100",
              compact ? "h-14 md:h-16 hover:scale-110" : "h-24 hover:scale-130",
            ].join(" ")}
          />
          <img
            src="/images/ISO-Logo.png"
            alt={t("certificaciones.alts.2")}
            className={[
              "w-full object-contain transition duration-100",
              compact ? "h-14 md:h-16 hover:scale-110" : "h-24 hover:scale-130",
            ].join(" ")}
          />
          <img
            src="/images/CE-logo.svg"
            alt={t("certificaciones.alts.3")}
            className={[
              "w-full object-contain transition duration-100",
              compact ? "h-14 md:h-16 hover:scale-110" : "h-24 hover:scale-130",
            ].join(" ")}
          />
        </div>
      </div>
    </section>
  );
}
