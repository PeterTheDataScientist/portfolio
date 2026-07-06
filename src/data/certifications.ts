// Certifications and professional programs, grouped by provider.
export interface CertGroup {
  provider: string;
  note?: string;
  items: { name: string; date?: string; url?: string }[];
}

export const certifications: CertGroup[] = [
  {
    provider: 'Microsoft',
    note: 'Active',
    items: [
      { name: 'Azure AI Engineer Associate', date: '2026', url: 'https://learn.microsoft.com/api/credentials/share/en-gb/PeterTinasheMundowa-8664/72C89E29826DE84B?sharingId=C97199ED0393A4E1' },
      { name: 'Azure Data Scientist Associate', date: '2026', url: 'https://learn.microsoft.com/api/credentials/share/en-us/TinasheMundowa-6953/8BBB7D478FF3A5BF?sharingId=52B7F9BC4F7536B3' },
      { name: 'Power BI Data Analyst Associate', date: '2026', url: 'https://learn.microsoft.com/api/credentials/share/en-gb/PeterTinasheMundowa-8664/5AF5F96C0CAFAF49?sharingId=C97199ED0393A4E1' },
    ],
  },
  {
    provider: 'DataCamp',
    items: [
      { name: 'Data Engineer Associate', date: 'Oct 2024', url: 'https://www.datacamp.com/certificate/DEA0018707332646' },
      { name: 'Data Analyst Associate', date: 'Oct 2024', url: 'https://www.datacamp.com/certificate/DAA0016857435069' },
      { name: 'SQL Associate', date: 'Oct 2024', url: 'https://www.datacamp.com/certificate/SQA0016556196174' },
      { name: 'Data Scientist Associate', date: 'Apr 2024', url: 'https://www.datacamp.com/certificate/DSA0016847444310' },
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
