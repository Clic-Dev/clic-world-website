import React from 'react';
import { Briefcase, Building2, Home } from 'lucide-react';
import { Container, IconBadge, Reveal, SectionHeader, buttonClass, sectionPadding } from './ui';

const audiences = [
  {
    icon: Home,
    title: 'For Communities',
    text: 'Start your Community Social Bank and keep wealth in your community',
    action: 'Launch Community Bank'
  },
  {
    icon: Briefcase,
    title: 'For Entrepreneurs',
    text: 'Access business tools and CLIX-powered commerce solutions',
    action: 'Start Your Business'
  },
  {
    icon: Building2,
    title: 'For Enterprises',
    text: 'License technology and join the cooperative finance revolution',
    action: 'Enterprise Solutions'
  }
];

const ContactSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-700 to-navy-900 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/15 blur-3xl" />
      </div>

      <Container className={`relative ${sectionPadding}`}>
        <Reveal>
          <SectionHeader
            dark
            eyebrow="Connect"
            title="Ready to Join the Movement?"
            description="Whether you're a community leader, entrepreneur, or dreamer—there's a place for you in the Clic.World ecosystem."
          />
        </Reveal>

        <Reveal className="mt-16 lg:mt-20">
          <div className="grid overflow-hidden rounded-[2rem] bg-white/[0.04] ring-1 ring-white/10 md:grid-cols-3 md:divide-x md:divide-white/10">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className={`flex flex-col items-center px-8 py-12 text-center lg:px-10 ${
                  index > 0 ? 'border-t border-white/10 md:border-t-0' : ''
                }`}
              >
                <IconBadge icon={audience.icon} tone="dark" size="lg" />
                <h3 className="mt-6 font-display text-xl font-bold text-gold-400">{audience.title}</h3>
                <p className="mt-3 flex-grow leading-relaxed text-white/70">{audience.text}</p>
                <button type="button" className={buttonClass('gold', 'mt-8')}>
                  {audience.action}
                </button>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
};

export default ContactSection;
