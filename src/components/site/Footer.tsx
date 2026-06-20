import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/boxit-logo.png" alt="Boxit" className="h-8 w-auto" width={1280} height={512} loading="lazy" />
          <p className="mt-4 text-sm text-muted-foreground">
            Bauleras y guardamuebles en Godoy Cruz, Mendoza. Espacio seguro para guardar lo que
            necesites, el tiempo que necesites.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Servicios</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/bauleras" className="hover:text-primary">Bauleras / Mini bodegas</Link></li>
            <li><Link to="/guardamuebles" className="hover:text-primary">Guardamuebles</Link></li>
            <li><Link to="/deposito-empresas" className="hover:text-primary">Depósito para empresas</Link></li>
            <li><Link to="/guarda-equipaje" className="hover:text-primary">Guarda de equipaje</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Empresa</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Inicio</Link></li>
            <li><Link to="/preguntas-frecuentes" className="hover:text-primary">Preguntas frecuentes</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>{BUSINESS.address}, {BUSINESS.city}, {BUSINESS.province}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:+${BUSINESS.phoneIntl}`} className="hover:text-primary">{BUSINESS.phoneDisplay}</a>
            </li>
            <li className="flex gap-2">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              <span>{BUSINESS.hours}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary">{BUSINESS.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Guardamuebles y bauleras en Godoy Cruz, Mendoza.</p>
          <p>Perito Moreno 480 · Godoy Cruz · Mendoza</p>
        </div>
      </div>
    </footer>
  );
}
