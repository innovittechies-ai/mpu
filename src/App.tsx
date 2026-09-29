import { EnquireModal } from "./components/EnquireModal";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Sidebar } from "./components/Sidebar";
import { SiteHeader } from "./components/SiteHeader";
import { stats } from "./content";
import { SiteProvider, useSite } from "./site";
import { ABOUT_PAGES } from "./types";
import {
  AboutHome,
  AdvisoryView,
  ApprovalsView,
  ChairmanView,
  DirectorView,
  FacultyView,
} from "./views/AboutViews";
import {
  AcademicsPage,
  AdmissionsPage,
  ContactPage,
  FacilitiesPage,
  GalleryPage,
  HomePage,
  PlacementPage,
} from "./views/SitePages";

function AboutSwitch() {
  const { page } = useSite();
  switch (page) {
    case "chairman":
      return <ChairmanView />;
    case "director":
      return <DirectorView />;
    case "advisory":
      return <AdvisoryView />;
    case "faculty":
      return <FacultyView />;
    case "approvals":
      return <ApprovalsView />;
    default:
      return <AboutHome />;
  }
}

function PageBody() {
  const { page } = useSite();
  switch (page) {
    case "home":
      return <HomePage />;
    case "academics":
      return <AcademicsPage />;
    case "admissions":
      return <AdmissionsPage />;
    case "placement":
      return <PlacementPage />;
    case "facilities":
      return <FacilitiesPage />;
    case "gallery":
      return <GalleryPage />;
    case "contact":
      return <ContactPage />;
    default:
      return null;
  }
}

function Shell() {
  const { page } = useSite();
  const aboutLayout = ABOUT_PAGES.includes(page);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-slate-800">
      <SiteHeader />
      <Hero />
      {(page === "home" || page === "about") && (
        <div className="relative z-10 mx-auto -mt-10 w-full max-w-7xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.value} className="rounded-2xl bg-white px-4 py-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.65)] ring-1 ring-slate-200/80">
                <dt className="text-xl font-extrabold text-navy">{item.value}</dt>
                <dd className="mt-1 text-xs leading-5 text-slate-500">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      <main id="main" className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6">
        {aboutLayout ? (
          <div className="grid items-start gap-8 lg:grid-cols-4">
            <div className="min-w-0 lg:col-span-3">
              <AboutSwitch />
              <div className="mt-10">
                <Sidebar variant="mobile" />
              </div>
            </div>
            <Sidebar variant="desktop" />
          </div>
        ) : (
          <PageBody />
        )}
      </main>
      <Footer />
      <EnquireModal />
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <Shell />
    </SiteProvider>
  );
}
