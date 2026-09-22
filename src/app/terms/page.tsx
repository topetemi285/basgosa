import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CLUB_INFO } from '@/lib/footballData';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${CLUB_INFO.name}`,
  description: `Official terms, trial registration rules, and academy policies for ${CLUB_INFO.name} (BKFA).`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-bkfa-orange">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold">Terms & Conditions</span>
          </nav>

          {/* Header */}
          <div className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-bkfa-orange">Legal Policy</span>
            <h1 className="font-display text-3xl sm:text-5xl font-black text-bkfa-navy mt-1">
              Terms & <span className="text-bkfa-orange">Conditions</span>
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Last updated: March 2026 • Blessed KAA Football Academy (BKFA), Jos, Plateau State.
            </p>
          </div>

          {/* Body content */}
          <article className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">1. Acceptance of Terms</h2>
              <p>
                Welcome to the official digital portal of <strong>Blessed KAA Football Academy (BKFA)</strong>, located in Jos, Plateau State, Nigeria. By accessing, browsing, or registering through this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this platform.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">2. Academy Trials & Player Registration</h2>
              <p>
                Submission of a trial application via this website does not guarantee automatic admission or squad placement into Blessed KAA FA teams (Men's First Team, Women's Queens, or Youth Academy). 
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>All trial participants must provide accurate personal and medical information during registration.</li>
                <li>Players under 18 years of age must have parent or legal guardian consent prior to attending physical screening sessions at the Science Day School Pitch, Cele Bridge, Jos.</li>
                <li>Participants are responsible for their individual training footwear, shin guards, and physical readiness.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">3. Code of Conduct & Sports Discipline</h2>
              <p>
                In alignment with BKFA's motto of <em>"{CLUB_INFO.motto}"</em>, all academy players, coaches, staff, and trial candidates are held to the highest standards of sportsmanship, respect, and discipline. Discrimination, violent conduct, or unsportsmanlike behavior will result in immediate disqualification or expulsion from academy programs.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">4. Intellectual Property & Media Rights</h2>
              <p>
                All team logos, crests, graphics, match statistics, player biographies, photographs, and video highlights displayed on this website are the intellectual property of Blessed KAA Football Academy or utilized with permission. Unauthorized reproduction, scraping, or commercial exploitation is prohibited without prior written consent.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">5. Scouting & Player Transfers</h2>
              <p>
                Official inquiries from professional football clubs, licensed FIFA intermediaries, and scouts regarding our male or female squad players must be submitted formally through our secretariat at <strong className="text-bkfa-navy">{CLUB_INFO.email}</strong> or at our secretariat in Jos.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">6. Contact & Legal Inquiries</h2>
              <p>
                If you have questions regarding these terms, contact our administrative office:
              </p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm">
                <p><strong>Office:</strong> Blessed KAA Football Academy Secretariat</p>
                <p><strong>Address:</strong> Science Day School Arena, Cele Bridge, Jos, Plateau State, Nigeria</p>
                <p><strong>Email:</strong> {CLUB_INFO.email}</p>
                <p><strong>Official Instagram:</strong> {CLUB_INFO.instagramHandle}</p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
