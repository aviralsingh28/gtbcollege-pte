"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, FileText } from "lucide-react";

export default function AdmissionPage() {
  return (
    <>
      {/* Header (UNCHANGED) */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
          alt="Admission"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/87" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">
            Join Us
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Admissions
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Apply for admission to GTB College and start your journey towards success.
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

      {/* DOCUMENT REQUIREMENTS TABLE */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-serif text-[#0f2557] mb-10 text-center">
            Documents Required for Admission
          </h2>

          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow">
            <table className="w-full border-collapse text-sm">
              
              {/* Header */}
              <thead>
                <tr className="bg-[#0f2557] text-white uppercase tracking-wider text-xs">
                  <th className="px-6 py-4 text-left">B.Sc CS I / B.C.A</th>
                  <th className="px-6 py-4 text-left">D.C.A</th>
                  <th className="px-6 py-4 text-left">P.G.D.C.A</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y">

                {[
                  ["10th (Result)", "10th (Result)", "10th (Result)"],
                  ["12th (Result)", "12th (Result)", "12th (Result)"],
                  ["TC/CC", "TC/CC", "TC/CC"],
                  ["Migration (If required)", "Migration (If required)", "Migration (If required)"],
                  ["Eligibility (If required)", "Eligibility (If required)", "Eligibility (If required)"],
                  ["Enrollment (If required)", "Enrollment", "Enrollment"],
                  ["1st year marksheet", "Domicile", "Domicile"],
                  ["2nd year marksheet", "Aadhaar", "Aadhaar"],
                  ["Final year marksheet", "Caste Certificate (If required)", "Caste Certificate (If required)"],
                  ["Domicile", "Income proof (If required)", "Income proof (If required)"],
                  ["Aadhaar", "Passport size photo (2)", "Passport size photo (2)"],
                  ["Caste Certificate (If required)", "", ""],
                  ["Income proof (If required)", "", ""],
                  ["Passport size photo (2)", "", ""],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {row.map((cell, idx) => (
                      <td key={idx} className="px-6 py-3 text-gray-700">
                        {cell || "-"}
                      </td>
                    ))}
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 md:px-8 bg-[#0f2557] text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Ready to Apply?
        </h2>
        <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
          Visit the college with required documents and complete your admission process.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="px-7 py-3 bg-[#c9a227] text-[#0f2557] font-bold rounded-lg hover:bg-[#e8c44a] transition"
          >
            Contact Office
          </Link>
        </div>
      </section>
    </>
  );
}