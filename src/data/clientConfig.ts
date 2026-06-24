// ============================================================
// CallFirst Client Template — Client Configuration
// THIS IS THE ONLY FILE THAT CHANGES PER DEPLOYMENT
// ============================================================

import type { ClientConfig, IntakeStep } from '@/types'

export const CLIENT: ClientConfig = {
  businessName: "Hall's Roofing",
  ownerName: 'the team',
  trade: 'Roofing',
  area: 'Exeter',
  region: 'East Devon',
  phone: '07455 700757',
  tagline: 'Roofing quotes across Exeter and East Devon',
  domain: 'hallsroofingexeter.co.uk',
  discountActive: true,
  discountPercent: 10,

  trustSignals: [
    {
      icon: 'clock',
      title: 'Same-Day Callback',
      description: 'Describe your job and a local roofer calls you back the same day — no waiting days for a reply.',
    },
    {
      icon: 'badge-check',
      title: 'Free, No-Obligation Quotes',
      description: 'Get an indicative price in seconds and a full quote at no cost. No pressure to go ahead.',
    },
    {
      icon: 'map-pin',
      title: 'Local to Exeter & East Devon',
      description: 'We cover Exeter and the surrounding East Devon area, matching you with a roofer near you.',
    },
    {
      icon: 'shield-check',
      title: 'No Call-Out Fee',
      description: 'Getting a quote is free — you only pay the roofer if you decide to go ahead with the work.',
    },
  ],

  services: [
    {
      slug: 'roof-repair',
      name: 'Roof Repair',
      shortDescription: 'Fast, reliable quotes for leaks, storm damage, and general wear and tear.',
      longDescription: 'Whether it is a single slipped tile or widespread storm damage, the right repair starts with an accurate diagnosis. Describe the problem in the chat and a local roofer calls you back to scope it and quote. Repair work covers all roof types including pitched, flat, slate, tile, and felt roofs, and most straightforward repairs are completed in a single visit by the roofer who takes the job.',
      priceFrom: 150,
      priceTo: 500,
      icon: 'wrench',
      features: [
        'Same-day callback for emergency repairs',
        'Covers all common tile and slate types',
        'Full inspection included with the quote',
        'Written report and photos available',
        'Work guaranteed by the roofer who carries it out',
      ],
      keywords: ['roof repair exeter', 'roof leak repair exeter', 'emergency roof repair exeter', 'storm damage roof exeter'],
      localContent: {
        propertyContext: `Exeter has one of the most varied housing stocks in the South West, which means roof repair work covers a wide range of materials and ages in a single week. Victorian and Edwardian terraces across St James, Heavitree, St Leonard's and Pennsylvania still carry their original Welsh slate, much of it now needing individual repair rather than wholesale replacement. The 1930s semis that dominate Whipton, Wonford and Pinhoe typically have clay or concrete tile roofs. Newer estate housing across the city's edges uses modern interlocking systems with their own characteristic failure points around ridges and verges.`,
        localFactors: `Exeter sits inland of the worst coastal weather, but proximity to Dartmoor brings heavy rainfall and frequent freeze-thaw cycles that slowly fatigue tile and slate fixings. Southwesterly storms tracking up the Exe Valley regularly lift ridge tiles and dislodge slates on exposed slopes. Mature trees across the inner suburbs deposit moss and debris that retains moisture against tiles and accelerates wear. Most leaks in Exeter homes come from a small number of recurring causes: failed flashings around chimney stacks, cracked or missing ridge mortar, displaced slates on weather-facing slopes, and blocked or damaged valleys.`,
        commonJobs: `Typical roof repair jobs across Exeter range from single slipped tiles handled in a single visit, through multi-tile storm damage repairs, to more involved work on flashings, valleys and ridges. Emergency leak response is normally same or next day — a temporary watertight cover first, then a full repair once the weather allows. Repairs on Victorian slate roofs often use reclaimed material to maintain the original appearance, and common modern tile types are usually matched so most concrete and clay tile repairs are finished without a return visit.`,
      },
      faqs: [
        {
          question: 'What are the most common roof problems in Exeter homes?',
          answer: 'The four most common issues are slipped or missing slates on Victorian terraces (usually after a southwesterly gale), failed lead flashings around chimney stacks on period properties, cracked ridge mortar on 1930s and 1950s housing, and blocked valleys clogged with leaves and moss from mature trees.',
        },
        {
          question: 'How quickly can an active roof leak be fixed?',
          answer: 'For active leaks, a local roofer can usually attend the same day or the following morning. The first visit makes the property watertight using temporary covers if needed. The full permanent repair is then completed within 24–48 hours, weather permitting.',
        },
        {
          question: 'Can just one tile be replaced or does a whole section need redoing?',
          answer: 'Single tiles can absolutely be replaced individually — this is one of the most common repairs. Wider section work is only worth it if the surrounding tiles or slates are also showing widespread wear or nail fatigue, in which case spot repairs would only delay a larger issue.',
        },
        {
          question: 'Will the repair match the rest of my roof?',
          answer: 'In most cases yes. For Welsh slate on Victorian and Edwardian properties, reclaimed stock can be sourced to match the original weathered appearance. For common concrete and clay tile profiles the current range is matched as closely as possible. The roofer will always discuss material choice before starting.',
        },
        {
          question: 'Do I need scaffolding for a small repair?',
          answer: 'Not always. Many single-tile repairs and minor flashing jobs can be carried out from a ladder using roof ladders. Anything more involved, higher than single-storey, or near a chimney usually needs scaffolding for safe access — and a good roofer includes that cost in the quote upfront.',
        },
      ],
    },
    {
      slug: 'new-roof',
      name: 'New Roof',
      shortDescription: 'Complete roof replacements using quality materials, quoted by a local roofer.',
      longDescription: 'When repairs are no longer cost-effective, a full reroof is the most reliable long-term solution. A typical reroof strips the existing roof, inspects and repairs the timber structure, fits new breathable membrane and battens, and installs your chosen tile or slate. Describe your property in the chat and a local roofer calls you back to scope the job and provide a full written quote, including the guarantee they offer on materials and workmanship.',
      priceFrom: 5000,
      priceTo: 12000,
      icon: 'home',
      features: [
        'Full strip and reroof service',
        'Timber inspection and repair included',
        'Breathable membrane and new battens',
        'Wide choice of tiles, slates, and finishes',
        'Written guarantee provided by your roofer',
      ],
      keywords: ['new roof exeter', 'roof replacement exeter', 'reroof exeter', 'full roof replacement cost exeter'],
      localContent: {
        propertyContext: `Full reroofs in Exeter are most commonly carried out on 1930s semi-detached housing across Whipton, Wonford, Heavitree and Pinhoe where original clay or early concrete tiles are reaching end of life. Victorian terraces in St James, St Leonard's and Pennsylvania often need reroofing once nail fatigue across the original Welsh slate becomes widespread — at that point individual repairs become uneconomical. Estate housing from the 1960s and 70s using early concrete interlocking tiles is now also reaching the replacement threshold. Properties within Exeter's conservation areas, including parts of Cathedral Yard and St Leonard's, require sympathetic material matching and sometimes formal consent before work can start.`,
        localFactors: `A reroof is typically the right answer once more than 20–25% of tiles or slates have failed, when nail fatigue is widespread across original Welsh slate, or when the underlying battens and roofing felt have deteriorated to the point of failure. Exeter's combination of wet southwesterly weather, freeze-thaw cycles and summer UV gradually breaks down old bituminous felt until water starts finding its way through. By the time leaks are appearing in multiple locations, the underlying structure is usually the issue rather than the tiles themselves.`,
        commonJobs: `A reroof on a typical Exeter semi takes 3–5 working days. The existing covering is stripped, the timber rafters and purlins are inspected and any rot is replaced, new breathable membrane is fitted over the rafters, new treated battens are installed, and the new tiles or slates are laid from the eaves up. Lead work around chimneys and valleys is renewed as part of the job. Detached houses and more complex roof shapes take 5–7 days. A full reroof quote normally includes scaffolding and waste removal, and the roofer sets out their written guarantee in the quote.`,
      },
      faqs: [
        {
          question: 'How do I know if I need a full reroof or just repairs?',
          answer: 'The clearest indicators are widespread slipping or missing tiles across multiple slopes, repeated leaks appearing in different locations, sagging roof lines, or visible deterioration of the felt visible from inside the loft. A free inspection at the quote stage will tell you honestly whether targeted repairs would still be more economical.',
        },
        {
          question: 'How long does a full reroof take?',
          answer: 'A typical Exeter semi-detached house takes 3–5 working days. Detached houses and more complex roofs take 5–7 days. A good roofer never leaves a roof uncovered overnight and works around the weather to keep the property protected throughout.',
        },
        {
          question: 'What roofing materials can I choose from?',
          answer: 'For non-listed properties: concrete tile (widest range and most cost-effective), clay tile (more traditional appearance), natural slate (best for period properties), and synthetic slate (a more affordable slate alternative). For listed and conservation area properties, material choice is usually restricted to match the original.',
        },
        {
          question: 'Will I need planning permission for a new roof?',
          answer: 'Like-for-like roof replacement is normally classed as permitted development and needs no planning permission. Conservation areas and listed buildings require consent, and any change to the roof shape, materials or addition of features like rooflights may also need approval. The roofer can advise on the documentation as part of the quote.',
        },
        {
          question: 'Does anyone need to come inside the property?',
          answer: 'Generally no. A loft inspection at the quoting stage is helpful to assess the timber condition from underneath, but the actual reroof is carried out entirely from outside, with no disruption to the inside of the property.',
        },
        {
          question: 'What guarantee comes with a new roof?',
          answer: 'The guarantee is provided by the roofer who carries out the work, and typically covers both materials and workmanship for a set period — often given in writing on completion and sometimes transferable if you sell. Confirm the exact terms and length with your roofer before agreeing the work.',
        },
      ],
    },
    {
      slug: 'flat-roof',
      name: 'Flat Roof',
      shortDescription: 'GRP fibreglass and EPDM rubber flat roofing, quoted by a local roofer.',
      longDescription: 'Flat roofs on extensions, garages, and dormers need specialist materials to stay watertight. Modern GRP fibreglass and EPDM rubber membrane systems are designed to last 25 years or more with minimal maintenance, and existing felt flat roofs can often be repaired or overlaid where the structure is still sound. Describe your flat roof in the chat and a local roofer calls you back to scope it and quote.',
      priceFrom: 200,
      priceTo: 3000,
      icon: 'layers',
      features: [
        'GRP fibreglass and EPDM rubber systems',
        '25+ year material design life',
        'Minimal maintenance required',
        'Overlay option for sound existing roofs',
        'Suitable for extensions, garages, dormers',
      ],
      keywords: ['flat roof exeter', 'flat roof repair exeter', 'grp flat roof exeter', 'fibreglass roof exeter'],
      localContent: {
        propertyContext: `Flat roofs are extremely common across Exeter housing. Rear single-storey extensions to Victorian and Edwardian terraces — particularly in St James, Heavitree and Pennsylvania — almost universally have flat roofs, originally built in bituminous felt and now often well past their design life. Dormer extensions on 1930s semis across Whipton and Wonford typically have flat tops too. Garages across every era of Exeter housing use flat roofing, and porches on 1960s and 70s estate housing add to the mix. Newer extensions are increasingly built in GRP fibreglass or EPDM rubber from the outset.`,
        localFactors: `Flat roofs are never truly flat — they need a slight fall to drain rainwater. Many older Exeter flat roofs fail because the original installer did not get the fall right, water ponds on the surface, and the membrane breaks down under sustained moisture. Exeter's mature trees deposit debris into outlets and cause backups, particularly on extensions overshadowed by neighbouring gardens. Winter freeze-thaw cycles expand any small cracks in old felt, leading to sudden failure each spring. Internal staining on the ceiling below is often the first visible sign — by that point the roof deck above is usually saturated and replacement is the only real option.`,
        commonJobs: `A typical Exeter flat roof job is either a full replacement of failing felt with a modern GRP fibreglass or EPDM rubber system, an overlay on an existing flat roof where the deck and structure are still sound, or a localised repair to extend the life of an otherwise serviceable surface. Most domestic flat roofs — extension, garage, dormer — take one to two days. The existing covering is stripped, the timber deck is inspected and any rotten boards replaced, then the new membrane system is installed with new flashings and outlets.`,
      },
      faqs: [
        {
          question: 'What is the difference between GRP fibreglass and EPDM rubber?',
          answer: 'GRP is a seamless laid-in-place fibreglass laminate that cures hard — very durable, low-profile, and good around complex shapes. EPDM is a single large rubber sheet bonded to the deck — faster to install, slightly softer appearance, and excellent for simple rectangular roofs. Both systems have a 25+ year design life.',
        },
        {
          question: 'Can an existing flat roof be overlaid or does it have to be stripped?',
          answer: 'If the existing deck and timbers are sound and dry, an overlay is possible and considerably cheaper than full replacement. If there is any damp in the deck, rot in the timbers, or evidence of ponding, a full strip and replace is required to avoid trapping moisture under the new membrane.',
        },
        {
          question: 'How long does a new flat roof last?',
          answer: 'Modern GRP fibreglass and EPDM rubber systems both have a design life of 25+ years and a typical real-world life closer to 30 years with minimal maintenance. Old-style bituminous felt — what most pre-2000s Exeter flat roofs were built with — typically lasted 15–20 years at best.',
        },
        {
          question: 'Do flat roofs need regular maintenance?',
          answer: 'Modern GRP and EPDM systems need very little maintenance through their lifespan. The only sensible annual task is clearing leaves and debris from outlets and gutters to prevent water backing up over upstand flashings.',
        },
        {
          question: 'Why does my flat roof leak only when it rains heavily?',
          answer: 'The most common cause is blocked or undersized outlets — water backs up across the roof and overtops the upstand flashings around the perimeter. Second most common is hairline cracks in old felt that only let water through under sustained heavy rain. Less commonly, failed laps where felt seams have parted.',
        },
      ],
    },
    {
      slug: 'chimney-work',
      name: 'Chimney Work',
      shortDescription: 'Repointing, reflashing, cowl fitting, and chimney stack repairs.',
      longDescription: 'Chimneys take the worst of the weather and are one of the most common sources of leaks. Typical chimney work includes full repointing, lead flashing replacement, cowl and cap fitting, and chimney stack rebuilds where necessary. Describe the problem in the chat and a local roofer calls you back to scope it and quote — and most chimney quotes include the scaffolding needed for safe access, set out clearly with no hidden costs.',
      priceFrom: 300,
      priceTo: 800,
      icon: 'flame',
      features: [
        'Full chimney repointing',
        'Lead flashing replacement',
        'Cowl and cap fitting',
        'Stack rebuilds where needed',
        'Scaffolding set out in the quote',
      ],
      keywords: ['chimney repair exeter', 'chimney repointing exeter', 'chimney flashing exeter', 'chimney stack repair exeter'],
      localContent: {
        propertyContext: `Chimneys are one of the most common sources of roof leaks across Exeter. Period properties in the city centre, St James, Heavitree, Topsham and St Leonard's typically have tall multi-flue stacks with original lead flashings, often now eighty years or more old. 1930s and 1950s housing across Whipton, Wonford and Pinhoe has shorter brick stacks usually finished with cement mortar fillets at the roof junction that crack and shrink over decades. Many Exeter properties have unused chimneys that haven't been touched in years because there is no working fireplace below — but water still finds its way in through failed pointing, cracked pots, or perished flashings.`,
        localFactors: `Chimneys take the worst of every storm because they project above the roof line. Exeter's southwesterly gales drive rain horizontally against stack faces, and water finds any small failure in pointing or flashings. Freeze-thaw cycles in winter widen cracks in mortar joints each year. Disused chimneys are particularly vulnerable — without combustion heat drying the inside, brickwork stays saturated and decays from within. A surprising number of "roof leaks" turn out to be chimney issues that have spread laterally under the surrounding tiles or slates, sometimes appearing several feet away from the actual source.`,
        commonJobs: `Typical chimney work in Exeter falls into several categories: full lead flashing replacement around the stack at roof level (the single most common request), repointing of brickwork using lime mortar on period properties and cement mortar on newer ones, cowl or cap fitting on disused stacks to keep weather and birds out, pot replacement where the original has cracked, and partial or full stack rebuilds where decay has gone too far for repointing alone. Most chimney jobs take one to three days. Scaffolding is required for almost all chimney work for safe access, and the cost is normally set out in the quote upfront.`,
      },
      faqs: [
        {
          question: 'How do I know if my chimney needs work?',
          answer: 'Visible warning signs include cracked or missing pointing between bricks, a visible lean to the stack, damp patches on the chimney breast inside the house, daylight visible around the flashings at roof level, missing or cracked chimney pots, and vegetation growing out of the brickwork.',
        },
        {
          question: 'Should I remove an unused chimney or just cap it?',
          answer: 'Capping is much cheaper and protects the existing structure from further weather damage. Full removal only really makes sense if the stack is structurally compromised, you need the loft space, or you want to eliminate ongoing maintenance entirely. A capped chimney typically needs no further work for decades.',
        },
        {
          question: 'Why does my chimney leak when it rains?',
          answer: 'The most common cause is failed lead flashings at the roof junction — these are often the original lead from when the house was built. Second most common is saturated brickwork from failed pointing letting water track laterally. Less common but possible: cracked pots, missing cowls on disused stacks, and failed mortar caps on top of the brickwork.',
        },
        {
          question: 'What is the difference between lead flashings and cement fillets?',
          answer: 'Lead is the traditional and correct solution — it lasts decades, flexes with thermal movement, and seals properly to both the stack and the roof. Cement fillets are a cheap shortcut where mortar is applied directly between stack and tiles; they crack within a few years as the building moves, and water gets straight through. A good roofer will always recommend lead.',
        },
        {
          question: 'Is scaffolding always needed for chimney work?',
          answer: 'For almost all chimney work, yes. Stack work is high, exposed, and dangerous, and proper scaffolding is the only safe access — ladders are not adequate for sustained work at chimney level. The scaffolding cost is normally built into the quote, not added as a surprise extra.',
        },
      ],
    },
    {
      slug: 'guttering',
      name: 'Guttering',
      shortDescription: 'Gutter cleaning, repair, and full replacement in uPVC, cast iron, and aluminium.',
      longDescription: 'Blocked or damaged gutters cause water to overflow and damage walls, foundations, and interior decoration. Guttering work covers cleaning, repair, and full replacement in all materials including uPVC, cast iron, and aluminium, along with gutter guards to prevent future blockages and fascia and soffit boards as part of a complete roofline service. Describe what you need in the chat and a local roofer calls you back to scope it and quote.',
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
      localContent: {
        propertyContext: `Guttering across Exeter spans a wide range of materials and ages. Victorian and Edwardian terraces in St James, Heavitree and Pennsylvania often still carry original cast iron, much of it now corroded from the inside out where paint has failed. 1930s onwards housing across Whipton, Wonford and Pinhoe is predominantly black uPVC, the most common material in the city by some margin. Newer estate housing uses modern seamless aluminium or higher-grade uPVC profiles. Conservation areas including Cathedral Yard and parts of St Leonard's require like-for-like cast iron replacement where original.`,
        localFactors: `Exeter's mature tree cover is the single biggest driver of guttering issues across the city. Leaves, twigs, moss and seed pods build up faster than most homeowners realise, and blocked gutters cause water to overflow against walls and foundations. Exeter's high annual rainfall means gutter failure shows up quickly — wet patches on walls, stained render, damp inside, and saturated foundations are all common consequences of guttering left unattended for a few years. Cast iron gutters on older properties rust from the inside out once paint fails, and uPVC becomes brittle with UV exposure after 25–30 years.`,
        commonJobs: `Typical Exeter gutter work includes routine cleaning and unblocking (the single most common request, usually annual), repair to broken brackets or split sections, like-for-like uPVC replacement on mid-twentieth-century housing, cast iron renewal on period and conservation-area properties, and fascia and soffit board replacement where rot has set in behind the gutter line. Gutter guards to prevent leaf and moss build-up are increasingly popular on properties under heavy tree cover. Most domestic gutter jobs are completed in a single day.`,
      },
      faqs: [
        {
          question: 'How often should gutters be cleaned in Exeter?',
          answer: 'Once a year as a minimum — ideally in late autumn after leaf fall has finished. Properties under heavy tree cover, which is much of central Exeter and the inner suburbs, may need twice-yearly cleaning to keep up with debris build-up.',
        },
        {
          question: 'Can damaged uPVC sections be repaired or is full replacement needed?',
          answer: 'Individual sections can be replaced if the rest of the run is in sound condition. If the whole length is brittle, sagging, or the brackets are pulling away from the fascia, full replacement is more economical than ongoing patching. A roofer will assess and advise honestly at the quote stage.',
        },
        {
          question: 'Should I replace my cast iron with uPVC?',
          answer: 'In conservation areas this is often not an option — cast iron must be replaced like-for-like. Outside conservation areas it is your choice: cast iron looks period-correct and lasts 80+ years if maintained, modern aluminium is a strong long-life compromise, and uPVC is the cheapest option with a 25–40 year life. A roofer can quote all three.',
        },
        {
          question: 'Will replacing my gutters affect my fascias and soffits?',
          answer: 'Quite often yes. The fascia and soffit boards behind older guttering are commonly rotten from years of overflow, especially on north-facing slopes. The timberwork is inspected at the quoting stage and any necessary fascia and soffit replacement is included in the price upfront.',
        },
        {
          question: 'Are gutter guards worth fitting?',
          answer: 'On properties under heavy tree cover — and a lot of Exeter falls into that category — gutter guards significantly reduce how often the gutters need clearing. On open properties with no overhanging trees they are usually unnecessary and not worth the cost.',
        },
      ],
    },
  ],

  areasServed: [
    {
      name: 'Exeter',
      slug: 'exeter',
      description: 'The centre of the coverage area — fast callbacks across the whole city.',
      distanceFromBase: '0 miles',
      localContent: {
        propertyOverview: `Exeter is one of Devon's most architecturally diverse cities, which means roof work covers a huge range of types in a single week. The city centre and Cathedral Yard areas contain listed Georgian and Regency properties with slate and lead roofs. Inner suburbs like St James, Heavitree, and St Leonard's are dominated by Victorian and Edwardian terraces with their original slate. Newer estates in Pinhoe and Marsh Barton use modern concrete tile systems. The university quarter around Pennsylvania brings its own issues, including ageing flat-roofed extensions on converted Victorian houses.`,
        localFactors: `Exeter's inland position spares it the worst of the coastal weather, but proximity to Dartmoor brings heavy rainfall and frequent freeze-thaw cycles in winter that work on tile and slate fixings. The city's many mature trees mean blocked gutters and moss growth are constant battles, particularly on north-facing roofs in the shaded conservation areas. Storm damage from southwesterly gales coming up the Exe Valley is a regular feature of the autumn and winter season.`,
        workInArea: `Exeter is the centre of the coverage area, so callbacks here are usually same or next day. Typical Exeter jobs include slipped slate repairs on Victorian terraces, gutter cleaning and renewal across the inner suburbs, full reroofs on tired 1930s semis, and chimney repointing on period properties in the centre — plus planned maintenance for local landlords and letting agents.`,
      },
    },
    {
      name: 'Topsham',
      slug: 'topsham',
      description: 'Serving Topsham including the historic quayside properties.',
      distanceFromBase: '3 miles',
      localContent: {
        propertyOverview: `Topsham is one of the most distinctive places in the area. The building stock is dominated by 17th and 18th century merchants' houses, many Grade II listed. The Strand and the streets running off the quay contain a high concentration of Dutch-gabled houses, mansard roofs, and original Welsh slate — all of which need specialist repair rather than wholesale replacement. Newer development at the edges uses standard concrete tiles, but the core of Topsham is dominated by period properties where any work needs careful planning.`,
        localFactors: `Topsham sits on the Exe estuary, so it gets a milder version of the coastal weather Exmouth deals with — salt is in the air but not at the same intensity. The bigger issue here is the age of the buildings. Original slate, lead flashings, and timber structures have often been patched many times over the centuries, and water ingress through hidden routes is one of the most common reasons roofers get called out. Conservation area restrictions mean materials have to match exactly, often using reclaimed slate and lead.`,
        workInArea: `Typical Topsham jobs include lead flashing repairs on chimney stacks, individual slate replacements using reclaimed materials, mansard roof patching on Strand properties, and full reroofs on listed buildings with conservation officer involvement. A local roofer can handle the conservation-area planning side as part of the quote. Topsham is about 10 minutes from Exeter.`,
      },
    },
    {
      name: 'Exmouth',
      slug: 'exmouth',
      description: 'Regular work across Exmouth including coastal properties.',
      distanceFromBase: '10 miles',
      localContent: {
        propertyOverview: `Exmouth is a town of mixed property types reflecting its history as a Victorian seaside resort and its expansion through the 20th century. The seafront and old town are dominated by Victorian and Edwardian terraced houses, many with original slate roofs that now need careful maintenance. Inland and along the estuary you'll find substantial 1930s detached and semi-detached properties with clay tile roofs, plus newer estates in areas like Brixington and Withycombe Raleigh built from the 1960s onwards using concrete tiles.`,
        localFactors: `Exmouth's coastal position means properties take more weather than houses just a few miles inland. Salt-laden air corrodes zinc and galvanised metalwork faster than usual — gutters, lead flashings, and metal valleys all have shorter lifespans than equivalent fittings in Exeter or Crediton. Southwesterly storms drive rain horizontally against gable ends and chimneys, so wind-driven rain ingress at flashing junctions is one of the most common problems in the area. Older slates can lift in winter gales, particularly on properties facing the estuary and the open sea.`,
        workInArea: `Typical Exmouth jobs include lead flashing replacements on chimney stacks, storm damage repairs after autumn and winter gales, slipped slate replacement on Victorian terraces, gutter renewal on coastal-facing properties, and flat roof maintenance on the dormer extensions common on 1930s Exmouth semis. Exmouth is about 25 minutes from Exeter.`,
      },
    },
    {
      name: 'Crediton',
      slug: 'crediton',
      description: 'Covering Crediton and the surrounding villages.',
      distanceFromBase: '8 miles',
      localContent: {
        propertyOverview: `Crediton's housing stock reflects its long history as a mid-Devon market town. The town centre is dominated by 18th and 19th century stone buildings with slate roofs, including a number of listed properties around the church and High Street. Outside the centre you'll find 1930s and 1950s estate housing with concrete tile roofs, plus newer developments using modern interlocking tiles. The surrounding villages are heavily rural, and a fair share of Crediton work is on farmhouses and converted barns with mixed slate and tile roofs that have evolved over decades.`,
        localFactors: `Crediton's inland, sheltered position means less coastal weather damage than Exmouth or Dawlish, but its elevation and proximity to the moors mean more snow and frost in a hard winter. Older slate roofs in the area frequently show frost damage along the bottom edges where moisture gathers. Many of the period stone buildings have lime mortar that needs careful repointing rather than modern cement-based alternatives.`,
        workInArea: `Typical Crediton jobs include slate repairs on period properties, full reroofs on 1950s estate housing where original tiles are reaching end of life, and chimney repointing on stone-built town-centre properties. Rural work on farmhouses outside the town is common too, often combining several repair types in one visit. Crediton is about 15 minutes from Exeter.`,
      },
    },
    {
      name: 'Tiverton',
      slug: 'tiverton',
      description: 'Serving Tiverton and Mid Devon.',
      distanceFromBase: '14 miles',
      localContent: {
        propertyOverview: `Tiverton's housing stock spans every era of English domestic architecture. The medieval core around the castle and St Peter's Church contains stone-built properties with slate roofs, some dating back centuries. Victorian terraces dominate the streets around the old textile mills and station, with their original Welsh slate still in service in many cases. Post-war suburban expansion brought 1960s and 70s estate housing using concrete tiles, and recent developments at the town's edges use modern interlocking systems. Tiverton also has a higher-than-average number of converted commercial properties with complex roof structures.`,
        localFactors: `Tiverton sits in a sheltered river valley, which protects it from the worst coastal weather but creates its own problems. Persistent damp and slow drying conditions encourage moss and lichen growth on older slate roofs, especially on north-facing slopes. The mix of building ages means a wide range of failure modes appear in a single street — Victorian slate, mid-century concrete tile, and modern interlocking tile each have very different repair requirements.`,
        workInArea: `A typical Tiverton job mix includes moss removal and slate refixing on Victorian terraces, partial reroofs on 1960s estate housing, and chimney work on stone period properties. The converted mills and commercial buildings often need bespoke flashing and weatherproofing solutions. Tiverton is about 25 minutes from Exeter via the A361.`,
      },
    },
    {
      name: 'Dawlish',
      slug: 'dawlish',
      description: 'Coastal roofing for Dawlish properties.',
      distanceFromBase: '12 miles',
      localContent: {
        propertyOverview: `Dawlish is best known for its seafront railway and Victorian terraced houses overlooking the sea. The properties along the seafront and the streets immediately behind it are mostly Victorian, with original slate roofs weathered hard by over a century of coastal exposure. Inland and on the hills above the town you'll find substantial Edwardian villas, 1930s detached houses, and newer estate housing in areas like Dawlish Warren and Holcombe. The character of properties shifts noticeably from period seafront to modern suburban within just a few streets.`,
        localFactors: `Dawlish takes the full brunt of southwesterly storms coming in off the English Channel. Salt corrosion is severe — gutters, metal flashings, and zinc valleys have shorter lifespans than anywhere else in the coverage area except Exmouth seafront. Storm damage from winter gales is the single most common reason roofers are called out, often involving displaced slates and damaged ridge tiles. Houses sharing the same exposure as the famous seafront railway line see similar wear patterns.`,
        workInArea: `Typical Dawlish jobs include emergency storm damage repairs, lead flashing replacement on chimney stacks, full reroofs on Victorian terraces where the original slate has reached end of life, and gutter and downpipe renewal in marine-grade materials. Dawlish is about 25 minutes from Exeter, and the coastal towns see the most emergency call-outs during the autumn and winter storm season.`,
      },
    },
    {
      name: 'Honiton',
      slug: 'honiton',
      description: 'Covering Honiton and the Blackdown Hills area.',
      distanceFromBase: '16 miles',
      localContent: {
        propertyOverview: `Honiton's housing stock is anchored by the Georgian and early Victorian buildings along the High Street, many of which are listed. The town has a long history of lace-making and antiques, and you'll find period properties throughout the centre with original slate roofs, lead-detailed dormers, and chimney stacks that need regular maintenance. Beyond the historic centre, post-war estate housing and more recent developments use concrete tile systems. The surrounding Blackdown Hills villages include a substantial number of thatched cottages, but tiled and slated roofs in those villages are covered routinely.`,
        localFactors: `Honiton sits in a valley between the Blackdown Hills and the East Devon ridges, which gives it a sheltered position but also means cold air can settle in winter. Slate roofs in the area tend to show frost damage where water has been retained behind misaligned slates. The town's listed buildings mean a high proportion of Honiton work needs liaison with conservation officers, particularly along the High Street where any visible material change requires approval.`,
        workInArea: `Honiton jobs include slate repairs and reroofs on Georgian and Victorian properties along and around the High Street, chimney repointing on period buildings, and modern reroof work on the post-war estates. The Blackdown villages bring rural farmhouse and outbuilding work as well. Honiton is about 30 minutes from Exeter — towards the further edge of the standard coverage area.`,
      },
    },
    {
      name: 'Ottery St Mary',
      slug: 'ottery-st-mary',
      description: 'Serving Ottery and the surrounding East Devon villages.',
      distanceFromBase: '11 miles',
      localContent: {
        propertyOverview: `Ottery St Mary's building stock is dominated by stone and cob period properties, many grouped around the magnificent parish church. The town centre is largely a conservation area, and the streets contain a high proportion of listed buildings with original slate, lead, and clay tile roofs. Newer developments on the edges of Ottery use modern concrete tile systems. The surrounding villages of the Otter Valley have a similar character — old stone farmhouses, converted barns, and cottages where any roof work has heritage considerations.`,
        localFactors: `Ottery is sheltered by the surrounding hills but its many old buildings show their age in characteristic ways. Lead flashings around the church and on tall period houses are often original or many decades old, and replacement work is a regular feature. The valley location means damp and moss growth on north-facing slopes is common. Many of the cob-walled properties have evolved their roofs over centuries, so unusual junctions and patched repairs needing careful work are common.`,
        workInArea: `Typical Ottery jobs include lead flashing replacement on the period stock, individual slate repairs on listed buildings with conservation considerations, chimney work on the high stacks common to the church-adjacent properties, and full reroofs on the post-war estate housing. Ottery is about 25 minutes from Exeter.`,
      },
    },
    {
      name: 'Cullompton',
      slug: 'cullompton',
      description: 'Regular work in Cullompton and the M5 corridor.',
      distanceFromBase: '12 miles',
      localContent: {
        propertyOverview: `Cullompton's High Street is one of the most striking in mid Devon, with a run of timber-framed buildings dating back several centuries, many of them listed and almost all with original slate or clay tile roofs. The town also has substantial Victorian terraced housing around the church and station, plus modern estate developments expanding northwards. The M5 motorway brings a higher-than-average proportion of commercial and industrial roof work into the Cullompton job mix — warehouses, distribution buildings, and the businesses around the J28 junction.`,
        localFactors: `Cullompton's position in the Culm Valley shelters it from severe coastal weather, but its older buildings carry the marks of centuries of patched repairs. Original Welsh slate on the timber-framed High Street properties is increasingly hard to source for replacements, and reclaimed material is often used for like-for-like repairs. The town's listed buildings mean conservation officer involvement on most central jobs.`,
        workInArea: `Cullompton work splits between historic residential — slate repairs on the timber-framed buildings, chimney repointing, conservation-area reroofs — and the larger flat-roof and metal-roof work on commercial buildings around the motorway junction. That mix makes it one of the more varied locations in the area. Cullompton is about 20 minutes from Exeter.`,
      },
    },
    {
      name: 'Sidmouth',
      slug: 'sidmouth',
      description: 'Coastal and period property roofing in Sidmouth.',
      distanceFromBase: '15 miles',
      localContent: {
        propertyOverview: `Sidmouth is one of the most architecturally distinguished towns in Devon. The seafront and the streets running back from it are dominated by Regency and early Victorian villas, many of them listed. Slate roofs, decorative bargeboards, and ornate chimney stacks are the dominant features of the town's roofscape. Inland the property mix opens out — Edwardian and 1930s detached houses, plus more recent estate development above the town. The Sidmouth conservation area is one of the strictest in East Devon, and almost any work in the central streets has heritage implications.`,
        localFactors: `Sidmouth is fully coastal, taking the same southwesterly storm exposure as Exmouth and Dawlish. The combination of period buildings and full coastal exposure creates Sidmouth's particular challenges: lead flashings on tall Regency stacks corrode quickly, original Welsh slate needs frequent individual repair, and ornate features like bargeboards and finials need specialist replacement when storm-damaged. Salt damage to metal fittings is severe, and marine-grade replacements are standard for any seafront work.`,
        workInArea: `Typical Sidmouth jobs include lead flashing replacement on tall Regency stacks, slate repairs using reclaimed Welsh slate, storm damage emergency work, and conservation-area-compliant gutter replacements. Work in central Sidmouth almost always requires materials sourced specifically for conservation compatibility. Sidmouth is about 30 minutes from Exeter.`,
      },
    },
    {
      name: 'Axminster',
      slug: 'axminster',
      description: 'Covering Axminster and the Devon-Dorset border.',
      distanceFromBase: '25 miles',
      localContent: {
        propertyOverview: `Axminster's housing stock reflects its history as a Devon-Dorset border town. The centre contains a high proportion of Georgian and Victorian period properties, including buildings associated with the famous Axminster carpet industry. The streets around the market square have substantial period houses with original slate roofs. Beyond the centre, post-war and more recent developments add concrete tile housing to the mix. The surrounding rural area brings farmhouse and converted barn work into the Axminster job stream.`,
        localFactors: `Axminster sits in a sheltered valley near the Dorset border, away from the worst coastal weather but exposed to the wet southwesterly weather systems that move up the Axe Valley. The town's older buildings show typical period property issues — patched flashings, ageing slate, and chimney stacks that have moved over time. The proximity to the Dorset border means some work straddles county boundaries, but Axminster is covered as part of the standard area.`,
        workInArea: `Axminster work includes slate repairs on period buildings around the market square, full reroofs on post-war housing, chimney work on the town's older stock, and farmhouse work in the surrounding villages. At 25 miles it is the furthest standard area covered — about 40 minutes from Exeter.`,
      },
    },
    {
      name: 'Cranbrook',
      slug: 'cranbrook',
      description: 'New-build and modern property roofing in Cranbrook.',
      distanceFromBase: '6 miles',
      localContent: {
        propertyOverview: `Cranbrook is unlike any other area covered. The town has been built from scratch over the past decade, and almost every property is less than fifteen years old. Roofs are dominated by modern concrete interlocking tile systems on standard housebuilder specifications. There is no period property stock, no listed buildings, and no conservation considerations. Properties are arranged on planned estates with consistent designs and shared construction periods.`,
        localFactors: `Cranbrook's roofing issues are entirely different from older areas. The properties are too new for material failure, but construction-period defects regularly emerge: missing or displaced ridge tiles, poorly bedded ridge mortar, ineffective flashings around dormers and parapets, and gutter alignment issues where the original installation was rushed. Many properties are still under their original housebuilder warranty, and it is worth checking what can be claimed through that channel before any work goes ahead.`,
        workInArea: `Typical Cranbrook work is small remedial jobs: re-bedding ridge tiles, replacing missing or cracked tiles, correcting flashing details around dormers, and resolving guttering issues. Most are completed in a single visit. Cranbrook is only about 10 minutes from Exeter.`,
      },
    },
  ],

  faqs: [
    {
      question: 'How much does a new roof cost in Exeter?',
      answer: 'A full reroof on a typical semi-detached house in Exeter usually costs between £5,000 and £8,000, and detached homes range from £7,000 to £12,000 depending on size, pitch, and materials. Describe your job in the chat for an instant indicative price, then get a free, no-obligation quote from a local roofer.',
    },
    {
      question: 'How quickly can I get an emergency callback?',
      answer: 'For genuine emergencies like active leaks or storm damage, describe the problem in the chat and you will get a same-day callback from a local roofer who can attend quickly and make the property watertight.',
    },
    {
      question: 'Is the work guaranteed?',
      answer: 'Any guarantee is provided by the roofer who carries out your job — typically 12 months on repairs and longer on reroofs and flat roofs. We recommend confirming the guarantee terms in writing before you agree to the work.',
    },
    {
      question: 'Is the roofer insured?',
      answer: 'The roofer who provides your quote carries their own public liability insurance. We always recommend asking to see a copy and confirming the cover before agreeing to any work.',
    },
    {
      question: 'Do I need scaffolding for roof work?',
      answer: 'Most roof work above single-storey height needs scaffolding for safety, and a good roofer will include it in the quote rather than adding it as a surprise extra. For smaller repairs at lower heights, ladders and roof-access equipment are often enough.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We cover Exeter and the whole of East Devon including Exmouth, Topsham, Crediton, Tiverton, Dawlish, Honiton, Sidmouth, Cullompton, and the surrounding villages. If you are not sure whether your area is covered, just ask in the chat.',
    },
    {
      question: 'How long does a full reroof take?',
      answer: 'A typical semi-detached house takes around 3–5 working days, and detached or more complex roofs 5–7 days. Weather can extend timelines — the roofer will keep you informed and will not leave a roof uncovered overnight.',
    },
    {
      question: 'Can my existing tiles be matched?',
      answer: 'In most cases, yes. Common tile and slate types can be matched, and suppliers can often source discontinued lines. The roofer will discuss material options with you before starting.',
    },
    {
      question: 'Do I need planning permission for a new roof?',
      answer: 'In most cases, no — replacing a roof with similar materials is usually permitted development. Conservation areas and listed buildings may need consent. The roofer can advise on this when they quote.',
    },
    {
      question: 'How do I know if my roof needs replacing or just repairing?',
      answer: 'Describe the symptoms in the chat and you will get a callback from a roofer who can assess whether a repair is enough or a full replacement makes more financial sense — with an honest recommendation and no pressure.',
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
