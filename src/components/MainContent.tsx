import React, { useState } from 'react';
import {
  Compass,
  Target,
  GraduationCap,
  Award,
  BookOpen,
  Building2,
  Users,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Quote,
  ChevronDown,
  Layers,
  FileCheck,
  ExternalLink,
} from 'lucide-react';
import {
  leadershipData,
  corePillars,
  accreditationData,
  campusFacilities,
} from '../data/pcstData';

interface MainContentProps {
  onOpenAdmission: () => void;
  onOpenTour: () => void;
  onOpenBrochure: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  onOpenAdmission,
  onOpenTour,
  onOpenBrochure,
}) => {
  const [selectedLeader, setSelectedLeader] = useState('chairperson');
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const currentLeader = leadershipData.find((l) => l.id === selectedLeader) || leadershipData[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-red-700" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-900" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-700" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-600" />;
      default:
        return <Award className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <div className="w-full space-y-12">
      {/* 1. INTRODUCTION SECTION */}
      <section id="about-pcst" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-1 bg-red-700 rounded-full"></span>
          <span className="text-xs uppercase font-bold tracking-wider text-red-700">
            Institutional Profile
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Welcome to Patel College of Science & Technology (PCST)
        </h2>

        <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            Established in <strong className="text-slate-900 font-semibold">2002</strong> under the benevolent leadership of{' '}
            <strong className="text-slate-900 font-semibold">Vanshpati Smriti Shiksha Samiti</strong>, Patel College of
            Science and Technology (PCST), Bhopal has blossomed into one of the most prominent centers of technical,
            computational, and managerial education in Central India.
          </p>
          <p>
            Approved by the <strong className="text-slate-900 font-semibold">All India Council for Technical Education (AICTE)</strong>,
            New Delhi, and permanently affiliated to the prestigious{' '}
            <strong className="text-slate-900 font-semibold">Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</strong>, Bhopal (the
            State Technological University of Madhya Pradesh), PCST combines rigorous academic discipline with progressive,
            hands-on industrial exposure.
          </p>
          <p>
            Spread across a serene, pollution-free <strong className="text-slate-900 font-semibold">45-acre green campus</strong> on
            Ratibad Road, Bhopal, the institution fosters an intellectually stimulating environment designed to ignite
            creative inquiry, scientific curiosity, and societal accountability. With over two decades of transformative
            pedagogy, PCST has graduated more than <strong className="text-slate-900 font-semibold">15,000+ engineers, researchers, and corporate managers</strong>{' '}
            serving renowned technology giants worldwide.
          </p>
        </div>

        {/* Quick Highlights Strip inside intro */}
        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-2 bg-blue-100 text-blue-900 rounded-lg shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">National Approvals</h4>
              <p className="text-[11px] text-slate-500">AICTE, RGPV, PCI, NCTE & ISO 9001 certified</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-2 bg-red-100 text-red-800 rounded-lg shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">18+ Degree Programs</h4>
              <p className="text-[11px] text-slate-500">B.Tech, M.Tech, MBA & Polytechnic specializations</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Corporate Tie-Ups</h4>
              <p className="text-[11px] text-slate-500">100+ recruiters including TCS, Hitachi & Infosys</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION & MISSION SECTION (Styled Callout Boxes with Distinct Background Shading) */}
      <section id="vision-mission" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-1 bg-red-700 rounded-full"></span>
          <span className="text-xs uppercase font-bold tracking-wider text-red-700">
            Guiding Philosophy
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Vision & Mission of PCST
        </h2>
        <p className="text-sm text-slate-600">
          Our foundational principles inspire our students, faculty, and academic programs toward excellence and ethical stewardship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* VISION CARD - Navy Blue Themed Callout Box */}
          <div className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg border-2 border-blue-800 flex flex-col justify-between overflow-hidden group">
            {/* Background watermarked compass */}
            <Compass className="absolute -bottom-8 -right-8 w-44 h-44 text-blue-800/20 pointer-events-none group-hover:scale-105 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-blue-600/30 border border-blue-400/40 text-blue-200 rounded-xl">
                    <Compass className="w-6 h-6 text-sky-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">
                      Institutional Horizon
                    </span>
                    <h3 className="text-xl font-bold text-white">Our Vision</h3>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 font-semibold">
                  Core Mandate
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed italic border-l-4 border-sky-400 pl-4 my-4">
                "To instill skills and visionary leadership qualities in future engineers, managers, and other professionals, thereby ensuring robust economic development and global competence."
              </blockquote>

              <p className="text-xs text-slate-300 leading-relaxed mt-4">
                We aspire to stand as a benchmark institution that produces professionals who are not only
                technologically adept but also deeply committed to national progress, sustainable enterprise, and social transformation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-800/80 flex items-center gap-2 text-xs text-sky-300">
              <CheckCircle2 className="w-4 h-4" />
              <span>Fostering innovation, skill-sets, and professional leadership</span>
            </div>
          </div>

          {/* MISSION CARD - Crimson/Maroon Themed Callout Box */}
          <div className="relative bg-gradient-to-br from-rose-950 via-red-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg border-2 border-red-800 flex flex-col justify-between overflow-hidden group">
            {/* Background watermarked target */}
            <Target className="absolute -bottom-8 -right-8 w-44 h-44 text-red-800/20 pointer-events-none group-hover:scale-105 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-red-600/30 border border-red-400/40 text-red-200 rounded-xl">
                    <Target className="w-6 h-6 text-red-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                      Guiding Purpose
                    </span>
                    <h3 className="text-xl font-bold text-white">Our Mission</h3>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/20 text-red-200 border border-red-400/30 font-semibold">
                  Action Pillars
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed italic border-l-4 border-red-400 pl-4 my-4">
                "To emerge as a Center of Excellence for preparing globally competent engineers with managerial skills, a positive attitude, and ethical values, while providing an inspiring ecosystem for creative practice and discovery."
              </blockquote>

              <div className="space-y-2 mt-4 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Deliver rigorous outcome-based academic training aligned with industry standards.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Enable faculty and students to make lasting contributions to scientific advancement.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Cultivate ethical integrity, environmental consciousness, and leadership character.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-900/80 flex items-center gap-2 text-xs text-red-300">
              <CheckCircle2 className="w-4 h-4" />
              <span>Center of Excellence in Engineering & Applied Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS OF EXCELLENCE */}
      <section id="pillars" className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-8 h-1 bg-red-700 rounded-full"></span>
              <span className="text-xs uppercase font-bold tracking-wider text-red-700">
                Strategic Foundations
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Core Pillars of PCST
            </h2>
          </div>
          <span className="hidden sm:block text-xs font-semibold text-slate-500">
            Excellence Across 4 Core Domains
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar) => {
            const isExpanded = expandedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-red-700 mb-2">{pillar.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {pillar.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                  <span>Standard of Excellence</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-700" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LEADERSHIP & GOVERNANCE DESK (Interactive Tab Switcher) */}
      <section id="leadership" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-1 bg-red-700 rounded-full"></span>
            <span className="text-xs uppercase font-bold tracking-wider text-red-700">
              Leadership & Guidance
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Messages from the Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Visionary leaders dedicated to advancing technical higher education, research, and holistic student growth.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
          {leadershipData.map((leader) => (
            <button
              key={leader.id}
              onClick={() => setSelectedLeader(leader.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                selectedLeader === leader.id
                  ? 'bg-blue-950 text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <span>{leader.designation}: {leader.name}</span>
            </button>
          ))}
        </div>

        {/* Leader Profile & Message Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start bg-slate-50 p-6 rounded-2xl border border-slate-200">
          {/* Portrait & credentials */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-4 border-white mb-3">
              <img
                src={currentLeader.image}
                alt={currentLeader.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{currentLeader.name}</h3>
            <p className="text-xs font-bold text-red-700">{currentLeader.designation}</p>
            <p className="text-[11px] text-slate-500 font-medium">{currentLeader.institution}</p>
            {currentLeader.qualifications && (
              <span className="mt-2 text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                {currentLeader.qualifications}
              </span>
            )}
          </div>

          {/* Message content */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200 relative">
              <Quote className="w-8 h-8 text-red-200 absolute top-3 right-3" />
              <p className="text-sm sm:text-base font-semibold text-slate-800 italic pr-8">
                "{currentLeader.quote}"
              </p>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
              {currentLeader.fullMessage.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5 text-blue-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Vanshpati Smriti Shiksha Samiti
              </span>
              <span>•</span>
              <span>PCST Bhopal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPROVALS, ACCREDITATIONS & STATUTORY CREDENTIALS */}
      <section id="approvals" className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-1 bg-red-700 rounded-full"></span>
            <span className="text-xs uppercase font-bold tracking-wider text-red-700">
              Affiliations & Certifications
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Approvals, Affiliations & Accreditations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            PCST operates under full statutory accreditation, ensuring degrees recognized globally by industries and higher education bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {accreditationData.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start gap-4 hover:border-blue-900 transition-all"
            >
              <div className="p-3 bg-red-50 text-red-700 rounded-xl shrink-0 border border-red-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                    Verified
                  </span>
                </div>
                <p className="text-xs font-semibold text-blue-950 mt-0.5">{item.authority}</p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CAMPUS FACILITIES & ENVIRONMENT SNAPSHOT */}
      <section id="facilities" className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-8 h-1 bg-red-700 rounded-full"></span>
              <span className="text-xs uppercase font-bold tracking-wider text-red-700">
                State-of-the-Art Infrastructure
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Campus Facilities & Infrastructure
            </h2>
          </div>
          <button
            onClick={onOpenTour}
            className="text-xs font-bold text-red-700 hover:text-red-800 flex items-center gap-1"
          >
            <span>View 360° Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {campusFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={facility.imageUrl}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-blue-950/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {facility.category}
                </span>
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white drop-shadow">
                  {facility.stats}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{facility.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {facility.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MANDATORY DISCLOSURES & NIRF ACCORDION */}
      <section id="disclosures" className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-700 rounded-xl text-white">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                Statutory Compliance
              </span>
              <h3 className="text-lg sm:text-xl font-bold">Mandatory Disclosures & NIRF Data</h3>
            </div>
          </div>
          <button
            onClick={onOpenBrochure}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <span>Download Dossier</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          In compliance with AICTE and RGPV statutory norms, Patel College of Science and Technology publishes public records of its faculty cadre, student intake capacity, audited balance sheets, anti-ragging committee, and internal complaints committee (ICC).
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-slate-400 text-[10px] block font-mono">DTE CODE</span>
            <span className="font-bold text-white text-sm">0112 (PCST Bhopal)</span>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-slate-400 text-[10px] block font-mono">AFFILIATION</span>
            <span className="font-bold text-white text-sm">RGPV Bhopal</span>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-slate-400 text-[10px] block font-mono">ANTI-RAGGING</span>
            <span className="font-bold text-emerald-400 text-sm">Zero Tolerance</span>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
            <span className="text-slate-400 text-[10px] block font-mono">NIRF PORTAL</span>
            <span className="font-bold text-white text-sm">Submitted 2026</span>
          </div>
        </div>
      </section>

      {/* 8. ADMISSION INVITATION CTA STRIP */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
            Shape Your Engineering Journey
          </span>
          <h3 className="text-xl sm:text-2xl font-black mt-1">
            Join the Next Generation of Technocrats at PCST
          </h3>
          <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-xl">
            Counseling open for B.Tech CSE, AI & ML, Cyber Security, Mechanical, Civil & MBA. Merit-based tuition fee waivers available for qualifying scores.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAdmission}
            className="bg-white text-red-800 hover:bg-slate-100 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-colors"
          >
            Apply Online 2026
          </button>
          <button
            onClick={onOpenBrochure}
            className="bg-red-950/70 hover:bg-red-950 text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl border border-red-600 transition-colors"
          >
            Download Prospectus
          </button>
        </div>
      </section>
    </div>
  );
};
