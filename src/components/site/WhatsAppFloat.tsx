import { MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultanos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-white shadow-elevated transition-transform hover:scale-105"
    >
      <span className="relative flex h-6 w-6">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" />
        <MessageCircle className="relative h-6 w-6 animate-pulse" />
      </span>
      <span className="hidden sm:inline">Consultanos por whatsapp</span>
    </a>
  );
}
