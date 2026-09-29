import { useState } from "react";
import { contact, navigation } from "../content";
import { useSite } from "../site";
import { ABOUT_PAGES, type NavItem, type PageId } from "../types";
import { ChevronIcon, CloseIcon, FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon, MenuIcon, PhoneIcon, YouTubeIcon } from "./Icons";
import { Logo } from "./Logo";

function itemActive(item: NavItem, page: PageId) {
  if (item.page === page) return true;
  if (item.children?.some((child) => child.page === page)) return true;
  if (item.page === "about" && ABOUT_PAGES.includes(page)) return true;
  return false;
}

const social = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "YouTube", icon: YouTubeIcon },
];

export function SiteHeader() {
  const { page, navigate, openEnquire } = useSite();
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<string | null>(null);

  function go(next: PageId, section?: string) {
    setOpen(false);
    setGroup(null);
    navigate(next, section);
  }

  return (
    <header className="sticky top-0 z-40">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
      >
        Skip to content
      </a>
      <div className="bg-navy text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-xs sm:px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a className="inline-flex items-center gap-1.5 transition hover:text-white" href={`tel:${contact.phoneTel}`}>
              <PhoneIcon className="h-3.5 w-3.5 text-rose-200" />
              {contact.phoneDisplay}
            </a>
            <a className="inline-flex items-center gap-1.5 transition hover:text-white" href={`mailto:${contact.email}`}>
              <MailIcon className="h-3.5 w-3.5 text-rose-200" />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a className="inline-flex items-center gap-1.5 transition hover:text-white" href={`tel:${contact.helplineTel}`}>
              <PhoneIcon className="h-3.5 w-3.5 text-rose-200" />
              Admission helpline {contact.helplineDisplay}
            </a>
          </div>
          <div className="flex items-center gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={contact.officialSite}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.label} — opens the official college website`}
                className="rounded-full p-1 text-slate-200 transition hover:scale-110 hover:bg-white/10 hover:text-white"
              >
                <item.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <button type="button" onClick={() => go("home")} className="py-3 transition hover:scale-[1.02]" aria-label="Patel Group of Institutions, home">
            <Logo />
          </button>

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {navigation.map((item) => {
              const active = itemActive(item, page);
              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    onClick={() => go(item.page)}
                    className={`inline-flex items-center gap-1 px-2.5 py-6 text-[13px] font-semibold tracking-wide transition hover:text-crimson xl:px-3 ${
                      active ? "text-crimson" : "text-navy"
                    }`}
                    aria-haspopup={item.children ? "true" : undefined}
                  >
                    {item.label}
                    {item.children ? (
                      <ChevronIcon className="h-3.5 w-3.5 transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                    ) : null}
                    <span
                      className={`absolute inset-x-2.5 bottom-3 h-0.5 origin-left rounded-full bg-crimson transition duration-200 xl:inset-x-3 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                  {item.children ? (
                    <div className="invisible absolute left-0 top-full z-50 min-w-64 pt-1 opacity-0 translate-y-1 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.45)]">
                        <div className="h-1 bg-crimson" />
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            type="button"
                            onClick={() => go(child.page, child.section)}
                            className={`block w-full px-4 py-2.5 text-left text-sm transition hover:translate-x-1 hover:bg-paper hover:text-crimson ${
                              page === child.page && !child.section ? "bg-rose-50 font-semibold text-crimson" : "text-slate-700"
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openEnquire("Admission enquiry")}
              className="hidden rounded-lg bg-crimson px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:scale-105 hover:bg-rose-800 sm:inline-flex"
            >
              Enquire Now
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-navy transition hover:border-crimson hover:text-crimson lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div id="mobile-nav" className="menu-in max-h-[70vh] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-slate-100">
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => go(item.page)}
                      className={`flex-1 py-3 text-left text-sm font-semibold ${itemActive(item, page) ? "text-crimson" : "text-navy"}`}
                    >
                      {item.label}
                    </button>
                    {item.children ? (
                      <button
                        type="button"
                        aria-expanded={group === item.label}
                        aria-label={`${group === item.label ? "Collapse" : "Expand"} ${item.label}`}
                        onClick={() => setGroup((current) => (current === item.label ? null : item.label))}
                        className="rounded-md p-2 text-slate-500"
                      >
                        <ChevronIcon className={`h-4 w-4 transition ${group === item.label ? "rotate-180" : ""}`} />
                      </button>
                    ) : null}
                  </div>
                  {item.children && group === item.label ? (
                    <div className="mb-2 space-y-1 rounded-lg bg-paper p-2">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          type="button"
                          onClick={() => go(child.page, child.section)}
                          className="block w-full rounded-md px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-white hover:text-crimson"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openEnquire("Admission enquiry");
                }}
                className="mt-3 w-full rounded-lg bg-crimson px-4 py-3 text-sm font-semibold text-white"
              >
                Enquire Now
              </button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
