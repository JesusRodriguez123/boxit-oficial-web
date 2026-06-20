import { createFileRoute } from "@tanstack/react-router";
import { BoxCards, SectionHeading } from "@/components/site/blocks";
import { ServicePage } from "@/components/site/ServicePage";
import heroImg from "@/assets/box-estandar.jpg";

export const Route = createFileRoute("/bauleras")({
  head: () => ({
    meta: [
      { title: "Bauleras y Mini Bodegas en Godoy Cruz, Mendoza | Boxit" },
      {
        name: "description",
        content:
          "Alquiler de bauleras y mini bodegas en Godoy Cruz, Mendoza. 3 tamaños desde 2 m², acceso seguro y alquiler mensual. Consultá precios y disponibilidad por WhatsApp.",
      },
      { property: "og:title", content: "Bauleras y Mini Bodegas en Godoy Cruz, Mendoza | Boxit" },
      { property: "og:description", content: "Bauleras desde 2 m² en Godoy Cruz, Mendoza. Acceso seguro y alquiler mensual." },
      { property: "og:url", content: "/bauleras" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/bauleras" }],
  }),
  component: Bauleras,
});

function Bauleras() {
  return (
    <ServicePage
      eyebrow="Bauleras en Godoy Cruz, Mendoza"
      title="Bauleras y mini bodegas en Godoy Cruz"
      intro="Tu propio espacio cerrado con llave, en el tamaño que necesites. Alquilá una baulera por mes y guardá tus cosas con la tranquilidad de un predio seguro y de fácil acceso."
      heroImage={heroImg}
      heroAlt="Baulera estándar de Boxit con muebles y cajas en Godoy Cruz"
      bodyTitle="¿Qué es una baulera y para qué sirve?"
      bodyParagraphs={[
        "Una baulera (también conocida como mini bodega o self storage) es un espacio privado de guardado que alquilás por el tiempo que necesites. En Boxit cada box es individual, está cerrado con tu propia llave y se encuentra dentro de un predio con acceso controlado en Godoy Cruz.",
        "Es la solución ideal cuando se te quedó chica la casa, estás en una mudanza o reforma, necesitás guardar stock de tu negocio o simplemente querés liberar espacio sin desprenderte de tus cosas.",
        "Pagás un alquiler mensual por el tamaño que elegís: no hay contratos eternos ni costos ocultos, y accedés a tu baulera las veces que quieras dentro del horario de atención.",
      ]}
      uses={[
        "Cajas, documentación y archivos",
        "Muebles y electrodomésticos",
        "Ropa y artículos de temporada",
        "Stock de e-commerce y negocios",
        "Equipaje, valijas y bicicletas",
        "Herramientas y equipos",
      ]}
      benefitsTitle="Por qué elegir las bauleras de Boxit"
      benefits={[
        { title: "Acceso seguro", desc: "Predio con control de acceso y monitoreo. Cada box se cierra con tu llave." },
        { title: "3 tamaños", desc: "Desde 2,16 m² hasta 8,64 m² para que pagues solo el espacio que usás." },
        { title: "Alquiler mensual", desc: "Sin contratos largos. Renovás o das de baja cuando quieras." },
        { title: "Bien ubicadas", desc: "En Perito Moreno 480, Godoy Cruz, a minutos de toda Mendoza." },
        { title: "Acceso flexible", desc: "Entrás y retirás tus cosas las veces que necesites en horario de atención." },
        { title: "Atención cercana", desc: "Te asesoramos por WhatsApp para elegir el tamaño justo." },
      ]}
      waMessage="Hola Boxit 👋 Quiero consultar por una baulera en Godoy Cruz."
      faqs={[
        { q: "¿Qué tamaños de baulera hay?", a: "Tenemos 3 tamaños: Box Chico (2,16 m²), Box Estándar (4,32 m²) y Box Grande (8,64 m²). Te ayudamos a elegir el que mejor se adapta a lo que querés guardar." },
        { q: "¿Cuánto cuesta alquilar una baulera?", a: "El Box Chico desde $160.000/mes, el Box Estándar desde $199.000/mes y el Box Grande desde $279.000/mes. Consultanos por la disponibilidad actual." },
        { q: "¿Cuál es el plazo mínimo?", a: "No hay mínimo fijo. Tenemos opciones por horas, por días y mensuales. Sin contratos anuales obligatorios." },
        { q: "¿Mis cosas están seguras?", a: "Sí. El predio cuenta con control de acceso y monitoreo, y cada baulera se cierra con tu propia llave." },
        { q: "¿Puedo acceder cuando quiera?", a: "Accedés a tu baulera las veces que necesites dentro del horario de atención: lunes a viernes de 9 a 17 hs." },
      ]}
    >
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Tamaños y precios"
            title="Elegí tu baulera"
            subtitle="Mirá cuánto entra en cada tamaño y reservá la tuya por WhatsApp."
          />
          <div className="mt-12">
            <BoxCards />
          </div>
        </div>
      </section>
    </ServicePage>
  );
}
