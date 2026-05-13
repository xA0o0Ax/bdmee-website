import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Genomics', href: '#genomics' },
  { label: 'Pharmacy', href: '#pharmacy' },
  { label: 'Mission', href: '#mission' },
  { label: 'CATAPHRACT', href: '#cataphract' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bd-dark/92 backdrop-blur-2xl border-b border-bd-border'
          : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
            <path d="M14 2L24.5 8V20L14 26L3.5 20V8L14 2Z" stroke="#00ff87" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="14" r="4" stroke="#00ff87" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="14" r="1.5" fill="#00ff87" />
          </svg>
          <span className="font-body text-xs uppercase tracking-[0.18em] text-bd-text/70">
            BDMEE
          </span>
        </div>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-1.5 rounded-full font-body text-xs uppercase tracking-[0.08em] transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'bg-bd-accent/10 text-bd-accent border border-bd-accent/30'
                  : 'text-bd-text/50 border border-transparent hover:text-bd-text/80 hover:border-bd-border'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToSection('#proposal')}
          className="pill-button text-xs py-2 px-5"
        >
          View Proposal
        </button>
      </div>
    </nav>
  );
}
