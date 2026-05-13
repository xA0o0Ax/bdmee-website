import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Genomics', href: '#genomics' },
  { label: 'Pharmacy', href: '#pharmacy' },
  { label: 'Mission', href: '#mission' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bd-dark/90 backdrop-blur-xl'
          : 'mix-blend-difference'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-bd-text"
          >
            <path
              d="M14 2L24.5 8V20L14 26L3.5 20V8L14 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="14" r="1.5" fill="currentColor" />
          </svg>
          <span className="font-body text-xs uppercase tracking-[0.15em] text-bd-text">
            BDMEE
          </span>
        </div>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-5 py-2 rounded-full font-body text-xs uppercase tracking-[0.08em] transition-all duration-300 border ${
                activeSection === item.href.slice(1)
                  ? 'bg-bd-text text-bd-dark border-bd-text'
                  : 'bg-bd-surface/60 text-bd-text border-bd-border hover:bg-bd-text/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToSection('#proposal')}
          className="pill-button text-xs py-2.5 px-6"
        >
          View Proposal
        </button>
      </div>
    </nav>
  );
}
