import { useEffect, useRef, useState, type ReactNode } from "react";

export const cardClass =
  "rounded-2xl bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)] ring-1 ring-slate-200/80";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -32px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  id,
}: {
  kicker?: string;
  title: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-32">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson">{kicker}</p>
      ) : null}
      <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy sm:text-[1.7rem]">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-crimson" />
    </div>
  );
}

export function TextLink({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-semibold text-brand underline decoration-crimson/40 underline-offset-4 transition hover:text-crimson hover:decoration-crimson"
    >
      {children}
    </button>
  );
}
