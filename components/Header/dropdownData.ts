export interface DropdownLink {
  title: string
  subtitle: string
  href: string
  comingSoon?: boolean
}

export interface DropdownCard {
  title: string
  subtitle?: string
  date?: string
  image: string | null
  href?: string
}

export interface LinkColumn {
  sectionLabel: string
  links: DropdownLink[]
}

export const productDropdown = {
  columns: <LinkColumn[]>[
    {
      sectionLabel: 'Product',
      links: [
        { title: 'Overview', subtitle: 'Where real estate operates.', href: '/product' },
        { title: 'Assistant', subtitle: 'Your buildings, answerable.', href: '/product/assistant' },
        { title: 'Vault', subtitle: 'All your building intelligence, in one place.', href: '/product/vault' },
        { title: 'Trace Table', subtitle: 'Turn any document stack into structured intelligence.', href: '/product/trace-table' },
      ],
    },
  ],
  cardsLabel: '',
  cardItemLabel: '',
  cards: <DropdownCard[]>[],
}

export const solutionsDropdown = {
  columns: <LinkColumn[]>[
    {
      sectionLabel: 'By Use Case',
      links: [
        { title: 'Lease Administration', subtitle: 'Automated extraction of indexation, options, and key dates.', href: '/solutions/lease-administration' },
        { title: 'Due Diligence', subtitle: 'Instant risk-flagging across thousands of documents.', href: '/solutions/due-diligence' },
        { title: 'Audit & Compliance', subtitle: 'Ensure every lease aligns with your internal standards.', href: '/solutions/audit-compliance' },
      ],
    },
    {
      sectionLabel: 'By Function',
      links: [
        { title: 'Asset Management', subtitle: 'Strategic visibility. Not just a portfolio overview.', href: '/solutions/asset-managers' },
        { title: 'Property Management', subtitle: 'Operational excellence. Zero-error administration.', href: '/solutions/property-managers' },
        { title: 'Investment & Acquisitions', subtitle: 'Deal-speed due diligence. Analyze at the speed of thought.', href: '/solutions/investment-acquisitions' },
      ],
    },
    {
      sectionLabel: 'By Sector',
      links: [
        { title: 'CRE', subtitle: 'Master the complexity.', href: '/solutions/commercial-property-companies' },
        { title: 'Funds & REITs', subtitle: 'Institutional-grade intelligence for large-scale portfolios.', href: '/solutions/fund-managers' },
      ],
    },
  ],
  cardsLabel: '',
  cardItemLabel: '',
  cards: <DropdownCard[]>[],
}


export const aboutDropdown = {
  columns: <LinkColumn[]>[
    {
      sectionLabel: 'About',
      links: [
        { title: 'Company', subtitle: 'The team, the mission, and how to join us.', href: '/about' },
        { title: 'Careers', subtitle: 'Join the team building Henric.', href: '/careers' },
      ],
    },
  ],
  cardsLabel: '',
  cardItemLabel: '',
  cards: <DropdownCard[]>[
    { title: '', image: null, href: '/about' },
  ],
}

export const newsDropdown = {
  columns: <LinkColumn[]>[
    {
      sectionLabel: 'News',
      links: [
        { title: 'Blog', subtitle: 'Thinking and updates from the team behind Henric.', href: '#', comingSoon: true },
        { title: 'Newsroom', subtitle: 'Announcements and press coverage.', href: '#', comingSoon: true },
      ],
    },
  ],
  cardsLabel: 'Latest',
  cardItemLabel: 'Latest',
  cards: <DropdownCard[]>[],
}
