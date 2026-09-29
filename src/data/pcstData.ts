import {
  NavItem,
  LeadershipMessage,
  CorePillar,
  CampusFacility,
  AccreditationItem,
  AnnouncementItem,
} from '../types';

export const navigationData: NavItem[] = [
  {
    label: 'Home',
    href: '#',
    children: [
      { label: 'Campus Overview', href: '#overview', description: 'Explore our 45-acre green campus in Bhopal' },
      { label: 'Virtual Tour 360°', href: '#virtual-tour', description: 'Interactive visual walk of facilities' },
      { label: 'Latest News & Events', href: '#notices', description: 'Academic updates and event notices' },
    ],
  },
  {
    label: 'About Us',
    href: '#about-pcst',
    active: true,
    children: [
      { label: 'About PCST', href: '#about-pcst', description: 'Our history, legacy since 2002, and academic heritage' },
      { label: 'Vision, Mission & Values', href: '#vision-mission', description: 'Guiding philosophy and institutional goals' },
      { label: "Chairperson's Message", href: '#leadership-chairperson', description: 'Address by Mrs. Preeti Patel' },
      { label: "Vice Chairman's Desk", href: '#leadership-vicechairman', description: 'Vision by Dr. Ajit Singh Patel' },
      { label: "Director's Welcome", href: '#leadership-director', description: 'Academic message by Dr. G.S. Chouhan' },
      { label: 'Approvals & Affiliations', href: '#approvals', description: 'AICTE, RGPV, PCI & NCTE credentials' },
      { label: 'Core Pillars & Pedagogy', href: '#pillars', description: 'Excellence in teaching, labs, and research' },
      { label: 'Governance & Advisory Board', href: '#governance', description: 'Eminent educationists and industrial experts' },
    ],
  },
  {
    label: 'Academics',
    href: '#academics',
    children: [
      { label: 'Computer Science & Engineering', href: '#cse', description: 'B.Tech CSE with modern computing labs' },
      { label: 'Artificial Intelligence & ML', href: '#aiml', description: 'Cutting-edge AI, deep learning & robotics' },
      { label: 'Cyber Security & IoT', href: '#cyber', description: 'Defensive systems, blockchain and IoT' },
      { label: 'Mechanical & Civil Engineering', href: '#mech-civil', description: 'Foundational engineering disciplines' },
      { label: 'Electronics & Communication', href: '#ece', description: 'VLSI, embedded systems & telecom' },
      { label: 'Master of Business Admin (MBA)', href: '#mba', description: 'Specialized in Finance, HR, Marketing' },
      { label: 'M.Tech & Polytechnic Diploma', href: '#postgrad', description: 'Advanced research and technical diplomas' },
    ],
  },
  {
    label: 'Admissions',
    href: '#admissions',
    children: [
      { label: 'Admission Procedure 2026-27', href: '#admission-procedure', description: 'Step-by-step guidance for applicants' },
      { label: 'Eligibility & Seat Matrix', href: '#eligibility', description: 'Criteria for JEE Main and RGPV counseling' },
      { label: 'Scholarships & Fee Structure', href: '#scholarships', description: 'Merit-based financial aid & schemes' },
      { label: 'Apply Online', href: '#apply', description: 'Direct registration form for aspiring students' },
    ],
  },
  {
    label: 'Placements',
    href: '#placements',
    children: [
      { label: 'Training & Placement Cell', href: '#placement-cell', description: 'Corporate grooming and career development' },
      { label: 'Placement Highlights', href: '#placement-records', description: '95%+ placement rate & ₹18 LPA highest CTC' },
      { label: 'Our Prestigious Recruiters', href: '#recruiters', description: 'TCS, Infosys, Cognizant, Hitachi & 100+ MNCs' },
      { label: 'Corporate MoUs & Internships', href: '#internships', description: 'Hands-on practical training alliances' },
    ],
  },
  {
    label: 'Facilities',
    href: '#facilities',
    children: [
      { label: 'Central Digital Library', href: '#library', description: 'Over 55,000+ volumes, DELNET and IEEE e-journals' },
      { label: 'High-Tech Computing Centers', href: '#labs', description: 'Latest workstations with GPU clusters' },
      { label: 'Student Hostels & Mess', href: '#hostels', description: 'Safe, hygienic on-campus residential wings' },
      { label: 'Sports Arena & Gymnasium', href: '#sports', description: 'Cricket grounds, basketball courts, and fitness gym' },
      { label: 'Transport Fleet', href: '#transport', description: 'Dedicated college buses across Bhopal & suburbs' },
    ],
  },
  {
    label: 'Gallery',
    href: '#gallery',
  },
  {
    label: 'Contact Us',
    href: '#contact',
  },
];

