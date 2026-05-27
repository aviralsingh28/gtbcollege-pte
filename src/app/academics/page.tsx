"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, FileText, BookOpen, FileCheck, Gift } from "lucide-react";

export default function AcademicsPage() {
  const academicOptions = [
    {
      title: "Courses & Fees",
      description: "Explore our comprehensive course offerings with detailed fee structures for regular and private programs.",
      icon: BookOpen,
      href: "/academics/courses-and-fee",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Admissions",
      description: "Learn about eligibility criteria and our simple admission process to join GTB College.",
      icon: FileCheck,
      href: "/academics/admission",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Scholarships",
      description: "Discover available scholarship opportunities and financial aid programs for deserving students.",
      icon: Gift,
      href: "/academics/scholarship",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
          alt="Library"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/87" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">
            Programs We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Academics
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Explore our academic programs designed to provide quality education and professional growth.
          </p>
        </div>
      </section>

      {/* Affiliation Bar */}
      <section className="bg-[#c9a227] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-[#0f2557] text-xs font-semibold">
          <div className="flex items-center gap-2">
            <Award size={14} /> Affiliated: ABVV
          </div>
          <div className="flex items-center gap-2">
            <FileText size={14} /> College Code: 233
          </div>
          <div className="flex items-center gap-2">
            <Award size={14} /> Recognised by Govt. of Chhattisgarh
          </div>
        </div>
      </section>

      {/* Academic Options */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-serif text-[#0f2557] mb-8 text-center">
            Academic Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {academicOptions.map((option, i) => {
              const Icon = option.icon;
              return (
                <Link
                  key={i}
                  href={option.href}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-8 hover:shadow-2xl hover:border-[#c9a227] transition-all duration-300 overflow-hidden relative"
                >
                  {/* Background gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 rounded-full -mr-12 -mt-12 transition-all duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${option.color} text-white mb-4`}>
                      <Icon size={24} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#0f2557] mb-2 group-hover:text-[#c9a227] transition-colors">
                      {option.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {option.description}
                    </p>
                    
                    <div className="flex items-center text-[#c9a227] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      <span>Learn More</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 md:px-8 bg-[#0f2557] text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
          Choose a topic above to explore more or apply now to join GTB College.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/academics/admission"
            className="px-7 py-3 bg-[#c9a227] text-[#0f2557] font-bold rounded-lg hover:bg-[#e8c44a] transition"
          >
            Start Application
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition border border-white"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
