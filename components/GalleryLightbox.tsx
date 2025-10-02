"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
  title?: string;
}

export default function GalleryLightbox({ images, title }: GalleryLightboxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback((idx: number) => setOpenIndex(idx), []);
  const close = useCallback(() => setOpenIndex(null), []);

  const next = useCallback(() => {
    setOpenIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  const prev = useCallback(() => {
    setOpenIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  // Keyboard handlers
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => open(idx)}
            className="relative h-56 rounded-lg overflow-hidden shadow focus:outline-none focus:ring-2 focus:ring-gold-600"
            aria-label={`Open ${title || "image"} ${idx + 1}`}
          >
            <Image src={img} alt={`${title || "Image"} ${idx + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              className="absolute top-2 right-2 z-20 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
              onClick={close}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
                onClick={prev}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
                onClick={next}
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}

            {/* Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={images[openIndex]}
                alt={`${title || "Image"} ${openIndex + 1}`}
                fill
                className="object-contain pointer-events-none"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {openIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
