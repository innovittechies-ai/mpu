import type { NavChild, NavItem, PageId } from "./types";

export const contact = {
  phoneDisplay: "+91-755-2896281",
  phoneTel: "+917552896281",
  helplineDisplay: "+91-755-2896691",
  helplineTel: "+917552896691",
  email: "admissionbpl@patelcollege.com",
  bhopal: ["Ratibad, Bhabdhada Road", "Bhopal, Madhya Pradesh 462044", "India"],
  indore: ["Ralamandal, Bypass Road", "Indore, Madhya Pradesh 452020", "India"],
  indorePhone: "+91-731-2437100",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Patel+Group+of+Institutions+Ratibad+Bhabdhada+Road+Bhopal",
  mapsEmbed:
    "https://maps.google.com/maps?q=Ratibad%20Bhabdhada%20Road%20Bhopal%20462044&z=14&output=embed",
  officialSite: "https://www.patelcollege.com/about-pcst",
};

export const aboutLinks: NavChild[] = [
  { label: "About PCST", page: "about" },
  { label: "Chairman's Message", page: "chairman" },
  { label: "Managing Director's Message", page: "director" },
  { label: "Advisory Board", page: "advisory" },
  { label: "Core Faculty", page: "faculty" },
  { label: "Approvals & Affiliations", page: "approvals" },
];

export const navigation: NavItem[] = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about", children: aboutLinks },
  {
    label: "Academics",
    page: "academics",
    children: [
      { label: "Programmes", page: "academics", section: "programmes" },
      { label: "Academic Calendar", page: "academics", section: "calendar" },
      { label: "IQAC", page: "academics", section: "iqac" },
    ],
  },
  {
    label: "Admissions",
    page: "admissions",
    children: [
      { label: "Eligibility", page: "admissions", section: "eligibility" },
      { label: "Procedure", page: "admissions", section: "procedure" },
      { label: "Scholarships", page: "admissions", section: "scholarships" },
    ],
  },
  {
    label: "Placement",
    page: "placement",
    children: [
      { label: "Training & Placement", page: "placement", section: "tnp" },
      { label: "How Placement Works", page: "placement", section: "process" },
    ],
  },
  {
    label: "Facilities",
    page: "facilities",
    children: [
      { label: "Campus", page: "facilities", section: "campus" },
      { label: "Learning Spaces", page: "facilities", section: "learning" },
      { label: "Student Life", page: "facilities", section: "life" },
    ],
  },
  {
    label: "Gallery",
    page: "gallery",
    children: [
      { label: "Campus", page: "gallery", section: "campus-gallery" },
      { label: "Campus Events", page: "gallery", section: "events-gallery" },
    ],
  },
  {
    label: "Contact Us",
    page: "contact",
    children: [
      { label: "Reach Us", page: "contact", section: "reach" },
      { label: "Send a Message", page: "contact", section: "message" },
    ],
  },
];

export type PageMeta = {
  eyebrow: string;
  title: string;
  lede: string;
  trail: { label: string; page?: PageId }[];
};

