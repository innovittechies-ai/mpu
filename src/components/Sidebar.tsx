import React, { useState } from 'react';
import {
  ChevronRight,
  Download,
  PhoneCall,
  Bell,
  ArrowRight,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  Send,
  Building,
  ShieldCheck,
} from 'lucide-react';
import { sidebarLinks, announcements, contactDetails } from '../data/pcstData';

interface SidebarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
  onOpenTour: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  onOpenAdmission,
  onOpenBrochure,
  onOpenTour,
}) => {
  const [quickForm, setQuickForm] = useState({ name: '', phone: '', program: 'B.Tech CSE' });
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuickForm({ name: '', phone: '', program: 'B.Tech CSE' });
    }, 4000);
  };

  return (
    <aside className="w-full space-y-6">
      {/* 1. VERTICAL NAVIGATION WIDGET: ABOUT US */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-red-400" />
            <h3 className="font-bold text-base tracking-tight">About Us</h3>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-700/80 text-white">
            PCST
          </span>
        </div>

        {/* Menu Items */}
        <nav className="p-2 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onSelectSection(link.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left ${
                  isActive
                    ? 'bg-red-700 text-white shadow-md shadow-red-900/20 translate-x-1'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-950'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-white translate-x-0.5' : 'text-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>

      {/* 2. QUICK ADMISSION ENQUIRY WIDGET */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-5 text-white shadow-md border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-red-700 text-white rounded-lg">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
            Admissions 2026-27
          </span>
        </div>
        <h4 className="text-base font-bold text-white mb-1">Quick Enquiry Desk</h4>
        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
          Get direct counselling on RGPV seat allotments, fees, and merit scholarships.
        </p>

        {submitted ? (
          <div className="bg-emerald-950/80 border border-emerald-600 p-3.5 rounded-xl text-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-1.5" />
            <p className="text-xs font-bold text-white">Enquiry Received!</p>
            <p className="text-[11px] text-emerald-200 mt-0.5">
              An admissions expert will call {quickForm.phone || 'you'} shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleQuickSubmit} className="space-y-2.5">
            <div>
              <input
                type="text"
                required
                placeholder="Student Name *"
                value={quickForm.name}
                onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                placeholder="10-Digit Mobile Number *"
                value={quickForm.phone}
                onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <select
                value={quickForm.program}
                onChange={(e) => setQuickForm({ ...quickForm, program: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="B.Tech CSE">B.Tech - Computer Science</option>
                <option value="B.Tech AI & ML">B.Tech - AI & Machine Learning</option>
                <option value="B.Tech Core Engg">B.Tech - Mech / Civil / ECE</option>
                <option value="MBA">MBA Program</option>
                <option value="Diploma Polytechnic">Diploma in Engineering</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              Request Callback
            </button>
          </form>
        )}

        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>Need immediate help?</span>
          <a
            href={`tel:${contactDetails.admissionHelpline}`}
            className="text-amber-400 font-bold hover:underline"
          >
            1800-200-3531
          </a>
        </div>
      </div>

      {/* 3. DOWNLOAD BROCHURE CARD */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 text-left">
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-10 h-12 bg-red-100 text-red-700 rounded-lg flex flex-col items-center justify-center font-bold text-xs shrink-0 border border-red-200">
            <span>PDF</span>
            <span className="text-[9px] text-slate-500 font-medium">4.8MB</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-snug">
              Official Information Brochure 2026
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Curriculum, faculty credentials, lab inventory & fee structure.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenBrochure}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download PDF Prospectus</span>
        </button>
      </div>

      {/* 4. ANNOUNCEMENTS & CIRCULARS TICKER */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
            <Bell className="w-4 h-4 text-red-700 animate-bounce" />
            <span>Notices & Announcements</span>
          </div>
          <span className="text-[10px] font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded">
            Live
          </span>
        </div>

        <div className="p-3 divide-y divide-slate-100 space-y-2">
          {announcements.map((item) => (
            <div key={item.id} className="pt-2 first:pt-0">
              <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                <span className="flex items-center gap-1 font-medium text-slate-600">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {item.date}
                </span>
                {item.isNew && (
                  <span className="bg-red-700 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                    New
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-800 font-medium leading-snug hover:text-red-700 cursor-pointer transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. HELPLINE & CAMPUS DESK */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold mb-1">
          <PhoneCall className="w-4 h-4 text-amber-700" />
          <span>Admission Helpline Toll-Free</span>
        </div>
        <p className="text-sm font-black text-slate-900 mb-1">1800-200-3531</p>
        <p className="text-[11px] text-slate-600 mb-2">
          Available Mon–Sat: 9:00 AM – 5:30 PM for parent & student inquiries.
        </p>
        <div className="pt-2 border-t border-amber-200/80 flex items-center justify-between text-[11px]">
          <span className="text-slate-500">Bhopal Campus Desk:</span>
          <span className="font-semibold text-slate-900">{contactDetails.phonePrimary}</span>
        </div>
      </div>
    </aside>
  );
};
