export default function Clientes() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-5xl font-bold mb-5">Nuestros clientes</h1>
        <p className="leading-relaxed mb-10">
          La confianza de nuestros clientes es nuestro mayor respaldo.
        </p>

        {/* Grid de 4 imágenes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center mb-30">
          <img
            src="/images/clientes/SanAngel-logo.png"
            alt="Cliente 1"
            className="w-full h-24 object-contain hover:scale-130 transition duration-100"
          />
          <img
            src="/images/clientes/GrupoAngeles-logo.svg"
            alt="Cliente 2"
            className="w-full h-24 object-contain hover:scale-130 transition duration-100"
          />
          <img
            src="/images/clientes/ABC-logo.webp"
            alt="Cliente 3"
            className="w-full h-24 object-contain hover:scale-130 transition duration-100"
          />
          <img
            src="/images/clientes/StarMedica-logo.png"
            alt="Cliente 4"
            className="w-full h-24 object-contain hover:scale-130 transition duration-100"
          />
        </div>
      </div>
    </section>
  );
}
