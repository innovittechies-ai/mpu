import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  PhoneCall,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { navigationData, contactDetails } from '../data/pcstData';

interface HeaderProps {
  onOpenAdmission: () => void;
  onOpenTour: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmission, onOpenTour }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>('About Us');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileGroup = (label: string) => {
    setMobileExpandedGroup(mobileExpandedGroup === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-300">
      {/* 1. TOP UTILITY BAR (Thin banner) */}
      <div className="bg-slate-900 text-slate-200 text-[11px] sm:text-xs border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2">
          {/* Left Contacts */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>{contactDetails.phonePrimary}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>{contactDetails.emailAdmission}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-red-950/70 text-red-200 border border-red-800/80 px-2 py-0.5 rounded font-medium">
              <PhoneCall className="w-3 h-3 text-red-400 animate-pulse" />
              <span>Admission Helpline: 1800-200-3531</span>
            </span>
          </div>

          {/* Right Links & Social Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-slate-400 text-[11px] border-r border-slate-700 pr-3">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                AICTE Approved
              </span>
              <span>•</span>
              <span>RGPV Affiliated</span>
              <span>•</span>
              <span className="text-amber-400">Est. 2002</span>
            </div>

            <button
              onClick={onOpenTour}
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors text-[11px]"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Virtual Tour</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2 text-slate-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors p-1"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-sky-400 transition-colors p-1"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition-colors p-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-red-500 transition-colors p-1"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors p-1"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div
        className={`w-full bg-white transition-all duration-200 border-b border-slate-200 ${
          scrolled ? 'shadow-md py-1.5' : 'py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* College Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group text-left">
            {/* Academic Crest Emblem Placeholder */}
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br from-blue-950 via-slate-900 to-red-900 p-0.5 shadow-md shadow-blue-950/20 flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-white rounded-[10px] flex flex-col items-center justify-center p-1 text-center border border-slate-100">
                <span className="text-[10px] font-black tracking-tighter text-blue-950 leading-none">PCST</span>
                <div className="w-6 h-0.5 bg-red-700 my-0.5"></div>
                <span className="text-[8px] font-semibold text-slate-500 uppercase leading-none">Bhopal</span>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-base sm:text-lg lg:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-blue-950 transition-colors">
                  PATEL COLLEGE
                </h1>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                  PCST
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-red-700 tracking-wide uppercase">
                OF SCIENCE AND TECHNOLOGY
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium hidden md:block">
                Approved by AICTE, New Delhi & Affiliated to RGPV, Bhopal • Under Vanshpati Smriti Shiksha Samiti
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navigationData.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isCurrent = item.active;

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isCurrent
                        ? 'text-red-700 bg-red-50/80 font-bold'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180 text-blue-900' : 'text-slate-400'
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu with smooth transition */}
                  {hasDropdown && (
                    <div
                      className={`absolute left-0 top-full pt-1.5 z-50 w-72 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 py-2.5 px-1.5 overflow-hidden">
                        <div className="px-3 pb-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {item.label} Directory
                          </span>
                          <span className="text-[9px] bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded font-medium">
                            PCST
                          </span>
                        </div>
                        {item.children?.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group/link"
                          >
                            <div className="text-xs font-semibold text-slate-800 group-hover/link:text-red-700 transition-colors">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {child.description}
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenAdmission}
              className="bg-red-700 hover:bg-red-800 active:scale-95 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Apply Now 2026</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[90px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-200 shadow-xl flex flex-col justify-between">
          <div className="p-4 space-y-1">
            {/* Mobile notice banner */}
            <div className="p-3 bg-red-50 border border-red-100 rounded-xl mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-red-900">B.Tech & MBA Admissions Open</p>
                <p className="text-[11px] text-red-700">Helpline: 1800-200-3531 (Toll-Free)</p>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
                className="bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0"
              >
                Enquire
              </button>
            </div>

            {navigationData.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isExpanded = mobileExpandedGroup === item.label;

              return (
                <div key={item.label} className="border-b border-slate-100 last:border-0 pb-1">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={() => !hasDropdown && setMobileMenuOpen(false)}
                      className={`block py-2.5 px-2 text-sm font-bold ${
                        item.active ? 'text-red-700' : 'text-slate-800'
                      }`}
                    >
                      {item.label}
                    </a>
                    {hasDropdown && (
                      <button
                        onClick={() => toggleMobileGroup(item.label)}
                        className="p-2 text-slate-400 hover:text-slate-700"
                        aria-label={`Expand ${item.label}`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-red-700' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasDropdown && isExpanded && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg mb-2">
                      {item.children?.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 px-2 text-xs font-medium text-slate-600 hover:text-red-700"
                        >
                          • {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom mobile info */}
          <div className="p-4 bg-slate-900 text-slate-300 text-xs border-t border-slate-800">
            <p className="font-semibold text-white mb-1">Patel College of Science and Technology (PCST)</p>
            <p className="text-[11px] text-slate-400 mb-3">
              Ratibad, Bhadbhada Road, Bhopal, MP - 462044
            </p>
            <div className="flex items-center justify-between">
              <a
                href={`tel:${contactDetails.phonePrimary}`}
                className="flex items-center gap-1.5 text-red-400 font-medium text-xs"
              >
                <Phone className="w-3.5 h-3.5" /> Call Desk
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour();
                }}
                className="flex items-center gap-1.5 text-amber-400 text-xs font-medium"
              >
                <Sparkles className="w-3.5 h-3.5" /> Virtual Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
