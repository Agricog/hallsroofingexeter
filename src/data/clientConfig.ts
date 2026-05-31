// ============================================================
// CallFirst Client Template — Client Configuration
// THIS IS THE ONLY FILE THAT CHANGES PER DEPLOYMENT
// ============================================================

import type { ClientConfig, IntakeStep } from '@/types'

export const CLIENT: ClientConfig = {
  businessName: "Hall's Roofing",
  ownerName: 'Mike',
  trade: 'Roofing',
  area: 'Exeter',
  region: 'East Devon',
  phone: '07455 700757',
  tagline: 'Trusted roofers across Exeter and East Devon',
  domain: 'hallsroofingexeter.co.uk',
  discountActive: true,
  discountPercent: 10,
  googleReviewUrl: 'https://g.page/r/halls-roofing-exeter/review',
  googleReviewCount: 52,
  googleReviewRating: 4.8,
  yearEstablished: 2009,
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
      title: 'Local to Exeter',
      description: 'Serving the area for over 15 years',
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
      keywords: ['roof repair exeter', 'roof leak repair exeter', 'emergency roof repair exeter', 'storm damage roof exeter'],
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
      keywords: ['new roof exeter', 'roof replacement exeter', 'reroof exeter', 'full roof replacement cost exeter'],
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
      keywords: ['flat roof exeter', 'flat roof repair exeter', 'grp flat roof exeter', 'fibreglass roof exeter'],
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
      keywords: ['chimney repair exeter', 'chimney repointing exeter', 'chimney flashing exeter', 'chimney stack repair exeter'],
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
      keywords: ['guttering exeter', 'gutter repair exeter', 'gutter replacement exeter', 'gutter cleaning exeter'],
    },
  ],

  areasServed: [
    {
      name: 'Exeter',
      slug: 'exeter',
      description: 'Our home base — fast response times across the whole city.',
      distanceFromBase: '0 miles',
      localContent: {
        propertyOverview: `Exeter is one of Devon's most architecturally diverse cities, which means we work on a huge range of roof types in a single week. The city centre and Cathedral Yard areas contain listed Georgian and Regency properties with slate and lead roofs. Inner suburbs like St James, Heavitree, and St Leonard's are dominated by Victorian and Edwardian terraces with their original slate. Newer estates in Pinhoe and Marsh Barton use modern concrete tile systems. The university quarter around Pennsylvania brings its own issues, including ageing flat-roofed extensions on converted Victorian houses.`,
        localFactors: `Exeter's inland position spares it the worst of the coastal weather, but proximity to Dartmoor brings heavy rainfall and frequent freeze-thaw cycles in winter that work on tile and slate fixings. The city's many mature trees mean blocked gutters and moss growth are constant battles, particularly on north-facing roofs in the shaded conservation areas. Storm damage from southwesterly gales coming up the Exe Valley is a regular feature of our autumn and winter call-outs.`,
        workInArea: `As our home base, we cover the whole of Exeter daily and can usually attend on the same or next day. A typical week includes slipped slate repairs on Victorian terraces, gutter cleaning and renewal across the inner suburbs, full reroofs on tired 1930s semis, and chimney repointing on period properties in central Exeter. We also handle planned maintenance for several Exeter landlords and letting agents.`,
      },
    },
    {
      name: 'Topsham',
      slug: 'topsham',
      description: 'Serving Topsham including the historic quayside properties.',
      distanceFromBase: '3 miles',
      localContent: {
        propertyOverview: `Topsham is one of the most distinctive places we work. The building stock is dominated by 17th and 18th century merchants' houses, many Grade II listed. The Strand and the streets running off the quay contain a high concentration of Dutch-gabled houses, mansard roofs, and original Welsh slate — all of which need specialist repair rather than wholesale replacement. Newer development at the edges uses standard concrete tiles, but the core of Topsham is dominated by period properties where any work needs careful planning.`,
        localFactors: `Topsham sits on the Exe estuary, so it gets a milder version of the coastal weather Exmouth deals with — salt is in the air but not at the same intensity. The bigger issue here is the age of the buildings. Original slate, lead flashings, and timber structures have often been patched many times over the centuries, and water ingress through hidden routes is one of the most common reasons we get called out. Conservation area restrictions mean materials have to match exactly, and we'll often source reclaimed slate and lead.`,
        workInArea: `A typical month in Topsham includes lead flashing repairs on chimney stacks, individual slate replacements using reclaimed materials, mansard roof patching on Strand properties, and full reroofs on listed buildings with conservation officer involvement. We handle the planning side of conservation area applications as part of the quote. Topsham is 10 minutes from our Exeter base.`,
      },
    },
    {
      name: 'Exmouth',
      slug: 'exmouth',
      description: 'Regular work across Exmouth including coastal properties.',
      distanceFromBase: '10 miles',
      localContent: {
        propertyOverview: `Exmouth is a town of mixed property types reflecting its history as a Victorian seaside resort and its expansion through the 20th century. The seafront and old town are dominated by Victorian and Edwardian terraced houses, many with original slate roofs that now need careful maintenance. Inland and along the estuary you'll find substantial 1930s detached and semi-detached properties with clay tile roofs, plus newer estates in areas like Brixington and Withycombe Raleigh built from the 1960s onwards using concrete tiles.`,
        localFactors: `Exmouth's coastal position means properties take more weather than houses just a few miles inland. Salt-laden air corrodes zinc and galvanised metalwork faster than usual — gutters, lead flashings, and metal valleys all have shorter lifespans than equivalent fittings in Exeter or Crediton. Southwesterly storms drive rain horizontally against gable ends and chimneys, so wind-driven rain ingress at flashing junctions is one of the most common problems we get called out for. Older slates can lift in winter gales, particularly on properties facing the estuary and the open sea.`,
        workInArea: `A typical month of work in Exmouth includes lead flashing replacements on chimney stacks, storm damage repairs after autumn and winter gales, slipped slate replacement on Victorian terraces, and gutter renewal on coastal-facing properties. We also do regular flat roof maintenance on the dormer extensions common on 1930s Exmouth semis. Because we're based in Exeter, we can be on site in Exmouth within 25 minutes with no extra travel charge.`,
      },
    },
    {
      name: 'Crediton',
      slug: 'crediton',
      description: 'Covering Crediton and the surrounding villages.',
      distanceFromBase: '8 miles',
      localContent: {
        propertyOverview: `Crediton's housing stock reflects its long history as a mid-Devon market town. The town centre is dominated by 18th and 19th century stone buildings with slate roofs, including a number of listed properties around the church and High Street. Outside the centre you'll find 1930s and 1950s estate housing with concrete tile roofs, plus newer developments using modern interlocking tiles. The surrounding villages are heavily rural, and a fair share of our Crediton work is on farmhouses and converted barns with mixed slate and tile roofs that have evolved over decades.`,
        localFactors: `Crediton's inland, sheltered position means less coastal weather damage than Exmouth or Dawlish, but its elevation and proximity to the moors mean more snow and frost in a hard winter. Older slate roofs in the area frequently show frost damage along the bottom edges where moisture gathers. Many of the period stone buildings have lime mortar that needs careful repointing rather than modern cement-based alternatives.`,
        workInArea: `Our typical Crediton jobs include slate repairs on period properties, full reroofs on 1950s estate housing where original tiles are reaching end of life, and chimney repointing on stone-built town centre properties. Rural work on farmhouses outside the town is a regular feature — these often combine several different repair types in one visit. We're about 15 minutes from Crediton.`,
      },
    },
    {
      name: 'Tiverton',
      slug: 'tiverton',
      description: 'Serving Tiverton and Mid Devon.',
      distanceFromBase: '14 miles',
      localContent: {
        propertyOverview: `Tiverton's housing stock spans every era of English domestic architecture. The medieval core around the castle and St Peter's Church contains stone-built properties with slate roofs, some dating back centuries. Victorian terraces dominate the streets around the old textile mills and station, with their original Welsh slate still in service in many cases. Post-war suburban expansion brought 1960s and 70s estate housing using concrete tiles, and recent developments at the town's edges use modern interlocking systems. Tiverton also has a higher-than-average number of converted commercial properties with complex roof structures.`,
        localFactors: `Tiverton sits in a sheltered river valley, which protects it from the worst coastal weather but creates its own problems. Persistent damp and slow drying conditions encourage moss and lichen growth on older slate roofs, especially on north-facing slopes. The mix of building ages means we see a wide range of failure modes in a single street — Victorian slate, mid-century concrete tile, and modern interlocking tile each have very different repair requirements.`,
        workInArea: `A typical Tiverton job mix includes moss removal and slate refixing on Victorian terraces, partial reroofs on 1960s estate housing, and chimney work on stone period properties. The converted mills and commercial buildings are some of our more interesting jobs — they often need bespoke flashing and weatherproofing solutions. We're about 25 minutes from Tiverton via the A361.`,
      },
    },
    {
      name: 'Dawlish',
      slug: 'dawlish',
      description: 'Coastal roofing specialists for Dawlish properties.',
      distanceFromBase: '12 miles',
      localContent: {
        propertyOverview: `Dawlish is best known for its seafront railway and Victorian terraced houses overlooking the sea. The properties along the seafront and the streets immediately behind it are mostly Victorian, with original slate roofs weathered hard by over a century of coastal exposure. Inland and on the hills above the town you'll find substantial Edwardian villas, 1930s detached houses, and newer estate housing in areas like Dawlish Warren and Holcombe. The character of properties shifts noticeably from period seafront to modern suburban within just a few streets.`,
        localFactors: `Dawlish takes the full brunt of southwesterly storms coming in off the English Channel. Salt corrosion is severe — gutters, metal flashings, and zinc valleys have shorter lifespans than anywhere else in our coverage area except Exmouth seafront. Storm damage from winter gales is the single most common reason we're called out, often involving displaced slates and damaged ridge tiles. Houses sharing the same exposure as the famous seafront railway line see similar wear patterns.`,
        workInArea: `A typical month of Dawlish work includes emergency storm damage repairs, lead flashing replacement on chimney stacks, full reroofs on Victorian terraces where the original slate has reached end of life, and gutter and downpipe renewal in marine-grade materials. We're about 25 minutes from Dawlish, and we keep extra emergency materials on hand during the autumn and winter storm season for the coastal towns.`,
      },
    },
    {
      name: 'Honiton',
      slug: 'honiton',
      description: 'Covering Honiton and the Blackdown Hills area.',
      distanceFromBase: '16 miles',
      localContent: {
        propertyOverview: `Honiton's housing stock is anchored by the Georgian and early Victorian buildings along the High Street, many of which are listed. The town has a long history of lace-making and antiques, and you'll find period properties throughout the centre with original slate roofs, lead-detailed dormers, and chimney stacks that need regular maintenance. Beyond the historic centre, post-war estate housing and more recent developments use concrete tile systems. The surrounding Blackdown Hills villages include a substantial number of thatched cottages, but for tiled and slated roofs in those villages we cover the work routinely.`,
        localFactors: `Honiton sits in a valley between the Blackdown Hills and the East Devon ridges, which gives it a sheltered position but also means cold air can settle in winter. Slate roofs in the area tend to show frost damage where water has been retained behind misaligned slates. The town's listed buildings mean a high proportion of our Honiton work needs liaison with conservation officers, particularly along the High Street where any visible material change requires approval.`,
        workInArea: `Honiton jobs include slate repairs and reroofs on Georgian and Victorian properties along and around the High Street, chimney repointing on period buildings, and modern reroof work on the post-war estates. The Blackdown villages bring rural farmhouse and outbuilding work as well. We're about 30 minutes from Honiton — towards the further edge of our standard coverage, but we don't add travel charges.`,
      },
    },
    {
      name: 'Ottery St Mary',
      slug: 'ottery-st-mary',
      description: 'Serving Ottery and the surrounding East Devon villages.',
      distanceFromBase: '11 miles',
      localContent: {
        propertyOverview: `Ottery St Mary's building stock is dominated by stone and cob period properties, many grouped around the magnificent parish church. The town centre is largely a conservation area, and the streets contain a high proportion of listed buildings with original slate, lead, and clay tile roofs. Newer developments on the edges of Ottery use modern concrete tile systems. The surrounding villages of the Otter Valley have a similar character — old stone farmhouses, converted barns, and cottages where any roof work has heritage considerations.`,
        localFactors: `Ottery is sheltered by the surrounding hills but its many old buildings show their age in characteristic ways. Lead flashings around the church and on tall period houses are often original or many decades old, and replacement work is a regular feature. The valley location means damp and moss growth on north-facing slopes is common. Many of the cob-walled properties have evolved their roofs over centuries, so we frequently encounter unusual junctions and patched repairs needing careful work.`,
        workInArea: `A typical month in Ottery includes lead flashing replacement on the period stock, individual slate repairs on listed buildings with conservation considerations, chimney work on the high stacks common to the church-adjacent properties, and full reroofs on the post-war estate housing. We're about 25 minutes from Ottery.`,
      },
    },
    {
      name: 'Cullompton',
      slug: 'cullompton',
      description: 'Regular work in Cullompton and the M5 corridor.',
      distanceFromBase: '12 miles',
      localContent: {
        propertyOverview: `Cullompton's High Street is one of the most striking in mid Devon, with a run of timber-framed buildings dating back several centuries, many of them listed and almost all with original slate or clay tile roofs. The town also has substantial Victorian terraced housing around the church and station, plus modern estate developments expanding northwards. The M5 motorway brings a higher-than-average proportion of commercial and industrial roof work in our Cullompton job mix — warehouses, distribution buildings, and the businesses around the J28 junction.`,
        localFactors: `Cullompton's position in the Culm Valley shelters it from severe coastal weather, but its older buildings carry the marks of centuries of patched repairs. Original Welsh slate on the timber-framed High Street properties is increasingly hard to source for replacements, and we'll often work with reclaimed material for like-for-like repairs. The town's listed buildings mean conservation officer involvement on most central jobs.`,
        workInArea: `Cullompton work splits between historic residential — slate repairs on the timber-framed buildings, chimney repointing, conservation-area reroofs — and the larger flat-roof and metal-roof work on commercial buildings around the motorway junction. The mix makes Cullompton one of our more varied job locations. We're about 20 minutes from the town.`,
      },
    },
    {
      name: 'Sidmouth',
      slug: 'sidmouth',
      description: 'Specialist coastal and period property roofing in Sidmouth.',
      distanceFromBase: '15 miles',
      localContent: {
        propertyOverview: `Sidmouth is one of the most architecturally distinguished towns in Devon. The seafront and the streets running back from it are dominated by Regency and early Victorian villas, many of them listed. Slate roofs, decorative bargeboards, and ornate chimney stacks are the dominant features of the town's roofscape. Inland the property mix opens out — Edwardian and 1930s detached houses, plus more recent estate development above the town. The Sidmouth conservation area is one of the strictest in East Devon, and almost any work in the central streets has heritage implications.`,
        localFactors: `Sidmouth is fully coastal, taking the same southwesterly storm exposure as Exmouth and Dawlish. The combination of period buildings and full coastal exposure creates Sidmouth's particular challenges: lead flashings on tall Regency stacks corrode quickly, original Welsh slate needs frequent individual repair, and ornate features like bargeboards and finials need specialist replacement when storm-damaged. Salt damage to metal fittings is severe, and we typically use marine-grade replacements as standard for any seafront work.`,
        workInArea: `A typical month of work in Sidmouth includes lead flashing replacement on Regency stacks (often the tallest stacks we work on anywhere), slate repairs using reclaimed Welsh slate, storm damage emergency work, and conservation-area-compliant gutter replacements. Almost everything we do in central Sidmouth requires materials sourced specifically for conservation compatibility. We're about 30 minutes from Sidmouth.`,
      },
    },
    {
      name: 'Axminster',
      slug: 'axminster',
      description: 'Covering Axminster and the Devon-Dorset border.',
      distanceFromBase: '25 miles',
      localContent: {
        propertyOverview: `Axminster's housing stock reflects its history as a Devon-Dorset border town. The centre contains a high proportion of Georgian and Victorian period properties, including buildings associated with the famous Axminster carpet industry. The streets around the market square have substantial period houses with original slate roofs. Beyond the centre, post-war and more recent developments add concrete tile housing to the mix. The surrounding rural area brings farmhouse and converted barn work into our Axminster job stream.`,
        localFactors: `Axminster sits in a sheltered valley near the Dorset border, away from the worst coastal weather but exposed to the wet southwesterly weather systems that move up the Axe Valley. The town's older buildings show typical period property issues — patched flashings, ageing slate, and chimney stacks that have moved over time. The proximity to the Dorset border means some of our work straddles county boundaries, but we cover Axminster as part of our standard area.`,
        workInArea: `Axminster work includes slate repairs on period buildings around the market square, full reroofs on post-war housing, chimney work on the town's older stock, and farmhouse work in the surrounding villages. At 25 miles, Axminster is the furthest standard area we cover, but we don't charge extra travel — we just batch Axminster jobs together where we can. We're about 40 minutes from the town.`,
      },
    },
    {
      name: 'Cranbrook',
      slug: 'cranbrook',
      description: 'New-build and modern property roofing in Cranbrook.',
      distanceFromBase: '6 miles',
      localContent: {
        propertyOverview: `Cranbrook is unlike any other area we cover. The town has been built from scratch over the past decade, and almost every property is less than fifteen years old. Roofs are dominated by modern concrete interlocking tile systems on standard housebuilder specifications. There is no period property stock, no listed buildings, and no conservation considerations. Properties are arranged on planned estates with consistent designs and shared construction periods.`,
        localFactors: `Cranbrook's roofing issues are entirely different from older areas. The properties are too new for material failure, but we regularly see construction-period defects emerging: missing or displaced ridge tiles, poorly bedded ridge mortar, ineffective flashings around dormers and parapets, and gutter alignment issues where the original installation was rushed. Many properties are still under their original housebuilder warranty, and we'll often advise homeowners on what to claim through that channel before any work goes ahead.`,
        workInArea: `Typical Cranbrook work is small remedial jobs: re-bedding ridge tiles, replacing missing or cracked tiles, correcting flashing details around dormers, and resolving guttering issues. Most jobs are completed in a single visit. Cranbrook is only 10 minutes from our Exeter base, and we cover the town as part of our daily local work.`,
      },
    },
  ],

  faqs: [
    {
      question: 'How much does a new roof cost in Exeter?',
      answer: 'A full reroof on a typical semi-detached house in Exeter costs between £5,000 and £8,000. Detached homes range from £7,000 to £12,000 depending on size, pitch, and materials. We provide free no-obligation quotes so you know the exact cost before any work starts.',
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
      answer: 'We cover Exeter and the whole of East Devon including Exmouth, Topsham, Crediton, Tiverton, Dawlish, Honiton, Sidmouth, Cullompton, and surrounding villages. If you are unsure whether we cover your area, just ask — we probably do.',
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
