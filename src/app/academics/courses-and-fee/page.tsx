"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, FileText } from "lucide-react";

export default function CoursesAndFeePage() {
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
            Courses & Fees
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Explore our comprehensive courses and fee structure for all programs.
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

      {/* Regular Courses */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-serif text-[#0f2557] mb-8 text-center">
            Regular Courses & Fees
          </h2>

          <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
            <table className="w-full border-collapse">
              
              <thead>
                <tr className="bg-[#0f2557] text-white text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 text-left">Course</th>
                  <th className="px-6 py-4 text-left">Seats</th>
                  <th className="px-6 py-4 text-left">Fees (INR)</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y">
                {[
                  ["B.A.", "60", "₹ 12,000.00"],
                  ["B.COM", "30", "₹ 12,000.00"],
                  ["B.Sc (Math's)", "60", "₹ 13,000.00"],
                  ["PGDCA", "120", "₹ 18,000.00"],
                  ["DCA", "120", "₹ 14,000.00"],
                  ["PGDBM", "30", "₹ 16,000.00"],
                  ["B.C.A.", "60", "₹ 18,500.00"],
                ].map(([course, seats, fees], i) => (
                  <tr key={i} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-[#0f2557]">
                      {course}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{seats}</td>
                    <td className="px-6 py-4 text-gray-700">{fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Private Courses */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-serif text-[#0f2557] mb-8 text-center">
            Private Courses
          </h2>

          <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>• B.A.</li>
              <li>• B.COM</li>
              <li>• B.Sc (Bio / Maths)</li>
              <li>
                • M.A. (English, Hindi, Sanskrit, History, Political Science,
                Sociology, Economic, Philosophy, Public Administration)
              </li>
              <li>• M.Sc (Maths)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 md:px-8 bg-[#0f2557] text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Ready to Enroll?
        </h2>
        <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
          Admissions are open. Contact us or visit the college to apply for your preferred course.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-7 py-3 bg-[#c9a227] text-[#0f2557] font-bold rounded-lg hover:bg-[#e8c44a] transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
