import React, { useState } from 'react';
import { Brain, Briefcase, Check, ChevronRight, GraduationCap, Landmark, ShoppingCart, Wheat } from 'lucide-react';
import { Container, IconBadge, Reveal, SectionHeader, sectionPadding } from './ui';

const products = [
  {
    icon: Landmark,
    title: 'CLIX Platform',
    positioning: 'Your all-in-one financial companion—decentralised, community-powered, and gold-backed.',
    description: 'A Stellar-based decentralised virtual asset investment exchange integrating social banking and a multi-wallet Social Financial app.',
    features: [
      'Decentralised Exchange: Trade CLIX tokens, KAU (gold), KAG (silver), and approved assets (Stellar, Polygon, Ethereum)',
      'Social Banking System: AI-driven micro core banking for communities—real-time savings, loans, and account management',
      'Multi-Wallet Support: Stellar, Polygon, Ethereum for comprehensive asset management',
      'Merchant payments, P2P transfers, cross-border remittances, asset swaps, bill payments',
      'Investment options: bonds, shares, insurance, cash withdrawals via agents',
      'Integration with Kinesis.money for KAU/KAG issuance'
    ],
    valueProposition: 'Simplifies complex financial services into a single, secure app, bridging traditional banking with crypto innovation.'
  },
  {
    icon: ShoppingCart,
    title: 'Decentralised e-Commerce Marketplace',
    positioning: 'Shop local, trade global—powered by trust and community.',
    description: 'A peer-to-peer marketplace for communities to buy, sell, and trade goods/services using CLIX, KAU, KAG, or fiat equivalents.',
    features: [
      'Local and global listings with KYC-verified sellers',
      'Payment options: CLIX, crypto swaps, or remittances via Stellar',
      'Community ratings and reviews tied to "Clic Trust Rating"',
      'Decentralised escrow and dispute resolution',
      'Integration with value chain management for direct producer sales'
    ],
    valueProposition: 'A safe, decentralised alternative to corporate e-commerce giants, keeping wealth within communities.'
  },
  {
    icon: Briefcase,
    title: 'Business Hub for SMEs',
    positioning: 'Grow your business, your way—with tools that scale.',
    description: 'An end-to-end business management suite for small and medium enterprises (SMEs).',
    features: [
      'Comprehensive accounts, payroll, stock, and inventory management',
      'Supply chain tracking with blockchain transparency',
      'CLIX-based payments and trade finance options',
      'Integration with decentralised marketplace for sales',
      'AI-powered business analytics and growth recommendations'
    ],
    valueProposition: 'Empowers SMEs with enterprise-grade tools at micro-scale costs, integrated with the CLIX financial ecosystem.'
  },
  {
    icon: Wheat,
    title: 'Value Chain Management',
    positioning: 'From farm to market—streamlined, secure, and community-funded.',
    description: 'A module for managing product lifecycles, off-taking, payments, and trade finance.',
    features: [
      'Product management: Track goods from source to sale on blockchain',
      'Off-taking: Pre-sell harvests or inventory with CLIX-backed contracts',
      'Payment management: Automate supplier payouts via Stellar',
      'Trade finance: Access loans or bonds using CLIX collateral',
      'Weather API integration for agricultural risk management'
    ],
    valueProposition: 'Optimises agricultural and industrial value chains, critical for Africa\'s $1T agro-economy (FAO 2025 est.).'
  },
  {
    icon: GraduationCap,
    title: 'Online Education and E-Learning Platform',
    positioning: 'Learn today, lead tomorrow—education for a decentralised world.',
    description: 'A decentralised learning hub offering courses on finance, entrepreneurship, and sustainability.',
    features: [
      'Free and paid courses payable in CLIX or KAU/KAG',
      'Certifications tied to "OneClicID" for lifelong credentials',
      'Community-led content (e.g., SME success stories)',
      'Mentor marketplace connecting diaspora experts with local learners',
      'CLIX rewards for course completion and community contribution'
    ],
    valueProposition: 'Upskills users to thrive in the Clic.World ecosystem, fostering economic inclusion.'
  },
  {
    icon: Brain,
    title: 'ClicBrain - AI Knowledge Management',
    positioning: 'Your enterprise memory that never forgets—where human insight meets AI amplification.',
    description: 'An enterprise-grade AI-human partnership platform that captures, processes, and amplifies organizational intelligence through documented breakthrough methodologies and persistent memory systems.',
    features: [
      'Corporate Intelligence: Enterprise knowledge graphs connecting insights, decisions, and outcomes',
      'Cross-Session Continuity: Seamless context restoration maintaining project momentum across time gaps',
      'Quality Gate Enforcement: Mandatory development protocols preventing technical debt',
      'Performance Analytics: 88.6% productivity gains measurement with waste elimination tracking',
      'Integration Ecosystem: Native connectivity with all Clic.World products',
      'White-Label Licensing: Enterprise deployment for $240B AI productivity market opportunities'
    ],
    valueProposition: 'Transforms organizational intelligence from scattered tribal knowledge into persistent, searchable, and amplified corporate memory, enabling breakthrough innovation velocity while maintaining human creativity and strategic thinking at the center of all decisions.'
  }
];

