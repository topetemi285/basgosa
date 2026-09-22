'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ClubLogo from './ClubLogo';
import { CLUB_INFO } from '@/lib/footballData';

interface NavbarProps {
  onOpenTryouts?: () => void;
}

export default function Navbar({ onOpenTryouts }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Squads', href: '/squads' },
    { name: 'Fixtures & Results', href: '/fixtures' },
    { name: 'Academy & Awards', href: '/academy' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all shadow-xs">
      {/* Top micro bar with club motto and social in deep navy */}
      <div className="hidden border-b border-slate-100 bg-bkfa-navy px-4 py-1.5 text-xs text-slate-300 sm:block">
        <div className="mx-auto flex max-w-site items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-bkfa-lemon">
              <span className="inline-block h-2 w-2 rounded-full bg-bkfa-lemon animate-pulse" />
              {CLUB_INFO.motto}
            </span>
            <span className="text-slate-600">•</span>
            <span>Jos, Plateau State, Nigeria</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={CLUB_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-200 transition-colors hover:text-bkfa-orange"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{CLUB_INFO.instagramHandle}</span>
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-bkfa-lemon font-mono font-semibold">Senior & Youth Academy</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-site items-center justify-between px-4 py-3 sm:px-6">
        <ClubLogo size="md" isLightMode={true} />

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-bkfa-navy text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-bkfa-orange'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Trial Registration */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onOpenTryouts}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-bkfa-orange to-bkfa-orangeDeep px-5 py-2 text-sm font-bold text-white shadow-glowOrange transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-display tracking-wide uppercase text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
              Join Tryouts
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-5 py-5 md:hidden shadow-lg">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${
                  pathname === link.href
                    ? 'bg-bkfa-navy text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-bkfa-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenTryouts) onOpenTryouts();
                }}
                className="w-full rounded-full bg-gradient-to-r from-bkfa-orange to-bkfa-orangeDeep py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-glowOrange"
              >
                Join Academy Trials (Male & Female)
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
