import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

// Shared layout primitives for the home page redesign

export const sectionPadding = 'py-24 sm:py-28 lg:py-32';
export const blockSpacing = 'mt-24 lg:mt-32';

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>
    {children}
  </div>
);

// Small uppercase label above a heading; the triangle echoes the CLIC logo mark
export const Eyebrow = ({ children, dark = false, className = '' }) => (
  <p
    className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${
      dark ? 'text-gold-400' : 'text-brand-600'
    } ${className}`}
  >
    <span
      aria-hidden="true"
      className={`h-0 w-0 border-y-[4px] border-l-[7px] border-y-transparent ${
        dark ? 'border-l-gold-400' : 'border-l-[#D00000]'
      }`}
    />
    {children}
  </p>
);

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  dark = false,
  align = 'center',
  level = 2,
  className = ''
}) => {
  const Heading = level === 2 ? 'h2' : 'h3';
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <Heading
        className={`font-display font-bold tracking-tight ${eyebrow ? 'mt-5' : ''} ${
          level === 2
            ? 'text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]'
            : 'text-2xl sm:text-3xl'
        } ${dark ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-5 leading-relaxed ${level === 2 ? 'text-lg sm:text-xl' : 'text-lg'} ${
            dark ? 'text-white/70' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

// A heading that opens a related story (blog post, white paper, patent)
export const StoryTitle = ({ onClick, href, children, dark = false, title }) => {
  const className = `group underline decoration-2 underline-offset-[0.22em] transition-colors [text-align:inherit] ${
    dark
      ? 'decoration-white/25 hover:decoration-gold-400'
      : 'decoration-brand-200 hover:decoration-brand-600'
  }`;
  const icon = (
    <ArrowUpRight
      aria-hidden="true"
      className="ml-1.5 inline-block h-[0.75em] w-[0.75em] opacity-50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
    />
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} title={title}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className} title={title}>
      {children}
      {icon}
    </button>
  );
};

const iconTones = {
  brand: 'bg-brand-50 text-brand-600',
  gold: 'bg-gold-400/15 text-gold-600',
  white: 'bg-white text-brand-600 ring-1 ring-slate-200',
  dark: 'bg-white/[0.07] text-gold-400 ring-1 ring-white/10'
};

const iconSizes = {
  md: ['h-11 w-11 rounded-xl', 'h-5 w-5'],
  lg: ['h-14 w-14 rounded-2xl', 'h-6 w-6']
};

export const IconBadge = ({ icon: Icon, tone = 'brand', size = 'md', className = '' }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center ${iconSizes[size][0]} ${iconTones[tone]} ${className}`}
  >
    <Icon aria-hidden="true" strokeWidth={1.75} className={iconSizes[size][1]} />
  </span>
);

const buttonVariants = {
  gold: 'bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-[0_10px_30px_-10px_rgba(224,162,27,0.7)]',
  navy: 'bg-navy-900 text-white hover:bg-navy-800',
  brand: 'bg-brand-600 text-white hover:bg-brand-700',
  white: 'bg-white text-navy-900 hover:bg-brand-50',
  ghost: 'text-navy-900 ring-1 ring-inset ring-slate-300 hover:bg-white hover:ring-slate-400',
  ghostDark: 'text-white ring-1 ring-inset ring-white/25 hover:bg-white/10'
};

export const buttonClass = (variant = 'navy', extra = '') =>
  `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${buttonVariants[variant]} ${extra}`;

// Fades content up as it scrolls into view (skipped for reduced-motion users)
export const Reveal = ({ as: Tag = 'div', children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      } ${className}`}
    >
      {children}
    </Tag>
  );
};
