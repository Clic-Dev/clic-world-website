import React, { useState } from 'react';
import { ArrowRight, Check, Gem, Globe2, HeartHandshake, School, Trophy, Users } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import BlogPostModal from './BlogPostModal';
import { Container, IconBadge, Reveal, SectionHeader, StoryTitle, blockSpacing, sectionPadding } from './ui';

const AboutSectionEnhanced = () => {
  // Modal state for "Decentralized Money" blog post
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the "Third Way" blog post
  const thirdWayPost = blogPosts.find(post => post.slug === 'clic-world-vision-finance-third-way');

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

  const principles = [
    {
      icon: Gem,
      title: "Value Flows to Creators",
      description: "Those who create value receive it, not just those who extract it from others.",
      highlight: "From mining communities to global communities"
    },
    {
      icon: HeartHandshake,
      title: "Belonging Means Ownership",
      description: "Community members own assets, participate in decisions, and shape their financial futures.",
      highlight: "Not just users—shareholders"
    },
    {
      icon: Globe2,
      title: "Digital Feels Human",
      description: "Technology that connects people, builds inclusion, and creates authentic relationships.",
      highlight: "Connected, inclusive, alive"
    }
  ];

  const journey = [
    {
      location: "Democratic Republic of Congo",
      story: "In the mining communities of North Kivu province, we witnessed value creators receiving only 30% of what their work was worth.",
      insight: "The fundamental problem became crystal clear",
      image: "artisanal-gold-miners.jpg",
      caption: "Artisanal Gold Miners"
    },
    {
      location: "Across Africa",
      story: "We saw innovation like Mobile Money, SACCOS, Stokvels and Chamas thriving against all odds, where community is the engine and the future is rewritten daily.",
      insight: "Community-powered innovation",
      image: "sacco-mtn-mpesa.png",
      caption: "African Financial Innovation - SACCO, MTN, M-Pesa"
    },
    {
      location: "Around the World",
      story: "This movement was never meant to stay within borders. We're building for communities everywhere.",
      insight: "Born in Africa. Built for the world.",
      image: "Global Sacco 02.png",
      caption: "Global Community Finance Network"
    }
  ];

  const visionPoints = [
    { icon: Trophy, title: "Gold Earns Yield", text: "Value that grows over time" },
    { icon: School, title: "Bonds Fund Schools", text: "Investment with purpose" },
    { icon: Users, title: "Communities Own", text: "Shareholders, not just users" }
  ];

  const howItWorks = [
    { title: "Tokenized Assets", text: "Gold, silver, and bonds traded on Stellar SDEX." },
    { title: "Spendable Yield", text: "Earn interest on stable stores of value, then pay merchants directly." },
    { title: "Community-Powered", text: "Community Social Banks (CSB's) like SACCOs & Stokvel groups pool funds, lend internally, and keep profits circulating locally." },
    { title: "Bank-Integrated", text: "Seamless on/off ramps via mobile money, bank transfers, and merchant payouts." }
  ];

  const differentiators = [
    { title: "Not DeFi Speculation", text: "Backed by auditable real-world assets." },
    { title: "Not Extraction", text: "Profits stay with communities, not platforms." },
    { title: "Not Complex", text: "Spend gold like cash, with no technical friction." }
  ];

  return (
    <div className="bg-white">
      <Container className={sectionPadding}>

        {/* Intro */}
        <Reveal>
          <SectionHeader
            eyebrow="The Movement"
            title={
              <StoryTitle onClick={openThirdWayPost}>
                Clic.World: A Movement Without Borders
              </StoryTitle>
            }
            description="From the mines of the Democratic Republic of Congo to a global movement—this is the story of re-centralising money where it belongs."
          />
        </Reveal>

        {/* Journey Section */}
        <div className={blockSpacing}>
          <Reveal>
            <SectionHeader
              level={3}
              title="The Awakening Journey"
              description="Our movement began with a simple realization: those creating the most value were receiving the least"
            />
          </Reveal>

          <ol className="mt-16 grid gap-16 md:grid-cols-3 md:gap-8 lg:gap-12">
            {journey.map((step, index) => (
              <Reveal as="li" key={step.location} delay={index * 0.08} className="flex flex-col">
                <figure>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={`${process.env.PUBLIC_URL}/${step.image}`}
                      alt={step.caption}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-slate-500">{step.caption}</figcaption>
                </figure>

                <div className="mt-7 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h4 className="font-display text-xl font-bold text-navy-900">{step.location}</h4>
                </div>

                <p className="mt-4 flex-grow leading-relaxed text-slate-600">{step.story}</p>
                <p className="mt-6 border-l-2 border-gold-500 pl-4 text-sm font-medium italic text-navy-800">
                  "{step.insight}"
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Core Principles */}
        <Reveal className={blockSpacing}>
          <div className="rounded-[2rem] bg-paper px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <SectionHeader
              level={3}
              title="Building an Economy That Works"
              description="We're creating a financial system where communities thrive, not just survive"
            />

            <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200">
              {principles.map((principle) => (
                <div key={principle.title} className="md:px-8 lg:px-10 md:first:pl-0 md:last:pr-0">
                  <IconBadge icon={principle.icon} tone="white" size="lg" />
                  <h4 className="mt-6 font-display text-xl font-bold text-navy-900">{principle.title}</h4>
                  <p className="mt-3 leading-relaxed text-slate-600">{principle.description}</p>
                  <p className="mt-5 text-sm font-semibold text-brand-700">{principle.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Vision Statement */}
        <Reveal className={blockSpacing}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-5">
                <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">We're Not Disrupting Finance</h3>
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  We're upgrading it—with accountability, yield, and teeth.
                  Imagine a world where money doesn't just hold value—it creates it.
                </p>
              </div>

              <ul className="divide-y divide-white/10 lg:col-span-6 lg:col-start-7">
                {visionPoints.map((point) => (
                  <li key={point.title} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                    <IconBadge icon={point.icon} tone="dark" />
                    <div>
                      <h4 className="font-display text-lg font-bold">{point.title}</h4>
                      <p className="mt-0.5 text-white/60">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-semibold">The old system falls short. We're the rewrite.</p>
              <p className="text-lg font-semibold text-gold-400">Born in Africa. Built for the world.</p>
            </div>
          </div>
        </Reveal>

        {/* How It Works & Key Differentiators */}
        <div className={`${blockSpacing} grid gap-16 lg:grid-cols-2 lg:gap-20`}>
          {/* How It Works */}
          <Reveal>
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-brand-600">HOW IT WORKS</h3>
            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {howItWorks.map((item) => (
                <li key={item.title} className="flex gap-4 py-6">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <strong className="font-display text-lg font-bold text-navy-900">{item.title}</strong>
                    <p className="mt-1 leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Key Differentiators */}
          <Reveal delay={0.08}>
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-brand-600">KEY DIFFERENTIATORS</h3>
            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-4 py-6">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-600">
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <strong className="font-display text-lg font-bold text-navy-900">{item.title}</strong>
                    <p className="mt-1 leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
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

export default AboutSectionEnhanced;
