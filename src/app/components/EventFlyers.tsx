import Image from "next/image";
import { events } from "@/lib/content";

export default function EventFlyers() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {events.map((event) => (
        <article key={event.title} className="overflow-hidden rounded-[1.6rem] bg-cream shadow-lift">
          <Image
            src={event.image}
            alt={`${event.title} flyer`}
            width={900}
            height={1200}
            className="h-auto w-full object-contain bg-brown-deep"
          />
          <div className="p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-orange">{event.date}</p>
            <h3 className="mt-2 font-display text-2xl text-brown">{event.title}</h3>
            <p className="mt-2 text-sm italic text-brown-soft">{event.theme}</p>
            <p className="mt-3 text-sm leading-relaxed text-brown-soft">{event.venue}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
