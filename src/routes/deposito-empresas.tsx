import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/box-estandar.jpg";

export const Route = createFileRoute("/deposito-empresas")({
  head: () => ({
    meta: [
      { title: "Depósito para Empresas y E-commerce en Godoy Cruz | Boxit" },
      {
        name: "description",
        content:
          "Depósito y espacio de guardado para empresas en Godoy Cruz, Mendoza. Ideal para stock de e-commerce, mercadería, archivo y documentación. Alquiler mensual flexible.",
      },
      { property: "og:title", content: "Depósito para Empresas y E-commerce en Godoy Cruz | Boxit" },
      { property: "og:description", content: "Espacio de depósito para empresas y e-commerce en Godoy Cruz, Mendoza." },
      { property: "og:url", content: "/deposito-empresas" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/deposito-empresas" }],
  }),
  component: DepositoEmpresas,
});

function DepositoEmpresas() {
  return (
    <ServicePage
      eyebrow="Depósito para empresas en Godoy Cruz"
      title="Depósito para empresas y e-commerce"
      intro="Un espacio de guardado flexible para tu negocio en Godoy Cruz. Guardá stock, mercadería, archivo y documentación, y escalá el tamaño según tu temporada sin alquilar un galpón completo."
      heroImage={heroImg}
      heroAlt="Depósito de Boxit con stock de e-commerce y cajas en Godoy Cruz"
      bodyTitle="El depósito que crece con tu negocio"
      bodyParagraphs={[
        "No siempre conviene alquilar un local o galpón grande para guardar mercadería. Con un box de Boxit tenés un depósito a tu medida en Godoy Cruz, que podés ampliar o reducir según el momento de tu negocio.",
        "Es ideal para emprendedores y tiendas de e-commerce que necesitan un lugar ordenado y seguro para su stock, para empresas que deben archivar documentación, o para comercios que guardan mercadería de temporada.",
        "Accedés a tu depósito las veces que quieras en horario de atención para preparar pedidos, reponer stock o consultar tu archivo, con la seguridad de un predio con acceso controlado.",
      ]}
      uses={[
        "Stock de e-commerce y tiendas online",
        "Mercadería de temporada",
        "Archivo y documentación",
        "Muestrarios y material promocional",
        "Equipos y herramientas de trabajo",
        "Insumos y packaging",
      ]}
      benefitsTitle="Por qué las empresas eligen Boxit"
      benefits={[
        { title: "Costo flexible", desc: "Pagás un alquiler mensual por el espacio que usás, sin invertir en un galpón." },
        { title: "Escalable", desc: "Cambiás a un box más grande o más chico según tu temporada." },
        { title: "Acceso seguro", desc: "Predio con control de acceso y box cerrado con tu llave." },
        { title: "Bien ubicado", desc: "En Godoy Cruz, con fácil acceso para cargar y descargar." },
        { title: "Orden y control", desc: "Mantené tu stock y archivo separados y ordenados." },
        { title: "Sin burocracia", desc: "Alta simple y atención directa por WhatsApp." },
      ]}
      waMessage="Hola Boxit 👋 Busco un depósito para mi empresa/e-commerce en Godoy Cruz."
      ctaTitle="¿Tu negocio necesita más espacio?"
      faqs={[
        { q: "¿Sirve para guardar stock de e-commerce?", a: "Sí, es uno de los usos más comunes. Tenés tu mercadería ordenada y segura, y accedés para preparar pedidos cuando lo necesites." },
        { q: "¿Puedo cambiar de tamaño según la temporada?", a: "Sí. Podés pasar a un box más grande o más chico según cómo evolucione tu stock. Consultanos la disponibilidad." },
        
        { q: "¿Necesito factura?", a: "Contanos los datos de tu empresa al momento de la consulta y vemos juntos la mejor opción." },
      ]}
    />
  );
}
