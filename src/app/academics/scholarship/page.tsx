"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, FileText, Gift } from "lucide-react";

export default function ScholarshipPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
          alt="Scholarship"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/87" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">
            Financial Support
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Scholarships
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            We offer various scholarships and financial aid opportunities to deserving students.
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
            <FileText size={14} /> College Code: 208
          </div>
          <div className="flex items-center gap-2">
            <Award size={14} /> Recognised by Govt. of Chhattisgarh
          </div>
        </div>
      </section>

      {/* Apply Section */}
<section className="py-16 px-4 md:px-8 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">
    
    <h2 className="text-3xl md:text-4xl font-serif text-[#0f2557] mb-6">
      Apply for scholarships at GTB College
    </h2>

    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
      Start your journey with GTB College. Click below to apply for scholarship and take the first step towards your future.
    </p>

    <a
      href="http://mpsc.mp.nic.in/cgpms/default.aspx" // 👉 change if you have external form link
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a227] text-[#0f2557] font-bold text-sm uppercase tracking-wider rounded-md hover:bg-[#e8c44a] transition"
    >
      Apply Here
    </a>

  </div>
</section>





      {/* Application Process */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0f2557] mb-8 text-center">
            How to Apply
          </h2>

          <div className="space-y-4">
            {[
              { step: 1, title: "Check Eligibility", desc: "Review the eligibility criteria for your desired scholarship" },
              { step: 2, title: "Download Form", desc: "Get the scholarship application form from the college office" },
              { step: 3, title: "Prepare Documents", desc: "Gather all required documents (Academic records, bank details, etc.)" },
              { step: 4, title: "Submit Application", desc: "Submit the completed form to the college office by the deadline" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-12 h-12 bg-[#c9a227] text-[#0f2557] rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2557] mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-4 md:px-8 bg-[#0f2557] text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Need More Information?
        </h2>
        <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
          Contact the college office for detailed information about scholarships and financial assistance programs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:07752299866"
            className="px-7 py-3 bg-[#c9a227] text-[#0f2557] font-bold rounded-lg hover:bg-[#e8c44a] transition"
          >
            Call Us
          </a>
          <a
            href="mailto:gtbpte@gmail.com"
            className="px-7 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition border border-white"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}
