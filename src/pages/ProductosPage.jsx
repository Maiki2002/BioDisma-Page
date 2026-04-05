import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const CATEGORIAS = [
  { id: "todos" },
  { id: "ortopedia" },
  { id: "cirugia" },
  { id: "biomateriales" },
  { id: "hemostasia" },
  { id: "sutura" },
  { id: "terapia_heridas" },
  { id: "equipo" },
];

const PRODUCTOS = [
  { id: 1, key: "cingal", categoria: "ortopedia", imagen: "/images/productos/Cingal.png" },
  { id: 2, key: "dryfield", categoria: "hemostasia", imagen: "/images/productos/4dryfield.png" },
  { id: 3, key: "hyalofast", categoria: "ortopedia", imagen: "/images/productos/hyalofast.png" },
  { id: 4, key: "glutack", categoria: "cirugia", imagen: "/images/productos/glutack.png" },
  { id: 5, key: "hyacorp", categoria: "hemostasia", imagen: "/images/productos/hyacorp.png" },
  { id: 6, key: "obs", categoria: "ortopedia", imagen: "/images/productos/obs.png" },
  { id: 7, key: "monovisc", categoria: "ortopedia", imagen: "/images/productos/monovisc.png" },
  { id: 8, key: "marrow", categoria: "biomateriales", imagen: "/images/productos/marrow.png" },
  { id: 9, key: "ezisurg", categoria: "cirugia", imagen: "/images/productos/ezisurg.png" },
  { id: 10, key: "quill", categoria: "sutura", imagen: "/images/productos/quill.png" },
  { id: 11, key: "mclose", categoria: "sutura", imagen: "/images/productos/m-close.png" },
  { id: 12, key: "dynamesh", categoria: "equipo", imagen: "/images/productos/dynamesh.png" },
  { id: 13, key: "osron", categoria: "cirugia", imagen: "/images/productos/pistola-lavado.png" },
  { id: 14, key: "lifotronic", categoria: "terapia_heridas", imagen: "/images/productos/lifotronic.png" },
  { id: 15, key: "exfuse", categoria: "biomateriales", imagen: "/images/productos/exfuse.png" },
  { id: 16, key: "flexigraft", categoria: "biomateriales", imagen: "/images/productos/flexigraft.png" },
];

