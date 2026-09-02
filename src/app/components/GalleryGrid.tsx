"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib/content";

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? galleryImages[active] : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className="mb-4 block w-full overflow-hidden rounded-2xl bg-brown/10"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="h-auto w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 p-4"
          onClick={() => setActive(null)}
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={1400}
            height={1000}
            className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </>
  );
}
