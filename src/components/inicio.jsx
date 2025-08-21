export default function Inicio() {
  return (
    <section className="bg-white text-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-30 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">¿Quiénes somos?</h1>
          <p className="leading-relaxed py-10">
            Somos una empresa dedicada a la distribución de productos
             para el cuidado de la salud. Como socios estratégicos de hospitales
             públicos y privados, ofrecemos soluciones innovadoras y confiables 
             que respaldan la labor de los profesionales de la salud. Garantizamos productos 
             con los más altos estándares de calidad y seguridad, priorizando la satisfacción y confianza de nuestros clientes.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/ruta-de-tu-imagen.jpg"
            alt="Imagen representativa"
            className="rounded-2xl shadow-lg max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}