import React, { useState } from 'react';
import { X, CheckCircle, Send, PhoneCall, GraduationCap } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'B.Tech - Computer Science & Engg',
    city: '',
    query: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'B.Tech - Computer Science & Engg',
      city: '',
      query: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-crimson-600 bg-red-700 text-white rounded-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-red-400">Admissions 2026-27</span>
              <h3 className="text-xl font-bold">Apply & Enquire at PCST</h3>
            </div>
          </div>
          <p className="text-xs text-slate-300">
            Patel College of Science and Technology, Bhopal • Approved by AICTE & Affiliated to RGPV
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Enquiry Submitted Successfully!</h4>
              <p className="text-sm text-slate-600 mb-6">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our Senior Admission
                Counsellor will contact you at <span className="font-semibold text-slate-900">{formData.phone}</span>{' '}
                within 24 working hours with course details and scholarship opportunities.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 text-left mb-6">
                <p className="font-semibold text-slate-900 mb-1">Direct Admission Helpline:</p>
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-red-700" />
                  Toll-Free: 1800-200-3531 | Mobile: +91 94250 14660
                </p>
              </div>
              <button
                onClick={handleReset}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider">
                    Program Interested *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white"
                  >
                    <option value="B.Tech - Computer Science & Engg">B.Tech - Computer Science & Engg</option>
                    <option value="B.Tech - AI & Machine Learning">B.Tech - AI & Machine Learning</option>
                    <option value="B.Tech - Cyber Security / IoT">B.Tech - Cyber Security / IoT</option>
                    <option value="B.Tech - Mechanical Engineering">B.Tech - Mechanical Engineering</option>
                    <option value="B.Tech - Civil Engineering">B.Tech - Civil Engineering</option>
                    <option value="B.Tech - Electronics & Comm">B.Tech - Electronics & Comm</option>
                    <option value="Master of Business Admin (MBA)">Master of Business Admin (MBA)</option>
                    <option value="M.Tech - Advanced Tech">M.Tech (Thermal / Software / VLSI)</option>
                    <option value="Diploma in Engineering">Diploma in Polytechnic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider">
                    City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bhopal, MP"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider">
                  Questions / Specific Enquiry (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about hostel, scholarship eligibility, JEE cutoffs..."
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-red-900/20 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Admission Enquiry
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-center text-slate-400">
                🔒 Your details are protected by PCST privacy policy. No promotional spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
