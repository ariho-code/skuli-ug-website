import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256760730254?text=Hello%2C%20I%27m%20interested%20in%20Skuli%20UG%20for%20my%20school."
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-3.5 pr-4 py-3 rounded-full transition-all shadow-paper-lg"
      style={{ background: '#25d366', color: '#fff' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
      <span className="hidden sm:inline text-[13px] font-semibold tracking-tight">Chat with us</span>
      <span aria-hidden className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-300 ring-2 ring-[#25d366] soft-pulse" />
    </a>
  );
}
