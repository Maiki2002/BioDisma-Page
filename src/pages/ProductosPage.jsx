import { useMemo, useState } from "react";

const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "ortopedia", nombre: "Ortopedia" },
  { id: "cirugia", nombre: "Cirugía" },
  { id: "biomateriales", nombre: "Biomateriales / Regeneración" },
  { id: "hemostasia", nombre: "Hemostasia / Anti-adherente" },
  { id: "sutura", nombre: "Sutura y cierre" },
  { id: "terapia_heridas", nombre: "Terapia de heridas" },
  { id: "equipo", nombre: "Equipo Médico" },
];

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Cingal",
    descripcion:
      "Viscosuplemento que combina ácido hialurónico con esteroide para alivio rápido y de larga duración del dolor por osteoartritis de rodilla (hasta más de 6 meses).",
    categoria: "ortopedia",
    imagen: "/images/productos/Cingal.png",
  },
  {
    id: 2,
    nombre: "4DryField PH",
    descripcion:
      "Polvo hidrofílico para hemostasia que, al gelificarse, actúa como barrera mecánica para la prevención de adherencias en cirugía.",
    categoria: "hemostasia",
    imagen: "/images/productos/4dryfield.png",
  },
  {
    id: 3,
    nombre: "HyaloFast",
    descripcion:
      "Matriz 3D biodegradable de HYAFF (HA) para reparación en una sola etapa de lesiones condrales/osteocondrales.",
    categoria: "ortopedia",
    imagen: "/images/productos/hyalofast.png",
  },
  {
    id: 4,
    nombre: "Glutack",
    descripcion:
      "Dispositivo para fijación atraumática de mallas herniarias por laparoscopía, que aplica adhesivo Glubran 2 de forma precisa y consistente.",
    categoria: "cirugia",
    imagen: "/images/productos/glutack.png",
  },
  {
    id: 5,
    nombre: "HYAcorp Endo Gel",
    descripcion:
      "Gel viscoelástico de ácido hialurónico, biodegradable, que se adhiere al tejido y pared abdominal formando barrera anti-adherente postquirúrgica.",
    categoria: "hemostasia",
    imagen: "/images/productos/hyacorp.png",
  },
  {
    id: 6,
    nombre: "Punta de ablación monopolar OBS",
    descripcion:
      "Electrodo de ablación/coagulación para tejidos blandos; modelos con succión de humo/líquidos y eje extensible para mejor visualización.",
    categoria: "ortopedia",
    imagen: "/images/productos/obs.png",
  },
  {
    id: 7,
    nombre: "Monovisc",
    descripcion:
      "Viscosuplemento de ácido hialurónico de alta concentración en dosis única para dolor de rodilla por osteoartritis.",
    categoria: "ortopedia",
    imagen: "/images/productos/monovisc.png",
  },
  {
    id: 8,
    nombre: "Marrow Cellution",
    descripcion:
      "Sistema de aspiración de médula ósea que maximiza la recuperación de células progenitoras y minimiza la dilución sanguínea, sin centrifugación.",
    categoria: "biomateriales",
    imagen: "/images/productos/marrow.png",
  },
  {
    id: 9,
    nombre: "Grapadoras EziSurg Medical",
    descripcion:
      "Portafolio de grapadoras endoscópicas/lineales para cirugía mínimamente invasiva y gastrointestinal; busca cierre seguro y eficiente.",
    categoria: "cirugia",
    imagen: "/images/productos/ezisurg.png",
  },
  {
    id: 10,
    nombre: "Sutura Quill",
    descripcion:
      "Sutura barbada bidireccional que elimina nudos y distribuye la tensión de manera uniforme, acelerando el cierre y mejorando la seguridad.",
    categoria: "sutura",
    imagen: "/images/productos/quill.png",
  },
  {
    id: 11,
    nombre: "M-Close Kit",
    descripcion:
      "Sistema de cierre de puertos laparoscópicos con despliegue simultáneo de dos agujas opuestas para lograr simetría de 180° de forma consistente.",
    categoria: "sutura",
    imagen: "/images/productos/m-close.png",
  },
  {
    id: 12,
    nombre: "DynaMesh",
    descripcion:
      "Implantes de malla PVDF para refuerzo/reconstrucción de tejidos blandos (hernia, suelo pélvico) con alta estabilidad y bordes suaves.",
    categoria: "equipo",
    imagen: "/images/productos/dynamesh.png",
  },
  {
    id: 13,
    nombre: "Pistola de lavado pulsátil OSRON",
    descripcion:
      "Sistema de lavado quirúrgico pulsátil para desbridamiento y limpieza intraoperatoria; opciones con/ sin LED y diferentes puntas.",
    categoria: "cirugia",
    imagen: "/images/productos/pistola-lavado.png",
  },
  {
    id: 14,
    nombre: "Presión negativa LIFOTRONIC",
    descripcion:
      "Sistemas de terapia de presión negativa (NPWT) para manejo de heridas agudas y crónicas: remueven exudado, reducen carga bacteriana y favorecen granulación.",
    categoria: "terapia_heridas",
    imagen: "/images/productos/lifotronic.png",
  },
  {
    id: 15,
    nombre: "ExFuse",
    descripcion:
      "Putty de matriz ósea desmineralizada (DBM) con hueso canceloso y CMC; osteoconducción/inducción y entrega en jeringa lista para usar.",
    categoria: "biomateriales",
    imagen: "/images/productos/exfuse.png",
  },
  {
    id: 16,
    nombre: "Tendón Tibial FlexiGraft",
    descripcion:
      "Aloginjerto tendinoso pre-preparado para reconstrucción ligamentaria (ACL/PCL, etc.), optimiza tiempos en quirófano.",
    categoria: "biomateriales",
    imagen: "/images/productos/flexigraft.png",
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
        {/* Sidebar */}
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

          {/* Categorías */}
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

          {/* Chips móviles */}
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

        {/* Contenido */}
        <main className="lg:col-span-9">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Mostrando <span className="font-semibold">{productosFiltrados.length}</span>{" "}
              producto(s){categoriaActiva !== "todos" ? ` en ${CATEGORIAS.find(c=>c.id===categoriaActiva)?.nombre}` : ""}.
            </p>
            <select
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              defaultValue="relevancia"
              onChange={() => {}}
            >
              <option value="relevancia">Ordenar por: Relevancia</option>
              <option value="nombre">Nombre (A-Z)</option>
            </select>
          </div>

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

                <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" />
                  {CATEGORIAS.find((c) => c.id === p.categoria)?.nombre ?? "General"}
                </div>
              </article>
            ))}
          </div>

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