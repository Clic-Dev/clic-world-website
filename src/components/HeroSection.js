import React from 'react';

const HeroSection = ({ clixPriceUSD, clixPriceXLM, xlmToUSD, scrollToSection }) => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 min-h-screen flex items-center relative overflow-hidden pt-32">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Content - 3/5 width */}
          <div className="lg:col-span-3 text-white space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                We're not disrupting finance.<br />
                <span className="text-white">We're upgrading it.</span>
              </h1>
              
              <div className="text-white/90 leading-relaxed space-y-4">
                <p className="text-xl md:text-2xl">
                  Money re-centralised where it belongs – in the hands of those who build real value. 
                  Community-owned finance powered by responsible AI and the blockchain.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - 2/5 width */}
          <div className="lg:col-span-2 relative">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={`${process.env.PUBLIC_URL}/community-group.jpg`} 
                alt="Community collaboration and digital engagement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-lg font-semibold mb-1">Building Tomorrow</div>
                <div className="text-sm opacity-90">Community-Focussed Finance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
