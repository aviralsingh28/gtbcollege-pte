"use client";

import Image from "next/image";
import Link from "next/link";

export default function SitemapPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"
          alt="Sitemap"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/87" />

        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">
            Navigation
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Sitemap
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Easily navigate through all pages of GTB College website.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4 md:px-8 bg-cream min-h-[60vh]">
        <div className="max-w-5xl mx-auto space-y-10 text-gray-800">

          {/* Home */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Main</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact Us</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">About Us</h2>
            <ul className="space-y-2 pl-4">
              <li><Link href="/about" className="hover:text-gold">Overview</Link></li>
              <li><Link href="/about/introduction" className="hover:text-gold">Introduction</Link></li>
              <li><Link href="/about/directors-desk" className="hover:text-gold">Director's Desk</Link></li>
              <li><Link href="/about/principals-desk" className="hover:text-gold">Principal's Desk</Link></li>
              <li><Link href="/about/vision-mission" className="hover:text-gold">Vision & Mission</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Academics</h2>
            <ul className="space-y-2 pl-4">
              <li><Link href="/academics" className="hover:text-gold">Overview</Link></li>
              <li><Link href="/academics/courses-and-fee" className="hover:text-gold">Courses & Fees</Link></li>
              <li><Link href="/academics/admission" className="hover:text-gold">Admissions</Link></li>
              <li><Link href="/academics/scholarship" className="hover:text-gold">Scholarships</Link></li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Other Pages</h2>
            <ul className="space-y-2 pl-4">
              <li><Link href="/faculty" className="hover:text-gold">Faculty</Link></li>
              <li><Link href="/infrastructure" className="hover:text-gold">Infrastructure</Link></li>
              <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Legal</h2>
            <ul className="space-y-2 pl-4">
              <li><Link href="/terms&condition" className="hover:text-gold">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link></li>
              <li><Link href="/sitemap" className="hover:text-gold">Sitemap</Link></li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}