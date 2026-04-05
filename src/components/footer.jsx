import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2ca6bc] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna 1: Logo / Nombre */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Bio-Disma®</h2>
          <p className="text-sm opacity-90">
            {t("footer.brandDescription")}
          </p>
        </div>

        {/* Columna 2: Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.linksTitle")}</h3>
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:underline">{t("header.menu.home")}</a></li>
            <li><a href="#productos" className="hover:underline">{t("header.menu.products")}</a></li>
            <li><a href="#nosotros" className="hover:underline">{t("header.menu.about")}</a></li>
            <li><a href="#contacto" className="hover:underline">{t("header.menu.contact")}</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.contactTitle")}</h3>
          <ul className="space-y-2 text-sm">
            <li>✉️ <a href="mailto:ventas@bio-disma.com" className="hover:underline">ventas@bio-disma.com</a></li>
            <li>☎️ <a href="tel:+52 55 5162 7766" className="hover:underline">+52 55 5162 7766</a></li>
            <li>📍 Av. Universidad 1393, Axotla, Álvaro Obregón, 01030 Ciudad de México, CDMX</li>
          </ul>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="border-t border-white/20 mt-8">
        <p className="text-center text-sm py-4 opacity-80">
          © {new Date().getFullYear()} Bio-Disma®. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
