import React, { useState } from 'react';
import {
  ArrowLeftRight,
  Atom,
  Building,
  Building2,
  Coins,
  Cpu,
  EyeOff,
  Fingerprint,
  Lock,
  MessageCircle,
  Network,
  Plus,
  Share2,
  ShieldCheck,
  Wallet
} from 'lucide-react';
import PatentModal from './PatentModal';
import { Container, Eyebrow, IconBadge, Reveal, SectionHeader, StoryTitle, blockSpacing, sectionPadding } from './ui';

const PrivacySectionEnhanced = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPatentModalOpen, setIsPatentModalOpen] = useState(false);

  const features = [
    {
      icon: Fingerprint,
      title: "Complete Data Ownership",
      description: "Your data never leaves your personal vault. You own it, control it, and decide what happens with it.",
      details: "Unlike traditional platforms where your data powers their AI, your vault keeps everything under your control."
    },
    {
      icon: Cpu,
      title: "Private AI Assistant",
      description: "Your personal AI learns from all your Clic interactions without ever exposing your data externally.",
      details: "Advanced AI processing happens locally within your quantum-secured vault environment."
    },
    {
      icon: Atom,
      title: "Quantum Security",
      description: "Military-grade quantum-resistant encryption protects your vault with unbreakable security.",
      details: "True quantum random number generation creates encryption keys that protect against future quantum computing threats."
    },
    {
      icon: Share2,
      title: "Selective Sharing",
      description: "Choose exactly what data each application can access. Grant or revoke permissions instantly.",
      details: "Granular control over data access with real-time permission management for all connected applications."
    },
    {
      icon: ArrowLeftRight,
      title: "Portable Freedom",
      description: "Your vault is portable. Move it anywhere, anytime. Never be locked into any platform again.",
      details: "Complete data portability ensures you're never dependent on any single platform or provider."
    },
    {
      icon: Coins,
      title: "Your Monetization",
      description: "Keep 100% privacy or choose to monetize your data on YOUR terms. You decide, you profit.",
      details: "Retain full control over data monetization opportunities while maintaining complete privacy protection."
    }
  ];

  const connectedProducts = [
    { name: "Clic Wallet", icon: Wallet, desc: "Financial data secured" },
    { name: "Social Bank", icon: Building, desc: "Social networking with privacy" },
    { name: "Business Hub", icon: Building2, desc: "Enterprise operations secured" },
    { name: "Clic Chat", icon: MessageCircle, desc: "Communications with privacy" }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Quantum-Resistant Encryption",
      description: "True quantum random number generation creates unbreakable encryption keys that protect against future quantum computing threats."
    },
    {
      icon: EyeOff,
      title: "Zero-Knowledge Architecture",
      description: "Clic literally cannot access your data. Even if compromised, your information remains completely secure in your vault."
    },
    {
      icon: ShieldCheck,
      title: "AI Privacy Protection",
      description: "Your AI assistant processes data locally within your vault. No external servers ever see your personal information."
    },
    {
      icon: Network,
      title: "Distributed Security",
      description: "No central servers to hack. Your data is distributed and encrypted across your personal infrastructure."
    }
  ];

  return (
    <div className="bg-white">
      <Container className={sectionPadding}>

        {/* Intro */}
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Privacy Vault</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Your Personal Privacy Vault
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl lg:col-span-7 lg:pt-9">
            The first platform where you truly own your data, control your AI, and decide your digital destiny. Where your data stays in your own quantum-secured vault and your AI processes your own data inside your secure space. Experience true digital sovereignty with quantum-secured personal data vaults and integrated AI
          </p>
        </Reveal>

        {/* Features Section */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {features.map((feature, index) => {
            const isActive = activeFeature === index;
            return (
              <Reveal key={feature.title} delay={(index % 3) * 0.06}>
                <button
                  type="button"
                  onClick={() => setActiveFeature(index)}
                  aria-expanded={isActive}
                  className={`flex h-full w-full flex-col rounded-3xl p-7 text-left ring-1 transition-colors sm:p-8 ${
                    isActive
                      ? 'bg-brand-50/60 ring-brand-500'
                      : 'bg-white ring-slate-200 hover:bg-paper hover:ring-slate-300'
                  }`}
                >
                  <div className="flex w-full items-start justify-between gap-4">
                    <IconBadge icon={feature.icon} tone={isActive ? 'white' : 'brand'} />
                    <Plus
                      aria-hidden="true"
                      className={`h-5 w-5 transition-transform ${isActive ? 'rotate-45 text-brand-600' : 'text-slate-400'}`}
                    />
                  </div>
                  <h4 className="mt-6 font-display text-xl font-bold text-navy-900">{feature.title}</h4>
                  <p className="mt-3 leading-relaxed text-slate-600">{feature.description}</p>
                  {isActive && (
                    <p className="mt-5 border-t border-brand-200 pt-5 text-sm leading-relaxed text-brand-700">
                      {feature.details}
                    </p>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* How It Works Section */}
        <div className={blockSpacing}>
          <Reveal>
            <SectionHeader
              level={3}
              title="How Your Personal Vault Works"
              description="Your vault is the center of your digital universe. All Clic products connect TO you, not the other way around."
            />
          </Reveal>

          <Reveal className="mt-14 rounded-[2rem] bg-paper px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
            {/* Vault hub */}
            <div className="flex justify-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-navy-900 text-gold-400 shadow-[0_0_0_10px_rgba(0,73,156,0.08),0_0_0_22px_rgba(0,73,156,0.05)]">
                <Lock aria-hidden="true" className="h-9 w-9" strokeWidth={1.75} />
              </div>
            </div>

            {/* Connectors (desktop) */}
            <div aria-hidden="true" className="hidden lg:block">
              <div className="mx-auto mt-8 h-10 w-px bg-brand-300" />
              {/* Spans first to last card centre: 12.5% minus 3/8 of the 24px grid gap */}
              <div className="mx-[calc(12.5%-9px)] h-px bg-brand-300" />
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:gap-6">
              {connectedProducts.map((product) => (
                <div key={product.name} className="flex flex-col items-center">
                  <div aria-hidden="true" className="hidden h-10 w-px bg-brand-300 lg:block" />
                  <div className="w-full rounded-2xl bg-white p-6 text-center ring-1 ring-slate-200/70">
                    <IconBadge icon={product.icon} className="mx-auto" />
                    <h5 className="mt-4 font-display font-bold text-navy-900">{product.name}</h5>
                    <p className="mt-1 text-sm text-slate-600">{product.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      <Lock aria-hidden="true" className="h-3 w-3" />
                      Secure Connection
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-3xl text-center leading-relaxed text-slate-600">
              All Clic products connect TO your vault via encrypted channels. You control what data each app can access,
              when they can access it, and how they can use it. Your AI learns from everything while keeping your data completely private.
            </p>
          </Reveal>
        </div>

        {/* Security Section */}
        <div className={blockSpacing}>
          <Reveal>
            <SectionHeader
              level={3}
              title={
                <StoryTitle
                  onClick={() => setIsPatentModalOpen(true)}
                  title="View Patent Document: Secure Private Portable Vault Container"
                >
                  Patented Quantum Security*
                </StoryTitle>
              }
              description="Your vault is protected by the most advanced security technology available"
            />
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {securityFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 2) * 0.06} className="flex gap-5 border-t border-slate-200 py-8">
                <IconBadge icon={feature.icon} tone="gold" />
                <div>
                  <h4 className="font-display text-lg font-bold text-navy-900">{feature.title}</h4>
                  <p className="mt-2 leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Beta Notice */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="mx-auto max-w-4xl text-center text-sm italic leading-relaxed text-slate-500">
            *The Clic Data Privacy Vault is a CLIX Premium value added product offered in partnership with <a href="https://www.zbandit.com/pryvaz" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-600">zBANDIT PRYVAZ</a>. It is currently in beta testing and final pricing (in CLIX) and public launch date will be announced soon.
          </p>
        </div>
      </Container>

      {/* Patent Modal */}
      <PatentModal
        isOpen={isPatentModalOpen}
        onClose={() => setIsPatentModalOpen(false)}
      />
    </div>
  );
};

export default PrivacySectionEnhanced;
