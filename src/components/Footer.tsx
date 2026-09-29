import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ArrowUp,
  Heart,
  Compass,
} from 'lucide-react';
import { contactDetails } from '../data/pcstData';

interface FooterProps {
  onOpenAdmission: () => void;
  onOpenBrochure: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmission, onOpenBrochure }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* COLUMN 1: Institute Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-red-800 p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white font-black text-xs">
                  PCST
                </div>
              </div>
              <div>
                <h3 className="text-white font-extrabold text-sm sm:text-base tracking-tight leading-tight">
                  PATEL COLLEGE OF SCIENCE & TECHNOLOGY
                </h3>
                <p className="text-[11px] text-red-400 font-semibold uppercase">
                  Bhopal, Madhya Pradesh (Est. 2002)
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Patel College of Science and Technology (PCST) operates under the Vanshpati Smriti Shiksha Samiti.
              Approved by AICTE New Delhi and affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV),
              PCST imparts world-class technical education through cutting-edge laboratories, distinguished faculty,
              and dedicated career placements.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-emerald-400 font-medium">
                ✓ AICTE Approved
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-sky-400 font-medium">
                ✓ RGPV Affiliated
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-amber-400 font-medium">
                ✓ ISO 9001:2015
              </span>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Connect With PCST
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors border border-slate-800"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors border border-slate-800"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-700 hover:text-white text-slate-400 flex items-center justify-center transition-colors border border-slate-800"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors border border-slate-800"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors border border-slate-800"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Academic & Quick Portals (4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
                Academic Streams
              </h4>
              <ul className="space-y-2 text-slate-400 text-xs">
                <li>
                  <a href="#about-pcst" className="hover:text-red-400 transition-colors">
                    B.Tech Computer Science
                  </a>
                </li>
                <li>
                  <a href="#about-pcst" className="hover:text-red-400 transition-colors">
                    Artificial Intelligence & ML
                  </a>
                </li>
                <li>
                  <a href="#about-pcst" className="hover:text-red-400 transition-colors">
                    Cyber Security & IoT
                  </a>
                </li>
                <li>
                  <a href="#about-pcst" className="hover:text-red-400 transition-colors">
                    Mechanical Engineering
                  </a>
                </li>
                <li>
                  <a href="#about-pcst" className="hover:text-red-400 transition-colors">
                    Civil Engineering
                  </a>
                </li>
                <li>
                  <a href="#about-pcst" className="hover:text-red-400 transition-colors">
                    Electronics & Comm. (ECE)
                  </a>
                </li>
                <li>
                  <a href="#about-pcst" className="hover:text-red-400 transition-colors">
                    Master of Business Admin (MBA)
                  </a>
                </li>
                <li>
                  <a href="#about-pcst" className="hover:text-red-400 transition-colors">
                    Polytechnic Diploma
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
                Institutional Portals
              </h4>
              <ul className="space-y-2 text-slate-400 text-xs">
                <li>
                  <button onClick={onOpenAdmission} className="hover:text-red-400 text-left transition-colors">
                    Admission Procedure 2026
                  </button>
                </li>
                <li>
                  <button onClick={onOpenBrochure} className="hover:text-red-400 text-left transition-colors">
                    Download Information Brochure
                  </button>
                </li>
                <li>
                  <a href="#leadership" className="hover:text-red-400 transition-colors">
                    Chairperson & Director's Desk
                  </a>
                </li>
                <li>
                  <a href="#pillars" className="hover:text-red-400 transition-colors">
                    Training & Placement Cell
                  </a>
                </li>
                <li>
                  <a href="#disclosures" className="hover:text-red-400 transition-colors">
                    NIRF & Mandatory Disclosures
                  </a>
                </li>
                <li>
                  <a href="#disclosures" className="hover:text-red-400 transition-colors">
                    Anti-Ragging Committee
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="hover:text-red-400 transition-colors">
                    Digital Central Library
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-red-400 transition-colors">
                    Grievance Redressal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: Contact & Mini Map Placeholder (4 Cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
              Campus Contact & Map
            </h4>

            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  {contactDetails.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-xs text-slate-400">
                  {contactDetails.phonePrimary} / {contactDetails.phoneSecondary}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-xs text-slate-400">
                  {contactDetails.emailAdmission}
                </span>
              </div>
            </div>

            {/* Styled Interactive Mini Map Placeholder */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 relative h-32 flex flex-col justify-between p-3 group">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px]" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700 text-[10px] text-white">
                  <Compass className="w-3 h-3 text-red-400" />
                  <span>PCST Bhopal Location</span>
                </div>
                <span className="text-[10px] bg-red-950 text-red-200 border border-red-800 px-1.5 py-0.2 rounded font-mono">
                  23.165° N, 77.348° E
                </span>
              </div>

              <div className="relative z-10">
                <p className="text-[11px] font-bold text-white leading-tight">
                  Ratibad Campus, Bhadbhada Road
                </p>
                <p className="text-[10px] text-slate-400">
                  12 km from Bhopal Junction Railway Station
                </p>
              </div>

              <div className="relative z-10 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                <a
                  href="https://maps.google.com/?q=Patel+College+of+Science+and+Technology+Bhopal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-500">Bus facility available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Anti-Ragging & Affiliation Strip */}
      <div className="bg-slate-900 border-t border-slate-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-red-400 font-bold">Anti-Ragging Helpline:</span>
            <span className="text-slate-200 font-medium">1800-180-5522 (Toll-Free 24x7)</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Affiliated with RGPV Bhopal (State Technical University)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Credits */}
      <div className="bg-black/90 py-4 text-[11px] text-slate-500 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Patel College of Science and Technology (PCST), Bhopal. All Rights Reserved.
            Under Vanshpati Smriti Shiksha Samiti.
          </p>
          <div className="flex items-center gap-4">
            <a href="#disclosures" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#disclosures" className="hover:text-slate-400 transition-colors">
              Terms of Use
            </a>
            <span>•</span>
            <a href="#disclosures" className="hover:text-slate-400 transition-colors">
              Mandatory Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
