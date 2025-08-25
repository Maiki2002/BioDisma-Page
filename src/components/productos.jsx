
import { Link } from "react-router-dom";

export default function Productos() {
  return (
    <section id="productos" className="text-white max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Col iz */}
      <div>
        <h1 className="text-5xl font-bold mb-6">Productos</h1>
        <p className="mb-4 leading-relaxed">
          Esta selección está diseñada para satisfacer las necesidades de hospitales públicos y privados,
          así como de profesionales de la salud que buscan soluciones innovadoras y confiables.
        </p>
      </div>

      {/* Col der */}
      <div className="flex flex-col items-center">
        <img 
          src="/images/Cingal.png" 
          alt="Imagen de productos" 
          className="rounded-2xl max-h-[300px] object-cover mb-6"
        />
        <Link
          to="/productos"
          target="_blank" // 👈 abre en nueva pestaña
          className="bg-white text-[#2ca6bc] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Ver productos
        </Link>
      </div>
    </section>
  );
}