import { facultyAreas, pillars, recognitions } from "../content";
import { useSite } from "../site";
import { Reveal, SectionHeading, cardClass } from "../components/ui";

export function AboutHome() {
  const { navigate, openEnquire } = useSite();

  return (
    <article className="space-y-12">
      <Reveal>
        <SectionHeading kicker="Introduction" title="A technical campus of the Patel Group" />
        <div className="mt-5 space-y-4 text-[17px] leading-8 text-slate-700">
          <p>
            Patel College of Science and Technology (PCST), Bhopal, belongs to the Patel Group of
            Institutions. The group was founded in 2002 under Vanshpati Smriti Shiksha Samiti and
            teaches at campuses in Bhopal and Indore. It was among the earlier technical institutes
            in Madhya Pradesh.
          </p>
          <p>
            Engineering programmes at the group are conducted with approval from the All India Council
            for Technical Education and affiliation to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV),
            Bhopal. Depending on the college and the degree, the group also publishes approvals from
            PCI and NCTE, and affiliations with Barkatullah University and DAVV Indore.
          </p>
          <p>
            The Bhopal campus stands at Ratibad, on Bhabdhada Road. Public notes from the institute
            mention the Zee Edufuture Excellence Award, Education World rankings placing the group
            among the top three in Madhya Pradesh and the top fifty in India, and recognition from
            Ind-24 for placements and academics.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading kicker="Core pillars" title="What the campus is organised around" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`${cardClass} p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(15,23,42,0.45)]`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <p className="text-sm font-bold tracking-[0.18em] text-crimson">{pillar.index}</p>
              <h3 className="mt-2 text-lg font-bold text-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading kicker="Direction" title="Vision and mission" />
        <p className="mt-3 text-sm text-slate-500">As published by Patel Group of Institutions, with wording smoothed for clarity.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl bg-navy p-6 text-white shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">Vision</p>
            <p className="mt-3 text-lg font-semibold leading-8">
              To train and educate students with futuristic knowledge to serve industry.
            </p>
          </article>
          <article className="rounded-2xl border-l-4 border-crimson bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)] ring-1 ring-slate-200/80">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">Mission</p>
            <p className="mt-3 text-lg font-semibold leading-8 text-navy">
              To establish a higher-learning technical institution as a centre of excellence, and to
              impart quality education that serves the nation and industry.
            </p>
          </article>
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading kicker="Recognition" title="Published distinctions" />
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {recognitions.map((item) => (
            <li key={item} className={`${cardClass} px-4 py-3 text-sm leading-6 text-slate-700`}>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-2xl bg-brand text-white shadow-lg">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.4fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-100">Prospectus</p>
              <h2 className="mt-2 text-2xl font-bold">Ask the admission office for the current prospectus</h2>
              <p className="mt-2 max-w-xl text-sm leading-7 text-blue-100">
                Seat intake, fees, and the programme list change by session. The Bhopal office shares
                the latest prospectus on request.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => openEnquire("Prospectus request")}
                className="rounded-lg bg-crimson px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-rose-800"
              >
                Request prospectus
              </button>
              <button
                type="button"
                onClick={() => navigate("admissions")}
                className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:scale-105 hover:bg-white/20"
              >
                Admission steps
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function ChairmanView() {
  return (
    <article className="space-y-8">
      <Reveal>
        <SectionHeading kicker="Leadership" title="Message from the Founder Chairperson" />
        <div className={`${cardClass} mt-6 p-6 sm:p-8`}>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-bold text-white" aria-hidden="true">
              PP
            </div>
            <div>
              <p className="text-lg font-bold text-navy">Mrs. Preeti Patel</p>
              <p className="text-sm text-slate-500">Founder Chairperson, Patel Group of Institutions, Bhopal & Indore</p>
            </div>
          </div>
          <blockquote className="mt-6 border-l-4 border-crimson pl-4 text-[17px] leading-8 text-slate-700">
            Under Vanshpati Smriti Shiksha Samiti, Bhopal, Patel Group of Institutions has worked to
            build a centre of excellence in higher education. The published aim is to prepare engineers
            and professionals who combine managerial skill, a positive attitude, and ethical values, and
            who can contribute to socio-economic development through technology.
          </blockquote>
          <p className="mt-4 text-sm text-slate-500">
            Rendered from the chairperson’s message on the institute website, not a new statement.
          </p>
        </div>
      </Reveal>
    </article>
  );
}

export function DirectorView() {
  return (
    <article className="space-y-8">
      <Reveal>
        <SectionHeading kicker="Leadership" title="From the academic leadership" />
        <div className="mt-6 space-y-4 text-[17px] leading-8 text-slate-700">
          <p>
            The public face of academic leadership at the group includes Group Director Dr. Gyanendra
            Singh. The institute describes campus education as hands-on practice with current
            technology, supported by motivational lectures, sports, and cultural activity.
          </p>
          <p>
            That is the direction this page carries in place of a separate “managing director” letter:
            skill and knowledge taught together, with conduct and campus life treated as part of a
            technical education.
          </p>
        </div>
        <div className={`${cardClass} mt-6 grid gap-4 p-6 sm:grid-cols-3`}>
          {[
            ["Practice", "Laboratory and workshop work sit beside lectures."],
            ["Current tools", "Students are pointed toward technologies in use now."],
            ["Campus life", "Sports, culture, and talks are part of the published student experience."],
          ].map(([title, text]) => (
            <div key={title}>
              <h3 className="font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </article>
  );
}

export function AdvisoryView() {
  const people = [
    ["Mrs. Preeti Patel", "Founder Chairperson"],
    ["Dr. Ajit Singh Patel", "Vice Chairman"],
    ["Dr. Gyanendra Singh", "Group Director"],
  ];

  return (
    <article className="space-y-8">
      <Reveal>
        <SectionHeading kicker="Governance" title="Who guides the institutions" />
        <p className="mt-5 text-[17px] leading-8 text-slate-700">
          Patel Group of Institutions operates under Vanshpati Smriti Shiksha Samiti. Public leadership
          named by the group includes the chairperson, vice chairman, and group director below. They
          work with campus academic heads on quality, compliance, and the running of the colleges.
        </p>
        <ul className="mt-6 space-y-3">
          {people.map(([name, role]) => (
            <li key={name} className={`${cardClass} flex items-center justify-between gap-4 px-5 py-4`}>
              <span className="font-semibold text-navy">{name}</span>
              <span className="text-sm text-crimson">{role}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
}

export function FacultyView() {
  return (
    <article className="space-y-8">
      <Reveal>
        <SectionHeading kicker="Teaching" title="Academic areas and faculty work" />
        <p className="mt-5 text-[17px] leading-8 text-slate-700">
          Core teaching at an engineering campus of the group is organised by department. Faculty take
          lectures, laboratory sessions, and student mentoring. The areas below are the engineering
          disciplines associated with PCST. Confirm the branches open in the current session with the
          admission office before you apply.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {facultyAreas.map((area) => (
            <article key={area.title} className={`${cardClass} p-5 transition hover:-translate-y-1`}>
              <h3 className="font-bold text-navy">{area.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{area.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </article>
  );
}

export function ApprovalsView() {
  const rows = [
    ["AICTE", "All India Council for Technical Education — approval body for technical programmes."],
    ["RGPV", "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal — affiliating university for engineering."],
    ["PCI & NCTE", "Pharmacy Council of India and NCTE, where the group runs pharmacy or education programmes."],
    ["Other universities", "Barkatullah University and DAVV Indore, for degree programmes the group affiliates there."],
    ["State admission", "Madhya Pradesh counselling and the institute admission office, for seat allotment."],
  ];

  return (
    <article>
      <Reveal>
        <SectionHeading kicker="Compliance" title="Approvals and affiliations" />
        <p className="mt-5 text-[17px] leading-8 text-slate-700">
          The group publishes these bodies as the frame for its colleges. Which approval applies
          depends on the programme and the campus. Use the latest mandatory disclosure on the official
          website for a given college.
        </p>
        <dl className="mt-6 space-y-3">
          {rows.map(([name, text]) => (
            <div key={name} className={`${cardClass} px-5 py-4`}>
              <dt className="font-bold text-navy">{name}</dt>
              <dd className="mt-1 text-sm leading-6 text-slate-600">{text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-sm">
          <a
            className="font-semibold text-brand underline decoration-crimson/40 underline-offset-4 hover:text-crimson"
            href="https://www.patelcollege.com/"
            target="_blank"
            rel="noreferrer"
          >
            Official Patel Group website
          </a>
        </p>
      </Reveal>
    </article>
  );
}
