import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/blocks";

const FAQS = [
  { q: "¿Dónde está Boxit?", a: "Estamos en Perito Moreno 480, Godoy Cruz, Mendoza, con fácil acceso desde toda la ciudad y el Gran Mendoza." },
  { q: "¿Qué tamaños de box hay y cuánto cuestan?", a: "Tenemos 3 tamaños: Box Chico (2,16 m²) desde $160.000/mes, Box Estándar (4,32 m²) desde $199.000/mes y Box Grande (8,64 m²) desde $279.000/mes." },
  { q: "¿Cuál es el plazo mínimo de alquiler?", a: "No hay mínimo fijo. Tenemos opciones por horas, por días y mensuales. Sin contratos anuales obligatorios." },
  { q: "¿Cómo accedo a mi box?", a: "Coordinás tu ingreso dentro del horario de atención (lunes a viernes de 9 a 17 hs) y accedés a tu box las veces que quieras." },
  { q: "¿Mis cosas están seguras?", a: "Sí. El predio cuenta con control de acceso y monitoreo, y cada box se cierra con tu propia llave: solo vos entrás a tu espacio." },
  { q: "¿Qué puedo guardar?", a: "Muebles, electrodomésticos, cajas, documentación, stock de tu negocio, equipaje y más. No se admiten materiales peligrosos, inflamables, perecederos ni sustancias ilegales." },
  { q: "¿Qué tamaño de box necesito?", a: "Depende de lo que quieras guardar. Contanos qué tenés por WhatsApp y te ayudamos a calcular el tamaño justo para que no pagues de más." },
  { q: "¿Cómo reservo?", a: "Escribinos por WhatsApp al +54 9 261 214-0882, coordinamos el tamaño y el ingreso, y listo." },
];

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes | Boxit Bauleras y Guardamuebles Godoy Cruz" },
      {
        name: "description",
        content:
          "Preguntas frecuentes sobre bauleras y guardamuebles en Godoy Cruz, Mendoza: precios, tamaños, seguridad, acceso y cómo reservar en Boxit.",
      },
      { property: "og:title", content: "Preguntas Frecuentes | Boxit Godoy Cruz" },
      { property: "og:description", content: "Resolvé tus dudas sobre bauleras y guardamuebles en Godoy Cruz, Mendoza." },
      { property: "og:url", content: "/preguntas-frecuentes" },
    ],
    links: [{ rel: "canonical", href: "/preguntas-frecuentes" }],
  }),
  component: Preguntas,
});

function Preguntas() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="border-b border-border">
        <div className="container-page py-12 lg:py-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Preguntas frecuentes</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Todo lo que necesitás saber sobre nuestras bauleras y guardamuebles en Godoy Cruz, Mendoza.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <Faq items={FAQS} title="Tus dudas, resueltas" />
        </div>
      </section>
    </>
  );
}
