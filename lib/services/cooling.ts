import { siteConfig } from '../config';
import type { ServicePage } from './types';

export const coolingServices: ServicePage[] = [
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    category: 'cooling',
    metaDescription: `AC repair services in ${siteConfig.city}. Fast, reliable air conditioning repair for all brands. 24/7 emergency service available.`,
    hero: {
      title: 'AC Repair Services',
      subtitle: 'Fast, reliable air conditioning repair',
    },
    quickAnswer: `AC repair in ${siteConfig.city} typically costs $150-$500 for common repairs. Emergency service is available 24/7. Most repairs can be completed same-day, getting your home cool again quickly.`,
    content: `
      <h2>Common AC Problems We Fix</h2>
      <ul>
        <li><strong>AC not cooling</strong> — Low refrigerant, dirty coils, or compressor issues</li>
        <li><strong>AC not turning on</strong> — Thermostat, electrical, or capacitor problems</li>
        <li><strong>Strange noises</strong> — Loose parts, fan issues, or compressor problems</li>
        <li><strong>AC running constantly</strong> — Undersized unit, refrigerant leak, or dirty filters</li>
        <li><strong>Uneven cooling</strong> — Ductwork issues or airflow problems</li>
        <li><strong>High energy bills</strong> — Inefficient operation or needed maintenance</li>
      </ul>

      <h2>Our AC Repair Process</h2>
      <ol>
        <li>Thorough diagnostic to identify the problem</li>
        <li>Clear explanation of needed repairs and upfront pricing</li>
        <li>Professional repair using quality parts</li>
        <li>System testing to ensure proper operation</li>
        <li>Recommendations for preventing future issues</li>
      </ol>

      <h2>AC Repair Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Diagnostic fee:</strong> $75-$125 (often waived with repair)</li>
        <li><strong>Capacitor replacement:</strong> $150-$300</li>
        <li><strong>Refrigerant recharge:</strong> $200-$500</li>
        <li><strong>Fan motor replacement:</strong> $300-$600</li>
        <li><strong>Compressor replacement:</strong> $1,200-$2,500</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does AC repair cost in ${siteConfig.city}?`,
        answer: `AC repair in ${siteConfig.city} typically costs $150-$500 for common repairs like capacitors, contactors, or refrigerant. More complex repairs like compressor replacement can cost $1,200-$2,500. We provide upfront pricing before any work begins.`,
      },
      {
        question: 'Should I repair or replace my AC?',
        answer: 'Consider replacement if your AC is over 10-15 years old, repair costs exceed 50% of replacement, it uses R-22 refrigerant (phased out), or it breaks down frequently. Newer units are significantly more efficient.',
      },
      {
        question: 'How long does AC repair take?',
        answer: 'Most AC repairs are completed in 1-3 hours. Some repairs requiring parts may take longer if parts need to be ordered. We stock common parts to minimize wait times.',
      },
    ],
    priceRange: '$150 - $2,500',
    features: ['Same-Day Service', 'All Brands', '24/7 Emergency', 'Upfront Pricing'],
  },
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    category: 'cooling',
    metaDescription: `AC installation in ${siteConfig.city}. Professional air conditioning installation for new systems and replacements. Free estimates available.`,
    hero: {
      title: 'AC Installation',
      subtitle: 'Professional air conditioning installation',
    },
    quickAnswer: `AC installation in ${siteConfig.city} costs $4,000-$12,000+ depending on system size and efficiency. This includes removal of old equipment, new unit installation, and warranty. Most installations are completed in one day.`,
    content: `
      <h2>AC Installation Services</h2>
      <ul>
        <li><strong>New AC installation</strong> — Complete system for new construction or additions</li>
        <li><strong>AC replacement</strong> — Upgrading your existing system</li>
        <li><strong>System upgrades</strong> — Moving to higher efficiency or larger capacity</li>
        <li><strong>Ductless mini-splits</strong> — Zoned cooling without ductwork</li>
      </ul>

      <h2>Choosing the Right AC System</h2>
      <p>We help you select the right system based on:</p>
      <ul>
        <li>Home size and layout</li>
        <li>Existing ductwork condition</li>
        <li>Energy efficiency goals (SEER rating)</li>
        <li>Budget and long-term operating costs</li>
        <li>Special features (variable speed, smart thermostats)</li>
      </ul>

      <h2>AC Installation Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>2-ton system (small home):</strong> $4,000-$6,000</li>
        <li><strong>3-ton system (average home):</strong> $5,500-$8,000</li>
        <li><strong>4-5 ton system (large home):</strong> $7,000-$12,000</li>
        <li><strong>Ductless mini-split:</strong> $3,000-$5,000 per zone</li>
        <li><strong>High-efficiency upgrade:</strong> Add $1,000-$3,000</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does AC installation cost in ${siteConfig.city}?`,
        answer: `AC installation in ${siteConfig.city} ranges from $4,000-$12,000+ depending on system size, efficiency rating, and home requirements. A typical 3-ton system for an average home costs $5,500-$8,000 installed.`,
      },
      {
        question: 'How long does AC installation take?',
        answer: 'Most AC installations are completed in one day (4-8 hours). Complex installations involving ductwork modifications may take 2 days. We schedule a specific time and keep you informed throughout.',
      },
      {
        question: 'What SEER rating should I choose?',
        answer: 'Minimum SEER in Texas is 15. We recommend 16-18 SEER for good efficiency, or 20+ SEER for maximum savings. Higher SEER costs more upfront but saves on monthly bills. We can calculate your payback period.',
      },
    ],
    priceRange: '$4,000 - $12,000+',
    features: ['Free Estimates', 'All Major Brands', 'Financing Available', '10-Year Warranty'],
  },
  {
    slug: 'ac-maintenance',
    name: 'AC Maintenance',
    category: 'cooling',
    metaDescription: `AC maintenance and tune-up services in ${siteConfig.city}. Keep your air conditioner running efficiently with professional maintenance.`,
    hero: {
      title: 'AC Maintenance & Tune-Up',
      subtitle: 'Keep your AC running efficiently',
    },
    quickAnswer: `AC maintenance in ${siteConfig.city} costs $75-$150 for a standard tune-up. Regular maintenance can prevent 95% of AC breakdowns, extend system life by 5+ years, and reduce energy bills by 15-25%.`,
    content: `
      <h2>What's Included in AC Maintenance</h2>
      <ul>
        <li>Clean or replace air filter</li>
        <li>Clean condenser and evaporator coils</li>
        <li>Check refrigerant levels</li>
        <li>Inspect and clean drain line</li>
        <li>Test thermostat operation</li>
        <li>Check electrical connections</li>
        <li>Lubricate moving parts</li>
        <li>Inspect ductwork for leaks</li>
        <li>Test system performance</li>
      </ul>

      <h2>Benefits of Regular Maintenance</h2>
      <ul>
        <li><strong>Prevent breakdowns</strong> — Catch problems before they become failures</li>
        <li><strong>Lower energy bills</strong> — Clean systems run 15-25% more efficiently</li>
        <li><strong>Extend system life</strong> — Well-maintained ACs last 5+ years longer</li>
        <li><strong>Better air quality</strong> — Clean coils and filters improve indoor air</li>
        <li><strong>Maintain warranty</strong> — Most warranties require annual maintenance</li>
      </ul>

      <h2>When to Schedule Maintenance</h2>
      <p>Schedule AC maintenance in spring before the summer heat arrives. This ensures your system is ready for peak demand and gives time to address any issues found.</p>
    `,
    faqs: [
      {
        question: 'How often should I service my AC?',
        answer: 'AC systems should be professionally serviced once per year, ideally in spring before summer. If you have a heat pump that provides both heating and cooling, service it twice yearly.',
      },
      {
        question: `How much does AC maintenance cost in ${siteConfig.city}?`,
        answer: `AC maintenance in ${siteConfig.city} costs $75-$150 for a standard tune-up. Maintenance plans that include priority service and discounts on repairs are $150-$250 per year.`,
      },
      {
        question: 'What happens if I skip AC maintenance?',
        answer: 'Skipping maintenance leads to reduced efficiency (higher bills), shortened system life, more frequent breakdowns, and may void your warranty. Small problems become expensive repairs.',
      },
    ],
    priceRange: '$75 - $150',
    features: ['20-Point Inspection', 'All Brands Serviced', 'Maintenance Plans', 'Priority Scheduling'],
  },
  {
    slug: 'duct-cleaning',
    name: 'Duct Cleaning',
    category: 'cooling',
    metaDescription: `Professional duct cleaning in ${siteConfig.city}. Improve air quality and HVAC efficiency with thorough air duct cleaning services.`,
    hero: {
      title: 'Air Duct Cleaning',
      subtitle: 'Cleaner air, better efficiency',
    },
    quickAnswer: `Duct cleaning in ${siteConfig.city} costs $300-$500 for a typical home. Professional duct cleaning removes dust, allergens, and debris that accumulate over time, improving indoor air quality and HVAC efficiency.`,
    content: `
      <h2>When You Need Duct Cleaning</h2>
      <ul>
        <li>Visible dust blowing from vents</li>
        <li>Musty or stale odors from HVAC system</li>
        <li>Recent renovation or construction</li>
        <li>Moving into a new home</li>
        <li>Allergy or respiratory issues worsening</li>
        <li>Haven't cleaned ducts in 5+ years</li>
        <li>Evidence of rodent or insect infestation</li>
      </ul>

      <h2>Our Duct Cleaning Process</h2>
      <ol>
        <li>Inspect ductwork with camera</li>
        <li>Seal and protect your home</li>
        <li>Use high-powered vacuum to create negative pressure</li>
        <li>Agitate debris with brushes and air tools</li>
        <li>Clean all vents and registers</li>
        <li>Sanitize if requested</li>
        <li>Final inspection to verify results</li>
      </ol>

      <h2>Duct Cleaning Costs in ${siteConfig.city}</h2>
      <ul>
        <li><strong>Standard home (up to 2,000 sq ft):</strong> $300-$400</li>
        <li><strong>Larger home (2,000-3,500 sq ft):</strong> $400-$500</li>
        <li><strong>Large home (3,500+ sq ft):</strong> $500-$700</li>
        <li><strong>Dryer vent cleaning (add-on):</strong> $75-$125</li>
        <li><strong>Sanitizing treatment:</strong> $75-$150</li>
      </ul>
    `,
    faqs: [
      {
        question: `How much does duct cleaning cost in ${siteConfig.city}?`,
        answer: `Duct cleaning in ${siteConfig.city} costs $300-$500 for most homes. Price depends on home size, number of vents, and ductwork accessibility. Beware of extremely low prices ($99 whole house) — they often indicate bait-and-switch tactics.`,
      },
      {
        question: 'How often should ducts be cleaned?',
        answer: 'Most homes benefit from duct cleaning every 3-5 years. Clean more often if you have pets, allergies, smokers in the home, or recent construction. Visual inspection can help determine if cleaning is needed.',
      },
      {
        question: 'Does duct cleaning really help?',
        answer: 'Yes, when done properly. Professional duct cleaning removes accumulated dust, allergens, and debris that filters can\'t catch. Benefits include improved air quality, better HVAC efficiency, and reduced allergens.',
      },
    ],
    priceRange: '$300 - $700',
    features: ['Video Inspection', 'HEPA Filtration', 'All Vents Cleaned', 'Satisfaction Guaranteed'],
  },
  {
    slug: 'air-quality',
    name: 'Indoor Air Quality',
    category: 'cooling',
    metaDescription: `Indoor air quality solutions in ${siteConfig.city}. Air purifiers, humidifiers, UV lights, and ventilation systems for healthier indoor air.`,
    hero: {
      title: 'Indoor Air Quality',
      subtitle: 'Breathe cleaner, healthier air',
    },
    quickAnswer: `Indoor air quality solutions in ${siteConfig.city} range from $200 for basic air purifiers to $2,000+ for whole-home systems. Options include air purifiers, UV lights, humidifiers, dehumidifiers, and ventilation systems.`,
    content: `
      <h2>Indoor Air Quality Solutions</h2>
      <ul>
        <li><strong>Air purifiers</strong> — Remove particles, allergens, and pollutants</li>
        <li><strong>UV germicidal lights</strong> — Kill bacteria, viruses, and mold in ductwork</li>
        <li><strong>Humidifiers</strong> — Add moisture in dry winter months</li>
        <li><strong>Dehumidifiers</strong> — Remove excess moisture to prevent mold</li>
        <li><strong>Ventilation systems</strong> — Bring in fresh air while maintaining efficiency</li>
        <li><strong>High-efficiency filters</strong> — Upgrade from standard filters</li>
      </ul>

      <h2>Signs You Need Air Quality Improvements</h2>
      <ul>
        <li>Allergy symptoms worse indoors</li>
        <li>Stuffy or stale air</li>
        <li>Excessive dust accumulation</li>
        <li>Humidity problems (too dry or too humid)</li>
        <li>Musty or chemical odors</li>
        <li>Family members with asthma or respiratory issues</li>
      </ul>

      <h2>Air Quality System Costs</h2>
      <ul>
        <li><strong>High-efficiency filter upgrade:</strong> $50-$200</li>
        <li><strong>Portable air purifier:</strong> $200-$500</li>
        <li><strong>Whole-home air purifier:</strong> $500-$1,500</li>
        <li><strong>UV germicidal light:</strong> $400-$800</li>
        <li><strong>Whole-home humidifier:</strong> $400-$800</li>
        <li><strong>Whole-home dehumidifier:</strong> $1,200-$2,000</li>
      </ul>
    `,
    faqs: [
      {
        question: 'What is the best air purifier for allergies?',
        answer: 'For allergies, we recommend whole-home air purifiers with HEPA filtration or electronic air cleaners. These capture 99%+ of particles including pollen, dust mites, and pet dander. Portable units help but don\'t treat the whole home.',
      },
      {
        question: 'Do UV lights in HVAC really work?',
        answer: 'Yes, UV germicidal lights effectively kill bacteria, viruses, and mold spores that pass through your HVAC system. They\'re especially beneficial for preventing mold growth on evaporator coils.',
      },
      {
        question: 'What humidity level should my home be?',
        answer: 'Ideal indoor humidity is 30-50%. Below 30% causes dry skin, static electricity, and respiratory irritation. Above 50% promotes mold growth and dust mites. A whole-home humidifier or dehumidifier maintains optimal levels.',
      },
    ],
    priceRange: '$200 - $2,000+',
    features: ['Free Air Quality Assessment', 'All Major Brands', 'Professional Installation', 'Maintenance Plans'],
  },
];
