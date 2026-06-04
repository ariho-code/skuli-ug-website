import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, X, Send, Bot } from 'lucide-react';

const GOLD = '#E8B84B';
const DARK = '#1a1a1a';

const FAQ: Record<string, string> = {
  'pricing': 'Our pricing starts at UGX 150,000 per term for schools under 150 pupils. Growth (150-400 pupils) is UGX 300,000/term. Pro (400-800 pupils) is UGX 500,000/term. Enterprise (800+) from UGX 800,000/term.',
  'price': 'Our pricing starts at UGX 150,000 per term. See the full pricing page at skuliug.com/pricing.',
  'demo': 'Book a free demo by calling +256 760 730 254 or sending a message on WhatsApp. We come to your school.',
  'features': 'Skuli UG includes: AI-powered report cards, fee tracking, mark sheets, e-learning, student management, analytics, staff chat, announcements, and more.',
  'report': 'Our AI automatically writes personalised report card comments per pupil. Teachers just enter marks — the system handles the writing.',
  'fees': 'The fee module lets you set up fee structures, generate invoices per pupil, track payments and see who is owing — all from your phone.',
  'mobile': 'Yes! Skuli UG is fully mobile-first. It works on any Android or iPhone using normal mobile data. No computer lab needed.',
  'elearning': 'E-learning is included from the Growth plan. Teachers can share notes, PDFs, videos and set assignments. Pupils access everything from their phones.',
  'trial': 'We offer a 14-day free trial. Contact us on +256 760 730 254 or sales@skuliug.com to get started.',
  'contact': 'Call or WhatsApp us: +256 760 730 254 or +256 709 234 352. Email: sales@skuliug.com',
};

function getReply(input: string): string {
  const q = input.toLowerCase();
  for (const key of Object.keys(FAQ)) {
    if (q.includes(key)) return FAQ[key];
  }
  return "I'm Skuli AI, your assistant for Skuli UG questions. Try asking about pricing, features, demos, e-learning or mobile access. For detailed help, contact sales@skuliug.com or call +256 760 730 254.";
}

interface Message { from: 'user' | 'bot'; text: string; }

export default function AiWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hi! I\'m Skuli AI. Ask me anything about Skuli UG — pricing, features, demos, or how the system works.' },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const next: Message[] = [...messages, { from: 'user', text }];
    setMessages(next);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: getReply(text) }]);
    }, 600);
  };

  return (
    <>
      {/* Trigger button — bottom-left, offset from WhatsApp */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: DARK, border: `2px solid ${GOLD}` }}
        aria-label="Open Skuli AI"
      >
        <Brain className="w-6 h-6" style={{ color: GOLD }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 left-6 z-50 w-80 rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(232,184,75,0.15)' }}>
                  <Brain className="w-4 h-4" style={{ color: GOLD }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Skuli AI</div>
                  <div className="text-[10px] text-white/35">Online</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto px-3 py-3 space-y-2.5">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                  {m.from === 'bot' && (
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(232,184,75,0.15)' }}>
                      <Bot className="w-3.5 h-3.5" style={{ color: GOLD }} />
                    </div>
                  )}
                  <div className="max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed"
                    style={{
                      background: m.from === 'user' ? GOLD : 'rgba(255,255,255,0.07)',
                      color: m.from === 'user' ? DARK : 'rgba(255,255,255,0.85)',
                    }}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex gap-2">
                <input
                  className="flex-1 rounded-xl px-3 py-2 text-xs outline-none"
                  style={{ background: 'rgba(255,255,255,0.07)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}
                  placeholder="Ask about pricing, features…"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                />
                <button onClick={send}
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ background: GOLD }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#d4a017')}
                  onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
                  <Send className="w-3.5 h-3.5" style={{ color: DARK }} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
