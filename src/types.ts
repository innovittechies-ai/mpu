export const PAGE_IDS = [
  "home",
  "about",
  "chairman",
  "director",
  "advisory",
  "faculty",
  "approvals",
  "academics",
  "admissions",
  "placement",
  "facilities",
  "gallery",
  "contact",
] as const;

export type PageId = (typeof PAGE_IDS)[number];

export type NavChild = {
  label: string;
  page: PageId;
  section?: string;
};

export type NavItem = {
  label: string;
  page: PageId;
  children?: NavChild[];
};

export function isPageId(value: string): value is PageId {
  return (PAGE_IDS as readonly string[]).includes(value);
}

export function parseHash(hash: string): { page: PageId; section?: string } {
  const raw = hash.replace(/^#/, "").trim();
  const [pagePart, section] = raw.split("/");
  return {
    page: pagePart && isPageId(pagePart) ? pagePart : "about",
    section: section || undefined,
  };
}

export const ABOUT_PAGES: PageId[] = [
  "about",
  "chairman",
  "director",
  "advisory",
  "faculty",
  "approvals",
];
