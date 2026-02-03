export interface ProTip {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'maintenance' | 'emergency' | 'savings' | 'seasonal';
  publishedAt: string;
  readTime: string;
}

export const proTips: ProTip[] = [
  {
    slug: 'how-to-find-main-water-shutoff',
    title: 'How to Find and Use Your Main Water Shut-Off Valve',
    excerpt: 'Every homeowner should know where their main water shut-off valve is located. In an emergency, shutting off the water quickly can prevent thousands of dollars in damage.',
    content: `
      <p>Every homeowner should know where their main water shut-off valve is located. In an emergency like a burst pipe, shutting off the water quickly can prevent thousands of dollars in water damage.</p>

      <h2>Where to Look</h2>
      <p>In most Dallas-area homes, you'll find the main shut-off valve in one of these locations:</p>
      <ul>
        <li><strong>Near the water meter</strong> — Usually at the front of your property, near the street</li>
        <li><strong>Where the main line enters your home</strong> — Often in the garage, basement, or utility closet</li>
        <li><strong>Near the water heater</strong> — In some homes, especially newer construction</li>
      </ul>

      <h2>Types of Shut-Off Valves</h2>
      <p>There are two common types:</p>
      <ul>
        <li><strong>Gate valve (round handle)</strong> — Turn clockwise to close. May take several turns.</li>
        <li><strong>Ball valve (lever handle)</strong> — Turn 90 degrees so the handle is perpendicular to the pipe.</li>
      </ul>

      <h2>Test It Now</h2>
      <p>Don't wait for an emergency. Test your shut-off valve today:</p>
      <ol>
        <li>Locate the valve</li>
        <li>Turn it off slowly</li>
        <li>Check that water stops flowing at a faucet</li>
        <li>Turn it back on</li>
      </ol>
      <p>If the valve is stuck or difficult to turn, call a plumber to inspect or replace it before you need it in an emergency.</p>
    `,
    category: 'emergency',
    publishedAt: '2026-01-15',
    readTime: '3 min',
  },
  {
    slug: 'prevent-frozen-pipes-dallas',
    title: 'How to Prevent Frozen Pipes in Dallas Winters',
    excerpt: 'While Dallas winters are mild, occasional hard freezes can cause serious pipe damage. Learn how to protect your plumbing when temperatures drop.',
    content: `
      <p>While Dallas winters are generally mild, we do experience occasional hard freezes that can catch homeowners off guard. When temperatures drop below freezing, unprotected pipes can freeze and burst, causing extensive water damage.</p>

      <h2>Which Pipes Are at Risk?</h2>
      <ul>
        <li>Pipes in exterior walls</li>
        <li>Pipes in unheated areas (attic, crawl space, garage)</li>
        <li>Outdoor faucets and hose bibs</li>
        <li>Sprinkler system supply lines</li>
      </ul>

      <h2>Before the Freeze</h2>
      <ul>
        <li><strong>Disconnect garden hoses</strong> — Water in hoses can freeze back into the faucet</li>
        <li><strong>Cover outdoor faucets</strong> — Use insulated faucet covers (available at hardware stores)</li>
        <li><strong>Insulate exposed pipes</strong> — Use foam pipe insulation in attics and crawl spaces</li>
        <li><strong>Know your shut-off valve</strong> — In case a pipe does burst</li>
      </ul>

      <h2>During the Freeze</h2>
      <ul>
        <li><strong>Let faucets drip</strong> — A slow drip keeps water moving and prevents freezing</li>
        <li><strong>Open cabinet doors</strong> — Allow warm air to reach pipes under sinks on exterior walls</li>
        <li><strong>Keep thermostat steady</strong> — Don't lower heat at night during a hard freeze</li>
      </ul>

      <h2>If Pipes Freeze</h2>
      <p>If you turn on a faucet and only a trickle comes out:</p>
      <ol>
        <li>Keep the faucet open</li>
        <li>Apply gentle heat to the frozen section with a hair dryer</li>
        <li>Never use open flames or high heat</li>
        <li>Call a plumber if you can't locate or thaw the frozen section</li>
      </ol>
    `,
    category: 'seasonal',
    publishedAt: '2026-01-10',
    readTime: '4 min',
  },
  {
    slug: 'signs-you-need-water-heater-replacement',
    title: '5 Signs You Need a New Water Heater',
    excerpt: 'Water heaters don\'t last forever. Here are the warning signs that indicate it\'s time to replace yours before it fails completely.',
    content: `
      <p>Water heaters typically last 8-12 years for tank models and 15-20 years for tankless. But some fail earlier, and it's better to replace a failing unit on your schedule than deal with an emergency breakdown.</p>

      <h2>1. Age</h2>
      <p>Check the serial number on your water heater — the first two digits often indicate the year it was made. If it's approaching or past the 10-year mark, start planning for replacement even if it's working fine.</p>

      <h2>2. Rusty Water</h2>
      <p>If hot water from your taps appears rusty or discolored, the inside of your tank may be corroding. This is a sign of imminent failure. (Note: rusty cold water indicates a pipe problem, not the water heater.)</p>

      <h2>3. Strange Noises</h2>
      <p>Rumbling, popping, or banging sounds indicate sediment buildup at the bottom of the tank. This sediment hardens over time, reduces efficiency, and accelerates tank deterioration.</p>

      <h2>4. Leaks Around the Base</h2>
      <p>Any water pooling around your water heater needs immediate attention. Small leaks often grow into major failures. Check the temperature and pressure relief valve and the drain valve first — sometimes these are the culprits and can be replaced.</p>

      <h2>5. Insufficient Hot Water</h2>
      <p>If you're running out of hot water faster than usual, or the water isn't getting as hot, the heating elements may be failing or sediment may be reducing capacity.</p>

      <h2>Repair vs. Replace</h2>
      <p>Generally, if a water heater is over 8 years old and needs a repair costing more than 50% of a new unit, replacement is the smarter choice. Newer models are also more energy efficient, potentially saving 10-20% on water heating costs.</p>
    `,
    category: 'maintenance',
    publishedAt: '2026-01-05',
    readTime: '4 min',
  },
  {
    slug: 'why-chemical-drain-cleaners-bad',
    title: 'Why You Should Avoid Chemical Drain Cleaners',
    excerpt: 'Those bottles of drain cleaner at the hardware store might seem like a quick fix, but they can cause more harm than good to your plumbing.',
    content: `
      <p>When you have a slow drain, it's tempting to grab a bottle of chemical drain cleaner. They're inexpensive, available everywhere, and promise fast results. But plumbers almost universally advise against them. Here's why.</p>

      <h2>Pipe Damage</h2>
      <p>Chemical drain cleaners work by generating heat through a chemical reaction. This heat can:</p>
      <ul>
        <li>Soften PVC pipes, causing warping or joint failures</li>
        <li>Corrode older metal pipes</li>
        <li>Damage pipe sealants and gaskets</li>
      </ul>
      <p>The damage is cumulative — each use weakens your pipes a little more.</p>

      <h2>Incomplete Results</h2>
      <p>Chemical cleaners typically only create a small hole through the clog. The clog remains on the pipe walls, and the drain clogs again soon after. Professional drain cleaning removes the entire clog and buildup.</p>

      <h2>Safety Hazards</h2>
      <ul>
        <li>Fumes can irritate eyes and respiratory system</li>
        <li>Splashing can cause chemical burns</li>
        <li>Mixing with other cleaners can create toxic gases</li>
        <li>Residue in pipes can splash onto plumbers during repairs</li>
      </ul>

      <h2>What to Use Instead</h2>
      <ul>
        <li><strong>Plunger</strong> — Still the best first-line tool for most clogs</li>
        <li><strong>Drain snake</strong> — Inexpensive manual snakes work for simple clogs</li>
        <li><strong>Enzyme cleaners</strong> — Safer for pipes but slower acting</li>
        <li><strong>Professional cleaning</strong> — For stubborn or recurring clogs</li>
      </ul>
    `,
    category: 'maintenance',
    publishedAt: '2025-12-20',
    readTime: '3 min',
  },
  {
    slug: 'lower-water-bill-tips',
    title: '7 Easy Ways to Lower Your Water Bill',
    excerpt: 'Small changes in habits and a few inexpensive upgrades can significantly reduce your monthly water bill without sacrificing comfort.',
    content: `
      <p>The average Dallas household uses about 9,000 gallons of water per month. Even small reductions in usage can add up to significant savings over time.</p>

      <h2>1. Fix Leaks Promptly</h2>
      <p>A dripping faucet wastes about 3,000 gallons per year. A running toilet can waste 200 gallons per day. Fixing leaks is the fastest way to reduce your bill.</p>

      <h2>2. Install Low-Flow Fixtures</h2>
      <p>Modern low-flow showerheads and faucet aerators use 25-50% less water while maintaining good pressure. They cost $10-30 each and pay for themselves quickly.</p>

      <h2>3. Upgrade Your Toilet</h2>
      <p>Older toilets use 3-7 gallons per flush. New high-efficiency models use 1.28 gallons or less. For a family of four, this can save 13,000+ gallons per year.</p>

      <h2>4. Run Full Loads Only</h2>
      <p>Wait until you have a full load before running the dishwasher or washing machine. Partial loads use the same amount of water as full loads.</p>

      <h2>5. Shorter Showers</h2>
      <p>Cutting shower time by just 2 minutes can save 5 gallons per shower, or 150+ gallons per month per person.</p>

      <h2>6. Turn Off the Tap</h2>
      <p>Don't let water run while brushing teeth, shaving, or washing dishes. This simple habit can save thousands of gallons per year.</p>

      <h2>7. Check for Hidden Leaks</h2>
      <p>Read your water meter before and after a 2-hour period when no water is being used. If it changed, you have a leak somewhere. Common culprits include toilets, irrigation systems, and water heaters.</p>
    `,
    category: 'savings',
    publishedAt: '2025-12-15',
    readTime: '4 min',
  },
];

export function getProTipBySlug(slug: string): ProTip | undefined {
  return proTips.find((t) => t.slug === slug);
}

export function getAllProTipSlugs(): string[] {
  return proTips.map((t) => t.slug);
}

export const categoryLabels: Record<ProTip['category'], string> = {
  maintenance: 'Maintenance',
  emergency: 'Emergency',
  savings: 'Save Money',
  seasonal: 'Seasonal',
};
