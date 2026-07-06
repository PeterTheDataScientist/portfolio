// Zindi and hackathon competition results.
export interface Competition {
  place: string;   // ordinal label, e.g. "3rd"
  rank: number;    // numeric position
  total: number;   // field size
  title: string;
  repo?: string;
}

export const zindiProfile = 'https://zindi.africa/users/PeterTheAnalyst';

export const competitions: Competition[] = [
  { place: '3rd', rank: 3, total: 85, title: 'ITU AI/ML Global Challenge: Environmental Footprint' },
  { place: '8th', rank: 8, total: 47, title: 'Maize Crop Disease Detection Challenge', repo: 'https://github.com/PeterTheDataScientist/maize-leaf-disease-detection' },
  { place: '41st', rank: 41, total: 374, title: 'DigiCow Farmer Training Adoption Challenge' },
];
