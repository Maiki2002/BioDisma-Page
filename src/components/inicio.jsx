import { useTranslation } from "react-i18next";

export default function Inicio({ compact = false }) {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="bg-white text-gray-950">
      <div
        className={[
          "max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center",
          compact ? "-mt-4 md:-mt-6 pt-0 pb-4 md:pb-5 gap-5 md:gap-6" : "py-30 gap-8",
        ].join(" ")}
      >
        <div>
          <h1 className={compact ? "text-3xl md:text-4xl font-bold mb-2" : "text-5xl font-bold mb-4"}>
            {t("inicio.title")}
          </h1>
          <p className={compact ? "leading-relaxed text-sm md:text-base" : "leading-relaxed py-10"}>
            {t("inicio.description")}
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/inicio.jpeg"
            alt={t("inicio.imageAlt")}
            className={[
              "rounded-2xl shadow-lg object-cover",
              compact ? "max-h-[160px] md:max-h-[220px]" : "max-h-[350px]",
            ].join(" ")}
          />
        </div>
      </div>
    </section>
  );
}
