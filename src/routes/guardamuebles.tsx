import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/box-grande.jpg";

export const Route = createFileRoute("/guardamuebles")({
  head: () => ({
    meta: [
      { title: "Guardamuebles en Godoy Cruz, Mendoza | Boxit" },
      {
        name: "description",
        content:
          "Guardamuebles en Godoy Cruz, Mendoza. Guardá muebles y electrodomésticos durante tu mudanza, reforma o viaje. Espacio seguro y alquiler mensual. Consultá por WhatsApp.",
      },
      { property: "og:title", content: "Guardamuebles en Godoy Cruz, Mendoza | Boxit" },
      { property: "og:description", content: "Guardá tus muebles seguros en Godoy Cruz, Mendoza. Alquiler mensual y acceso fácil." },
      { property: "og:url", content: "/guardamuebles" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/guardamuebles" }],
  }),
  component: Guardamuebles,
});

function Guardamuebles() {
  return (
    <ServicePage
      eyebrow="Guardamuebles en Godoy Cruz, Mendoza"
      title="Guardamuebles en Godoy Cruz"
      intro="Guardá tus muebles y electrodomésticos de forma segura durante una mudanza, una reforma o un viaje. Alquilás un box del tamaño justo y pagás solo el tiempo que lo necesites."
      heroImage={heroImg}
      heroAlt="Guardamuebles de Boxit con el contenido de una casa en Godoy Cruz"
      bodyTitle="Un lugar seguro para tus muebles cuando más lo necesitás"
      bodyParagraphs={[
        "Mudanzas, reformas, viajes largos o simplemente falta de espacio: hay muchos momentos en los que necesitás guardar muebles sin tener que regalarlos ni venderlos. En Boxit te ofrecemos un guardamuebles en Godoy Cruz pensado para eso.",
        "Elegís el tamaño de box según la cantidad de muebles y cajas que tengas. Desde el contenido de un ambiente hasta una casa completa: te ayudamos a calcular el espacio que vas a necesitar para no pagar de más.",
        "Tus muebles quedan en un predio con acceso controlado y monitoreo, cerrados con tu propia llave. Podés ir a buscar o agregar cosas las veces que quieras dentro del horario de atención.",
      ]}
      uses={[
        "Muebles de uno o más ambientes",
        "Electrodomésticos y línea blanca",
        "Colchones y sommiers",
        "Cajas durante una mudanza",
        "Contenido completo de una casa",
        "Mobiliario de oficina",
      ]}
      benefitsTitle="Ventajas de nuestro guardamuebles"
      benefits={[
        { title: "Para mudanzas y reformas", desc: "Guardá todo mientras te organizás, sin apuros ni desprenderte de tus cosas." },
        { title: "Tamaño a medida", desc: "Box desde 2,16 m² hasta 8,64 m² según lo que necesites guardar." },
        { title: "Acceso seguro", desc: "Predio con control de acceso y box cerrado con tu llave." },
        { title: "Pagás por mes", desc: "Sin contratos eternos: alquilás el tiempo que dure tu necesidad." },
        { title: "En Godoy Cruz", desc: "Ubicación céntrica y de fácil acceso para cargar y descargar." },
        { title: "Asesoramiento", desc: "Te ayudamos a calcular cuánto espacio vas a necesitar." },
      ]}
      waMessage="Hola Boxit 👋 Necesito un guardamuebles en Godoy Cruz, ¿me asesoran con el tamaño?"
      ctaTitle="¿Mudanza o reforma a la vista?"
      faqs={[
        { q: "¿Qué tamaño de box necesito para mis muebles?", a: "Depende de la cantidad. Como referencia, el Box Estándar (4,32 m²) suele alcanzar para uno o dos ambientes, y el Box Grande (8,64 m²) para el contenido de una casa. Contanos qué tenés y te asesoramos." },
        { q: "¿Cuánto tiempo puedo dejar los muebles?", a: "No hay mínimo fijo. Tenemos opciones por horas, por días y mensuales. Sin contratos anuales obligatorios." },
        { q: "¿Conviene embalar los muebles?", a: "Sí, te recomendamos envolver muebles y electrodomésticos para protegerlos del polvo y posibles roces durante el guardado." },
        { q: "¿Puedo retirar algunas cosas y dejar el resto?", a: "Claro. Accedés a tu box las veces que quieras en horario de atención y retirás o agregás lo que necesites." },
      ]}
    />
  );
}