export const pageMeta: Record<PageId, PageMeta> = {
  home: {
    eyebrow: "Patel Group of Institutions",
    title: "Patel College of Science and Technology",
    lede: "Engineering and technology education on the Bhopal campus of a group founded in 2002.",
    trail: [{ label: "Home" }],
  },
  about: {
    eyebrow: "About the institute",
    title: "About Patel College of Science and Technology (PCST)",
    lede: "A Bhopal campus of the Patel Group of Institutions, built around technical teaching, practice, and university affiliation.",
    trail: [
      { label: "Home", page: "home" },
      { label: "About Us", page: "about" },
      { label: "About PCST" },
    ],
  },
  chairman: {
    eyebrow: "About the institute",
    title: "Chairman's Message",
    lede: "A note from the Founder Chairperson of Patel Group of Institutions, Bhopal and Indore.",
    trail: [
      { label: "Home", page: "home" },
      { label: "About Us", page: "about" },
      { label: "Chairman's Message" },
    ],
  },
  director: {
    eyebrow: "About the institute",
    title: "Managing Director's Message",
    lede: "How the group's academic leadership describes study, practice, and student life on campus.",
    trail: [
      { label: "Home", page: "home" },
      { label: "About Us", page: "about" },
      { label: "Managing Director's Message" },
    ],
  },
  advisory: {
    eyebrow: "About the institute",
    title: "Advisory Board",
    lede: "The society and academic leadership that guide Patel Group of Institutions.",
    trail: [
      { label: "Home", page: "home" },
      { label: "About Us", page: "about" },
      { label: "Advisory Board" },
    ],
  },
  faculty: {
    eyebrow: "About the institute",
    title: "Core Faculty",
    lede: "Teaching at PCST is organised through engineering departments, laboratories, and student mentoring.",
    trail: [
      { label: "Home", page: "home" },
      { label: "About Us", page: "about" },
      { label: "Core Faculty" },
    ],
  },
  approvals: {
    eyebrow: "About the institute",
    title: "Approvals & Affiliations",
    lede: "The regulatory approvals and university affiliations published for the Patel Group campuses.",
    trail: [
      { label: "Home", page: "home" },
      { label: "About Us", page: "about" },
      { label: "Approvals & Affiliations" },
    ],
  },
  academics: {
    eyebrow: "Study at PCST",
    title: "Academics",
    lede: "Programmes, the academic calendar, and internal quality practice at the institute.",
    trail: [
      { label: "Home", page: "home" },
      { label: "Academics" },
    ],
  },
  admissions: {
    eyebrow: "Join the campus",
    title: "Admissions",
    lede: "How applicants approach eligibility, counselling, and the Bhopal admission office.",
    trail: [
      { label: "Home", page: "home" },
      { label: "Admissions" },
    ],
  },
  placement: {
    eyebrow: "Careers",
    title: "Training & Placement",
    lede: "The placement cell connects classroom learning with the habits employers look for.",
    trail: [
      { label: "Home", page: "home" },
      { label: "Placement" },
    ],
  },
  facilities: {
    eyebrow: "Life on campus",
    title: "Facilities",
    lede: "Teaching spaces and student amenities at the Ratibad campus in Bhopal.",
    trail: [
      { label: "Home", page: "home" },
      { label: "Facilities" },
    ],
  },
  gallery: {
    eyebrow: "Campus impressions",
    title: "Gallery",
    lede: "Illustrated views of campus life. These are design placeholders, not photographs of the grounds.",
    trail: [
      { label: "Home", page: "home" },
      { label: "Gallery" },
    ],
  },
  contact: {
    eyebrow: "We are here",
    title: "Contact Us",
    lede: "Reach the Bhopal campus and the admission office.",
    trail: [
      { label: "Home", page: "home" },
      { label: "Contact Us" },
    ],
  },
};

export const stats = [
  { value: "2002", label: "Founded under Vanshpati Smriti Shiksha Samiti" },
  { value: "02", label: "Campuses, in Bhopal and Indore" },
  { value: "AICTE", label: "Approval for technical programmes" },
  { value: "RGPV", label: "University affiliation for engineering" },
];

export const pillars = [
  {
    index: "01",
    title: "Academic excellence",
    text: "Teaching follows a university curriculum and an approval framework set for technical education. The aim is a strong hold on fundamentals, together with the tools students will meet in practice.",
  },
  {
    index: "02",
    title: "Campus infrastructure",
    text: "The Bhopal campus at Ratibad, on Bhabdhada Road, is organised for classroom teaching, laboratory work, and the shared routines of a residential academic community.",
  },
  {
    index: "03",
    title: "Experienced faculty",
    text: "Departments are led by faculty who teach, supervise laboratory work, and mentor students. The group's public account of campus life also includes lectures that sit outside the regular timetable.",
  },
  {
    index: "04",
    title: "Industry-oriented training",
    text: "The institute describes its purpose as education that industry can use. Hands-on practice, current technology, and communication sit alongside sports and cultural activity.",
  },
];

export const recognitions = [
  "Zee Edufuture Excellence Award, as published by the institute",
  "Top 3 in Madhya Pradesh, cited from Education World",
  "Top 50 in India, cited from Education World",
  "Named for placements and academics by Ind-24, as published by the institute",
];

export const facultyAreas = [
  {
    title: "Computer science & engineering",
    text: "Programming, systems, and applied computing taught through lectures and laboratory sessions.",
  },
  {
    title: "Electronics & communication",
    text: "Devices, signals, and communication systems, with bench work beside the theory papers.",
  },
  {
    title: "Electrical engineering",
    text: "Circuits, machines, and power systems introduced through coursework and practicals.",
  },
  {
    title: "Mechanical engineering",
    text: "Design, manufacturing, and thermal sciences, supported by workshop practice.",
  },
  {
    title: "Civil engineering",
    text: "Structures, materials, and site-facing subjects taught as part of the engineering suite.",
  },
  {
    title: "Applied sciences & humanities",
    text: "Mathematics, sciences, and communication that support the first years of a technical degree.",
  },
];
