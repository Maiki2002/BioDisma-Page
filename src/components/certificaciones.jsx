export default function Certificaciones() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-5xl font-bold mb-5">Certificaciones y Registros</h1>
        <p className="leading-relaxed mb-10">
          Garantía de calidad avalada por los más altos estándares internacionales.
        </p>

        {/* Grid de 4 imágenes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center mb-30">
          <img
            src="/images/Cofepris-Logo.png"
            alt="Certificación 1"
            className="w-full h-24 object-contain hover:scale-130 transition duration-100"
          />
          <img
            src="/images/fda-logo.png"
            alt="Certificación 2"
            className="w-full h-24 object-contain hover:scale-130 transition duration-100"
          />
          <img
            src="/images/ISO-Logo.png"
            alt="Certificación 3"
            className="w-full h-24 object-contain hover:scale-130 transition duration-100"
          />
          <img
            src="/images/CE-logo.svg"
            alt="Certificación 4"
            className="w-full h-24 object-contain hover:scale-130 transition duration-100"
          />
        </div>
      </div>
    </section>
  );
}
