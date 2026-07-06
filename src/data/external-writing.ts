// Externally published articles (Right for Education).
// These are listed on the Writing page under "Civic writing" and open in a
// new tab.
//
// Deep-linked pieces carry their exact rightforeducation.org article URL and
// publication date. Any piece whose per-article URL is not yet confirmed falls
// back to the author archive below.

export interface ExternalArticle {
  title: string;
  /** ISO date (YYYY-MM-DD) used only for sorting and display. */
  date: string;
  url: string;
  source: string;
}

const RED_AUTHOR_PAGE = 'https://rightforeducation.org/author/peter-tinashe-mundowa/';

export const externalWriting: ExternalArticle[] = [
  {
    title: 'Empowering African Dreams: How Financial Literacy Transforms Careers',
    date: '2026-06-01',
    url: RED_AUTHOR_PAGE,
    source: 'R:Ed',
  },
  {
    title: 'Beyond the Robots: What Artificial Intelligence Really Means',
    date: '2026-03-05',
    url: 'https://rightforeducation.org/2026/03/05/understanding-what-artificial-intelligence-really-means/',
    source: 'R:Ed',
  },
  {
    title: 'Africa: The Continent of Untapped Wealth Below and Unseen Potential Above',
    date: '2026-02-16',
    url: 'https://rightforeducation.org/2026/02/16/africa-the-continent-of-untapped-wealth/',
    source: 'R:Ed',
  },
  {
    title: 'Why Learning Data Skills Is the New Literacy',
    date: '2026-01-28',
    url: 'https://rightforeducation.org/2026/01/28/why-learning-data-skills-is-the-new-literacy/',
    source: 'R:Ed',
  },
  {
    title: "Zimbabwe: From Africa's Breadbasket to Revival and Growth",
    date: '2026-01-12',
    url: 'https://rightforeducation.org/2026/01/12/zimbabwe-from-africas-breadbasket-to-revival-and-growth/',
    source: 'R:Ed',
  },
  {
    title: 'Leadership in the Age of Technology: Guiding Change with Wisdom',
    date: '2025-12-08',
    url: 'https://rightforeducation.org/2025/12/08/leadership-in-the-age-of-technology-guiding-change-with-wisdom/',
    source: 'R:Ed',
  },
  {
    title: 'A Borderless Africa: The Future of Unity and Prosperity',
    date: '2025-10-01',
    url: RED_AUTHOR_PAGE,
    source: 'R:Ed',
  },
  {
    title: "Green Growth: Sustainable Solutions for Africa's Environmental Challenges",
    date: '2025-01-01',
    url: RED_AUTHOR_PAGE,
    source: 'R:Ed',
  },
  {
    title: 'Empowering Africa: Unleashing the Potential of Youth Entrepreneurship',
    date: '2024-07-24',
    url: 'https://rightforeducation.org/2024/07/24/potential-youth-entrepreneurship/',
    source: 'R:Ed',
  },
];
