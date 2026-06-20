import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { BUSINESS, whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/site-data";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Boxit Bauleras y Guardamuebles en Godoy Cruz" },
      {
        name: "description",
        content:
          "Contactá a Boxit en Godoy Cruz, Mendoza. Perito Moreno 480. WhatsApp +54 9 261 214-0882. Lunes a viernes de 9 a 17 hs. Consultá disponibilidad de bauleras.",
      },
      { property: "og:title", content: "Contacto | Boxit Godoy Cruz, Mendoza" },
      { property: "og:description", content: "Perito Moreno 480, Godoy Cruz. WhatsApp +54 9 261 214-0882." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`;

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-12 lg:py-16">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Contacto</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Estamos en Godoy Cruz, Mendoza. Escribinos por WhatsApp y te respondemos la disponibilidad
            y el tamaño de box que necesitás.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <div className="grid gap-5">
              <InfoRow icon={MapPin} title="Dirección" value={`${BUSINESS.address}, ${BUSINESS.city}, ${BUSINESS.province}`} />
              <InfoRow icon={Phone} title="Teléfono / WhatsApp" value={BUSINESS.phoneDisplay} href={`tel:+${BUSINESS.phoneIntl}`} />
              <InfoRow icon={Clock} title="Horario" value={BUSINESS.hours} />
              <InfoRow icon={Mail} title="Email" value={BUSINESS.email} href={`mailto:${BUSINESS.email}`} />
            </div>

            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Escribinos por WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <iframe
              title="Ubicación de Boxit en Godoy Cruz, Mendoza"
              src={mapsEmbed}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{title}</p>
        {href ? (
          <a href={href} className="mt-1 block text-lg font-semibold text-ink hover:text-primary">
            {value}
          </a>
        ) : (
          <p className="mt-1 text-lg font-semibold text-ink">{value}</p>
        )}
      </div>
    </div>
  );
}
