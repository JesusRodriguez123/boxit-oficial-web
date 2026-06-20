import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/luggage-storage.jpg";

export const Route = createFileRoute("/guarda-equipaje")({
  head: () => ({
    meta: [
      { title: "Guarda de Equipaje en Mendoza | Luggage Storage Godoy Cruz | Boxit" },
      {
        name: "description",
        content:
          "Guarda de equipaje en Mendoza (luggage storage) en Godoy Cruz. Dejá tus valijas y mochilas de forma segura mientras recorrés la ciudad. Consultá tarifas por WhatsApp.",
      },
      { property: "og:title", content: "Guarda de Equipaje en Mendoza | Luggage Storage | Boxit" },
      { property: "og:description", content: "Dejá tu equipaje seguro en Godoy Cruz, Mendoza, mientras recorrés la ciudad." },
      { property: "og:url", content: "/guarda-equipaje" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/guarda-equipaje" }],
  }),
  component: GuardaEquipaje,
});

function GuardaEquipaje() {
  return (
    <ServicePage
      eyebrow="Guarda de equipaje · Luggage storage Mendoza"
      title="Guarda de equipaje en Mendoza"
      intro="¿Llegaste a Mendoza y todavía no podés hacer el check-in, o ya dejaste el alojamiento pero tu vuelo o micro sale más tarde? Dejá tus valijas y mochilas seguras con nosotros y disfrutá la ciudad con las manos libres."
      heroImage={heroImg}
      heroAlt="Guarda de equipaje de Boxit con valijas en estanterías en Godoy Cruz, Mendoza"
      bodyTitle="Tu equipaje seguro mientras recorrés Mendoza"
      bodyParagraphs={[
        "La guarda de equipaje (luggage storage) es ideal para turistas y viajeros que tienen horas libres entre el check-out y la salida, o que llegan temprano y todavía no pueden ingresar a su alojamiento.",
        "En Boxit dejás tus valijas, mochilas y bolsos en un espacio seguro de Godoy Cruz y salís a disfrutar de Mendoza sin cargar peso: bodegas, gastronomía, montaña o el centro.",
        "Coordinás el horario de entrega y retiro por WhatsApp. Escribinos y te pasamos las tarifas y la disponibilidad del día.",
      ]}
      uses={[
        "Valijas y bolsos de mano",
        "Mochilas de viaje y trekking",
        "Equipos deportivos",
        "Compras y encomiendas del día",
        "Equipaje entre check-out y vuelo",
        "Bolsos durante una excursión",
      ]}
      benefitsTitle="Por qué dejar tu equipaje en Boxit"
      benefits={[
        { title: "Recorré sin peso", desc: "Disfrutá Mendoza con las manos libres entre traslados." },
        { title: "Espacio seguro", desc: "Tu equipaje queda en un predio con acceso controlado." },
        { title: "Horario flexible", desc: "Coordinás entrega y retiro por WhatsApp según tu itinerario." },
        { title: "Bien ubicado", desc: "En Godoy Cruz, de fácil acceso dentro del Gran Mendoza." },
        { title: "Para grupos", desc: "Espacio para varias valijas si viajás en familia o con amigos." },
        { title: "Atención directa", desc: "Resolvés todo por WhatsApp, sin apps ni trámites." },
      ]}
      waMessage="Hola Boxit 👋 Quiero dejar equipaje en guarda en Mendoza, ¿qué tarifas y horarios tienen?"
      ctaTitle="¿Necesitás dejar tu equipaje hoy?"
      faqs={[
        { q: "¿Cómo funciona la guarda de equipaje?", a: "Coordinás por WhatsApp el horario de entrega y retiro, dejás tus valijas en nuestro espacio de Godoy Cruz y las retirás cuando lo necesites." },
        { q: "¿Cuánto cuesta dejar el equipaje?", a: "Estamos definiendo tarifas por bulto y por día. Escribinos por WhatsApp y te pasamos el precio actual según lo que quieras guardar." },
        { q: "¿Por cuánto tiempo puedo dejarlo?", a: "Por unas horas o por varios días. Contanos tu itinerario y coordinamos." },
        { q: "¿Dónde retiro mi equipaje?", a: "En Perito Moreno 480, Godoy Cruz, Mendoza, dentro del horario que coordinemos." },
      ]}
    />
  );
}
