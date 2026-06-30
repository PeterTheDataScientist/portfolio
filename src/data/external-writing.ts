// Externally published articles (Right for Education).
// These are listed alongside local blog posts in the Writing section and
// open in a new tab.
//
// NOTE: each `url` currently points at the Right for Education author archive,
// because the per-article URLs were not supplied. To deep-link a piece, replace
// its `url` with the exact article address from rightforeducation.org.

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
    date: '2026-03-01',
    url: RED_AUTHOR_PAGE,
    source: 'R:Ed',
  },
  {
    title: 'Africa: The Continent of Untapped Wealth Below and Unseen Potential Above',
    date: '2026-02-01',
    url: RED_AUTHOR_PAGE,
    source: 'R:Ed',
  },
  {
    title: 'Why Learning Data Skills Is the New Literacy',
    date: '2026-01-01',
    url: RED_AUTHOR_PAGE,
    source: 'R:Ed',
  },
  {
    title: "Zimbabwe: From Africa's Breadbasket to Revival and Growth",
    date: '2026-01-01',
    url: RED_AUTHOR_PAGE,
    source: 'R:Ed',
  },
  {
    title: 'Leadership in the Age of Technology: Guiding Change with Wisdom',
    date: '2025-12-01',
    url: RED_AUTHOR_PAGE,
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
    date: '2024-07-01',
    url: RED_AUTHOR_PAGE,
    source: 'R:Ed',
  },
];
