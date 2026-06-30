// Certifications and professional programs, grouped by provider.
export interface CertGroup {
  provider: string;
  note?: string;
  items: { name: string; date?: string }[];
}

export const certifications: CertGroup[] = [
  {
    provider: 'Microsoft',
    note: 'Active',
    items: [
      { name: 'Azure AI Engineer Associate', date: '2025' },
      { name: 'Azure Data Scientist Associate', date: '2025' },
      { name: 'Power BI Data Analyst Associate', date: '2025' },
    ],
  },
  {
    provider: 'DataCamp',
    items: [
      { name: 'Data Engineer Associate', date: 'Oct 2024' },
      { name: 'Data Analyst Associate', date: 'Oct 2024' },
      { name: 'SQL Associate', date: 'Oct 2024' },
      { name: 'Data Scientist Associate', date: 'Apr 2024' },
    ],
  },
  {
    provider: 'Programs',
    items: [
      { name: 'McKinsey Forward Program', date: 'Dec 2024' },
      { name: 'Aspire Leaders Program', date: 'Jan to Mar 2025' },
      { name: 'WorldQuant University Applied AI Lab', date: 'Nov 2024 to May 2025' },
      { name: 'WorldQuant University Applied Data Science Lab', date: 'Nov 2023 to Apr 2024' },
      { name: 'YALI Fundamentals of Responsible Leadership', date: 'Aug 2024' },
    ],
  },
];
