import { aboutLinks } from "../content";
import { useSite } from "../site";
import { cardClass } from "./ui";

export function Sidebar({ variant }: { variant: "desktop" | "mobile" }) {
  const { page, navigate } = useSite();

  const links = (
    <ul className="mt-4 space-y-1">
      {aboutLinks.map((link) => {
        const active = page === link.page;
        return (
          <li key={link.page}>
            <button
              type="button"
              onClick={() => navigate(link.page)}
              aria-current={active ? "page" : undefined}
              className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm transition hover:translate-x-1 hover:bg-rose-50 hover:text-crimson ${
                active
                  ? "border-l-4 border-crimson bg-rose-50 font-semibold text-crimson"
                  : "border-l-4 border-transparent text-slate-700"
              }`}
            >
              {link.label}
            </button>
          </li>
        );
      })}
    </ul>
  );

  if (variant === "mobile") {
    return (
      <details className={`${cardClass} group lg:hidden`}>
        <summary className="cursor-pointer list-none px-5 py-4 font-bold text-navy [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between">
            About Us
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-crimson group-open:hidden">Show</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-crimson group-open:inline">Hide</span>
          </span>
        </summary>
        <div className="border-t border-slate-100 px-3 pb-4">{links}</div>
      </details>
    );
  }

  return (
    <aside className="hidden lg:block">
      <div className={`sticky top-28 ${cardClass} p-5`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">In this section</p>
        <h2 className="mt-1 text-xl font-bold text-navy">About Us</h2>
        {links}
      </div>
    </aside>
  );
}