const PRODUCT_TEXTS = {
  es: {
    cingal: {
      name: "Cingal",
      description:
        "Viscosuplemento que combina ácido hialurónico con esteroide para alivio rápido y de larga duración del dolor por osteoartritis de rodilla (hasta más de 6 meses).",
    },
    dryfield: {
      name: "4DryField PH",
      description:
        "Polvo hidrofílico para hemostasia que, al gelificarse, actúa como barrera mecánica para la prevención de adherencias en cirugía.",
    },
    hyalofast: {
      name: "HyaloFast",
      description:
        "Matriz 3D biodegradable de HYAFF (HA) para reparación en una sola etapa de lesiones condrales/osteocondrales.",
    },
    glutack: {
      name: "Glutack",
      description:
        "Dispositivo para fijación atraumática de mallas herniarias por laparoscopía, que aplica adhesivo Glubran 2 de forma precisa y consistente.",
    },
    hyacorp: {
      name: "HYAcorp Endo Gel",
      description:
        "Gel viscoelástico de ácido hialurónico, biodegradable, que se adhiere al tejido y pared abdominal formando barrera anti-adherente postquirúrgica.",
    },
    obs: {
      name: "Punta de ablación monopolar OBS",
      description:
        "Electrodo de ablación/coagulación para tejidos blandos; modelos con succión de humo/líquidos y eje extensible para mejor visualización.",
    },
    monovisc: {
      name: "Monovisc",
      description:
        "Viscosuplemento de ácido hialurónico de alta concentración en dosis única para dolor de rodilla por osteoartritis.",
    },
    marrow: {
      name: "Marrow Cellution",
      description:
        "Sistema de aspiración de médula ósea que maximiza la recuperación de células progenitoras y minimiza la dilución sanguínea, sin centrifugación.",
    },
    ezisurg: {
      name: "Grapadoras EziSurg Medical",
      description:
        "Portafolio de grapadoras endoscópicas/lineales para cirugía mínimamente invasiva y gastrointestinal; busca cierre seguro y eficiente.",
    },
    quill: {
      name: "Sutura Quill",
      description:
        "Sutura barbada bidireccional que elimina nudos y distribuye la tensión de manera uniforme, acelerando el cierre y mejorando la seguridad.",
    },
    mclose: {
      name: "M-Close Kit",
      description:
        "Sistema de cierre de puertos laparoscópicos con despliegue simultáneo de dos agujas opuestas para lograr simetría de 180° de forma consistente.",
    },
    dynamesh: {
      name: "DynaMesh",
      description:
        "Implantes de malla PVDF para refuerzo/reconstrucción de tejidos blandos (hernia, suelo pélvico) con alta estabilidad y bordes suaves.",
    },
    osron: {
      name: "Pistola de lavado pulsátil OSRON",
      description:
        "Sistema de lavado quirúrgico pulsátil para desbridamiento y limpieza intraoperatoria; opciones con/sin LED y diferentes puntas.",
    },
    lifotronic: {
      name: "Presión negativa LIFOTRONIC",
      description:
        "Sistemas de terapia de presión negativa (NPWT) para manejo de heridas agudas y crónicas: remueven exudado, reducen carga bacteriana y favorecen granulación.",
    },
    exfuse: {
      name: "ExFuse",
      description:
        "Putty de matriz ósea desmineralizada (DBM) con hueso canceloso y CMC; osteoconducción/inducción y entrega en jeringa lista para usar.",
    },
    flexigraft: {
      name: "Tendón Tibial FlexiGraft",
      description:
        "Aloinjeto tendinoso pre-preparado para reconstrucción ligamentaria (ACL/PCL, etc.), optimiza tiempos en quirófano.",
    },
  },
  en: {
    cingal: {
      name: "Cingal",
      description:
        "Viscosupplement that combines hyaluronic acid with a steroid for fast and long-lasting pain relief in knee osteoarthritis (up to more than 6 months).",
    },
    dryfield: {
      name: "4DryField PH",
      description:
        "Hydrophilic hemostatic powder that, once gelled, acts as a mechanical barrier to help prevent surgical adhesions.",
    },
    hyalofast: {
      name: "HyaloFast",
      description:
        "Biodegradable 3D HYAFF (HA) scaffold for single-stage repair of chondral and osteochondral lesions.",
    },
    glutack: {
      name: "Glutack",
      description:
        "Device for atraumatic laparoscopic mesh fixation that applies Glubran 2 adhesive with precision and consistency.",
    },
    hyacorp: {
      name: "HYAcorp Endo Gel",
      description:
        "Biodegradable hyaluronic-acid viscoelastic gel that adheres to tissue and abdominal wall, forming a post-surgical anti-adhesion barrier.",
    },
    obs: {
      name: "OBS Monopolar Ablation Tip",
      description:
        "Ablation/coagulation electrode for soft tissue; available with smoke/fluid suction and extendable shaft for improved visualization.",
    },
    monovisc: {
      name: "Monovisc",
      description:
        "Single-dose, high-concentration hyaluronic acid viscosupplement for knee osteoarthritis pain.",
    },
    marrow: {
      name: "Marrow Cellution",
      description:
        "Bone marrow aspiration system that maximizes progenitor cell recovery while reducing blood dilution, without centrifugation.",
    },
    ezisurg: {
      name: "EziSurg Medical Staplers",
      description:
        "Portfolio of endoscopic/linear staplers for minimally invasive and gastrointestinal surgery, focused on safe and efficient closure.",
    },
    quill: {
      name: "Quill Suture",
      description:
        "Bidirectional barbed suture that eliminates knots and distributes tension evenly, accelerating closure and improving safety.",
    },
    mclose: {
      name: "M-Close Kit",
      description:
        "Laparoscopic port closure system with simultaneous deployment of two opposite needles to consistently achieve 180° symmetry.",
    },
    dynamesh: {
      name: "DynaMesh",
      description:
        "PVDF mesh implants for soft-tissue reinforcement/reconstruction (hernia, pelvic floor), featuring high stability and smooth edges.",
    },
    osron: {
      name: "OSRON Pulsatile Lavage Gun",
      description:
        "Pulsatile surgical irrigation system for intraoperative debridement and cleansing, with options with/without LED and different tips.",
    },
    lifotronic: {
      name: "LIFOTRONIC Negative Pressure Therapy",
      description:
        "Negative pressure wound therapy (NPWT) systems for acute and chronic wounds: remove exudate, reduce bacterial load, and support granulation.",
    },
    exfuse: {
      name: "ExFuse",
      description:
        "Demineralized bone matrix (DBM) putty with cancellous bone and CMC; osteoconductive/osteoinductive properties, delivered in a ready-to-use syringe.",
    },
    flexigraft: {
      name: "FlexiGraft Tibial Tendon",
      description:
        "Pre-prepared tendon allograft for ligament reconstruction (ACL/PCL, etc.), helping optimize operating-room time.",
    },
  },
  de: {
    cingal: {
      name: "Cingal",
      description:
        "Viskosupplement mit Hyaluronsäure und Steroid zur schnellen und langanhaltenden Schmerzlinderung bei Kniearthrose (über 6 Monate möglich).",
    },
    dryfield: {
      name: "4DryField PH",
      description:
        "Hydrophiles Hämostasepulver, das nach Gelbildung als mechanische Barriere zur Vorbeugung chirurgischer Adhäsionen wirkt.",
    },
    hyalofast: {
      name: "HyaloFast",
      description:
        "Biologisch abbaubare 3D-HYAFF-(HA)-Matrix zur einzeitigen Reparatur chondraler/osteochondraler Läsionen.",
    },
    glutack: {
      name: "Glutack",
      description:
        "System zur atraumatischen laparoskopischen Netzfixation mit präziser und konsistenter Applikation von Glubran-2-Klebstoff.",
    },
    hyacorp: {
      name: "HYAcorp Endo Gel",
      description:
        "Biologisch abbaubares viskoelastisches Hyaluronsäure-Gel, das am Gewebe haftet und eine postoperative Anti-Adhäsionsbarriere bildet.",
    },
    obs: {
      name: "OBS Monopolare Ablationsspitze",
      description:
        "Ablations-/Koagulationselektrode für Weichgewebe; Varianten mit Rauch-/Flüssigkeitsabsaugung und verlängerbarem Schaft.",
    },
    monovisc: {
      name: "Monovisc",
      description:
        "Hochkonzentriertes Hyaluronsäure-Viskosupplement als Einzeldosis bei Kniearthroseschmerz.",
    },
    marrow: {
      name: "Marrow Cellution",
      description:
        "Knochenmarkaspirationssystem zur Maximierung der Stammzellgewinnung bei gleichzeitiger Reduktion der Blutverdünnung, ohne Zentrifugation.",
    },
    ezisurg: {
      name: "EziSurg Medical Klammernahtgeräte",
      description:
        "Portfolio endoskopischer/linearer Klammernahtgeräte für minimalinvasive und gastrointestinale Chirurgie mit sicherem und effizientem Verschluss.",
    },
    quill: {
      name: "Quill-Naht",
      description:
        "Bidirektionale Widerhakennaht ohne Knoten, mit gleichmäßiger Spannungsverteilung für schnelleren und sicheren Wundverschluss.",
    },
    mclose: {
      name: "M-Close Kit",
      description:
        "Laparoskopisches Portverschlusssystem mit gleichzeitiger Entfaltung zweier gegenüberliegender Nadeln für konsistente 180°-Symmetrie.",
    },
    dynamesh: {
      name: "DynaMesh",
      description:
        "PVDF-Netzimplantate zur Verstärkung/Rekonstruktion von Weichgewebe (Hernie, Beckenboden) mit hoher Stabilität und weichen Rändern.",
    },
    osron: {
      name: "OSRON Pulsatile Spülpistole",
      description:
        "Pulsatiles chirurgisches Spülsystem für intraoperatives Debridement und Reinigung; Varianten mit/ohne LED und unterschiedlichen Spitzen.",
    },
    lifotronic: {
      name: "LIFOTRONIC Unterdrucktherapie",
      description:
        "NPWT-Systeme für akute und chronische Wunden: Exsudat entfernen, Keimlast senken und Granulationsgewebe fördern.",
    },
    exfuse: {
      name: "ExFuse",
      description:
        "DBM-Putty (demineralisierte Knochenmatrix) mit Spongiosa und CMC; osteokonduktiv/osteoinduktiv, gebrauchsfertig in einer Spritze.",
    },
    flexigraft: {
      name: "FlexiGraft Tibia-Sehne",
      description:
        "Vorkonfektioniertes Sehnen-Allotransplantat für Bandrekonstruktionen (ACL/PCL usw.) zur Optimierung der OP-Zeit.",
    },
  },
  zh: {
    cingal: {
      name: "Cingal",
      description:
        "一种将透明质酸与类固醇结合的黏弹补充剂，可用于膝骨关节炎疼痛的快速且持久缓解（可超过6个月）。",
    },
    dryfield: {
      name: "4DryField PH",
      description:
        "亲水性止血粉，凝胶化后可形成机械屏障，用于预防术后粘连。",
    },
    hyalofast: {
      name: "HyaloFast",
      description:
        "可降解3D HYAFF（HA）基质，用于软骨/骨软骨损伤的一期修复。",
    },
    glutack: {
      name: "Glutack",
      description:
        "用于腹腔镜疝网无创固定的装置，可精准且稳定地输送 Glubran 2 黏合剂。",
    },
    hyacorp: {
      name: "HYAcorp Endo Gel",
      description:
        "可降解透明质酸黏弹凝胶，可附着组织与腹壁，形成术后防粘连屏障。",
    },
    obs: {
      name: "OBS 单极消融头",
      description:
        "用于软组织的消融/凝固电极；提供带烟雾/液体吸引及可伸缩轴型号，提升视野。",
    },
    monovisc: {
      name: "Monovisc",
      description:
        "高浓度单次剂量透明质酸黏弹补充剂，用于缓解膝骨关节炎疼痛。",
    },
    marrow: {
      name: "Marrow Cellution",
      description:
        "骨髓抽吸系统，可在无需离心的情况下提高祖细胞回收率并减少血液稀释。",
    },
    ezisurg: {
      name: "EziSurg Medical 缝合器",
      description:
        "用于微创与胃肠外科的内镜/线形缝合器产品组合，强调安全高效闭合。",
    },
    quill: {
      name: "Quill 缝线",
      description:
        "双向倒刺缝线，无需打结并可均匀分散张力，提升闭合效率与安全性。",
    },
    mclose: {
      name: "M-Close Kit",
      description:
        "腹腔镜穿刺孔闭合系统，可同时释放两枚对向针，实现稳定的180°对称闭合。",
    },
    dynamesh: {
      name: "DynaMesh",
      description:
        "用于软组织加强/重建（疝、盆底）的PVDF网片植入物，具有高稳定性与柔和边缘。",
    },
    osron: {
      name: "OSRON 脉冲冲洗枪",
      description:
        "用于术中清创与冲洗的脉冲冲洗系统；提供带/不带LED及不同喷头配置。",
    },
    lifotronic: {
      name: "LIFOTRONIC 负压治疗",
      description:
        "用于急性与慢性伤口的负压治疗（NPWT）系统：可清除渗出液、降低菌负荷并促进肉芽形成。",
    },
    exfuse: {
      name: "ExFuse",
      description:
        "含松质骨与CMC的脱矿骨基质（DBM）膏体，具骨传导/骨诱导特性，预装注射器即开即用。",
    },
    flexigraft: {
      name: "FlexiGraft 胫骨肌腱",
      description:
        "预处理肌腱同种移植物，用于韧带重建（ACL/PCL等），有助于优化手术室时间。",
    },
  },
};

