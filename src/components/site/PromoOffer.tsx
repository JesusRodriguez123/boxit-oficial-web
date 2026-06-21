import boxChico from "@/assets/box-chico.jpg";
import boxEstandar from "@/assets/box-estandar.jpg";
import boxGrande from "@/assets/box-grande.jpg";
import { whatsappLink } from "@/lib/site-data";

// Foto de mudanza / cajas de cartón — Unsplash (Jan Antonin Kolar)
const MOVING_PHOTO =
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80";

export const LAUNCH_OFFER_PLANS = [
  { months: 3, payMonths: 2, image: boxChico, imageAlt: "Box chico de Boxit en Godoy Cruz" },
  { months: 6, payMonths: 5, image: boxEstandar, imageAlt: "Box estándar de Boxit con muebles guardados" },
  { months: 12, payMonths: 10, image: boxGrande, imageAlt: "Box grande de Boxit para guardamuebles", featured: true },
] as const;

const CONDITIONS =
  "Válida para nuevos clientes en todos los tamaños de box. Oferta opcional, sin fecha de vencimiento.";

export function launchOfferMessage(months?: number, payMonths?: number) {
  if (months != null && payMonths != null) {
    return `Hola Boxit 👋 Quiero la oferta de lanzamiento: alquilar ${months} meses y pagar ${payMonths}.`;
  }
  return "Hola Boxit 👋 Quiero consultar por la oferta de lanzamiento para nuevos clientes.";
}

function PromoPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-[220px] bg-[#e8e4df] sm:min-h-[260px] lg:min-h-[300px]">
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

function PromoTextPanel({
  plans,
  showAllPlans = false,
  singlePlan,
  ctaHref,
  ctaLabel,
}: {
  plans: typeof LAUNCH_OFFER_PLANS;
  showAllPlans?: boolean;
  singlePlan?: { months: number; payMonths: number };
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#f5b800] px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-14 lg:py-14">
      {/* Fondo decorativo — círculos difuminados */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-[#1e2a3a]/10" />

      {/* Badge de lanzamiento */}
      <span className="relative inline-flex items-center gap-1.5 rounded-full bg-[#1e2a3a] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f5b800] sm:text-xs">
        ★ Oferta de lanzamiento ★
      </span>

      {showAllPlans ? (
        <div className="relative mt-5 space-y-2 sm:space-y-3">
          {plans.map((plan) => (
            <p
              key={plan.months}
              className="text-2xl font-black uppercase leading-[1.05] tracking-tight text-[#1e2a3a] sm:text-3xl lg:text-[2.1rem]"
            >
              Alquilá{" "}
              <span className="text-white">{plan.months} meses</span>{" "}
              y pagá{" "}
              <span className="text-white">{plan.payMonths}!</span>
            </p>
          ))}
        </div>
      ) : (
        singlePlan && (
          <p className="relative mt-5 text-3xl font-black uppercase leading-[1.05] tracking-tight text-[#1e2a3a] sm:text-4xl lg:text-[2.75rem]">
            Alquilá{" "}
            <span className="text-white">{singlePlan.months} meses</span>{" "}
            y pagá{" "}
            <span className="text-white">{singlePlan.payMonths}!</span>
          </p>
        )
      )}

      <div className="relative mt-6 flex w-full max-w-md items-center gap-3">
        <div className="h-px flex-1 bg-[#1e2a3a]/25" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e2a3a]/60">condiciones</span>
        <div className="h-px flex-1 bg-[#1e2a3a]/25" />
      </div>

      <p className="relative mt-4 max-w-sm text-xs leading-relaxed text-[#1e2a3a]/80 sm:text-sm">
        {CONDITIONS}
      </p>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-7 inline-flex items-center gap-2 rounded-md bg-[#1e2a3a] px-7 py-3 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all hover:scale-105 hover:bg-black sm:text-sm"
      >
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.057 23.428a.5.5 0 00.608.61l5.758-1.51A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.371l-.36-.214-3.733.979.996-3.638-.235-.374A9.86 9.86 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1c5.467 0 9.9 4.433 9.9 9.9S17.467 21.9 12 21.9z"/>
        </svg>
        {ctaLabel}
      </a>
    </div>
  );
}

/** Banner horizontal — foto + panel promocional */
export function PromoOfferBanner() {
  return (
    <section className="w-full" aria-label="Oferta de lanzamiento">
      <div className="grid lg:grid-cols-[1fr_3fr]">
        <PromoPhoto src={MOVING_PHOTO} alt="Cajas de mudanza listas para guardar en Boxit" />
        <PromoTextPanel
          plans={LAUNCH_OFFER_PLANS}
          showAllPlans
          ctaHref={whatsappLink(launchOfferMessage())}
          ctaLabel="Consultar por WhatsApp"
        />
      </div>
    </section>
  );
}

/** Sección completa — tres bloques foto + panel, uno por plan */
export function PromoOfferSection() {
  return (
    <section className="w-full" aria-label="Planes de la oferta de lanzamiento">
      <div className="divide-y divide-[#1e2a3a]/10">
        {LAUNCH_OFFER_PLANS.map((plan) => (
          <div key={plan.months} className="grid lg:grid-cols-[1fr_3fr]">
            <PromoPhoto src={plan.image} alt={plan.imageAlt} />
            <PromoTextPanel
              plans={LAUNCH_OFFER_PLANS}
              singlePlan={{ months: plan.months, payMonths: plan.payMonths }}
              ctaHref={whatsappLink(launchOfferMessage(plan.months, plan.payMonths))}
              ctaLabel="Consultar este plan"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
