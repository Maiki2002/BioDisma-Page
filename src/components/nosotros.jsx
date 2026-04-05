import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const COMPANY_PILLARS = [
  { id: "mision" },
  { id: "vision" },
];

const GALLERY_IMAGES = [
  { src: "/images/nosotros.jpg", alt: "Equipo en evento" },
  { src: "/images/nosotros1.jpeg", alt: "Colaboración con hospitales" },
  { src: "/images/nosotros2.jpeg", alt: "Trabajo especializado en salud" },
];

const INFO_CARD = "rounded-2xl border border-gray-200/80 bg-white/95 p-6 shadow-lg shadow-black/5 backdrop-blur-sm";
const CHAT_CARD = "relative w-full rounded-2xl border border-white/40 bg-white/92 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm";
const HEADER_OFFSET = "4.5rem";
const SLIDE_MS = 4200;

export default function Nosotros() {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);
  const [activePillarId, setActivePillarId] = useState(null);
  const activePillar = activePillarId
    ? {
        id: activePillarId,
        title: t(`nosotros.pillars.${activePillarId}.title`),
        text: t(`nosotros.pillars.${activePillarId}.text`),
      }
    : null;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, SLIDE_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="nosotros"
      className="relative min-h-[100dvh] lg:h-[100dvh] overflow-hidden bg-slate-100 text-gray-900 flex items-center"
    >
      <div
        className="pointer-events-none absolute inset-0 lg:hidden bg-cover bg-center transition-[background-image] duration-700"
        style={{ backgroundImage: `url(${GALLERY_IMAGES[activeImage].src})` }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute left-0 top-0 hidden h-[100dvh] w-1/2 overflow-hidden lg:block" aria-hidden="true">
        {GALLERY_IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={[
              "absolute inset-0 bg-cover bg-center scale-105 transition-opacity duration-700",
              index === activeImage ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
      </div>

      {activePillar && (
        <>
          <div className="absolute inset-x-4 bottom-6 z-20 lg:hidden">
            <article className={CHAT_CARD} aria-label={t("nosotros.chat.aria", { title: activePillar.title })}>
              <button
                type="button"
                onClick={() => setActivePillarId(null)}
                className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-[#66E80F] text-black hover:bg-[#58cc0c]"
                aria-label={t("nosotros.chat.close")}
              >
                x
              </button>
              <div className="flex items-center gap-2 mb-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#66E80F] text-white text-xs font-bold">BD</span>
                <p className="text-sm font-semibold text-gray-700">{t("nosotros.chat.sender")}</p>
              </div>
              <div className="rounded-2xl bg-gray-100 px-4 py-3">
                <p className="text-sm font-semibold text-[#58cc0c] mb-1">{activePillar.title}</p>
                <p className="leading-relaxed text-gray-700">{activePillar.text}</p>
              </div>
            </article>
          </div>

          <div className="absolute left-0 top-0 z-20 hidden h-[100dvh] w-1/2 items-center justify-center px-8 lg:flex">
            <article className={`${CHAT_CARD} max-w-md`} aria-label={t("nosotros.chat.aria", { title: activePillar.title })}>
              <button
                type="button"
                onClick={() => setActivePillarId(null)}
                className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-[#ffffff] text-black hover:bg-[#58cc0c]"
                aria-label={t("nosotros.chat.close")}
              >
                x
              </button>
              <div className="flex items-center gap-2 mb-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#000000] text-white text-xs font-bold">BD</span>
                <p className="text-sm font-semibold text-gray-700">{t("nosotros.chat.sender")}</p>
              </div>
              <div className="rounded-2xl bg-gray-100 px-4 py-3">
                <p className="text-sm font-semibold text-[#58cc0c] mb-1">{activePillar.title}</p>
                <p className="leading-relaxed text-gray-700">{activePillar.text}</p>
              </div>
            </article>
          </div>
        </>
      )}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center pt-20 pb-10 lg:py-0"
          style={{ minHeight: `calc(100dvh - ${HEADER_OFFSET})` }}
        >
          <div className="hidden lg:block" aria-hidden="true" />

          <div className="w-full lg:max-w-[620px] lg:mx-auto">
            <header className="mb-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("nosotros.title")}</h1>
              <p className="leading-relaxed text-gray-700">
                {t("nosotros.intro")}
              </p>
            </header>

            <section className="mb-4" aria-label={`${t("nosotros.pillars.mision.title")} / ${t("nosotros.pillars.vision.title")}`}>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {COMPANY_PILLARS.map((pillar) => (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarId((prev) => (prev === pillar.id ? null : pillar.id))}
                    className={[
                      "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 border",
                      activePillarId === pillar.id
                        ? "bg-[#66E80F] text-black border-[#66E80F] shadow-md"
                        : "bg-white/95 text-gray-700 border-gray-300 hover:border-[#66E80F] hover:text-[#66E80F] hover:bg-[#66E80F]/10",
                    ].join(" ")}
                    aria-pressed={activePillarId === pillar.id}
                  >
                    {t(`nosotros.pillars.${pillar.id}.title`)}
                  </button>
                ))}
              </div>
            </section>

            <article className={`${INFO_CARD} bg-[#2ca6bc] text-black border-[#2ca6bc]`} aria-label={t("nosotros.philosophy.title")}>
              <h2 className="text-2xl font-extrabold mb-2">{t("nosotros.philosophy.title")}</h2>
              <p className="leading-relaxed">“{t("nosotros.philosophy.quote")}”</p>
              <p className="mt-5 font-semibold">{t("nosotros.philosophy.author")}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