export default function ProductosPage() {
  const { t, i18n } = useTranslation();
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [query, setQuery] = useState("");

  const getCategoryName = (id) => t(`productosPage.categories.${id}`);

  const productosLocalizados = useMemo(() => {
    const lang = (i18n.resolvedLanguage || i18n.language || "es").split("-")[0];
    const dict = PRODUCT_TEXTS[lang] ?? PRODUCT_TEXTS.es;

    return PRODUCTOS.map((p) => ({
      ...p,
      nombre: dict[p.key]?.name ?? PRODUCT_TEXTS.es[p.key].name,
      descripcion: dict[p.key]?.description ?? PRODUCT_TEXTS.es[p.key].description,
    }));
  }, [i18n.language, i18n.resolvedLanguage]);

  const productosFiltrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return productosLocalizados.filter((p) => {
      const coincideCategoria = categoriaActiva === "todos" || p.categoria === categoriaActiva;
      const coincideTexto = q.length === 0 || p.nombre.toLowerCase().includes(q) || p.descripcion.toLowerCase().includes(q);
      return coincideCategoria && coincideTexto;
    });
  }, [categoriaActiva, query, productosLocalizados]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-gray-900">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">{t("productosPage.title")}</h1>
        <p className="text-gray-600">{t("productosPage.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3">
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              {t("productosPage.searchLabel")}
            </label>
            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder={t("productosPage.searchPlaceholder")}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">⌕</span>
            </div>
          </div>

          <div className="hidden sm:block sticky top-24">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">{t("productosPage.classifications")}</h3>
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
                      {getCategoryName(c.id)}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

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
                    {getCategoryName(c.id)}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              {t("productosPage.showing", {
                count: productosFiltrados.length,
                categoryText:
                  categoriaActiva !== "todos"
                    ? t("productosPage.inCategory", { category: getCategoryName(categoriaActiva) })
                    : "",
              })}
            </p>
            <select
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              defaultValue="relevancia"
              onChange={() => {}}
            >
              <option value="relevancia">{t("productosPage.sortRelevance")}</option>
              <option value="nombre">{t("productosPage.sortName")}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {productosFiltrados.map((p) => (
              <article key={p.id} className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
                <div className="aspect-[4/3] bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                  <img src={p.imagen} alt={p.nombre} className="h-36 object-contain group-hover:scale-105 transition duration-300" />
                </div>
                <h2 className="text-lg font-semibold mb-1">{p.nombre}</h2>
                <p className="text-sm text-gray-600 mb-4">{p.descripcion}</p>

                <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" />
                  {getCategoryName(p.categoria) ?? t("productosPage.categories.general")}
                </div>
              </article>
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <div className="text-center py-16 text-gray-500">{t("productosPage.noResults")}</div>
          )}
        </main>
      </div>
    </section>
  );
}
