import boxChico from "@/assets/box-chico.jpg";
import boxEstandar from "@/assets/box-estandar.jpg";
import boxGrande from "@/assets/box-grande.jpg";

export const BUSINESS = {
  name: "Boxit",
  legalName: "Boxit Guardamuebles y Bauleras",
  address: "Perito Moreno 480",
  city: "Godoy Cruz",
  province: "Mendoza",
  country: "AR",
  postalCode: "5501",
  phoneDisplay: "+54 9 261 214-0882",
  phoneIntl: "5492612140882",
  hours: "Lunes a viernes, 9:00 a 17:00",
  email: "boxitargentina1@gmail.com",
  mapsQuery: "Perito Moreno 480, Godoy Cruz, Mendoza",
  geo: { lat: -32.9277, lng: -68.8508 },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Hola Boxit 👋 Quiero consultar por la disponibilidad de un box en Godoy Cruz.";

export type Box = {
  slug: string;
  name: string;
  area: string;
  dims: string;
  price: string;
  image: string;
  featured?: boolean;
  ideal: string[];
};

export const BOXES: Box[] = [
  {
    slug: "chico",
    name: "Box Chico",
    area: "2,16 m²",
    dims: "0,90 × 2,40 m",
    price: "$160.000",
    image: boxChico,
    ideal: [
      "Cajas, archivos y documentos",
      "Ropa y artículos de temporada",
      "Equipaje y maletas",
      "Herramientas y accesorios",
    ],
  },
  {
    slug: "estandar",
    name: "Box Estándar",
    area: "4,32 m²",
    dims: "1,80 × 2,40 m",
    price: "$199.000",
    image: boxEstandar,
    featured: true,
    ideal: [
      "Muebles de uno o dos ambientes",
      "Electrodomésticos",
      "Stock de e-commerce o negocio",
      "Mudanzas y reformas",
    ],
  },
  {
    slug: "grande",
    name: "Box Grande",
    area: "8,64 m²",
    dims: "3,60 × 2,40 m",
    price: "$279.000",
    image: boxGrande,
    ideal: [
      "Contenido completo de una casa",
      "Mercadería empresarial y stock",
      "Maquinaria y equipos",
      "Mudanzas completas",
    ],
  },
];

export const TRUST_POINTS = [
  {
    title: "Acceso seguro",
    desc: "Predio con vigilancia, control de acceso y monitoreo. Sólo vos entrás a tu box.",
  },
  {
    title: "Pagás solo lo que usás",
    desc: "Elegís el tamaño justo y un alquiler mensual, sin contratos eternos ni costos ocultos.",
  },
  {
    title: "En Godoy Cruz",
    desc: "Ubicación céntrica y de fácil acceso en Perito Moreno 480, a minutos de toda Mendoza.",
  },
  {
    title: "Cuándo lo necesites",
    desc: "Guardás y retirás tus cosas las veces que quieras, en los horarios disponibles.\u00a0",
  },
];
