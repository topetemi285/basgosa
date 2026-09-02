"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Enter your name" },
  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "Your message subject" },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "BASGOSA enquiry");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold/40 bg-cream p-8 text-brown">
        <p className="font-display text-2xl">Message ready</p>
        <p className="mt-3 text-sm leading-relaxed text-brown-soft">
          Your email app should open addressed to {site.email}. If it does not, write to us directly
          at that address.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {fields.map((field) => (
        <label key={field.name} className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-brown-soft">{field.label}*</span>
          <input
            required
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            className="mt-2 w-full rounded-2xl border border-brown/15 bg-cream px-4 py-3 outline-none ring-orange/30 transition focus:ring-2"
          />
        </label>
      ))}
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-brown-soft">Your Message*</span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Your message here"
          className="mt-2 w-full rounded-2xl border border-brown/15 bg-cream px-4 py-3 outline-none ring-orange/30 transition focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
      >
        Send Message
      </button>
    </form>
  );
}
