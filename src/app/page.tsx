"use client";
import { useState, useEffect } from "react";

const comunasBiobio = [
  "Concepción","Coronel","Chiguayante","Florida","Hualpén","Hualqui","Lota",
  "Penco","San Pedro de la Paz","Santa Juana","Talcahuano","Tomé","Lebu",
  "Arauco","Cañete","Contulmo","Curanilahue","Los Álamos","Tirúa",
  "Alto Biobío","Antuco","Cabrero","La Laja","Los Ángeles","Mulchén",
  "Nacimiento","Negrete","Quilaco","Quilleco","San Rosendo",
  "Santa Bárbara","Tucapel","Yumbel"
];

export default function Home() {
  const [direccion, setDireccion] = useState("");
  const [region] = useState("Región del Biobío");
  const [comuna, setComuna] = useState("");
  const [mapSrc, setMapSrc] = useState(
  `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Concepción, Región del Biobío, Chile`
);

  useEffect(() => {
    if (direccion.trim() || comuna) {
      const query = encodeURIComponent(
        `${direccion}${comuna ? ', ' + comuna : ''}, Región del Biobío, Chile`
      );
      setMapSrc(`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}=${query}`);
    }
  }, [direccion, comuna]);

  return (
    <div className="relative min-h-screen text-gray-800 scroll-smooth bg-white">
      <header className="py-6 px-4 shadow-sm bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Buscacorredor.cl</h1>
          <nav className="hidden md:flex space-x-4 text-sm">
            <a href="#como" className="hover:underline text-blue-700">Cómo funciona</a>
            <a href="#beneficios" className="hover:underline text-blue-700">Beneficios</a>
            <a href="#corredores" className="hover:underline text-blue-700">Corredores</a>
            <a href="#testimonios" className="hover:underline text-blue-700">Testimonios</a>
            <a href="#contacto" className="hover:underline text-blue-700">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Hero */}
        <section className="relative text-center pt-40 pb-4 overflow-hidden min-h-[500px] mi-div">
          <h2 className="text-5xl font-bold text-blue-700 mb-4 pt-35 titulo-img">Encuentra al corredor perfecto para ti</h2>
          <p className="text-2xl font-bold text-gray-700 mb-6 titulo-img">Conectamos propietarios con corredores confiables en Concepción</p>
          <a href="#contacto" className="font-bold inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded">Comenzar ahora</a>
        </section>

        {/* Cómo funciona */}
        <section id="como" className="scroll-mt-[90px] mt-10">
          <h3 className="text-2xl font-semibold mb-6 text-center">¿Cómo funciona?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Regístra tu propiedad con nosotros.", "Nuestros corredores se contactaran contigo.", "Te acompañaremos durante el proceso de venta.", "Evalúa a nuestro corredor."].map((text, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-6 shadow text-center">
                <p className="text-xl font-medium text-blue-700 mb-2">Paso {idx + 1}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-6 text-center">¿Por qué usar buscacorredor.cl?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {["Profesionales verificados", "Seguimiento personalizado", "Exito en ventas"].map((b, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-6 shadow text-center div-alternado">
                <p className="text-xl font-medium text-700 mb-2 titulo-img">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Corredores Destacados */}
        <section id="corredores" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-6 text-center">Corredores recomendados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { nombre: "Corredor 1", img: "/images/corredor1.png", rating: 4.0 },
              { nombre: "Corredor 2", img: "/images/corredor2.png", rating: 4.5 },
              { nombre: "Corredor 3", img: "/images/corredor3.png", rating: 5 },
            ].map((corredor, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-4 shadow text-center">
                <img src={corredor.img} alt={corredor.nombre} className="w-24 h-24 mx-auto rounded-full object-cover mb-4" />
                <p className="text-lg font-semibold text-blue-700">{corredor.nombre}</p>
                <div className="flex justify-center mt-2">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={corredor.rating >= star ? "#facc15" : "#e5e7eb"}
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">{corredor.rating.toFixed(1)} estrellas</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-6 text-center">Testimonios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Excelente servicio, vendí en menos de 2 semanas.", "Evelyn Castillo"],
              ["Muy buena atención, todo transparente.", "Beatriz Garrido"],
              ["Me sentí acompañado en todo el proceso.", "Miguel Veloso"]
            ].map(([text, name], idx) => (
              <div key={idx} className="rounded-2xl bg-blue-600 p-6 shadow text-white text-center">
                <p className="italic">"{text}"</p>
                <p className="mt-2 font-semibold">— {name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-6 text-center">Te Contactamos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-4">
              <select className="w-full p-3 border rounded" required>
                <option value="">Tipo de vivienda</option>
                <option>Casa</option>
                <option>Departamento</option>
                <option>Oficina</option>
                <option>Sitio</option>
                <option>Parcela</option>
                <option>Local Comercial</option>
              </select>
              <input className="w-full p-3 border rounded" placeholder="Dirección (calle, avenida...)" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
              <input className="w-full p-3 border rounded bg-gray-100" value={region} readOnly required />
              <select className="w-full p-3 border rounded" value={comuna} onChange={(e) => setComuna(e.target.value)} required>
                <option value="">Seleccione comuna</option>
                {comunasBiobio.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <input className="w-full p-3 border rounded" placeholder="Valor comercial aproximado" required />
              <input className="w-full p-3 border rounded" placeholder="Nombre Propietario" required />
              <input className="w-full p-3 border rounded" placeholder="Teléfono" required />
              <input className="w-full p-3 border rounded" type="email" placeholder="Mail" required />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold">Enviar</button>
            </form>

            {/* Mapa */}
            <div className="w-full h-[450px] rounded overflow-hidden shadow">
              {mapSrc ? (
                <iframe title="Ubicación" src={mapSrc} width="100%" height="100%" frameBorder="0" allowFullScreen loading="lazy"></iframe>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Ingresa dirección y comuna para ver el mapa
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-16 py-6 text-center text-sm text-gray-600">
        © 2025 buscacorredor.cl — Todos los derechos reservados
      </footer>
    </div>
  );
  
}

