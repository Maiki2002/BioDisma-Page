export default function Contacto() {
  const EMAIL = "ventas@bio-disma.com";
  const TELEFONO = "+52 55 5162 7766";
  const DIRECCION = "Av. Universidad 1389, Axotla, Álvaro Obregón,01030 Ciudad de México";

  const MAP_EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d936.6629230279365!2d-99.17392850264653!3d19.356423155969587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1756154204315!5m2!1ses-419!2smx";

  return (
    <section id="contacto" className="text-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Contáctanos
          </h2>
          <p className="text-gray-600 mt-3">
            Estamos para ayudarte. Escríbenos o visítanos en oficina.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Columna izquierda: datos */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Información</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-6 w-6 rounded-full bg-[#2ca6bc] text-white grid place-items-center">
                  &nbsp;✉️
                  </span>
                  <div>
                    <div className="text-sm text-gray-500">Correo electrónico</div>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium text-gray-900 hover:text-[#2ca6bc] transition"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-6 w-6 rounded-full bg-[#2ca6bc] text-white grid place-items-center">
                    &nbsp;☎️
                  </span>
                  <div>
                    <div className="text-sm text-gray-500">Teléfono de oficina</div>
                    <a
                      href={`tel:${TELEFONO.replace(/\s+/g, "")}`}
                      className="font-medium text-gray-900 hover:text-[#2ca6bc] transition"
                    >
                      {TELEFONO}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-6 w-6 rounded-full bg-[#2ca6bc] text-white grid place-items-center">
                    📍
                  </span>
                  <div>
                    <div className="text-sm text-gray-500">Dirección</div>
                    <p className="font-medium text-gray-900">{DIRECCION}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        DIRECCION
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#2ca6bc] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* (Opcional) pequeño aviso o CTA */}
            <div className="text-sm text-gray-500">
              Horario de oficina: Lunes a Viernes, 8:00–20:00 (CDMX).
            </div>
          </div>

          {/* Columna derecha: mapa */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            <div className="aspect-[4/3] md:aspect-[16/9]">
              <iframe
                title="Ubicación de la oficina"
                src={MAP_EMBED_SRC}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}