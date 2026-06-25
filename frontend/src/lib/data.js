export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'articles', label: 'Articles' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '~$2M+', label: 'Pipeline Influenced' },
  { value: '30%', label: 'MQL Growth' },
  { value: '500+', label: 'Media Mentions' },
];

export const FLOATING_TAGS = [
  'Product Marketing', 'GTM', 'ABM', 'Content Strategy', 'AI Marketing',
];

export const TIMELINE = [
  { company: 'Hybrid.ai', role: 'Marketing Lead — AdTech / AI', period: '2023 — 2026', highlight: 'Led GTM, PR, ABM and category-defining narrative for VOX contextual suite.' },
  { company: 'Mitgo Group', role: 'Senior Marketing Manager — SaaS / MarTech', period: '2021 — 2023', highlight: 'Scaled regional demand engine across affiliate, partner & content marketing.' },
  { company: 'Marriott International', role: 'Marketing & Brand', period: '2018 — 2021', highlight: 'Drove digital, loyalty and luxury brand storytelling for India properties.' },
  { company: 'IHG Hotels & Resorts', role: 'Marketing Communications', period: '2016 — 2018', highlight: 'Owned PR, events and campaign rollouts across the IHG India portfolio.' },
  { company: 'Aditya Birla Fashion & Retail', role: 'Marketing — Retail', period: '2013 — 2016', highlight: 'Built BTL, in-store and seasonal campaigns for flagship retail brands.' },
];

export const EXPERTISE = [
  { title: 'Product Marketing', items: ['Positioning', 'Messaging', 'Launches', 'Sales Enablement'], icon: 'Rocket' },
  { title: 'GTM Strategy', items: ['ICP Development', 'Buyer Personas', 'Launch Frameworks', 'Pipeline Generation'], icon: 'Target' },
  { title: 'Demand Generation', items: ['ABM', 'Email Automation', 'LinkedIn Ads', 'Lead Nurturing'], icon: 'Zap' },
  { title: 'Content & Thought Leadership', items: ['Blogs', 'Podcasts', 'PR', 'Case Studies'], icon: 'BookOpen' },
  { title: 'Brand & Communications', items: ['Media Relations', 'Executive Branding', 'Corporate Comms'], icon: 'Megaphone' },
  { title: 'AI Marketing', items: ['AI Workflows', 'Prompt Engineering', 'Marketing Automation'], icon: 'Sparkles' },
];

export const WORK = [
  {
    slug: 'context-is-king',
    title: 'Context Is King',
    category: 'Thought Leadership Campaign',
    summary: 'Positioned Hybrid VOX as the benchmark for contextual, cookie-less advertising through PR, content, social campaigns, podcasts and executive thought leadership.',
    quote: '"Advertising should understand meaning, not just keywords."',
    image: 'https://images.pexels.com/photos/28628485/pexels-photo-28628485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    span: 'col-span-12 md:col-span-8',
  },
  {
    slug: 'vox-suite',
    title: 'VOX Contextual Marketing Suite',
    category: 'Product Marketing',
    summary: 'Built product narrative around AI-powered contextual intelligence, computer vision and brand-safe advertising.',
    image: 'https://images.pexels.com/photos/13807426/pexels-photo-13807426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    span: 'col-span-12 md:col-span-4',
  },
  {
    slug: 'auto-konnect',
    title: 'Auto Konnect',
    category: 'Product Launch',
    summary: 'Created positioning and GTM narrative for an automotive advertising ecosystem blending contextual, programmatic and TV-sync technologies.',
    image: 'https://images.pexels.com/photos/14528986/pexels-photo-14528986.jpeg',
    span: 'col-span-12 md:col-span-4',
  },
  {
    slug: 'philips',
    title: 'Philips Air Fryer Campaign',
    category: 'Case Study',
    summary: '8.3M impressions, 82K clicks, 0.99% CTR, 73K sales — driven through contextual targeting and dynamic creative.',
    metrics: [{ k: 'Impressions', v: '8.3M' }, { k: 'CTR', v: '0.99%' }, { k: 'Sales', v: '73K' }],
    image: 'https://images.pexels.com/photos/28628485/pexels-photo-28628485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    span: 'col-span-12 md:col-span-8',
  },
  {
    slug: 'dsp',
    title: 'DSP Mutual Fund',
    category: 'TV Sync Campaign',
    summary: 'TV-synced programmatic activations driving 7.2M impressions, 87K clicks and 1.20% CTR.',
    metrics: [{ k: 'Impressions', v: '7.2M' }, { k: 'Clicks', v: '87K' }, { k: 'CTR', v: '1.20%' }],
    image: 'https://images.pexels.com/photos/13807426/pexels-photo-13807426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    span: 'col-span-12 md:col-span-6',
  },
  {
    slug: 'himalaya',
    title: 'Himalaya Herbals',
    category: 'Contextual Advertising',
    summary: 'Drove awareness and consideration through the VOX Contextual Marketing Suite across natural beauty and wellness contexts.',
    image: 'https://images.pexels.com/photos/14528986/pexels-photo-14528986.jpeg',
    span: 'col-span-12 md:col-span-6',
  },
];

