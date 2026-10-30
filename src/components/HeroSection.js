import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container, buttonClass } from './ui';

const HeroSection = ({ clixPriceUSD, clixPriceXLM, xlmToUSD, scrollToSection }) => {
  return (
    <div className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background glow + grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand-600/40 blur-3xl" />
        <div className="absolute -bottom-56 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_30%_40%,black_20%,transparent_70%)]" />
      </div>

      <Container className="relative pb-24 pt-40 sm:pb-28 sm:pt-44 lg:pb-36 lg:pt-52">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              We're not disrupting finance.<br />
              <span className="text-gold-400">We're upgrading it.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Money re-centralised where it belongs – in the hands of those who build real value.
              Community-owned finance powered by responsible AI and the blockchain.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button type="button" onClick={() => scrollToSection('contact')} className={buttonClass('gold', 'px-7 py-3.5')}>
                Join the Movement
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => scrollToSection('clix')} className={buttonClass('ghostDark', 'px-7 py-3.5')}>
                Explore CLIX
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <figure className="relative mx-auto max-w-lg lg:max-w-none">
              <div aria-hidden="true" className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-brand-500/40 via-transparent to-gold-500/25 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/15">
                <img
                  src={`${process.env.PUBLIC_URL}/community-group.jpg`}
                  alt="Community collaboration and digital engagement"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="font-display text-lg font-bold">Building Tomorrow</div>
                  <div className="mt-1 text-sm text-white/75">Community-Focussed Finance</div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
