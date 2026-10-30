import React, { useState } from 'react';
import { Globe2, HeartHandshake, Landmark, Rocket, Scale, Send, Target, TrendingUp, Users, Vote, Zap } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import BlogPostModal from './BlogPostModal';
import { Container, IconBadge, Reveal, SectionHeader, StoryTitle, blockSpacing, sectionPadding } from './ui';

const ClixSection = ({ clixPriceUSD, clixPriceXLM, xlmToUSD }) => {
  // Modal state for "Third Way" blog post
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAllocation, setActiveAllocation] = useState(null);

  // Find the "Finance's Third Way" blog post
  const thirdWayPost = blogPosts.find(post => post.slug === 'clic-world-vision-finance-third-way');

  // Find the "Africa's Youth Surge" blog post
  const youthSurgePost = blogPosts.find(post => post.slug === 'africa-youth-surge-demographic-dividend-clix-future');

  const openYouthSurgePost = () => {
    if (youthSurgePost) {
      setSelectedPost(youthSurgePost);
      setIsModalOpen(true);
    }
  };

  const openThirdWayPost = () => {
    if (thirdWayPost) {
      setSelectedPost(thirdWayPost);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const highlights = [
    { icon: Globe2, title: "African-Born", text: "Social finance platform" },
    { icon: Landmark, title: "Real-World Assets", text: "Buy gold and securities" },
    { icon: Users, title: "Community-Focussed", text: "Regulatory aligned" }
  ];

  const tokenomics = [
    {
      value: 50,
      percentage: "50%",
      label: "Community Projects",
      description: "Direct investment in local economic development projects",
      swatch: "bg-chart-1"
    },
    {
      value: 10,
      percentage: "10%",
      label: "Community Mining",
      description: "Community mine CLIX through eco-system participation (loyalty points)",
      swatch: "bg-chart-2"
    },
    {
      value: 35,
      percentage: "35%",
      label: "Eco-System Reserve",
      description: "Ensuring eco-system sustainability with option of 5% public sale",
      swatch: "bg-chart-3"
    },
    {
      value: 5,
      percentage: "5%",
      label: "Team & Advisors",
      description: "Long-term sustainability and operational funding",
      swatch: "bg-chart-4"
    }
  ];

  const useCases = [
    {
      icon: Send,
      title: "Payments",
      description: "Cross-border remittances, micro-transactions, and merchant adoption for seamless financial flows.",
      highlight: "Fast & affordable global transfers"
    },
    {
      icon: TrendingUp,
      title: "Investment",
      description: "Green project funding, staking rewards, and real-world asset tokenization liquidity.",
      highlight: "Real assets, real returns"
    },
    {
      icon: HeartHandshake,
      title: "Social Finance",
      description: "Community profit-sharing and loyalty rewards for active ecosystem engagement.",
      highlight: "Community wealth sharing"
    },
    {
      icon: Vote,
      title: "Governance",
      description: "Ecosystem decision-making and project funding votes for democratic participation.",
      highlight: "Your voice, your vote"
    }
  ];

  const growthMetrics = [
    {
      value: "60M",
      label: "Target Users by 2035",
      sublabel: "54M Africa + 6M Diaspora"
    },
    {
      value: "$15B",
      label: "Annual Transaction Volume",
      sublabel: "Target market goal"
    },
    {
      value: "40+",
      label: "Global Markets",
      sublabel: "Starting with 24 African countries"
    },
    {
      value: "$5B",
      label: "Market Cap Goal",
      sublabel: "Sustainable growth target"
    }
  ];

  const differences = [
    {
      icon: Globe2,
      title: "African Markets Focus",
      text: "Strong emphasis on African markets and diaspora connections for inclusive finance.",
      highlight: "24 countries and expanding"
    },
    {
      icon: Scale,
      title: "Stability Meets Innovation",
      text: "Beyond volatile crypto speculation - real-world asset backing with blockchain efficiency.",
      highlight: "Gold & bonds backed"
    },
    {
      icon: Rocket,
      title: "Community-Driven Growth",
      text: "Democratic governance where community members shape the ecosystem's future together.",
      highlight: "Your ecosystem, your rules"
    }
  ];

  const allocationSummary = tokenomics.map(item => `${item.label} ${item.percentage}`).join(', ');

  return (
    <div className="bg-paper">
      <Container className={sectionPadding}>

        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              align="left"
              eyebrow="CLIX"
              title={
                <StoryTitle onClick={openThirdWayPost}>CLIX: Finance's Third Way</StoryTitle>
              }
              description="The financial upgrade that puts communities first. CLIX combines a complete social financial platform with a community-focussed token, delivering real financial empowerment beyond traditional banking and crypto speculation."
            />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <ul className="divide-y divide-slate-200/80 rounded-2xl bg-white ring-1 ring-slate-200/70">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-center gap-4 px-6 py-5">
                  <IconBadge icon={item.icon} />
                  <div>
                    <h4 className="font-display font-bold text-navy-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Core Concept */}
        <div className={blockSpacing}>
          <Reveal>
            <SectionHeader
              level={3}
              title="Beyond Traditional Finance vs. Crypto"
              description="CLIX combines traditional finance stability with blockchain innovation, serving real-world needs rather than speculation"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
            <Reveal className="rounded-3xl bg-white p-8 ring-1 ring-slate-200/70 sm:p-10">
              <div className="flex items-center gap-4">
                <IconBadge icon={Zap} tone="gold" />
                <h4 className="font-display text-xl font-bold text-navy-900">Hybrid Blockchain Approach</h4>
              </div>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                  <p className="leading-relaxed text-slate-600">
                    <strong className="font-semibold text-navy-900">Stellar Network:</strong> Fast transactions & low costs
                  </p>
                </li>
                <li className="flex gap-4">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                  <p className="leading-relaxed text-slate-600">
                    <strong className="font-semibold text-navy-900">BSC Integration:</strong> DeFi capabilities & governance
                  </p>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.08} className="rounded-3xl bg-white p-8 ring-1 ring-slate-200/70 sm:p-10">
              <div className="flex items-center gap-4">
                <IconBadge icon={Target} tone="gold" />
                <h4 className="font-display text-xl font-bold text-navy-900">Circular Economy Vision</h4>
              </div>
              <p className="mt-8 leading-relaxed text-slate-600">
                Creating sustainable wealth generation where communities both create and share value,
                moving beyond extraction-based models.
              </p>
              <p className="mt-6 border-l-2 border-gold-500 pl-4 font-medium italic text-navy-800">
                "Communities generate and share wealth sustainably"
              </p>
            </Reveal>
          </div>
        </div>

        {/* Token Economics */}
        <Reveal className={blockSpacing}>
          <div className="rounded-[2rem] bg-white p-8 ring-1 ring-slate-200/70 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                  <StoryTitle href="https://clix-token.s3.us-east-1.amazonaws.com/CLIX+Token+Whitepaper+B.1.3.2.pdf">
                    Token Economics & White Paper
                  </StoryTitle>
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  <strong className="text-navy-900">10 Billion CLIX</strong> total supply distributed for maximum community benefit
                </p>
              </div>

              <div className="lg:col-span-8">
                {/* Allocation bar — thin segmented bar; the list below carries the figures */}
                <div role="img" aria-label={`CLIX allocation: ${allocationSummary}`} className="flex gap-[2px]">
                  {tokenomics.map((item, index) => (
                    <div
                      key={item.label}
                      title={`${item.label}: ${item.percentage}`}
                      onMouseEnter={() => setActiveAllocation(index)}
                      onMouseLeave={() => setActiveAllocation(null)}
                      className="flex h-6 items-center"
                      style={{ flex: `${item.value} 1 0%` }}
                    >
                      <div
                        className={`h-2 w-full transition-opacity ${item.swatch} ${
                          index === 0 ? 'rounded-l-full' : ''
                        } ${index === tokenomics.length - 1 ? 'rounded-r-full' : ''} ${
                          activeAllocation !== null && activeAllocation !== index ? 'opacity-25' : ''
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <dl className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                  {tokenomics.map((item, index) => (
                    <div
                      key={item.label}
                      onMouseEnter={() => setActiveAllocation(index)}
                      onMouseLeave={() => setActiveAllocation(null)}
                      className={`-mx-4 rounded-2xl px-4 py-4 transition-colors ${
                        activeAllocation === index ? 'bg-paper' : ''
                      }`}
                    >
                      <dt className="flex items-center gap-2.5 text-sm font-semibold text-navy-900">
                        <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-sm ${item.swatch}`} />
                        {item.label}
                      </dt>
                      <dd className="mt-2 font-display text-3xl font-bold tabular-nums text-navy-900">{item.percentage}</dd>
                      <dd className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Use Cases */}
        <div className={blockSpacing}>
          <Reveal>
            <SectionHeader
              level={3}
              title="Four Pillars of Utility"
              description="The CLIX token serves as payment medium, investment vehicle, loyalty rewards, and governance voting"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <Reveal
                key={useCase.title}
                delay={index * 0.06}
                className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200/70"
              >
                <IconBadge icon={useCase.icon} />
                <h4 className="mt-6 font-display text-lg font-bold text-navy-900">{useCase.title}</h4>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">{useCase.description}</p>
                <p className="mt-6 border-t border-slate-100 pt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">
                  {useCase.highlight}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Growth Strategy */}
        <Reveal className={blockSpacing}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 text-white">
            <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="relative px-6 pt-16 sm:px-12 lg:px-16 lg:pt-20">
              <SectionHeader
                level={3}
                dark
                align="left"
                title={
                  <StoryTitle dark onClick={openYouthSurgePost}>Ambitious Growth Vision</StoryTitle>
                }
                description="Building the largest community-owned financial ecosystem globally"
              />
            </div>

            <div className="relative mt-14 grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 lg:grid-cols-4">
              {growthMetrics.map((metric) => (
                <div key={metric.label} className="bg-navy-900 px-6 py-10 sm:px-12 lg:px-10 lg:py-12">
                  <div className="font-display text-4xl font-bold tabular-nums text-gold-400 sm:text-5xl">{metric.value}</div>
                  <div className="mt-4 font-semibold">{metric.label}</div>
                  <div className="mt-1 text-sm text-white/55">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Key Value Proposition */}
        <div className={blockSpacing}>
          <Reveal>
            <SectionHeader
              level={3}
              title="The CLIX Difference"
              description="A practical, community-focussed alternative serving real-world needs"
            />
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {differences.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="border-t-2 border-navy-900 pt-8">
                <IconBadge icon={item.icon} tone="white" />
                <h4 className="mt-6 font-display text-xl font-bold text-navy-900">{item.title}</h4>
                <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
                <p className="mt-5 text-sm font-semibold text-brand-700">{item.highlight}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <div aria-hidden="true" className="mx-auto h-px w-16 bg-gold-500" />
            <p className="mx-auto mt-8 max-w-2xl font-display text-xl font-bold text-navy-900 sm:text-2xl">
              CLIX: Where traditional finance stability meets blockchain innovation
            </p>
            <p className="mt-3 text-lg font-semibold text-brand-600">
              Finance's Third Way - Born in Africa, Built for the World
            </p>
          </Reveal>
        </div>
      </Container>

      {/* Blog Post Modal for "Third Way" */}
      <BlogPostModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ClixSection;