export const leadershipData: LeadershipMessage[] = [
  {
    id: 'chairperson',
    name: 'Mrs. Preeti Patel',
    designation: 'Chairperson',
    institution: 'Patel Group of Institutions (PGOI)',
    quote: 'Education is not merely about degrees, but about igniting minds with curiosity, values, and the relentless courage to innovate for humanity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    qualifications: 'Visionary Educationist & Philanthropist',
    fullMessage: [
      'Welcome to Patel College of Science and Technology (PCST), Bhopal. Since our foundation in 2002 under the Vanshpati Smriti Shiksha Samiti, our unwavering commitment has been to nurture holistic technical leaders who build the future of our nation.',
      'Our dynamic curricula, modern research labs, and dedicated faculty instill both intellectual rigor and compassionate ethics. We encourage our young scholars to step beyond textbooks, embrace entrepreneurship, and solve real-world industrial and societal challenges.',
      'As we celebrate more than two decades of transformative education, I invite aspiring students and proud parents to join our vibrant academic family and experience learning that empowers for a lifetime.',
    ],
  },
  {
    id: 'vicechairman',
    name: 'Dr. Ajit Singh Patel',
    designation: 'Vice Chairman',
    institution: 'Patel Group of Institutions (PGOI)',
    quote: 'We strive to bridge academic theory with futuristic industry practices, cultivating technical excellence that stands tall on the global stage.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    qualifications: 'Ph.D., M.Tech, Renowned Academic Administrator',
    fullMessage: [
      'In today’s rapidly shifting technological landscape—shaped by Artificial Intelligence, Quantum Computing, Renewable Energy, and Smart Automation—engineering education must be agile, multidisciplinary, and experiential.',
      'At PCST, our academic framework bridges theoretical mastery with hands-on incubation. We have forged strategic alliances with top industry leaders, enabling our students to master emerging technologies before they even graduate.',
      'Our placement records and research patents reflect our philosophy: when quality teaching meets cutting-edge infrastructure, excellence is inevitable.',
    ],
  },
  {
    id: 'director',
    name: 'Dr. G. S. Chouhan',
    designation: 'Director & Principal',
    institution: 'Patel College of Science and Technology',
    quote: 'Our classrooms are incubators of innovation where curious minds are transformed into competent engineers and empathetic leaders.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    qualifications: 'Ph.D. in Engineering, 28+ Years Academic & Research Experience',
    fullMessage: [
      'Patel College of Science and Technology stands as a beacon of academic distinction in Madhya Pradesh. Affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) and approved by AICTE, we ensure our academic programs remain strictly aligned with the highest national standards.',
      'With over 150 dedicated faculty members, state-of-the-art computational laboratories, and a student-centric mentorship model, every PCST student receives individual guidance to discover and polish their latent potentials.',
      'I am delighted to welcome you to our sprawling 45-acre green campus. Let us embark together on an exhilarating journey of knowledge, skill enhancement, and career triumph.',
    ],
  },
];

