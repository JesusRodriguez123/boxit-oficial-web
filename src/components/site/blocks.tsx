import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, MessageCircle } from "lucide-react";
import { BOXES, whatsappLink } from "@/lib/site-data";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
      )}
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export function BoxCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {BOXES.map((box) => (
        <div
          key={box.slug}
          className={`relative flex flex-col overflow-hidden rounded-xl border bg-card shadow-card ${
            box.featured ? "border-primary ring-1 ring-primary" : "border-border"
          }`}
        >
          {box.featured && (
            <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              Más elegido
            </span>
          )}
          <div className="aspect-square bg-secondary">
            <img
              src={box.image}
              alt={`${box.name} de ${box.area} para guardar en Boxit Godoy Cruz`}
              className="h-full w-full object-contain"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-extrabold">{box.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{box.area} · {box.dims}</p>
            <p className="mt-4 text-3xl font-extrabold text-ink">
              {box.price}
              <span className="text-base font-medium text-muted-foreground"> /mes</span>
            </p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {box.ideal.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(`Hola Boxit 👋 Quiero consultar disponibilidad del ${box.name} (${box.area}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 rounded-md px-4 py-3 text-center text-sm font-semibold transition-colors ${
                box.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary-dark"
                  : "border border-primary text-primary hover:bg-accent"
              }`}
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export type FaqItem = { q: string; a: string };

export function Faq({ items, title = "Preguntas frecuentes" }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <SectionHeading title={title} />
      <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {items.map((item, i) => (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-semibold text-ink">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CtaBand({
  title = "¿Listo para liberar espacio?",
  subtitle = "Escribinos por WhatsApp y te decimos qué box necesitás y la disponibilidad de hoy mismo.",
  message,
}: {
  title?: string;
  subtitle?: string;
  message?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="container-page flex flex-col items-center gap-6 py-14 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold text-primary-foreground sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-primary-foreground/85">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(message ?? "Hola Boxit 👋 Quiero consultar por un box en Godoy Cruz.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3 font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            Consultar por WhatsApp
          </a>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-dark"
          >
            Ver ubicación y contacto
          </Link>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
