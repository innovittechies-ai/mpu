import type { ReactNode } from "react";
import { contact } from "../content";
import { EnquiryForm } from "../components/EnquiryForm";
import { useSite } from "../site";
import { Reveal, SectionHeading, cardClass } from "../components/ui";

function Block({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <Reveal>
        <SectionHeading kicker={kicker} title={title} />
        <div className="mt-4 space-y-3 text-[17px] leading-8 text-slate-700">{children}</div>
      </Reveal>
    </section>
  );
}

export function HomePage() {
  const { navigate, openEnquire } = useSite();
  const cards = [
    ["About the campus", "Founded in 2002, with teaching at Bhopal and Indore.", "about"],
    ["Admissions", "Talk to the Bhopal office about eligibility and the current session.", "admissions"],
    ["Campus life", "Classrooms, laboratories, and student activity on the Ratibad campus.", "facilities"],
  ] as const;

  return (
    <div className="space-y-10">
      <Reveal>
        <SectionHeading kicker="Welcome" title="Engineering education in Bhopal" />
        <p className="mt-4 max-w-3xl text-[17px] leading-8 text-slate-700">
          Patel College of Science and Technology is the Bhopal engineering campus of Patel Group of
          Institutions. The group was established in 2002 under Vanshpati Smriti Shiksha Samiti and
          also teaches in Indore.
        </p>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(([title, text, page], index) => (
          <Reveal key={title} delay={index * 80}>
            <button
              type="button"
              onClick={() => navigate(page)}
              className={`${cardClass} h-full p-5 text-left transition hover:-translate-y-1 hover:scale-[1.02]`}
            >
              <h3 className="text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-crimson">Open</span>
            </button>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <button
          type="button"
          onClick={() => openEnquire("Campus visit")}
          className="rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-brand"
        >
          Enquire about a campus visit
        </button>
      </Reveal>
    </div>
  );
}

export function AcademicsPage() {
  return (
    <div className="space-y-12">
      <Block id="programmes" kicker="Programmes" title="What students come to study">
        <p>
          PCST Bhopal is an engineering and technology college. Branches typically associated with the
          campus include computer science, electronics and communication, electrical, mechanical, and
          civil engineering, with applied sciences in the early semesters. The group’s other colleges
          also publish programmes in pharmacy, management, and education.
        </p>
        <p>
          The list of branches, intake, and fees is session-specific. Read the current prospectus or
          ask the admission office before treating any branch as open.
        </p>
      </Block>
      <Block id="calendar" kicker="Calendar" title="Academic calendar">
        <p>
          RGPV publishes the university calendar. The college then sets its own teaching, examination,
          and registration dates inside that frame. Those circulars are issued each session through the
          student cell and the official website.
        </p>
      </Block>
      <Block id="iqac" kicker="Quality" title="Internal Quality Assurance Cell">
        <p>
          The institute’s public site lists an Internal Quality Assurance Cell, with a vision and
          mission statement and a committee of members. The cell is the campus route for reviewing
          teaching quality and collecting the records that approval bodies expect.
        </p>
      </Block>
    </div>
  );
}

export function AdmissionsPage() {
  const { openEnquire } = useSite();
  return (
    <div className="space-y-12">
      <Block id="eligibility" kicker="Eligibility" title="Who can apply">
        <p>
          Engineering admission follows the eligibility set by AICTE, RGPV, and the Madhya Pradesh
          counselling authority for that year. Qualifying subjects, minimum marks, and entrance rules
          are printed in the state information bulletin. They are not fixed on this page, because they
          change.
        </p>
      </Block>
      <Block id="procedure" kicker="Procedure" title="How admission usually proceeds">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Check the year’s eligibility in the state counselling bulletin and the college prospectus.</li>
          <li>Register for Madhya Pradesh online counselling when the portal opens.</li>
          <li>Lock choices, including Patel College of Science and Technology, Bhopal, if it is listed.</li>
          <li>After allotment, report to the campus with the documents named in the allotment letter.</li>
          <li>For questions, call the Bhopal admission helpline or write to the admission email.</li>
        </ol>
      </Block>
      <Block id="scholarships" kicker="Support" title="Scholarships">
        <p>
          Scholarship notices are issued by the state and by the college admission office. Schemes,
          income limits, and document lists are published per session. Ask the office which schemes
          apply to your category before you rely on a fee waiver.
        </p>
        <button
          type="button"
          onClick={() => openEnquire("Scholarship question")}
          className="mt-2 rounded-lg bg-crimson px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-rose-800"
        >
          Ask about scholarships
        </button>
      </Block>
    </div>
  );
}

export function PlacementPage() {
  return (
    <div className="space-y-12">
      <Block id="tnp" kicker="Careers" title="Training and placement">
        <p>
          The group describes itself as an institute recognised for placements and academics. The
          training and placement cell is the campus office that prepares students for employers and
          coordinates campus processes. Recruiter names and yearly figures belong in the current
          placement report, which this preview does not reproduce.
        </p>
      </Block>
      <Block id="process" kicker="Process" title="How students are prepared">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Aptitude & communication", "Practice beyond the syllabus, so interviews are not the first time a student speaks about their work."],
            ["Technical depth", "Projects and laboratory work that a student can explain."],
            ["Campus process", "The cell shares schedules and employer visits with eligible batches."],
          ].map(([title, text]) => (
            <article key={title} className={`${cardClass} p-4`}>
              <h3 className="font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Block>
    </div>
  );
}

const facilities = [
  ["Teaching blocks", "Classrooms arranged for lectures across the engineering departments."],
  ["Laboratories", "Department labs for practical papers that sit beside theory."],
  ["Library", "A reading collection for syllabus texts and reference work."],
  ["Student activity", "Sports and cultural programmes, including the group’s annual Umang festival."],
];

export function FacilitiesPage() {
  return (
    <div className="space-y-12">
      <Block id="campus" kicker="Campus" title="Ratibad, Bhopal">
        <p>
          The Bhopal address published by the group is Ratibad, Bhabdhada Road, Bhopal, Madhya Pradesh
          462044. A second campus of the group is at Ralamandal, Bypass Road, Indore.
        </p>
      </Block>
      <section id="learning" className="scroll-mt-32">
        <Reveal>
          <SectionHeading kicker="Spaces" title="Learning on campus" />
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {facilities.map(([title, text]) => (
              <article key={title} className={`${cardClass} p-5 transition hover:scale-[1.02]`}>
                <h3 className="font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
      <Block id="life" kicker="Student life" title="Beyond the timetable">
        <p>
          The institute’s own description of student life includes motivational lectures, sports, and
          cultural programmes. Umang is the annual festival named in the group’s news notes, with
          cultural and sports events on campus.
        </p>
      </Block>
    </div>
  );
}

const tiles = [
  { title: "Main block", caption: "Cream facade, central steps, teaching wings.", from: "#1e3a8a", to: "#f3e2b8", id: "campus-gallery" },
  { title: "Approach road", caption: "Palms and a front court in front of the block.", from: "#14532d", to: "#f8fafc" },
  { title: "Laboratories", caption: "Bench work beside the theory papers.", from: "#0f172a", to: "#38bdf8" },
  { title: "Library", caption: "A quiet room for syllabus and reference reading.", from: "#7f1d1d", to: "#fde68a" },
  { title: "Umang stage", caption: "The annual cultural gathering.", from: "#9f1239", to: "#1e3a8a", id: "events-gallery" },
  { title: "Sports ground", caption: "Outdoor games during the festival calendar.", from: "#166534", to: "#bbf7d0" },
];

export function GalleryPage() {
  return (
    <div className="space-y-8">
      <Reveal>
        <SectionHeading kicker="Placeholders" title="Campus impressions" />
        <p className="mt-4 text-sm leading-6 text-slate-600">
          These panels are drawn for the page. They are not photographs of Patel College.
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile, index) => (
          <Reveal key={tile.title} delay={index * 50}>
            <figure
              id={tile.id}
              className="scroll-mt-32 overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)] ring-1 ring-slate-200/80"
            >
              <div
                className="flex h-44 items-end p-4 transition duration-300 hover:scale-[1.03]"
                style={{ background: `linear-gradient(145deg, ${tile.from}, ${tile.to})` }}
              >
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                  {tile.title}
                </span>
              </div>
              <figcaption className="px-4 py-3 text-sm text-slate-600">{tile.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section id="reach" className="scroll-mt-32 space-y-4">
        <Reveal>
          <SectionHeading kicker="Visit" title="Bhopal campus" />
          <div className={`${cardClass} mt-5 space-y-3 p-5 text-sm leading-7 text-slate-700`}>
            <p>
              <span className="font-semibold text-navy">Address. </span>
              {contact.bhopal.join(", ")}
            </p>
            <p>
              <span className="font-semibold text-navy">Phone. </span>
              <a className="text-brand hover:text-crimson" href={`tel:${contact.phoneTel}`}>
                {contact.phoneDisplay}
              </a>
              {" and "}
              <a className="text-brand hover:text-crimson" href={`tel:${contact.helplineTel}`}>
                {contact.helplineDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-navy">Admission email. </span>
              <a className="text-brand hover:text-crimson" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-navy">Indore campus. </span>
              {contact.indore.join(", ")} · {contact.indorePhone}
            </p>
          </div>
          <div className={`${cardClass} mt-4 overflow-hidden`}>
            <iframe
              title="Map of the Bhopal campus area"
              src={contact.mapsEmbed}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
      <section id="message" className={`scroll-mt-32 ${cardClass} p-5`}>
        <h2 className="text-xl font-bold text-navy">Send a message</h2>
        <p className="mt-2 mb-4 text-sm leading-6 text-slate-600">
          Use the phone or email above for a real enquiry. This form stays in the browser.
        </p>
        <EnquiryForm topic="Contact the admission office" />
      </section>
    </div>
  );
}
