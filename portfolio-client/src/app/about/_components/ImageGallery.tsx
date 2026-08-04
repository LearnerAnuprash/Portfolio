"use client";

import Image, { StaticImageData } from "next/image";
import painting from "@/shared/images/painting.jpg";
import trek from "@/shared/images/trek.jpg";
import coffee from "@/shared/images/coffee.jpg";

type GalleryImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
  span?: string;
};

const IMAGES: GalleryImage[] = [
  {
    src: coffee,
    alt: "Coffee",
    caption: "Coffee",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: trek,
    alt: "Nature",
    caption: "Nature",
  },
  {
    src: painting,
    alt: "Painting",
    caption: "Painting",
  },
];

export function ImageGallery() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid grid-cols-1 gap-4 auto-rows-[160px] sm:gap-5 md:grid-cols-3 md:auto-rows-[200px]">
        {IMAGES.map((image) => (
          <div
            key={image.alt}
            className={`relative bg-slate-100 rounded-2xl overflow-hidden group cursor-pointer ring-1 ring-slate-200 ${image.span}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-scale-down transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
              <span className="text-sm font-semibold uppercase tracking-wide text-white">
                {image.caption}
              </span>
              <div className="mt-2 h-0.5 w-8 rounded-full bg-teal-400 transition-all duration-500 group-hover:w-14" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
