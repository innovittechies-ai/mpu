import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const campusSpots = [
  {
    title: 'PCST Academic Block & Main Administrative Wing',
    category: 'Architecture',
    description: 'Imposing academic building surrounded by lush green lawns on the 45-acre Ratibad campus in Bhopal.',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    tags: ['45-Acre Campus', 'Solar Powered', 'Smart Classrooms'],
  },
  {
    title: 'High-Performance Computational Laboratories',
    category: 'Technology & AI',
    description: 'Advanced computing hubs with dedicated GPU servers for AI, Machine Learning, and Cloud Simulation.',
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    tags: ['NVIDIA AI Lab', '850+ Workstations', 'High-Speed Wi-Fi'],
  },
  {
    title: 'Central Digital Library & DELNET E-Resource Hub',
    category: 'Knowledge Hub',
    description: 'Home to 55,000+ volumes, print journals, DELNET subscription, and quiet research carrels for scholars.',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    tags: ['55k+ Volumes', 'IEEE Access', 'Audio-Visual Corner'],
  },
  {
    title: 'Modern Auditorium & Convention Arena',
    category: 'Events & Conferences',
    description: 'Acoustically engineered 800+ seater auditorium hosting national symposiums, hackathons, and cultural fests.',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    tags: ['800 Seats', 'Dolby Acoustics', 'TechFest Hub'],
  },
  {
    title: 'Student Innovation & Robotics Workshop',
    category: 'Practical Engineering',
    description: 'Hands-on experiential makerspace where students build drones, autonomous rovers, and IoT devices.',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    tags: ['Makerspace', 'CNC Machines', '3D Printers'],
  },
  {
    title: 'Sports Arena & Athletic Complex',
    category: 'Recreation & Fitness',
    description: 'Full-size cricket grounds, basketball courts, and indoor gymnasium encouraging holistic physical development.',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cricket Oval', 'Badminton Courts', 'Modern Gym'],
  },
];

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const current = campusSpots[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? campusSpots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === campusSpots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden text-white flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-700 text-white rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">PCST Virtual Campus Showcase</h3>
              <p className="text-xs text-slate-400">
                Explore the 45-Acre High-Tech Campus in Bhopal (Ratibad Road)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image viewer */}
        <div className="relative flex-1 bg-black min-h-[300px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src={current.url}
            alt={current.title}
            className="w-full h-full object-cover max-h-[480px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Overlay Details */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600/90 text-white mb-2">
              {current.category}
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">{current.title}</h4>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl drop-shadow">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2.5">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] bg-slate-800/80 backdrop-blur-sm border border-slate-700 px-2 py-0.5 rounded-md text-slate-300"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="p-3 bg-slate-950 flex items-center justify-between gap-2 overflow-x-auto border-t border-slate-800">
          <div className="flex gap-2">
            {campusSpots.map((spot, idx) => (
              <button
                key={spot.title}
                onClick={() => setCurrentIndex(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx ? 'border-red-500 scale-105 ring-2 ring-red-500/30' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={spot.url} alt={spot.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="text-xs text-slate-400 font-mono px-3 shrink-0">
            {currentIndex + 1} / {campusSpots.length}
          </div>
        </div>
      </div>
    </div>
  );
};
