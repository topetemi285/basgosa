import Image from "next/image";
import Link from "next/link";
import { nav, site, utilityNav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-20 bg-brown-deep text-cream">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={52}
              height={52}
              className="h-auto w-auto"
            />
            <div>
              <p className="font-display text-2xl">{site.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{site.motto}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-orange-pale/80">
            {site.fullName} is a community of old students committed to faith, character, and the
            continued progress of Baptist Science Grammar School, Jos.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Alumni</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            {utilityNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-orange">
                {site.email}
              </a>
            </li>
            <li className="text-orange-pale/70">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-3 px-5 py-5 text-xs text-orange-pale/70 sm:flex-row sm:items-center sm:px-8">
          <p>© {site.year} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
