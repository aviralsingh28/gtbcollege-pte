"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
}

const images: GalleryItem[] = [
  { id: 1, src: "/gallery/1 _1_.jpg" },
  { id: 2, src: "/gallery/1 _2_.jpg" },
  { id: 3, src: "/gallery/1 _3_.jpg" },
  { id: 4, src: "/gallery/1 _4_.jpg" },
  { id: 5, src: "/gallery/1 _5_.jpg" },
  { id: 6, src: "/gallery/1 _7_.jpg" },
  { id: 7, src: "/gallery/1 _8_.jpg" },
  { id: 8, src: "/gallery/1 _9_.jpg" },
  { id: 9, src: "/gallery/1 _10_.jpg" },
  { id: 10, src: "/gallery/1 _11_.jpg" },
  { id: 11, src: "/gallery/1 _12_.jpg" },
  { id: 12, src: "/gallery/1 _13_.jpg" },
  { id: 13, src: "/gallery/1 _14_.jpg" },
  { id: 14, src: "/gallery/1 _15_.jpg" },
  { id: 15, src: "/gallery/1 _16_.jpg" },
  { id: 16, src: "/gallery/1 _17_.jpg" },
  { id: 17, src: "/gallery/1 _18_.jpg" },
  { id: 18, src: "/gallery/1 _19_.jpg" },
  { id: 19, src: "/gallery/1 _20_.jpg" },
  { id: 20, src: "/gallery/1 _21_.jpg" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  return (
    <>
      {/* Header WITH IMAGE */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
          alt="Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/87" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">Campus Life</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4"> Gallery</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
             A glimpse of life at GTB College — campus, events, and moments.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4 md:px-8 bg-cream min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img)}
                className="relative aspect-square overflow-hidden rounded-md group"
              >
                <Image
                  src={img.src}
                  alt="Gallery image"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                  <ZoomIn
                    className="text-white opacity-0 group-hover:opacity-100 transition"
                    size={28}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <X className="text-white" />
          </button>

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt="Full image"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
}