import { contact } from "../content";
import { useSite } from "../site";
import type { PageId } from "../types";
import { FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon, YouTubeIcon } from "./Icons";

const quickLinks: { label: string; page: PageId; section?: string }[] = [
  { label: "About PCST", page: "about" },
  { label: "Academics", page: "academics" },
  { label: "Admissions", page: "admissions" },
  { label: "Placement", page: "placement" },
  { label: "Facilities", page: "facilities" },
  { label: "Approvals & Affiliations", page: "approvals" },
  { label: "IQAC", page: "academics", section: "iqac" },
  { label: "Contact", page: "contact" },
];

const social = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "YouTube", icon: YouTubeIcon },
];

export function Footer() {
  const { navigate } = useSite();

  return (
    <footer className="bg-navy text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-[0.12em] text-white">PATEL GROUP</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">
            College of Science & Technology
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Patel College of Science and Technology, Bhopal, is part of Patel Group of Institutions,
            founded in 2002 under Vanshpati Smriti Shiksha Samiti. The group teaches across campuses in
            Bhopal and Indore.
          </p>
          <div className="mt-5 flex gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={contact.officialSite}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-crimson"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Academics</h2>
          <div className="mt-3 h-0.5 w-10 bg-crimson" />
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => navigate(link.page, link.section)}
                  className="text-sm text-slate-300 transition hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div id="footer-contact">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h2>
          <div className="mt-3 h-0.5 w-10 bg-crimson" />
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <li className="flex gap-2">
              <PinIcon className="mt-1 h-4 w-4 shrink-0 text-rose-200" />
              <span>
                PGOI Bhopal
                <br />
                {contact.bhopal.join(", ")}
              </span>
            </li>
            <li className="flex gap-2">
              <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-rose-200" />
              <span>
                <a className="hover:text-white" href={`tel:${contact.phoneTel}`}>
                  {contact.phoneDisplay}
                </a>
                {" · "}
                <a className="hover:text-white" href={`tel:${contact.helplineTel}`}>
                  {contact.helplineDisplay}
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <MailIcon className="mt-1 h-4 w-4 shrink-0 text-rose-200" />
              <a className="hover:text-white" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li className="text-slate-400">
              PGOI Indore: {contact.indore.join(", ")} · {contact.indorePhone}
            </li>
          </ul>
          <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/10">
            <iframe
              title="Map placeholder for Patel Group of Institutions, Ratibad, Bhopal"
              src={contact.mapsEmbed}
              className="h-40 w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="block bg-white/5 px-3 py-2 text-xs font-semibold text-rose-100 transition hover:bg-white/10 hover:text-white"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Patel Group of Institutions. All rights reserved.</p>
          <p>Interface recreation · academic portal design · content drawn from public institute pages.</p>
        </div>
      </div>
    </footer>
  );
}