export const corePillars: CorePillar[] = [
  {
    id: 'academic-excellence',
    title: 'Academic Rigor & Pedagogy',
    subtitle: 'Outcome-based Education Aligned with NEP 2020',
    icon: 'GraduationCap',
    badge: 'Curriculum Excellence',
    description:
      'We combine rigorous engineering principles with experiential project work, emerging tech certifications (AI/ML, Cloud, IoT, Robotics), and interactive smart classroom pedagogy.',
    points: [
      'Affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal',
      'Value-added industry certifications integrated into undergraduate coursework',
      'Continuous evaluation, student hackathons, and national coding symposiums',
      'Distinguished guest lectures from IIT/NIT professors and global tech executives',
    ],
  },
  {
    id: 'infrastructure',
    title: 'World-Class Infrastructure',
    subtitle: '45-Acre Smart Eco-Campus in Bhopal',
    icon: 'Building2',
    badge: 'Modern Campus',
    description:
      'A serene, pollution-free academic haven equipped with cutting-edge laboratories, campus-wide high-speed optical fiber Wi-Fi, air-conditioned seminar halls, and smart classrooms.',
    points: [
      'Advanced computer centers powered by high-performance GPU workstations',
      'Central digital library housing 55,000+ volumes, IEEE e-journals, and DELNET',
      'Specialized engineering workshops: CNC machines, Robotics, and IoT setups',
      'On-campus hygienic cafeteria, sports pavilions, and separate student hostels',
    ],
  },
  {
    id: 'faculty',
    title: 'Eminent Faculty & Mentorship',
    subtitle: '1:15 Faculty-to-Student Mentorship Model',
    icon: 'Users',
    badge: 'Expert Educators',
    description:
      'Our distinguished academic fraternity comprises accomplished doctorates, researchers, and patent holders who mentor students on both academic and personal growth.',
    points: [
      'Over 150+ full-time qualified professors, including dual Ph.D. scholars',
      'Dedicated Proctorial system with personalized weekly academic counselling',
      'Faculty-guided student research publications in Scopus and UGC-CARE journals',
      'Continuous Faculty Development Programs (FDP) with premier institutes',
    ],
  },
  {
    id: 'placements',
    title: 'Industry Linkages & Placements',
    subtitle: '100+ Recruiter Visits & Dedicated Corporate Cell',
    icon: 'Briefcase',
    badge: 'Career Success',
    description:
      'A vibrant Training and Placement Cell that grooms students from their first year in soft skills, quantitative aptitude, mock interviews, and corporate live projects.',
    points: [
      'Highest CTC package of ₹18 LPA with 95%+ consistent placement assistance',
      'Marquee hiring partners: TCS, Infosys, Wipro, Cognizant, Hitachi, RetailOn',
      'Incubation & Startup Cell supporting student entrepreneurship and grants',
      'Compulsory industrial internships with leading manufacturing & IT hubs',
    ],
  },
];

export const institutionalStats = [
  { label: 'Years of Educational Legacy', value: '22+', icon: 'History', highlight: 'Since 2002' },
  { label: 'Campus Area in Bhopal', value: '45+', suffix: 'Acres', icon: 'MapPin', highlight: 'Green Eco-Campus' },
  { label: 'Successful Alumni Worldwide', value: '15,000+', icon: 'Award', highlight: 'Global Network' },
  { label: 'Corporate Recruiters', value: '100+', icon: 'Briefcase', highlight: 'Top MNC Partners' },
  { label: 'Technical & Management Programs', value: '18+', icon: 'BookOpen', highlight: 'UG & PG Streams' },
  { label: 'Highest Salary Package', value: '₹18', suffix: 'LPA', icon: 'TrendingUp', highlight: 'Placement Record' },
];

export const accreditationData: AccreditationItem[] = [
  {
    title: 'AICTE Approved',
    authority: 'All India Council for Technical Education, New Delhi',
    status: 'Approved & Accredited',
    description:
      'Statutory apex body approval ensuring PCST meets the highest technical education standards, faculty norms, and laboratory requirements.',
    iconType: 'aicte',
  },
  {
    title: 'RGPV Bhopal Affiliation',
    authority: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya, MP',
    status: 'Permanently Affiliated',
    description:
      'State Technological University of Madhya Pradesh providing degree validation, standardized curriculum, and examination conduct.',
    iconType: 'rgpv',
  },
  {
    title: 'PCI & NCTE Recognitions',
    authority: 'Pharmacy Council of India & NCTE',
    status: 'Approved Portals',
    description:
      'Accredited programs across allied technical, pharmacy, and educational institutes under the Patel Group of Institutions.',
    iconType: 'pci',
  },
  {
    title: 'ISO 9001:2015 Certified',
    authority: 'International Quality Management Standard',
    status: 'Certified Excellence',
    description:
      'Rigorous quality management systems in academic delivery, campus administration, and student welfare protocols.',
    iconType: 'iso',
  },
];

