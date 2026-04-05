import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PRODUCT_IMAGES = [
  { src: "/images/productos/Cingal.png", name: "Cingal" },
  { src: "/images/productos/4dryfield.png", name: "4DryField" },
  { src: "/images/productos/m-close.png", name: "M-Close" },
  { src: "/images/productos/flexigraft.png", name: "Flexigraft" },
];

export default function Productos() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="productos" className="relative min-h-[100dvh] text-white flex items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-center bg-cover bg-no-repeat blur-xs scale-105"
        style={{ backgroundImage: "url('/images/Productos-fondo.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/1 bg-black/20"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Col iz */}
        <div>
          <h1 className="text-5xl font-bold mb-6">{t("productos.title")}</h1>
          <p className="mb-4 leading-relaxed">
            {t("productos.description")}
          </p>
        </div>

        {/* Col der */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md h-[300px] mb-6 flex items-center justify-center">
            <img
              key={PRODUCT_IMAGES[currentIndex].src}
              src={PRODUCT_IMAGES[currentIndex].src}
              alt={t("productos.imageAlt", { name: PRODUCT_IMAGES[currentIndex].name })}
              className="product-image-fade h-full w-full object-contain rounded-xl"
            />
          </div>
          <Link
            to="/productos"
            className="bg-white text-[#2ca6bc] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            {t("productos.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
