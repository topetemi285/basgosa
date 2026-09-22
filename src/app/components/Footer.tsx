'use client';

import React from 'react';
import Link from 'next/link';
import ClubLogo from './ClubLogo';
import { CLUB_INFO } from '@/lib/footballData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-bkfa-navy pt-16 pb-12 text-slate-300">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-slate-800">
          {/* Col 1: Club Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <ClubLogo size="xl" isLightMode={false} />
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-sm">
              {CLUB_INFO.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLUB_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white hover:border-bkfa-orange hover:text-bkfa-orange transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <span className="text-xs text-slate-300 font-medium">Follow <strong className="text-bkfa-lemon">{CLUB_INFO.instagramHandle}</strong></span>
            </div>
          </div>

          {/* Col 2: Squad Categories */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Squad Categories</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/squads" className="hover:text-bkfa-lemon transition-colors">
                  ⚽ Men's Senior Team
                </Link>
              </li>
              <li>
                <Link href="/squads" className="hover:text-bkfa-orange transition-colors">
                  ⚽ Women's Team (Queens)
                </Link>
              </li>
              <li>
                <Link href="/squads" className="hover:text-bkfa-lemon transition-colors">
                  ⚡ Boys Youth Academy (U17/U19)
                </Link>
              </li>
              <li>
                <Link href="/squads" className="hover:text-bkfa-orange transition-colors">
                  ⚡ Girls Youth Academy (U17/U19)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Legal */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Legal & Info</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-bkfa-lemon transition-colors">Home Portal</Link></li>
              <li><Link href="/fixtures" className="hover:text-bkfa-lemon transition-colors">Fixtures & Results</Link></li>
              <li><Link href="/academy" className="hover:text-bkfa-lemon transition-colors">Award Night Gala</Link></li>
              <li><Link href="/terms" className="hover:text-bkfa-orange font-semibold transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-bkfa-orange font-semibold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-bkfa-lemon transition-colors">Contact Office</Link></li>
            </ul>
          </div>

          {/* Col 4: Location & Contact in Jos */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Home Grounds & Location</h4>
            <p className="text-xs text-slate-300">
              📍 <strong>Main Arena:</strong> Science Day School Hall & Pitch, Cele Bridge, Jos, Plateau State, Nigeria
            </p>
            <p className="text-xs text-slate-300">
              🏟️ <strong>Match Stadium:</strong> Rwang Pam Township Stadium, Jos
            </p>
            <p className="text-xs text-slate-300">
              ✉️ {CLUB_INFO.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar with Copyright, Terms and Privacy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {CLUB_INFO.name} (BKFA). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-bkfa-orange transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-bkfa-orange transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