export const campusFacilities: CampusFacility[] = [
  {
    id: 'library',
    name: 'Central Digital Library & Knowledge Hub',
    category: 'Academic Facility',
    description:
      'Fully automated resource center equipped with RFID access, e-learning terminals, and national/international journal subscriptions.',
    stats: '55,000+ Books | 120+ Print Journals | DELNET & IEEE',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    features: ['DELNET E-Resources', 'Audio-Visual Reading Section', 'Reprographic Facility', 'Quiet Research Cubicles'],
  },
  {
    id: 'computing',
    name: 'Advanced Computing & AI Innovation Labs',
    category: 'Technical Labs',
    description:
      'High-performance computing cluster with dedicated machines for Artificial Intelligence, Machine Learning, Cloud Systems, and IoT simulation.',
    stats: '850+ Workstations | 1 Gbps Leased Line | GPU Servers',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    features: ['NVIDIA GPU Rigs', 'Licensed MATLAB & AutoCAD', 'Red Hat Linux Lab', 'Cybersecurity Sandbox'],
  },
  {
    id: 'hostels',
    name: 'Residential Hostels for Boys & Girls',
    category: 'Campus Living',
    description:
      'Safe, home-like environment with round-the-clock security, hygienic multi-cuisine mess, solar water heating, and high-speed Wi-Fi.',
    stats: '600+ Inmate Capacity | 24/7 Security & CCTV | Resident Wardens',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    features: ['Hygienic Dining Mess', 'Doctor-on-Call & Ambulance', 'Indoor Recreation Room', 'Study Lounges'],
  },
  {
    id: 'sports',
    name: 'Sports Complex, Arena & Gymnasium',
    category: 'Physical Well-being',
    description:
      'Expansive outdoor sports grounds and indoor sports complexes fostering sportsmanship, physical vitality, and collegiate competitions.',
    stats: 'Full-sized Cricket Oval | Basketball Court | Modern Gym',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    features: ['Floodlit Courts', 'Qualified Physical Directors', 'Annual Spardha Sports Meet', 'Yoga & Meditation Hall'],
  },
];

export const announcements: AnnouncementItem[] = [
  {
    id: '1',
    date: '28 Sep 2026',
    title: 'B.Tech & MBA Admissions 2026-27: Counselling Round II Open for MP DTE / JEE Aspirants',
    category: 'Admissions',
    isNew: true,
  },
  {
    id: '2',
    date: '24 Sep 2026',
    title: 'Campus Recruitment Drive: Hitachi & Teleperformance Scheduled for Final Year Students',
    category: 'Placements',
    isNew: true,
  },
  {
    id: '3',
    date: '19 Sep 2026',
    title: 'RGPV Semester Examination Guidelines & Practical Timetable Released for Nov-Dec Session',
    category: 'Academics',
  },
  {
    id: '4',
    date: '14 Sep 2026',
    title: 'National Conference on "Emerging Trends in AI and Sustainable Engineering" (NCAISE-26)',
    category: 'Events',
  },
];

export const sidebarLinks = [
  { id: 'about-pcst', label: 'About PCST (Overview)', href: '#about-pcst' },
  { id: 'vision-mission', label: 'Vision, Mission & Values', href: '#vision-mission' },
  { id: 'chairperson', label: "Chairperson's Message", href: '#leadership' },
  { id: 'vicechairman', label: "Vice Chairman's Message", href: '#leadership' },
  { id: 'director', label: "Director's Welcome", href: '#leadership' },
  { id: 'pillars', label: 'Core Pillars of Excellence', href: '#pillars' },
  { id: 'approvals', label: 'Approvals & Affiliations', href: '#approvals' },
  { id: 'facilities', label: 'Campus Facilities & Life', href: '#facilities' },
  { id: 'disclosures', label: 'Mandatory Disclosures & NIRF', href: '#disclosures' },
];

export const contactDetails = {
  collegeName: 'Patel College of Science and Technology (PCST)',
  groupName: 'Patel Group of Institutions (PGOI)',
  address: 'Ratibad, Bhadbhada Road, Bhopal, Madhya Pradesh - 462044, India',
  phonePrimary: '+91 755 2896281',
  phoneSecondary: '+91 755 2896282',
  admissionHelpline: '1800-200-3531 (Toll-Free)',
  mobileHelpline: '+91 94250 14660 / +91 94250 14661',
  emailAdmission: 'admission@patelcollege.com',
  emailGeneral: 'info@patelcollege.com',
  website: 'www.patelcollege.com',
  campusTimings: 'Monday – Saturday: 9:00 AM – 5:00 PM',
  affiliations: 'Approved by AICTE, New Delhi & Affiliated to RGPV, Bhopal',
};
