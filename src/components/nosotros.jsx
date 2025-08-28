export default function Nosotros() {
  const card =
    "group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm " +
    "transition-all duration-300 motion-safe:hover:shadow-xl motion-safe:hover:-translate-y-1";

  const title =
    "relative z-10 text-3xl font-bold mb-3 text-[#2ca6bc] transition-colors duration-300 group-hover:text-white";
  const text =
    "relative z-10 text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-white";

  const imgs = [
    "/images/nosotros.jpg",
    "/images/nosotros1.jpeg",
    "/images/nosotros2.jpeg",
  ];

  return (
    <section id="nosotros" className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título general */}
        <h1 className="text-5xl font-bold text-center mb-12">Nosotros</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Tarjeta misión */}
          <article className={card}>
            <div
              className="absolute inset-x-0 bottom-0 h-0 bg-green-500
                         transition-[height] duration-700 ease-out
                         motion-safe:group-hover:h-full"
              aria-hidden="true"
            />
            <h2 className={title}>Misión</h2>
            <p className={text}>
              Proveer soluciones médicas innovadoras y confiables que eleven la
              calidad de vida de los pacientes y potencien el trabajo de los
              profesionales de la salud.
            </p>
          </article>

          {/* Tarjeta visión */}
          <article className={card}>
            <div
              className="absolute inset-x-0 bottom-0 h-0 bg-green-500
                         transition-[height] duration-700 ease-out
                         motion-safe:group-hover:h-full"
              aria-hidden="true"
            />
            <h2 className={title}>Visión</h2>
            <p className={text}>
              Ser la compañía líder en distribución de productos médicos de alta
              calidad en México y LATAM, reconocida por su excelencia, seguridad
              y servicio al cliente.
            </p>
          </article>
        </div>

        {/* Filosofía */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Colum Iz*/}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 rounded-3xl bg-emerald-500/100 blur-2xl -z-10" />

            <article
              className="relative rounded-3xl p-8 sm:p-10
                bg-gradient-to-br bg-green-500
                text-white shadow-xl ring-1 ring-white/5"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow-[1px_1px_1px_black]">
                Filosofía
              </h3>
              <p className="text-lg leading-relaxed opacity-100 drop-shadow-[1px_1px_1px_black]">
                “El futuro existe primero en la imaginación, después en la
                voluntad, luego en la realidad.”
              </p>
              <p className="mt-6 font-medium opacity-100 drop-shadow-[1px_1px_1px_black]">
                — R. A. Wilson
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#787878]">
                  Calidad
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#787878]">
                  Innovación
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#787878]">
                  Confianza
                </span>
              </div>
            </article>
          </div>

          {/* Colum der*/}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <figure className="col-span-3 sm:col-span-2 row-span-2 relative overflow-hidden rounded-3xl">
                <img
                  src={imgs[0]}
                  alt="Equipo en evento"
                  className="h-[380px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-3xl" />
              </figure>

              <figure className="hidden sm:block col-span-1 row-span-1 relative overflow-hidden rounded-2xl">
                <img
                  src={imgs[1]}
                  alt="Detalle 1"
                  className="h-[180px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-2xl" />
              </figure>

              <figure className="hidden sm:block col-span-1 row-span-1 relative overflow-hidden rounded-2xl">
                <img
                  src={imgs[2]}
                  alt="Detalle 2"
                  className="h-[180px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-2xl" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