export const CASE_STUDIES = [
  {
    slug: 'philips',
    title: 'Philips Air Fryer',
    challenge: 'Drive consideration in a saturated kitchen-appliances category while sales conversion lagged behind awareness.',
    strategy: 'Layered contextual targeting on food, recipe and wellness inventory with dynamic creatives matched to viewing context.',
    execution: 'Programmatic + DCO across premium publishers; sequential storytelling from education → product demo → offer.',
    results: ['8.3M impressions', '82K clicks at 0.99% CTR', '73K incremental sales attributable to campaign'],
  },
  {
    slug: 'dsp',
    title: 'DSP Mutual Fund',
    challenge: 'Convert TV brand spend into measurable digital action without overlap fatigue.',
    strategy: 'TV-sync programmatic activations triggered by live-TV ad detection across financial and news contexts.',
    execution: 'Real-time bidder rules + custom landing experiences tailored to the ad just seen on TV.',
    results: ['7.2M impressions', '87K clicks', '1.20% CTR — 2.4x category benchmark'],
  },
  {
    slug: 'himalaya',
    title: 'Himalaya Herbals',
    challenge: 'Stand out in a crowded natural beauty category without relying on third-party cookies.',
    strategy: 'VOX Contextual Marketing Suite — semantic + computer vision matching across grooming, ayurveda and wellness.',
    execution: 'Brand-safe contextual placements, AI-driven creative selection, layered post-view audience nurturing.',
    results: ['Brand lift across awareness and consideration', 'Higher contextual relevance vs cookie audiences', 'Lower CPV at scale'],
  },
  {
    slug: 'context-is-king',
    title: 'Context Is King',
    challenge: 'Establish Hybrid VOX as the category benchmark in a noisy cookie-less narrative space.',
    strategy: 'Integrated thought-leadership flywheel: PR, executive content, podcasts, social campaigns and on-ground events.',
    execution: '350+ media mentions, 100+ events, executive bylines in Adgully, exchange4media, Financial Express, ET Brand Equity.',
    results: ['Category authority for VOX', '25-30% MQL growth', '2.5x website engagement growth'],
  },
  {
    slug: 'auto-konnect',
    title: 'Auto Konnect',
    challenge: 'Launch a category-defining automotive advertising ecosystem to OEMs and dealer networks.',
    strategy: 'Built positioning, sales narrative and event-led GTM around contextual + programmatic + TV-sync for autos.',
    execution: 'City editions (Gurugram, Ahmedabad, Mumbai), product marketing collateral, executive PR and analyst briefings.',
    results: ['National coverage in marquee trade publications', 'New automotive pipeline opened', 'Expansion across India regions'],
  },
];

export const METRICS = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Industry Events' },
  { value: 500, suffix: '+', label: 'Media Mentions' },
  { value: 30, suffix: '%', label: 'MQL Growth' },
  { value: 2.5, suffix: 'x', label: 'Engagement Growth', decimals: 1 },
  { value: 6000, suffix: '+', label: 'LinkedIn Audience' },
  { value: 2, prefix: '~$', suffix: 'M+', label: 'Pipeline Influenced' },
];

