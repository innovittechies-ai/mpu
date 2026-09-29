import React, { useState } from 'react';
import { X, FileText, Download, Check, ExternalLink, ShieldCheck } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    setTimeout(() => {
      // Simulate download trigger
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'PCST_Information_Brochure_2026.pdf');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-200 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top header */}
        <div className="bg-slate-900 text-white p-5 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-700 text-white rounded-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-red-400 font-semibold">Institutional E-Prospectus</span>
              <h3 className="text-lg font-bold">Download PCST Brochure 2026</h3>
            </div>
          </div>
        </div>

        <div className="p-6">
          {downloaded ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Brochure Download Initialized</h4>
              <p className="text-xs text-slate-600 mb-5">
                We have also dispatched the complete PCST Academic Dossier (Fee Structure, Seat Matrix, Placement Records & Faculty Profiles) to <span className="font-semibold text-slate-900">{email}</span>.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-600 space-y-1.5 mb-5">
                <div className="flex items-center justify-between text-slate-800 font-medium">
                  <span>PCST_Information_Brochure_2026.pdf</span>
                  <span className="text-slate-500">4.8 MB</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-emerald-600 h-1.5 rounded-full w-full"></div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-start gap-4 mb-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-14 h-18 bg-red-950 text-white rounded-lg flex flex-col items-center justify-center shadow p-2 text-center shrink-0">
                  <span className="text-[10px] uppercase font-bold tracking-tight text-red-300">PCST</span>
                  <span className="text-xs font-black text-amber-300">2026</span>
                  <span className="text-[9px] text-slate-300 mt-1">PDF</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Official Prospectus & Curriculum Guide</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Comprehensive overview of all 18+ programs, RGPV affiliation guidelines, labs, and scholarship charts.
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-600 font-medium">
                    <span className="flex items-center gap-1 text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5" /> AICTE Approved
                    </span>
                    <span>•</span>
                    <span>48 Pages</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleDownload} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Enter Email Address to Receive Instant Copy
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Prospectus Now (Free)
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
