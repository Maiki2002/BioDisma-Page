import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Inicio from "./components/inicio.jsx";
import ParallaxVideo from "./components/parallaxvideo.jsx";
import Certificaciones from "./components/certificaciones.jsx";
import Productos from "./components/productos.jsx";
import ProductosPage from "./pages/ProductosPage.jsx";
import Nosotros from "./components/nosotros.jsx";

function Home() {
  return (
    <div className="App relative">

      <ParallaxVideo />

      {/* Header fijo */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="fixed inset-0 z-30 flex items-center justify-center px-4 text-center pointer-events-none">
        <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          Biodisma logo
          <span className="block text-base sm:text-xl md:text-2xl font-normal mt-3">
            Empresa mexicana dedicada a la distribución de productos médicos de
            alta calidad para el cuidado de la salud.
          </span>
        </div>
      </div>

      {/* Scroll */}
      <div className="h-screen" />

      {/* Contenido principal */}
      <main className="relative z-40 bg-white">
        <div>
          <Inicio />
        </div>
        <div>
          <Certificaciones />
        </div>
        <div className="bg-[#2ca6bc]">
          <Productos />
        </div>
        <div>
          <Nosotros />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Página dedicada de productos */}
        <Route path="/productos" element={<ProductosPage />} />
      </Routes>
    </Router>
  );
}

export default App;