export const ARTICLES = [
  { title: 'Programmatic Advertising in 2024: Navigating New Frontiers', publication: 'Adgully', url: 'https://www.adgully.com/programmatic-advertising-in-2024-navigating-new-frontiers-140845.html' },
  { title: 'Synergy Between AI & Contextual Targeting: A Blueprint for Brand Safety', publication: 'exchange4media', url: 'https://www.exchange4media.com/industry-briefing-news/synergy-between-ai-contextual-targeting-is-a-blueprint-for-brand-safety-132814.html' },
  { title: 'The Evolution of AI-Powered Advertising: From Targeting to Personalisation', publication: 'Indian Television', url: 'https://www.indiantelevision.com/mam/media-and-advertising/ad-agencies/the-evolution-of-ai-powered-advertising-from-targeting-to-personalisation-240426' },
  { title: 'Dynamic Creative Optimisation: Leveraging Machine Learning for Tailored Ad Content', publication: 'Financial Express', url: 'https://www.financialexpress.com/business/brandwagon-dynamic-creative-optimisation-leveraging-machine-learning-for-tailored-ad-content-3500387/' },
  { title: 'Hybrid Opens New Gurugram Office as India Corporate HQ', publication: 'Indian Television', url: 'https://www.indiantelevision.com/mam/marketing/mam/hybrid-opens-a-new-office-in-gurugram-establishing-it-as-the-corporate-headquarters-in-india-240617' },
  { title: 'AI in Digital Advertising: Building Capabilities for a Cookie-less Era', publication: 'Adgully', url: 'https://www.adgully.com/ai-in-digital-advertising-building-capabilities-for-a-cookie-less-era-147203.html' },
  { title: 'The Intersection of AI, Computer Vision and Contextual Advertising', publication: 'AdTech Today', url: 'https://adtechtoday.com/the-intersection-of-ai-computer-vision-and-contextual-advertising-new-opportunities/' },
  { title: 'Hyperlocal Targeting: The Next Frontier in Location-Based Advertising', publication: 'MediaNews4U', url: 'https://www.medianews4u.com/hyperlocal-targeting-the-next-frontier-in-location-based-advertising/' },
  { title: 'Hybrid Auto Konnect — Redefining Automotive Advertising', publication: 'Marketing Mind', url: 'https://marketingmind.in/hybrid-auto-konnect-automotive-advertising/' },
  { title: 'Hybrid Auto Konnect: Programmatic Innovations', publication: 'The Logical Indian', url: 'https://thelogicalindian.com/events-and-partnerships/hybrid-auto-konnect-redefining-automotive-advertising-with-programmatic-innovations-41816' },
  { title: 'Hybrid Enters Gujarat with Ahmedabad Konnect', publication: 'ANI News', url: 'https://www.aninews.in/news/business/hybrid-enters-gujarat-market-with-ahmedabad-konnect-in-partnership-with-adgully20240917150238/' },
  { title: 'VOX Launches Innovative Ad Formats for the Indian Market', publication: 'Agency Reporter', url: 'https://www.agencyreporter.com/vox-launches-innovative-ad-formats-to-elevate-brand-engagement-in-the-indian-market/' },
  { title: 'Hybrid Hosts BFSI Community in Mumbai — Leadership Lounge', publication: 'ANI News', url: 'https://aninews.in/news/business/hybrid-hosts-the-bfsi-community-in-mumbai-via-the-leadership-lounge-and-the-2nd-edition-of-bfsi-konnect20241219173437/' },
];

export const TESTIMONIALS = [
  { quote: 'Adhish brings a rare combination of strategic thinking and operational rigor. Our category narrative finally felt distinct.', name: 'SaaS Founder', role: 'B2B AI Startup' },
  { quote: 'One of the sharpest product marketers I have worked with. He turned a complex AdTech stack into a story buyers actually wanted.', name: 'Product Leader', role: 'AdTech Platform' },
  { quote: 'Pipeline grew, but more importantly our positioning finally matched our ambition. That is Adhish.', name: 'Agency Partner', role: 'Growth Agency' },
  { quote: 'From PR to ABM to events — he made the marketing engine feel intentional, not improvised.', name: 'Enterprise Client', role: 'BFSI' },
];

export const CONTACT = {
  email: 'adhishkacker@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/adhish-kacker',
};
