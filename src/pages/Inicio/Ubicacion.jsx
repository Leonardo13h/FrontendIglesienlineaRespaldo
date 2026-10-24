// Mismos datos que la página de Contactos. El mapa se genera a partir del nombre y la dirección.
const ubicacion = {
  nombre: "Iglesia Apostólica Visión Sin Límites",
  direccion: "Maco Maco, San Diego 2006, Carabobo, Venezuela.",
  referencia: "",
  telefono: "+58 414-4420751",
  whatsapp: "https://wa.me/584144420751",
  correo: "Secretariavisionsinlimite@gmail.com",
  comoLlegar: "https://maps.app.goo.gl/kkCPVVcf5GGjJ9TM7",
  horarios: [
    { dia: "Domingo · Culto de mañana", hora: "9:40 AM" },
    { dia: "Domingo · Culto de tarde", hora: "5:40 PM" },
  ],
};

const busqueda = encodeURIComponent(`${ubicacion.nombre}, ${ubicacion.direccion}`);

export default function Ubicacion() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-brand-blue/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase texto-dorado mb-3">Ubicación</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
            Te esperamos{" "}
            <span className="texto-dorado">en casa</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mapa */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-200 dark:border-brand-blue/30 min-h-[350px]">
            <iframe
              className="w-full h-full min-h-[350px]"
              src={`https://www.google.com/maps?q=${busqueda}&output=embed`}
              title={`Mapa de ${ubicacion.nombre}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Detalles */}
          <div className="bg-white dark:bg-brand-blue/15 border border-slate-200 dark:border-brand-blue/30 rounded-2xl p-8 flex flex-col gap-6 transition-colors duration-300">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider texto-dorado mb-2">Dirección</h3>
              <p className="text-slate-800 dark:text-white font-semibold transition-colors duration-300">{ubicacion.direccion}</p>
              {ubicacion.referencia && (
                <p className="text-sm text-slate-500 dark:text-gray-400 transition-colors duration-300">{ubicacion.referencia}</p>
              )}
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider texto-dorado mb-2">Horarios</h3>
              <ul className="space-y-1">
                {ubicacion.horarios.map((h) => (
                  <li key={h.dia} className="flex justify-between text-sm text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    <span>{h.dia}</span>
                    <span className="font-semibold">{h.hora}</span>
                  </li>
                ))}
              </ul>
            </div>

            {ubicacion.telefono && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider texto-dorado mb-2">Teléfono / WhatsApp</h3>
                <a
                  href={ubicacion.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 dark:text-white hover:text-brand-gold font-semibold transition-colors duration-300"
                >
                  {ubicacion.telefono}
                </a>
              </div>
            )}

            {ubicacion.correo && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider texto-dorado mb-2">Correo</h3>
                <a
                  href={`mailto:${ubicacion.correo}`}
                  className="text-sm text-slate-800 dark:text-white hover:text-brand-gold font-semibold break-all transition-colors duration-300"
                >
                  {ubicacion.correo}
                </a>
              </div>
            )}

            <a
              href={ubicacion.comoLlegar}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro hover:brightness-110 text-brand-navy-dark font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
