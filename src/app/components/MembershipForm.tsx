"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

export default function MembershipForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Set / Year: ${data.get("set")}`,
      `Phone: ${data.get("phone")}`,
      "",
      String(data.get("note") || ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Alumni membership")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-cream p-8 shadow-lift">
        <p className="font-display text-2xl text-brown">Thank you</p>
        <p className="mt-3 text-brown-soft">Your membership enquiry is ready to send via {site.email}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-cream p-8 shadow-lift">
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-brown-soft">Full name*</span>
        <input required name="name" className="mt-2 w-full rounded-2xl border border-brown/15 px-4 py-3" />
      </label>
      <label className="mt-4 block">
        <span className="text-xs uppercase tracking-[0.18em] text-brown-soft">Email*</span>
        <input required type="email" name="email" className="mt-2 w-full rounded-2xl border border-brown/15 px-4 py-3" />
      </label>
      <label className="mt-4 block">
        <span className="text-xs uppercase tracking-[0.18em] text-brown-soft">Set / year of graduation</span>
        <input name="set" className="mt-2 w-full rounded-2xl border border-brown/15 px-4 py-3" />
      </label>
      <label className="mt-4 block">
        <span className="text-xs uppercase tracking-[0.18em] text-brown-soft">Phone</span>
        <input name="phone" className="mt-2 w-full rounded-2xl border border-brown/15 px-4 py-3" />
      </label>
      <label className="mt-4 block">
        <span className="text-xs uppercase tracking-[0.18em] text-brown-soft">Note</span>
        <textarea name="note" rows={4} className="mt-2 w-full rounded-2xl border border-brown/15 px-4 py-3" />
      </label>
      <button className="mt-6 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white">
        Get started
      </button>
    </form>
  );
}
