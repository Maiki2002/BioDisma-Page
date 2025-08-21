import { useMemo, useState } from "react";

const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "ortopedia", nombre: "Ortopedia" },
  { id: "cardiologia", nombre: "Cardiología" },
  { id: "equipo", nombre: "Equipo Médico" },
  { id: "insumos", nombre: "Insumos" },
];

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Cingal",
    descripcion:
      "Inyección intraarticular para alivio del dolor en osteoartritis. Alta pureza y seguridad.",
    categoria: "ortopedia",
    imagen: "/images/Cingal.png",
  },
  {
    id: 2,
    nombre: "4DryField",
    descripcion:
      "Acreditación que respalda la calidad y la seguridad de nuestros productos.",
    categoria: "insumos",
    imagen: "/images/",
  },
  {
    id: 3,
    nombre: "Monitor Multiparámetro",
    descripcion:
      "Monitoreo continuo de signos vitales con alarmas configurables y alta precisión.",
    categoria: "equipo",
    imagen: "/images/otro.png",
  },
  {
    id: 4,
    nombre: "Stent Coronario",
    descripcion:
      "Implante utilizado para mantener abiertas las arterias coronarias. Material biocompatible.",
    categoria: "cardiologia",
    imagen: "/images/otro.png",
  },
  {
    id: 5,
    nombre: "Guantes Estériles",
    descripcion:
      "Guantes para procedimientos, hipoalergénicos y de alta resistencia.",
    categoria: "insumos",
    imagen: "/images/otro.png",
  },
];

export default function ProductosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [query, setQuery] = useState("");

  const productosFiltrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTOS.filter((p) => {
      const coincideCategoria =
        categoriaActiva === "todos" || p.categoria === categoriaActiva;
      const coincideTexto =
        q.length === 0 ||
        p.nombre.toLowerCase().includes(q) ||
        p.descripcion.toLowerCase().includes(q);
      return coincideCategoria && coincideTexto;
    });
  }, [categoriaActiva, query]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-gray-900">
      {/* Título */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Nuestros Productos</h1>
        <p className="text-gray-600">
          Explora por categoría o usa el buscador para encontrar el producto de interés.
        </p>
      </div>

      {/* Layout principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar izq */}
        <aside className="lg:col-span-3">
          {/* Buscador */}
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Buscar
            </label>
            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder="Nombre o descripción…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">⌕</span>
            </div>
          </div>

          {/* Categorías desktop */}
          <div className="hidden sm:block sticky top-24">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Clasificaciones</h3>
            <ul className="space-y-2">
              {CATEGORIAS.map((c) => {
                const activa = c.id === categoriaActiva;
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => setCategoriaActiva(c.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition
                      ${activa
                          ? "bg-cyan-50 text-cyan-700 border border-cyan-200"
                          : "hover:bg-gray-100 text-gray-800 border border-transparent"
                        }`}
                    >
                      {c.nombre}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Categorías celular */}
          <div className="sm:hidden -mx-4 px-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
              {CATEGORIAS.map((c) => {
                const activa = c.id === categoriaActiva;
                return (
                  <button
                    key={c.id}
                    onClick={() => setCategoriaActiva(c.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full border transition
                    ${activa
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-white text-gray-800 border-gray-300"
                      }`}
                  >
                    {c.nombre}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Contenido der */}
        <main className="lg:col-span-9">
          {/* Meta de filtros */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Mostrando <span className="font-semibold">{productosFiltrados.length}</span>{" "}
              producto(s){categoriaActiva !== "todos" ? ` en ${categoriaActiva}` : ""}.
            </p>
            {/* Orden básico */}
            <select
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              defaultValue="relevancia"
              onChange={() => {}}
            >
              <option value="relevancia">Ordenar por: Relevancia</option>
              <option value="nombre">Nombre (A-Z)</option>
            </select>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {productosFiltrados.map((p) => (
              <article
                key={p.id}
                className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="h-36 object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1">{p.nombre}</h2>
                <p className="text-sm text-gray-600 mb-4">{p.descripcion}</p>

                {/* Etiqueta de categoría */}
                <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" />
                  {CATEGORIAS.find((c) => c.id === p.categoria)?.nombre ?? "General"}
                </div>
              </article>
            ))}
          </div>

          {/* Sin datos */}
          {productosFiltrados.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No encontramos resultados. Ajusta los filtros o el texto de búsqueda.
            </div>
          )}
        </main>
      </div>
    </section>
  );
}