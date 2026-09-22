import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CLUB_INFO } from '@/lib/footballData';

export const metadata: Metadata = {
  title: `Privacy Policy | ${CLUB_INFO.name}`,
  description: `Privacy and data protection policy for players, guardians, scouts, and supporters of ${CLUB_INFO.name} (BKFA).`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-bkfa-orange">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold">Privacy Policy</span>
          </nav>

          {/* Header */}
          <div className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-bkfa-lemonDark">Data Protection</span>
            <h1 className="font-display text-3xl sm:text-5xl font-black text-bkfa-navy mt-1">
              Privacy <span className="text-bkfa-orange">Policy</span>
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Last updated: March 2026 • Blessed KAA Football Academy (BKFA), Jos, Nigeria.
            </p>
          </div>

          {/* Body content */}
          <article className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">1. Information We Collect</h2>
              <p>
                <strong>Blessed KAA Football Academy (BKFA)</strong> respects the privacy of our players, parents, guardians, scouts, and website visitors. We collect information necessary to facilitate academy operations, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Trial Registration Information:</strong> Full name, date of birth/age, gender, playing position, telephone number, email, and city of residence.</li>
                <li><strong>Guardian Details:</strong> Emergency contact information and parental consent for minor athletes (U13, U15, U17).</li>
                <li><strong>General Inquiries:</strong> Name, contact details, and messages submitted through our contact form.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">2. How We Use Your Data</h2>
              <p>
                The information collected is used exclusively for legitimate club operations:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Coordinating trial dates, screenings, and squad training in Jos.</li>
                <li>Communicating match schedules, tournament invitations, and academy notices.</li>
                <li>Managing player profiles, match performance tracking, and scouting dossiers.</li>
                <li>Responding promptly to media, sponsor, and scout inquiries.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">3. Youth Safeguarding & Consent</h2>
              <p>
                We are committed to the protection and safeguarding of all young athletes in our youth academies. Personal contact numbers of underage players are kept confidential and handled in accordance with child protection standards.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">4. Third-Party Sharing</h2>
              <p>
                Blessed KAA Football Academy does not sell, rent, or trade personal information to commercial third parties. Data is shared with football governing bodies (e.g., Plateau State Football Association, tournament organizers) solely for official player licensing and match accreditations.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-4">
              <h2 className="font-display text-xl font-bold text-bkfa-navy">5. Data Inquiries & Corrections</h2>
              <p>
                To request updates, corrections, or deletion of your trial submission data, contact our data coordinator:
              </p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm">
                <p><strong>Email:</strong> {CLUB_INFO.email}</p>
                <p><strong>Location:</strong> Science Day School Arena, Cele Bridge, Jos, Plateau State, Nigeria</p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
