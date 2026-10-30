import React, { useEffect, useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import { Container } from './ui';

const navItems = [
  { id: 'about', label: 'The Movement' },
  { id: 'clix', label: 'CLIX' },
  { id: 'products', label: 'Solutions' },
  { id: 'clicbrain', label: 'ClicBrain' },
  { id: 'pryvaz', label: 'Privacy Vault' },
  { id: 'blog', label: 'Blog' },
  { id: 'projects', label: 'Projects' },
  { id: 'partners', label: 'Partners' },
  { id: 'contact', label: 'Connect' }
];

const Navigation = ({ clixPriceUSD, clixPriceXLM, xlmToUSD, activeSection, scrollToSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_30px_-18px_rgba(6,15,36,0.35)]' : ''
      }`}
    >
      <div data-site-header>
        {/* Top Bar */}
        <div className="bg-navy-950 text-white/70">
          <Container className="flex h-9 items-center justify-between gap-6 text-xs">
            <div className="flex min-w-0 items-center gap-4">
              <span className="flex shrink-0 items-center gap-2">
                <img
                  src={`${process.env.PUBLIC_URL}/clix-logo-v2.png`}
                  alt="CLIX Token"
                  className="h-4 w-4 rounded-sm"
                />
                <span className="hidden sm:inline">CLIX:</span>
                <span className="font-semibold tabular-nums text-white">
                  {clixPriceUSD ? `${clixPriceUSD}` : 'N/A'}
                </span>
              </span>
              <span className="hidden shrink-0 items-center gap-1.5 tabular-nums text-gold-300 md:flex">
                <Sparkles aria-hidden="true" className="h-3 w-3" />
                {clixPriceXLM ? `${clixPriceXLM} XLM` : 'N/A'}
              </span>
              {xlmToUSD && (
                <span className="hidden shrink-0 tabular-nums text-white/45 lg:inline">
                  (XLM: ${xlmToUSD})
                </span>
              )}
              <span aria-hidden="true" className="hidden h-3 w-px shrink-0 bg-white/20 sm:block" />
              <span className="hidden truncate sm:block">
                Clic.World | Where Sound Money Meets Community Power
              </span>
            </div>
            <span className="hidden shrink-0 md:block">The Future of Digital | Is Human</span>
          </Container>
        </div>

        {/* Main Navigation */}
        <div
          className={`border-b bg-white/95 backdrop-blur-md transition-colors ${
            scrolled || menuOpen ? 'border-slate-200' : 'border-transparent'
          }`}
        >
          <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
            <button
              type="button"
              onClick={() => goTo('home')}
              className="shrink-0 transition-opacity hover:opacity-80"
              aria-label="Clic.World home"
            >
              <img
                src={`${process.env.PUBLIC_URL}/clic-logo-mark.png`}
                alt="Clic.World Logo"
                className="h-8 w-auto lg:h-9"
              />
            </button>

            <div className="hidden items-center gap-0.5 lg:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`rounded-full px-2.5 py-2 text-sm font-medium transition-colors xl:px-3.5 ${
                      isActive
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-slate-100 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </Container>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-100px)] overflow-y-auto border-b border-slate-200 bg-white lg:hidden"
        >
          <Container className="py-4">
            <div className="grid gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 space-y-1 border-t border-slate-200 px-4 pt-4 text-xs text-slate-500 md:hidden">
              <p className="sm:hidden">Clic.World | Where Sound Money Meets Community Power</p>
              <p>The Future of Digital | Is Human</p>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
