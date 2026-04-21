// ============================================================
// CallFirst Client Template — Client Configuration
// THIS IS THE ONLY FILE THAT CHANGES PER DEPLOYMENT
// ============================================================

import type { ClientConfig, IntakeStep } from '@/types'

export const CLIENT: ClientConfig = {
  businessName: 'CLIENT_NAME',
  ownerName: 'OWNER_NAME',
  trade: 'Roofing',
  area: 'AREA',
  region: 'REGION',
  phone: '00000 000000',
  tagline: 'Trusted roofers across AREA and REGION',
  domain: 'www.clientdomain.co.uk',
  discountActive: true,
  discountPercent: 10,
  googleReviewUrl: 'https://g.page/r/REVIEW_ID/review',
  googleReviewCount: 0,
  googleReviewRating: 5.0,
  yearEstablished: 2020,
  insuranceAmount: '5 million',

  trustSignals: [
    {
      icon: 'shield-check',
      title: 'Fully Insured',
      description: '£5m public liability insurance on every job',
    },
    {
      icon: 'clock',
      title: 'Same-Day Response',
      description: 'Every enquiry answered within hours, not days',
    },
    {
      icon: 'map-pin',
      title: 'Local to AREA',
      description: 'Serving the area for many years',
    },
    {
      icon: 'badge-check',
      title: 'All Work Guaranteed',
      description: 'Written guarantee on every job we complete',
    },
  ],

  services: [
    {
      slug: 'roof-repair',
      name: 'Roof Repair',
      shortDescription: 'Fast, reliable repairs for leaks, storm damage, and general wear and tear.',
      longDescription: 'Whether you have a single slipped tile or widespread storm damage, we diagnose the problem accurately and fix it right the first time. Our repair service covers all roof types including pitched, flat, slate, tile, and felt roofs. We carry common replacement materials on the van so most repairs can be completed in a single visit.',
      priceFrom: 150,
      priceTo: 500,
      icon: 'wrench',
      features: [
        'Emergency same-day repairs available',
        'All common tile and slate types carried on van',
        'Full inspection included with every repair',
        'Written report and photos provided',
        'Guarantee on all repair work',
      ],
      keywords: ['roof repair AREA', 'roof leak repair AREA', 'emergency roof repair AREA', 'storm damage roof AREA'],
    },
    {
      slug: 'new-roof',
      name: 'New Roof',
      shortDescription: 'Complete roof replacements using premium materials with a 20-year guarantee.',
      longDescription: 'When repairs are no longer cost-effective, a full reroof is the most reliable long-term solution. We strip the existing roof, inspect and repair the timber structure, fit new breathable membrane and battens, and install your chosen tile or slate. Every reroof comes with a written 20-year guarantee on materials and workmanship.',
      priceFrom: 5000,
      priceTo: 12000,
      icon: 'home',
      features: [
        'Full strip and reroof service',
        'Timber inspection and repair included',
        'Breathable membrane and new battens',
        'Wide choice of tiles, slates, and finishes',
        '20-year written guarantee',
      ],
      keywords: ['new roof AREA', 'roof replacement AREA', 'reroof AREA', 'full roof replacement cost AREA'],
    },
    {
      slug: 'flat-roof',
      name: 'Flat Roof',
      shortDescription: 'GRP fibreglass and EPDM rubber flat roofing built to last.',
      longDescription: 'Flat roofs on extensions, garages, and dormers need specialist materials to stay watertight. We install GRP fibreglass and EPDM rubber membrane systems that are proven to last 25+ years with zero maintenance. We also repair and overlay existing felt flat roofs where the structure is still sound.',
      priceFrom: 200,
      priceTo: 3000,
      icon: 'layers',
      features: [
        'GRP fibreglass and EPDM rubber systems',
        '25+ year life expectancy',
        'No maintenance required',
        'Overlay existing felt roofs',
        'Suitable for extensions, garages, dormers',
      ],
      keywords: ['flat roof AREA', 'flat roof repair AREA', 'grp flat roof AREA', 'fibreglass roof AREA'],
    },
    {
      slug: 'chimney-work',
      name: 'Chimney Work',
      shortDescription: 'Repointing, reflashing, cowl fitting, and chimney stack repairs.',
      longDescription: 'Chimneys take the worst of the weather and are one of the most common sources of leaks. We carry out full chimney repointing, lead flashing replacement, cowl and cap fitting, and chimney stack rebuilds where necessary. All chimney work includes scaffolding in the price — no hidden costs.',
      priceFrom: 300,
      priceTo: 800,
      icon: 'flame',
      features: [
        'Full chimney repointing',
        'Lead flashing replacement',
        'Cowl and cap fitting',
        'Stack rebuilds where needed',
        'Scaffolding included in price',
      ],
      keywords: ['chimney repair AREA', 'chimney repointing AREA', 'chimney flashing AREA', 'chimney stack repair AREA'],
    },
    {
      slug: 'guttering',
      name: 'Guttering',
      shortDescription: 'Gutter cleaning, repair, and full replacement in uPVC, cast iron, and aluminium.',
      longDescription: 'Blocked or damaged gutters cause water to overflow and damage walls, foundations, and interior decoration. We clean, repair, and replace guttering in all materials including uPVC, cast iron, and aluminium. We also install gutter guards to prevent future blockages and fascia and soffit boards as part of a complete roofline service.',
      priceFrom: 150,
      priceTo: 600,
      icon: 'droplets',
      features: [
        'Gutter cleaning and unblocking',
        'uPVC, cast iron, and aluminium',
        'Gutter guard installation',
        'Fascia and soffit replacement',
        'Downpipe repair and replacement',
      ],
      keywords: ['guttering AREA', 'gutter repair AREA', 'gutter replacement AREA', 'gutter cleaning AREA'],
    },
  ],

  areasServed: [
    { name: 'AREA', slug: 'area-slug', description: 'Our home base — fast response times across the whole area.', distanceFromBase: '0 miles' },
  ],

  faqs: [
    {
      question: 'How much does a new roof cost in AREA?',
      answer: 'A full reroof on a typical semi-detached house costs between £5,000 and £8,000. Detached homes range from £7,000 to £12,000 depending on size, pitch, and materials. We provide free no-obligation quotes so you know the exact cost before any work starts.',
    },
    {
      question: 'How quickly can you come out for an emergency?',
      answer: 'For genuine emergencies like active leaks or storm damage, we aim to attend the same day or the following morning. We carry emergency tarpaulins and common repair materials on the van so we can make the property watertight immediately.',
    },
    {
      question: 'Do you offer a guarantee on your work?',
      answer: 'Yes. Every job comes with a written guarantee. Repairs are guaranteed for 12 months, reroofs for 20 years, and flat roofs for the lifetime of the membrane system (typically 25+ years). The guarantee covers both materials and workmanship.',
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we carry £5 million public liability insurance on every job. We can provide a copy of our insurance certificate on request before any work begins.',
    },
    {
      question: 'Do I need scaffolding for roof work?',
      answer: 'Most roof work above single-storey height requires scaffolding for safety. We arrange all scaffolding as part of your quote — the cost is included, not added as a surprise extra. For smaller repairs at lower heights, we can often use ladders and roof access equipment.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We cover AREA and the surrounding region. If you are unsure whether we cover your area, just ask — we probably do.',
    },
    {
      question: 'How long does a full reroof take?',
      answer: 'A typical semi-detached house takes 3–5 working days. Detached homes and more complex roofs may take 5–7 days. Weather can extend timelines, but we always keep you informed and never leave a roof uncovered overnight.',
    },
    {
      question: 'Can you match my existing tiles?',
      answer: 'In most cases, yes. We stock a wide range of common tile and slate types and have suppliers who specialise in matching discontinued lines. If an exact match is not possible, we will always discuss alternatives with you before proceeding.',
    },
    {
      question: 'Do I need planning permission for a new roof?',
      answer: 'In most cases, no. Replacing a roof with similar materials is classed as permitted development. However, if you live in a conservation area or listed building, additional permissions may be required. We can advise you on this during the quoting process.',
    },
    {
      question: 'How do I know if my roof needs replacing or just repairing?',
      answer: 'We provide a free roof inspection with every enquiry. We will give you an honest assessment of whether a repair is sufficient or whether a full replacement makes more financial sense. We never recommend unnecessary work.',
    },
  ],

  estimateRange: [
    { size: 'Roof repair', low: 150, high: 500 },
    { size: 'Chimney work', low: 300, high: 800 },
    { size: 'Flat roof', low: 200, high: 3000 },
    { size: 'Full reroof', low: 5000, high: 12000 },
  ],
} as const

export const INTAKE_STEPS: readonly IntakeStep[] = [
  {
    id: 'job-type',
    question: 'What roofing work do you need?',
    field: 'jobType',
    options: [
      { label: 'Roof repair / leak', value: 'Roof repair' },
      { label: 'New roof / reroof', value: 'New roof' },
      { label: 'Chimney work', value: 'Chimney work' },
      { label: 'Flat roof', value: 'Flat roof' },
      { label: 'Guttering', value: 'Guttering' },
      { label: 'Something else', value: 'Other' },
    ],
  },
  {
    id: 'property-type',
    question: 'Is it a house or a commercial building?',
    field: 'propertyType',
    options: [
      { label: 'House', value: 'Domestic' },
      { label: 'Commercial', value: 'Commercial' },
    ],
  },
  {
    id: 'property-size',
    question: 'What type of property?',
    field: 'propertySize',
    options: [
      { label: 'Terraced', value: 'Terraced' },
      { label: 'Semi-detached', value: 'Semi-detached' },
      { label: 'Detached', value: 'Detached' },
      { label: 'Bungalow', value: 'Bungalow' },
    ],
  },
] as const
