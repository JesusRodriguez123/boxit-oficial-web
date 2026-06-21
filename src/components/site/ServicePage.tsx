import { Link } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import { CtaBand, Faq, FaqItem, SectionHeading, JsonLd } from "@/components/site/blocks";
import { whatsappLink } from "@/lib/site-data";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  benefitsTitle: string;
  benefits: { title: string; desc: string }[];
  bodyTitle: string;
  bodyParagraphs: string[];
  uses: string[];
  faqs: FaqItem[];
  waMessage: string;
  ctaTitle?: string;
  children?: React.ReactNode;
};

export function ServicePage(props: ServicePageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-primary">
              <MapPin className="h-4 w-4" /> {props.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">{props.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{props.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(props.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-black"
              >
                Consultar por WhatsApp
              </a>
              <Link
                to="/bauleras"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-secondary"
              >
                Ver tamaños y precios
              </Link>
            </div>
          </div>
          <img
            src={props.heroImage}
            alt={props.heroAlt}
            className="aspect-[4/3] w-full rounded-2xl bg-secondary object-cover shadow-card"
            width={1024}
            height={768}
          />
        </div>
      </section>

      {/* Body */}
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold">{props.bodyTitle}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              {props.bodyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-secondary p-6">
            <h3 className="text-lg font-bold">Ideal para guardar</h3>
            <ul className="mt-4 space-y-3">
              {props.uses.map((u) => (
                <li key={u} className="flex gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-secondary">
        <div className="container-page">
          <SectionHeading center title={props.benefitsTitle} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {props.benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <Check className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {props.children}

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <Faq items={props.faqs} />
        </div>
      </section>

      <CtaBand title={props.ctaTitle} message={props.waMessage} />
    </>
  );
}
