
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-accent-foreground rounded-full p-4 shadow-lg transition-all hover:scale-110"
      aria-label="Contate-nos pelo WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
