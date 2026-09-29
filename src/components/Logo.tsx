export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" className={compact ? "h-10 w-10" : "h-12 w-12"} aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="#0f172a" />
        <circle cx="32" cy="32" r="26" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <path d="M32 10 50 17v14.5C50 43 42.2 50.2 32 54 21.8 50.2 14 43 14 31.5V17L32 10z" fill="#9f1239" />
        <path d="M32 18.5 43 23v8.2c0 6.2-4.2 10.4-11 12.6-6.8-2.2-11-6.4-11-12.6V23l11-4.5z" fill="#0f172a" />
        <text x="32" y="36" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#fff">
          P
        </text>
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[1.45rem] font-extrabold tracking-[0.08em] text-crimson">PATEL</span>
        <span className="mt-1 block text-[10px] font-semibold tracking-[0.18em] text-navy">
          GROUP OF INSTITUTIONS
        </span>
        <span className="mt-1 block text-[10px] font-medium tracking-[0.22em] text-slate-500">
          BHOPAL · INDORE
        </span>
      </span>
    </span>
  );
}
