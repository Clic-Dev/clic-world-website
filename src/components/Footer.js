import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './ui';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Clic-Dev',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/clic-world',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/clicyourworld',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
  },
  {
    label: 'Email',
    href: 'mailto:talk2us@clic.world',
    path: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z'
  }
];

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="py-14">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <Link to="/" className="transition-opacity hover:opacity-80" aria-label="Clic.World home">
            <img
              src={`${process.env.PUBLIC_URL}/clic-logo-white.png`}
              alt="Clic.World Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Privacy Policy and Terms of Service Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="h-4 w-px bg-white/20" />
            <Link
              to="/terms-of-service"
              className="text-white/60 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/60 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          &copy; 2016 - 2025 Clic.World. Banking on trust - building tomorrow
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
