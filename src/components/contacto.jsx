import { useTranslation } from "react-i18next";

export default function Contacto() {
  const { t } = useTranslation();
  const EMAIL = "ventas@bio-disma.com";
  const TELEFONO = "+52 55 5162 7766";
  const DIRECCION = "Av. Universidad 1393, Axotla, Álvaro Obregón, 01030 Ciudad de México, CDMX";
  const HEADER_OFFSET = "4.5rem";

  const MAP_EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.3644899550695!2d-99.17367216662016!3d19.356348181028984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffec73640001%3A0x3439c89789855635!2sAv.%20Universidad%201393%2C%20Axotla%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001030%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1756350394315!5m2!1ses!2smx";

  const CONTACT_CHANNELS = [
    {
      id: "correo",
      label: t("contacto.labels.email"),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      action: t("contacto.actions.email"),
      icon: "✉",
    },
    {
      id: "telefono",
      label: t("contacto.labels.phone"),
      value: TELEFONO,
      href: `tel:${TELEFONO.replace(/\s+/g, "")}`,
      action: t("contacto.actions.phone"),
      icon: "☎",
    },
    {
      id: "direccion",
      label: t("contacto.labels.address"),
      value: DIRECCION,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`,
      action: t("contacto.actions.address"),
      icon: "📍",
    },
  ];

  return (
    <section id="contacto" className="scroll-mt-24 min-h-[100dvh] bg-white text-gray-900 flex items-center">
      <div
        className="w-full max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-8 md:pb-10"
        style={{ minHeight: `calc(100dvh - ${HEADER_OFFSET})` }}
      >
        <header className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t("contacto.title")}</h2>
          <p className="text-gray-600 mt-3">{t("contacto.subtitle")}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">
          <article className="lg:col-span-3 rounded-3xl overflow-hidden border border-white bg-white">
            <div className="border-b border-[#58cc0c]/20 px-5 py-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{t("contacto.mapTitle")}</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#47b005] hover:underline"
              >
                {t("contacto.route")}
              </a>
            </div>
            <div className="h-[260px] md:h-[320px]">
              <iframe
                title={t("contacto.mapIframeTitle")}
                src={MAP_EMBED_SRC}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </article>

          <aside className="lg:col-span-2 rounded-3xl border border-white bg-white p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t("contacto.infoTitle")}</h3>
            <div className="space-y-2.5">
              {CONTACT_CHANNELS.map((channel) => (
                <div key={channel.id} className="rounded-2xl border border-gray-200 px-3 py-2.5 bg-gray-50/60">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-base leading-none text-[#47b005]">
                      {channel.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{channel.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-gray-900 leading-relaxed">{channel.value}</p>
                      <a
                        href={channel.href}
                        target={channel.id === "direccion" ? "_blank" : undefined}
                        rel={channel.id === "direccion" ? "noopener noreferrer" : undefined}
                        className="mt-1 inline-block text-sm font-semibold text-[#47b005] hover:underline"
                      >
                        {channel.action}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-sm text-gray-600">{t("contacto.schedule")}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
