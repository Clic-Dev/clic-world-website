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
              <h1 className="text-4xl font-extrabold leading-tight mb-6">
                We're not disrupting finance.<br />
                <span className="text-white">We're upgrading it.</span>
              </h1>
              
              <div className="text-white/90 leading-relaxed space-y-4">
                <p className="text-xl">
                  Money re-centralised where it belongs – in the hands of those who build real value. 
                  Community-owned finance powered by responsible AI and the blockchain, ready to serve 500 million cooperative 
                  members across Africa and the World.
                </p>
                
                <p className="text-lg">
                  We're bridging the gap between <strong className="text-white">traditional finance</strong> and <strong className="text-white">digital innovation</strong>—tokenising real assets (gold, bonds, commodities) for everyday use, while keeping communities in control of their wealth.
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
        
        {/* Detailed Information Sections */}
        <div className="mt-8 grid lg:grid-cols-5 gap-8 text-white">
          {/* How It Works - 3/5 width to align with text above */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">HOW IT WORKS:</h3>
              <div className="space-y-3 text-base">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✔</span>
                  <div><strong>Tokenized Assets</strong> – Gold, silver, and bonds traded on Stellar SDEX.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✔</span>
                  <div><strong>Spendable Yield</strong> – Earn interest on stable stores of value, then pay merchants directly.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✔</span>
                  <div><strong>Community-Powered</strong> – Community Social Banks (CSB's) like SACCOs & Stokvel groups pool funds, lend internally, and keep profits circulating locally.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✔</span>
                  <div><strong>Bank-Integrated</strong> – Seamless on/off ramps via mobile money, bank transfers, and merchant payouts.</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Differentiators - 2/5 width to align with image above */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">KEY DIFFERENTIATORS:</h3>
              <div className="space-y-3 text-base">
                <div className="flex items-start gap-3">
                  <span className="text-blue-300 font-bold">→</span>
                  <div><strong>Not DeFi Speculation</strong> – Backed by auditable real-world assets.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-300 font-bold">→</span>
                  <div><strong>Not Extraction</strong> – Profits stay with communities, not platforms.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-300 font-bold">→</span>
                  <div><strong>Not Complex</strong> – Spend gold like cash, with no technical friction.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