// "Label: detail" features get a bold label
const renderFeature = (feature) => {
  const splitAt = feature.indexOf(': ');
  if (splitAt === -1) return feature;
  return (
    <>
      <strong className="font-semibold text-navy-900">{feature.slice(0, splitAt)}:</strong>
      {feature.slice(splitAt + 1)}
    </>
  );
};

const ProductDetail = ({ product, showHeading }) => (
  <div className="rounded-3xl bg-paper p-6 ring-1 ring-slate-200/70 sm:p-10">
    {showHeading && (
      <div className="mb-8 flex items-start gap-5">
        <IconBadge icon={product.icon} tone="white" size="lg" />
        <h3 className="pt-2 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">{product.title}</h3>
      </div>
    )}

    <p className="font-display text-lg font-semibold italic leading-snug text-brand-700 sm:text-xl">
      "{product.positioning}"
    </p>
    <p className="mt-5 leading-relaxed text-slate-600">{product.description}</p>

    <h4 className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Key Features</h4>
    <ul className="mt-5 space-y-3.5">
      {product.features.map((feature) => (
        <li key={feature} className="flex gap-3 text-sm leading-relaxed text-slate-600">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
            <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
          </span>
          <span>{renderFeature(feature)}</span>
        </li>
      ))}
    </ul>

    <div className="mt-10 border-t border-slate-200 pt-8">
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Value Proposition</h4>
      <p className="mt-3 leading-relaxed text-navy-800">{product.valueProposition}</p>
    </div>
  </div>
);

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="bg-white">
      <Container className={sectionPadding}>
        <Reveal>
          <SectionHeader
            eyebrow="Solutions"
            title="SoFi Eco-System: Complete End-to-End Solution"
            description="Six interconnected products that power the future of community-owned finance— from local banking to global AI intelligence."
          />
        </Reveal>

        <Reveal className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          {/* Product list */}
          <div className="flex flex-col gap-2 lg:col-span-5">
            {products.map((product, index) => {
              const isActive = activeProduct === index;
              return (
                <div key={product.title}>
                  <button
                    type="button"
                    onClick={() => setActiveProduct(index)}
                    aria-expanded={isActive}
                    className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-colors sm:p-5 ${
                      isActive ? 'bg-navy-900 text-white' : 'text-navy-900 hover:bg-paper'
                    }`}
                  >
                    <IconBadge icon={product.icon} tone={isActive ? 'dark' : 'brand'} />
                    <span className="flex-1 font-display text-base font-bold sm:text-lg">{product.title}</span>
                    <ChevronRight
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 transition-transform ${
                        isActive ? 'rotate-90 text-gold-400 lg:rotate-0' : 'text-slate-400 group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>

                  {/* Mobile: details open under the selected product */}
                  {isActive && (
                    <div className="mt-3 lg:hidden">
                      <ProductDetail product={product} showHeading={false} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop: details panel */}
          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-32">
              <ProductDetail product={products[activeProduct]} showHeading />
            </div>
          </div>
        </Reveal>

        {/* Integration Message */}
        <Reveal className="mt-20 lg:mt-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-16">
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:col-span-4">
                Seamlessly Integrated Ecosystem
              </h3>
              <p className="leading-relaxed text-white/70 lg:col-span-8 lg:text-lg">
                All six products work together as one unified platform. Your CLIX wallet works across all services,
                your business data flows between modules, and ClicBrain AI optimizes performance across the entire ecosystem.
                This isn't just a collection of tools—it's a complete economic operating system for communities and enterprises.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default ProductsSection;
