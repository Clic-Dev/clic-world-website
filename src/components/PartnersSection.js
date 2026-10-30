import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Container, Reveal, SectionHeader, sectionPadding } from './ui';

const PartnersSection = () => {
  const partners = [
    {
      name: "ALTX Africa",
      description: "Regulated private securities exchange enabling tokenization of real-world assets across Africa",
      logo: `${process.env.PUBLIC_URL}/altx-logo.png`,
      website: "https://www.altxafrica.com",
      category: "Securities Exchange"
    },
    {
      name: "Kinesis Money",
      description: "Revolutionary monetary system offering gold and silver-backed digital currencies with yield-bearing capabilities",
      logo: `${process.env.PUBLIC_URL}/kinesis-logo.png`,
      website: "https://kinesis.money/",
      category: "Precious Metals Currency"
    },
    {
      name: "Digital RFQ",
      description: "Digital trading platform for financial instruments and securities across emerging markets",
      logo: `${process.env.PUBLIC_URL}/drfq-logo.svg`,
      website: "https://digitalrfq.com",
      category: "Trading Platform"
    },
    {
      name: "Interswitch Group",
      description: "Leading African integrated digital payments and commerce company powering financial inclusion",
      logo: `${process.env.PUBLIC_URL}/interswitch-logo.svg`,
      website: "https://interswitchgroup.com",
      category: "Payment Infrastructure"
    },
    {
      name: "Yellow Card",
      description: "Africa's largest cryptocurrency exchange providing secure and compliant crypto-to-fiat services",
      logo: `${process.env.PUBLIC_URL}/yellowcard-logo.svg`,
      website: "https://yellowcard.io",
      category: "Crypto Exchange"
    },
    {
      name: "ABC Bank",
      description: "Commercial banking partner providing core banking infrastructure and regulatory compliance",
      logo: `${process.env.PUBLIC_URL}/abc-logo.jpg`,
      website: "https://www.abcthebank.com",
      category: "Banking Partner"
    },
    {
      name: "Stellar",
      description: "Open-source blockchain network enabling fast, low-cost cross-border payments and financial services",
      logo: `${process.env.PUBLIC_URL}/stellar-logo.png`,
      website: "https://stellar.org/",
      category: "Blockchain Infrastructure"
    },
    {
      name: "Anthropic",
      description: "AI safety company developing Claude and other advanced AI systems for beneficial and safe applications",
      logo: `${process.env.PUBLIC_URL}/anthropic-logo.png`,
      website: "https://www.anthropic.com/",
      category: "AI Technology"
    },
    {
      name: "Pryvaz",
      description: "Quantum-secured privacy platform providing personal digital vaults with AI assistants for data sovereignty",
      logo: `${process.env.PUBLIC_URL}/pryvaz-logo.png`,
      website: "https://pryvaz.mystrikingly.com/",
      category: "Privacy Technology"
    }
  ];

  // Logos have different built-in padding, so each gets a tuned max size
  const logoSize = {
    'Yellow Card': 'max-h-9 max-w-32',
    'ABC Bank': 'max-h-16 max-w-full',
    'Interswitch Group': 'max-h-12 max-w-full',
    'Stellar': 'max-h-16 max-w-52',
    'Anthropic': 'max-h-8 max-w-40',
    'Pryvaz': 'max-h-9 max-w-32'
  };

  const principles = [
    {
      title: "Regulatory Compliance",
      text: "Working within established frameworks across multiple African markets"
    },
    {
      title: "Technical Excellence",
      text: "Combining cutting-edge blockchain technology with proven financial infrastructure"
    },
    {
      title: "Community Impact",
      text: "Every partnership serves our mission of community-owned financial empowerment"
    }
  ];

  return (
    <div className="bg-paper">
      <Container className={sectionPadding}>
        {/* Section Header */}
        <Reveal>
          <SectionHeader
            eyebrow="Partners"
            title="Strategic Partners"
            description="Building the future of finance through powerful partnerships across Africa and beyond. Together, we're creating an ecosystem that serves communities, not just corporations."
          />
        </Reveal>

        {/* Partners Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={(index % 3) * 0.06} className="flex">
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(6,15,36,0.35)] hover:ring-slate-300 sm:p-8"
              >
                {/* Logo */}
                <div className="flex h-16 items-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className={`object-contain ${logoSize[partner.name] || 'max-h-10 max-w-36'}`}
                  />
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  {/* Category Badge */}
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {partner.category}
                  </span>

                  {/* Partner Info */}
                  <h3 className="mt-2 font-display text-xl font-bold text-navy-900">
                    {partner.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {partner.description}
                  </p>
                </div>

                {/* Visit Link */}
                <div className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
                  <span>Visit Website</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Partnership Philosophy */}
        <Reveal className="mt-20 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Partnership-Driven Innovation</h3>
                <p className="mt-5 leading-relaxed text-white/70">
                  We believe the future of finance is collaborative, not competitive. Our strategic partnerships
                  combine regulatory expertise, technical innovation, and market access to create solutions
                  that truly serve African communities and the global diaspora.
                </p>
                <p className="mt-6 font-semibold text-gold-400">
                  Building together, growing together
                </p>
              </div>

              <ul className="space-y-6">
                {principles.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950">
                      <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default PartnersSection;
