"use client";
import React from "react";
import Header from "../components/Header";

const component = () => {
  return (
    <div className="min-h-screen p-4 bg-background-800">
      <Header />
      <div className="text-background-50 font-Afacad_Flux">
        <div className="px-5 pb-10 pt-8"> 
          <header className="mb-8">
            <h1 className="font-Lilita_One text-6xl uppercase tracking-[0.18em]">
              Cotiza tu <span className="text-primary-500">sitio web</span>
            </h1>
            <p className="mt-2 max-w-xl text-xl text-background-300">
              Ajusta el tipo de proyecto, funcionalidades y nivel de detalle.
              Verás un precio estimado en tiempo real antes de hablar conmigo.
            </p>
          </header>

          {/* LAYOUT */}
          <main className="grid gap-5 md:grid-cols-[minmax(0,_2fr)_minmax(0,_.75fr)]">
            {/* PANEL IZQUIERDO – FORM */}
            <section className="rounded-2xl border border-background-700 bg-background-900/90 px-4 py-5 md:px-5">
              <p className="mb-3 text-lg uppercase tracking-[0.2em] text-background-400">
                Configuración del proyecto
              </p>

              {/* Tipo de página */}
              <div className="border-t border-background-800 py-4 first:border-t-0 first:pt-0">
                <h2 className="text-2xl">Tipo de página</h2>
                <p className="mb-2 text-lg text-background-400">
                  Elige la base que mejor se acerque a lo que necesitas.
                </p>

                <div className="flex flex-wrap gap-2">
                  <button className="rounded-full border border-primary-500 bg-primary-500/15 px-3 py-1.5 text-lg text-background-50">
                    Landing simple
                  </button>
                  <button className="rounded-full border border-background-700 px-3 py-1.5 text-lg text-background-100">
                    Restaurante con menú
                  </button>
                  <button className="rounded-full border border-background-700 px-3 py-1.5 text-lg text-background-100">
                    Tienda pequeña
                  </button>
                  <button className="rounded-full border border-background-700 px-3 py-1.5 text-lg text-background-100">
                    Sitio institucional
                  </button>
                </div>
              </div>

              {/* Funcionalidades */}
              <div className="border-t border-background-800 py-4">
                <h2 className="text-2xl">Funcionalidades</h2>
                <p className="mb-2 text-lg text-background-400">
                  Marca las secciones y extras que quieres incluir.
                </p>

                <div className="flex flex-col gap-2 text-lg">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 accent-primary-500"
                    />
                    <span>Diseño responsive para móvil y escritorio</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-primary-500"
                    />
                    <span>Formulario de contacto</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-primary-500"
                    />
                    <span>Integración con WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-primary-500"
                    />
                    <span>Integración de pagos (Flow / MercadoPago)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-primary-500"
                    />
                    <span>Blog o sección de noticias</span>
                  </label>
                </div>

                <p className="mt-3 text-lg text-background-400">
                  Puedes dejar extras sin marcar si no estás seguro.
                </p>
              </div>

              {/* Plazo */}
              <div className="border-t border-background-800 pt-4">
                <h3 className="text-lg">Plazo estimado</h3>
                <p className="mb-2 text-lg text-background-400">
                  Mientras más urgente, más ajustada será la cotización.
                </p>

                <div className="flex flex-col gap-1 text-lg text-background-300">
                  <label htmlFor="plazo" className="text-[11px]">
                    Entrega aproximada
                  </label>
                  <select
                    id="plazo"
                    className="rounded-lg border border-background-700 bg-background-950 px-3 py-2 text-lg text-background-50 outline-none focus:border-primary-500"
                  >
                    <option>Normal (2–3 semanas)</option>
                    <option>Rápida (7–10 días)</option>
                    <option>Express (5 días o menos)</option>
                  </select>
                </div>
              </div>

              {/* Datos */}
              <div className="border-t border-background-800 pt-4">
                <h3 className="text-lg">Tus datos (opcional)</h3>
                <p className="mb-2 text-lg text-background-400">
                  Solo para adjuntarlos en la cotización PDF / correo.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1 text-lg">
                    <label className="text-[11px]" htmlFor="nombre">
                      Nombre o nombre del negocio
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      placeholder="Ej: Café Naranja"
                      className="rounded-lg border border-background-700 bg-background-950 px-3 py-2 text-lg text-background-50 outline-none focus:border-primary-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-lg">
                    <label className="text-[11px]" htmlFor="email">
                      Correo de contacto
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="rounded-lg border border-background-700 bg-background-950 px-3 py-2 text-lg text-background-50 outline-none focus:border-primary-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1 text-lg">
                    <label className="text-[11px]" htmlFor="nota">
                      Notas o ideas adicionales
                    </label>
                    <textarea
                      id="nota"
                      placeholder="Cuéntame brevemente qué tienes en mente."
                      className="min-h-[72px] rounded-lg border border-background-700 bg-background-950 px-3 py-2 text-lg text-background-50 outline-none focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* PANEL DERECHO – RESUMEN */}
            <aside className="sticky top-6 h-max rounded-2xl border border-background-700 bg-background-900/90 px-4 py-5 md:px-5">
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-background-400">
                    Resumen
                  </p>
                  <p className="mt-1 text-lg text-background-200">
                    Cotización estimada
                  </p>
                </div>
                <p className="font-Lilita_One text-2xl text-primary-500">
                  $180.000 CLP
                </p>
              </div>

              <div className="space-y-1.5 text-[13px]">
                <div className="flex justify-between text-background-300">
                  <span>Base del proyecto</span>
                  <span className="font-medium text-background-50">
                    Landing simple
                  </span>
                </div>
                <div className="flex justify-between text-background-300">
                  <span>Funcionalidades</span>
                  <span className="font-medium text-background-50">
                    4 seleccionadas
                  </span>
                </div>
                <div className="flex justify-between text-background-300">
                  <span>Plazo de entrega</span>
                  <span className="font-medium text-background-50">
                    2–3 semanas
                  </span>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-background-400">
                Este valor es solo una referencia. El precio final puede ajustarse
                luego de revisar los detalles por llamada o correo.
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <button className="rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-background-950 hover:bg-primary-400">
                  Generar PDF de cotización
                </button>
                <button className="rounded-full border border-primary-500 px-4 py-2 text-sm font-medium text-background-50 hover:bg-primary-500/10">
                  Enviar cotización por correo
                </button>
                <button className="mt-1 w-fit text-lg font-medium text-primary-400 hover:text-primary-300">
                  Abrir preview dinámica ↗
                </button>
              </div>
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
};

export default component;
