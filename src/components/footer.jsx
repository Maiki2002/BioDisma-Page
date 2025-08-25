export default function Footer() {
  return (
    <footer className="bg-[#2ca6bc] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna 1: Logo / Nombre */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Bio-Disma</h2>
          <p className="text-sm opacity-90">
            Empresa mexicana dedicada a la distribución de productos médicos de
            alta calidad para el cuidado de la salud.
          </p>
        </div>

        {/* Columna 2: Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#productos" className="hover:underline">Productos</a></li>
            <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
          <ul className="space-y-2 text-sm">
            <li>✉️ <a href="mailto:contacto@biodisma.com" className="hover:underline">contacto@biodisma.com</a></li>
            <li>☎️ <a href="tel:+525512345678" className="hover:underline">+52 55 1234 5678</a></li>
            <li>📍 Av. Insurgentes Sur 1234, Col. Del Valle, CDMX</li>
          </ul>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="border-t border-white/20 mt-8">
        <p className="text-center text-sm py-4 opacity-80">
          © {new Date().getFullYear()} Bio-Disma. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}