import { pageMeta } from "../content";
import { useSite } from "../site";

export function Hero() {
  const { page, navigate } = useSite();
  const meta = pageMeta[page];

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,18,60,0.35),transparent_36%),linear-gradient(115deg,#0f172a_0%,#1e3a8a_52%,#0f172a_100%)]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,250,252,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-40 pt-12 sm:px-6 sm:pb-48 sm:pt-16 lg:pb-56">
        <nav aria-label="Breadcrumb" className="rise-in">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200">
            {meta.trail.map((crumb, index) => {
              const last = index === meta.trail.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true" className="text-rose-200">&gt;</span> : null}
                  {last || !crumb.page ? (
                    <span className={last ? "text-white" : undefined} aria-current={last ? "page" : undefined}>
                      {crumb.label}
                    </span>
                  ) : (
                    <button type="button" onClick={() => navigate(crumb.page!)} className="transition hover:text-white">
                      {crumb.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <p className="rise-in mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-rose-200">{meta.eyebrow}</p>
        <h1 className="rise-in mt-3 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {meta.title}
        </h1>
        <p className="rise-in mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">{meta.lede}</p>
      </div>
      <CampusArt />
    </section>
  );
}

function CampusArt() {
  return (
    <svg
      viewBox="0 0 1200 280"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full sm:h-52 lg:h-60"
      role="img"
      aria-label="Illustrated placeholder of a college campus building"
      preserveAspectRatio="xMidYMax slice"
    >
      <rect x="0" y="190" width="1200" height="90" fill="#123024" />
      <path d="M0 210c80-28 140-8 220 6 90 16 130-20 220-8 100 14 140-18 240 0 90 16 150-10 230 8 70 16 180 4 290-18v82H0V210Z" fill="#1f4d38" />
      <rect x="80" y="230" width="1040" height="18" fill="#cbd5e1" opacity="0.85" />
      <g fill="#f6e7c1" stroke="#0f172a" strokeWidth="2">
        <path d="M250 214V168h40l-8-16h18l-8 16h40v46" />
        <path d="M910 214V168h40l-8-16h18l-8 16h40v46" />
      </g>
      <g fill="#14532d">
        <path d="M268 168c-18 18-28 8-22-16 10 8 18 6 28-2-2 8 2 14-6 18Z" />
        <path d="M310 160c14 16 28 8 18-18-8 10-16 8-26 0 4 8 2 14 8 18Z" />
        <path d="M928 168c-18 18-28 8-22-16 10 8 18 6 28-2-2 8 2 14-6 18Z" />
        <path d="M970 160c14 16 28 8 18-18-8 10-16 8-26 0 4 8 2 14 8 18Z" />
      </g>
      <g>
        <rect x="360" y="118" width="480" height="112" fill="#f3e2b8" />
        <rect x="430" y="78" width="340" height="48" fill="#f7ebcf" />
        <polygon points="430,78 600,36 770,78" fill="#9f1239" />
        <rect x="560" y="92" width="80" height="74" fill="#1e3a8a" />
        <rect x="576" y="150" width="48" height="80" fill="#0f172a" />
        <path d="M576 150h48" stroke="#f8fafc" strokeWidth="3" />
        {Array.from({ length: 5 }).map((_, column) =>
          Array.from({ length: 3 }).map((__, row) => (
            <rect
              key={`${column}-${row}`}
              x={388 + column * 86}
              y={132 + row * 28}
              width="22"
              height="16"
              fill={column === 2 ? "transparent" : "#1e3a8a"}
            />
          )),
        )}
        <text x="600" y="108" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" fill="#0f172a" fontWeight="700">
          PATEL COLLEGE OF SCIENCE & TECHNOLOGY
        </text>
      </g>
      <circle cx="150" cy="196" r="18" fill="#e2e8f0" opacity="0.7" />
      <rect x="132" y="196" width="36" height="14" rx="3" fill="#334155" />
    </svg>
  );
}
