import React from 'react';
import {
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Building,
  Calendar,
  Sparkles,
  Download,
  FileCheck,
} from 'lucide-react';
import { institutionalStats } from '../data/pcstData';

interface HeroBannerProps {
  onOpenAdmission: () => void;
  onOpenTour: () => void;
  onOpenBrochure: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenAdmission,
  onOpenTour,
  onOpenBrochure,
}) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Campus Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=80"
          alt="Patel College of Science and Technology Campus"
          className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.05]"
        />
        {/* Deep Navy & Crimson Architectural Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

        {/* Subtle decorative geometric grid lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-14 sm:pb-20">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 mb-6 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full inline-flex border border-slate-700/60"
          aria-label="Breadcrumb"
        >
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <a href="#about" className="hover:text-white transition-colors">
            About Us
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-red-400 font-semibold" aria-current="page">
            About PCST
          </span>
        </nav>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-200 border border-red-700/50 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
            A Premier Engineering & Management Institution (Est. 2002)
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
            About Patel College of Science and Technology <span className="text-red-500">(PCST)</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-3xl">
            Established under the aegis of <span className="text-white font-semibold">Vanshpati Smriti Shiksha Samiti</span>, 
            PCST Bhopal has been at the forefront of technical excellence, multidisciplinary research, 
            and industry-aligned education across Central India for over 22 years.
          </p>

          {/* Quick Institutional Badges */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm mb-8">
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-3 py-2 rounded-xl text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Approved by AICTE, New Delhi</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-3 py-2 rounded-xl text-slate-200">
              <Building className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Affiliated to RGPV, Bhopal</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-3 py-2 rounded-xl text-slate-200">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span>22+ Years of Educational Legacy</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-3 py-2 rounded-xl text-slate-200">
              <GraduationCap className="w-4 h-4 text-red-400 shrink-0" />
              <span>45+ Acre Lush Green Campus</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenAdmission}
              className="bg-red-700 hover:bg-red-800 active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-900/40 hover:shadow-xl transition-all flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admissions Enquiry 2026</span>
            </button>

            <button
              onClick={onOpenTour}
              className="bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-600/80 hover:border-slate-500 backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Explore Virtual Tour</span>
            </button>

            <button
              onClick={onOpenBrochure}
              className="bg-transparent hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm px-4 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-slate-300" />
              <span>Download E-Brochure</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Institutional Stats Grid Bar */}
      <div className="relative z-10 bg-slate-900/95 border-t border-slate-800 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {institutionalStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx !== 0 ? 'sm:pl-6' : ''
                } pt-3 sm:pt-0`}
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-red-400">
                  {stat.highlight}
                </span>
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-0.5">
                  {stat.value}
                  {stat.suffix && <span className="text-sm font-semibold ml-1 text-slate-400">{stat.suffix}</span>}
                </div>
                <span className="text-xs text-slate-400 mt-0.5 leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
