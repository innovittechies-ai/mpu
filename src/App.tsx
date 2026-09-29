/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { BrochureModal } from './components/BrochureModal';
import { VirtualTourModal } from './components/VirtualTourModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('about-pcst');
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800 font-sans selection:bg-red-700 selection:text-white">
      {/* 1. STICKY HEADER & NAVIGATION */}
      <Header
        onOpenAdmission={() => setIsAdmissionOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
      />

      {/* 2. FULL-WIDTH HERO SECTION WITH BREADCRUMB & STATS */}
      <main className="flex-1">
        <HeroBanner
          onOpenAdmission={() => setIsAdmissionOpen(true)}
          onOpenTour={() => setIsTourOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 3. MAIN CONTENT CONTAINER (75% / 25% TWO-COLUMN LAYOUT ON DESKTOP) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Main Institutional Content (75% width: 9/12 cols) */}
            <div className="lg:col-span-9 order-1">
              <MainContent
                onOpenAdmission={() => setIsAdmissionOpen(true)}
                onOpenTour={() => setIsTourOpen(true)}
                onOpenBrochure={() => setIsBrochureOpen(true)}
              />
            </div>

            {/* RIGHT COLUMN: Sidebar Navigation & Widgets (25% width: 3/12 cols) */}
            <div className="lg:col-span-3 order-2 lg:sticky lg:top-24">
              <Sidebar
                activeSection={activeSection}
                onSelectSection={handleSelectSection}
                onOpenAdmission={() => setIsAdmissionOpen(true)}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenTour={() => setIsTourOpen(true)}
              />
            </div>
          </div>
        </div>
      </main>

      {/* 4. COMPREHENSIVE MULTI-COLUMN DARK FOOTER */}
      <Footer
        onOpenAdmission={() => setIsAdmissionOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* MODAL DIALOGS */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />
    </div>
  );
}
