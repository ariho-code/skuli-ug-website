import { Download, Share, SquarePlus } from 'lucide-react';
import { useInstallPrompt } from '../lib/useInstallPrompt';
import { GOLD, goldTile } from '../lib/theme';

export default function InstallApp() {
  const { canInstall, isIOS, isInstalled, promptInstall } = useInstallPrompt();

  if (isInstalled || (!canInstall && !isIOS)) return null;

  return (
    <div className="card-hover rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5"
      style={{ background: 'rgba(245,122,18,0.06)', border: '1px solid rgba(245,122,18,0.22)' }}>
      <div className="w-12 h-12 rounded-2xl grid place-items-center flex-shrink-0" style={{ background: goldTile }}>
        <Download className="w-6 h-6" style={{ color: GOLD }} />
      </div>
      <div className="flex-1">
        <h3 className="font-display font-bold text-white text-[15px] sm:text-base mb-1">Install Skuli UG on this device</h3>
        {canInstall ? (
          <p className="text-sm text-white/55">Add it to your home screen or desktop for one-tap access — no app store needed.</p>
        ) : (
          <p className="text-sm text-white/55 flex flex-wrap items-center gap-1.5">
            On iPhone / iPad: tap <Share className="w-3.5 h-3.5 inline-block flex-shrink-0" style={{ color: GOLD }} /> Share, then
            <span className="inline-flex items-center gap-1 font-semibold text-white/75"><SquarePlus className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} /> Add to Home Screen</span>.
          </p>
        )}
      </div>
      {canInstall && (
        <button onClick={promptInstall} className="btn-gold flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm whitespace-nowrap">
          <Download className="w-4 h-4" /> Install App
        </button>
      )}
    </div>
  );
}
