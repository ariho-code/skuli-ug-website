import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot } from 'lucide-react';

const FAQ: Record<string, string> = {
  'pricing': 'Pricing starts at UGX 150,000 / term for under 150 pupils. Growth (150–400) is 300,000/term. Pro (400–800) is 500,000/term. Enterprise (800+) from 800,000/term.',
  'price':   'Pricing starts at UGX 150,000 per term. Full breakdown at skuliug.com/pricing.',
  'demo':    'Book a free demo by calling +256 760 730 254 or sending us a WhatsApp. We come to your school.',
  'features':'Skuli UG includes: AI-powered report cards, fee tracking, mark sheets, e-learning, student management, analytics, staff chat, and more.',
  'report':  'Our AI drafts personalised report card comments per pupil. Teachers enter marks; Skuli writes the comments.',
  'fees':    'The fee module lets you set up fee structures, generate invoices per pupil, track payments and see who is owing — all from your phone.',
  'mobile':  'Yes. Skuli UG is fully mobile-first. Works on any Android or iPhone on normal mobile data.',
  'elearning': 'E-learning is included from the Growth plan. Share notes, PDFs, videos and set assignments.',
  'trial':   'We offer a 14-day free trial. Call +256 760 730 254 or email sales@skuliug.com to get started.',
  'contact': 'Call or WhatsApp +256 760 730 254 or +256 709 234 352. Email: sales@skuliug.com',
};

function getReply(input: string): string {
  const q = input.toLowerCase();
  for (const key of Object.keys(FAQ)) if (q.includes(key)) return FAQ[key];
  return "Hi — I'm Skuli AI. Ask me about pricing, features, demos, e-learning or mobile access. For deeper help: sales@skuliug.com or +256 760 730 254.";
}

interface Message { from: 'user' | 'bot'; text: string; }

export default function AiWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "Hi — I'm Skuli AI. Ask me anything about Skuli UG: pricing, features, demos or how the system works." },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');
    setTimeout(() => setMessages(prev => [...prev, { from: 'bot', text: getReply(text) }]), 500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="group fixed bottom-6 left-6 z-50 flex items-center gap-2 pl-3 pr-4 py-3 rounded-full transition-all shadow-paper-lg"
        style={{ background: 'var(--ink)', color: 'var(--paper-2)' }}
        aria-label="Open Skuli AI"
      >
        <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(232,195,107,0.16)' }}>
          <Sparkles className="w-3.5 h-3.5 text-gold-soft" />
        </span>
        <span className="hidden sm:inline text-[13px] font-medium">Ask Skuli AI</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-6 z-50 w-[340px] rounded-2xl overflow-hidden shadow-paper-lg"
            style={{ background: 'var(--paper-2)', border: '1px solid var(--line)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-ink">
                  <Sparkles className="w-4 h-4 text-gold-soft" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-[15px] font-semibold tracking-tight text-ink">Skuli AI</div>
                  <div className="text-[10.5px] text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 soft-pulse" /> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-ink transition-colors p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-4 space-y-3" style={{ background: 'var(--paper-2)' }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                  {m.from === 'bot' && (
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 bg-paper border border-[color:var(--line)]">
                      <Bot className="w-3.5 h-3.5 text-gold" />
                    </div>
                  )}
                  <div className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${m.from === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}
                    style={
                      m.from === 'user'
                        ? { background: 'var(--ink)', color: 'var(--paper-2)' }
                        : { background: 'var(--paper)', color: 'var(--ink)', border: '1px solid var(--line)' }
                    }>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-[color:var(--line)]" style={{ background: 'var(--paper)' }}>
              <div className="flex items-center gap-2">
                <input
                  className="flex-1 rounded-full px-4 py-2 text-[13px] outline-none transition-colors"
                  style={{ background: 'var(--paper-2)', border: '1px solid var(--line)', color: 'var(--ink)' }}
                  placeholder="Ask about pricing, features…"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                />
                <button onClick={send}
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all bg-ink text-paper-2 hover:bg-[#0F0D0A]">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
