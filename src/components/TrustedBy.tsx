import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, MapPin, Quote } from 'lucide-react';
import { FadeIn, Rise, GOLD, GOLD_DEEP, INK, goldTile } from '../lib/theme';
import { PARTNERS } from '../lib/partners';
import { PRIMARY, SECONDARY } from '../lib/portals';

const systemName = { primary: PRIMARY.name, secondary: SECONDARY.name } as const;

interface TrustedByProps {
  /** 'dark' sits on the ink sections, 'light' on the cream sections. */
  tone?: 'dark' | 'light';
  heading?: string;
  intro?: string;
  /** Hide the closing call to action when the section already sits near one. */
  showCta?: boolean;
}

export default function TrustedBy({
  tone = 'dark',
  heading = 'The schools already running on Skuli',
  intro = 'We would rather name the schools that trust us than print a wall of logos. Here is who is live on the platform right now.',
  showCta = true,
}: TrustedByProps) {
  const dark = tone === 'dark';

  const headingColor = dark ? '#fff' : '#0C2C57';
  const bodyColor = dark ? 'rgba(255,255,255,0.55)' : 'rgba(12,44,87,0.55)';
  const cardStyle = dark
    ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }
    : { background: '#fff', border: '1px solid rgba(12,44,87,0.07)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' };
  const accent = dark ? GOLD : GOLD_DEEP;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-10 sm:mb-12">
        <Rise>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Trusted by schools</p>
          <h2 className="font-display font-extrabold tracking-tight text-balance"
            style={{ fontSize: 'clamp(1.9rem,4.2vw,2.9rem)', lineHeight: 1.06, color: headingColor }}>
            {heading}
          </h2>
        </Rise>
        <FadeIn delay={0.15}>
          <p className="mt-4 text-[16.5px] text-pretty" style={{ color: bodyColor }}>{intro}</p>
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 sm:gap-5 items-stretch">
        {PARTNERS.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.08}>
            <article className="card-hover rounded-3xl p-6 sm:p-8 h-full flex flex-col sm:flex-row gap-6 sm:gap-7 items-start" style={cardStyle}>
              <div className="w-[120px] h-[120px] sm:w-[148px] sm:h-[148px] rounded-3xl grid place-items-center flex-shrink-0 p-3.5"
                style={{ background: '#fff', boxShadow: '0 10px 30px -14px rgba(0,0,0,0.45)' }}>
                <img src={p.logo} alt={`${p.name} crest`} width={148} height={148}
                  className="w-full h-full object-contain" loading="lazy" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl" style={{ color: headingColor }}>{p.name}</h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold"
                    style={{ background: 'rgba(16,185,129,0.14)', color: dark ? '#34d399' : '#0f8a5f' }}>
                    <BadgeCheck className="w-3 h-3" /> LIVE
                  </span>
                </div>

                <p className="flex items-center gap-1.5 text-[13px] font-semibold mb-4" style={{ color: accent }}>
                  <Quote className="w-3.5 h-3.5" /> {p.motto}
                </p>

                <p className="text-[14.5px] leading-relaxed mb-5" style={{ color: bodyColor }}>{p.note}</p>

                <dl className="flex flex-wrap gap-x-6 gap-y-2 text-[12.5px]" style={{ color: bodyColor }}>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
                    <dt className="sr-only">Location</dt><dd>{p.location}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">System</dt>
                    <dd><span className="font-semibold" style={{ color: headingColor }}>{systemName[p.system]}</span> · since {p.since}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </FadeIn>
        ))}

        <FadeIn delay={0.16}>
          <div className="card-hover rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-center"
            style={dark
              ? { background: 'rgba(245,122,18,0.07)', border: '1px solid rgba(245,122,18,0.22)' }
              : { background: INK, border: '1px solid rgba(245,122,18,0.25)' }}>
            <div className="w-12 h-12 rounded-2xl grid place-items-center mb-5" style={{ background: goldTile }}>
              <BadgeCheck className="w-6 h-6" style={{ color: GOLD }} strokeWidth={2} />
            </div>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mb-2 text-balance">
              Your school could be next on this list
            </h3>
            <p className="text-[14.5px] leading-relaxed text-white/55 mb-6">
              We onboard a school in a day: classes, learners, teacher accounts and the first set of report cards, set up on site by our team. Primary or secondary.
            </p>
            {showCta && (
              <Link to="/contact" className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm self-start">
                Book a free demo <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
