// Zindi and hackathon competition results.
export interface Competition {
  rank: string;
  title: string;
  repo?: string;
}

export const zindiProfile = 'https://zindi.africa/users/PeterTheAnalyst';

export const competitions: Competition[] = [
  { rank: '3rd / 85', title: 'ITU AI/ML Global Challenge: Environmental Footprint' },
  { rank: '3rd / 10', title: 'IndabaX Zimbabwe 2025: Face Spoofing Detection Hackathon' },
  { rank: '8th / 47', title: 'Maize Crop Disease Detection Challenge', repo: 'https://github.com/PeterTheDataScientist/maize-leaf-disease-detection' },
  { rank: '10th / 40', title: 'IndabaX Zimbabwe 2026: Loan Default Prediction Hackathon' },
  { rank: '41st / 374', title: 'DigiCow Farmer Training Adoption Challenge' },
];
