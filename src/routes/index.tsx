import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, KeyRound, Truck, Building2, Plane, MapPin, ArrowRight } from "lucide-react";
import { BoxCards, CtaBand, Faq, SectionHeading } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";
import { TRUST_POINTS, whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boxit | Bauleras y Guardamuebles en Godoy Cruz, Mendoza" },
      {
        name: "description",
        content:
          "Bauleras y guardamuebles en Godoy Cruz, Mendoza. Espacios de guardado seguros desde 2 m², alquiler mensual y atención por WhatsApp. Pagás solo lo que usás.",
      },
      { property: "og:title", content: "Boxit | Bauleras y Guardamuebles en Godoy Cruz, Mendoza" },
      {
        property: "og:description",
        content: "Espacios de guardado seguros en Godoy Cruz, Mendoza. Bauleras, guardamuebles y depósito desde 2 m².",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const SERVICES = [
  {
    icon: KeyRound,
    title: "Bauleras / Mini bodegas",
    desc: "Tu propio box cerrado con llave, en 3 tamaños. Ideal para particulares y negocios.",
    to: "/bauleras" as const,
  },
  {
    icon: Truck,
    title: "Guardamuebles",
    desc: "Guardá muebles y electrodomésticos durante una mudanza, reforma o viaje.",
    to: "/guardamuebles" as const,
  },
  {
    icon: Building2,
    title: "Depósito para empresas",
    desc: "Stock de e-commerce, archivo y mercadería con acceso cuando lo necesites.",
    to: "/deposito-empresas" as const,
  },
  {
    icon: Plane,
    title: "Guarda de equipaje",
    desc: "Dejá valijas y mochilas de forma segura mientras recorrés Mendoza.",
    to: "/guarda-equipaje" as const,
  },
];

const STEPS = [
  { n: "1", title: "Elegí tu box", desc: "Te ayudamos a calcular el tamaño justo según lo que querés guardar." },
  { n: "2", title: "Reservá por WhatsApp", desc: "Coordinamos el ingreso y firmás un alquiler mensual simple, sin trámites eternos." },
  { n: "3", title: "Guardá y accedé", desc: "Entrás a tu box las veces que quieras dentro del horario de atención." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-linear-to-br from-primary-dark via-primary to-[#2563eb]">
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Soft glow orbs */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-300/15 blur-3xl" />

        <div className="container-page relative z-10 flex min-h-[70vh] flex-col justify-center py-20 animate-fade-in">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
            <MapPin className="h-4 w-4" /> Godoy Cruz, Mendoza
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Más espacio para tu vida y tu negocio
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            Bauleras y guardamuebles seguros en Godoy Cruz. Guardá lo que necesites, el tiempo que
            necesites, y pagá solo por el espacio que usás.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 font-semibold text-primary-dark transition-colors hover:bg-white/90"
            >
              Consultar disponibilidad
            </a>
            <Link
              to="/bauleras"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Ver tamaños y precios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
            <li className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-sky-200" /> Acceso seguro y controlado</li>
            <li className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-sky-200" /> Sin contratos largos</li>
          </ul>
        </div>
      </section>

      {/* Trust */}
      <section className="section-pad">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <ShieldCheck className="h-7 w-7 text-primary" />
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Boxes */}
      <section className="section-pad bg-secondary">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Tamaños y precios"
              title="Elegí el box que mejor se adapta"
              subtitle="Tres tamaños pensados para guardar desde unas cajas hasta el contenido completo de una casa o negocio."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12">
              <BoxCards />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Servicios"
              title="Soluciones de guardado para cada necesidad"
              subtitle="Particulares, empresas y turistas: tenemos un espacio para vos en Godoy Cruz."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.to} delay={i * 100}>
                <Link
                  to={s.to}
                  className="group flex h-full items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-1.5 text-lg font-bold text-ink">
                      {s.title}
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-secondary">
        <div className="container-page">
          <Reveal>
            <SectionHeading center eyebrow="Cómo funciona" title="Empezar es muy simple" />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-2xl font-extrabold text-primary-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <Faq
            items={[
              { q: "¿Dónde están ubicados?", a: "Estamos en Perito Moreno 480, Godoy Cruz, Mendoza, con fácil acceso desde toda la ciudad." },
              { q: "¿Cuál es el plazo mínimo de alquiler?", a: "No hay mínimo fijo. Tenemos opciones por horas, por días y mensuales. Sin contratos anuales obligatorios." },
              { q: "¿Cómo accedo a mis cosas?", a: "Coordinás tu ingreso dentro del horario de atención (lunes a viernes de 9 a 17 hs) y accedés a tu box las veces que quieras." },
              { q: "¿Qué puedo guardar?", a: "Muebles, electrodomésticos, cajas, documentación, stock de tu negocio, equipaje y más. No se admiten materiales peligrosos, inflamables ni perecederos." },
            ]}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
