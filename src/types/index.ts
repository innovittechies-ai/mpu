export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface LeadershipMessage {
  id: string;
  name: string;
  designation: string;
  institution: string;
  quote: string;
  image: string;
  fullMessage: string[];
  qualifications?: string;
}

export interface CorePillar {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  points: string[];
  badge: string;
}

export interface CampusFacility {
  id: string;
  name: string;
  category: string;
  description: string;
  stats: string;
  imageUrl: string;
  features: string[];
}

export interface AccreditationItem {
  title: string;
  authority: string;
  status: string;
  description: string;
  iconType: 'aicte' | 'rgpv' | 'iso' | 'pci' | 'ncte';
}

export interface AnnouncementItem {
  id: string;
  date: string;
  title: string;
  category: 'Admissions' | 'Placements' | 'Academics' | 'Events';
  isNew?: boolean;
}
