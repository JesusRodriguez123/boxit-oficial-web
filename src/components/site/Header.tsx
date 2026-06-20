import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/site-data";

const NAV = [
  { to: "/bauleras", label: "Bauleras" },
  { to: "/guardamuebles", label: "Guardamuebles" },
  { to: "/deposito-empresas", label: "Depósito empresas" },
  { to: "/guarda-equipaje", label: "Guarda de equipaje" },
  { to: "/preguntas-frecuentes", label: "Preguntas" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Boxit inicio">
          <img src="/boxit-logo.png" alt="Boxit guardamuebles y bauleras en Godoy Cruz" className="h-8 w-auto" width={1280} height={512} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Consultar box
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-ink hover:bg-secondary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Consultar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
