import type { Metadata } from "next";
import Image from "next/image";
import { Award, Target, Users, BookOpen, ChevronRight, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Mission – GTB College, Bilaspur",
};

const values = [
  { icon: Target, title: "Job-Oriented Education", desc: "Exclusively designed courses to make students employment-ready." },
  { icon: Users, title: "Inclusive Access", desc: "Providing quality education to the backward sections of society." },
  { icon: Award, title: "Academic Excellence", desc: "Affiliated to ABVV, upholding high standards of learning." },
  { icon: BookOpen, title: "Skill Development", desc: "Building practical competencies alongside theoretical knowledge." },
  { icon: Building2, title: "Modern Campus", desc: "Purpose-built facilities in the heart of Bilaspur." },
  { icon: ChevronRight, title: "Career Growth", desc: "Dedicated placement cell connecting graduates with industry." },
];

export default function VisionMissionPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
          alt="Vision and Mission"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 border-b border-gold/20" />
        <div className="relative max-w-7xl mx-auto pt-16 text-center">
          <p className="text-gold text-sm font-sans font-bold uppercase tracking-widest mb-4">Our Goals</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">Vision, Mission & Objectives</h1>
          <p className="text-cream/80 max-w-2xl mx-auto font-sans text-lg md:text-xl leading-relaxed font-light">
            Guiding principles that drive our institution towards educational excellence
          </p>
        </div>
      </section>

      {/* Vision, Mission & Objectives */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                label: "Vision",
                text: "To make quality higher education accessible to economically and socially backward students, and to build their awareness about the importance of education for employment and social upliftment.",
              },
              {
                label: "Mission",
                text: "To create an environment where every young student has access to qualitative education that shapes their personality, instills confidence, equality, and a spirit of inquiry — producing socially responsible citizens.",
              },
              {
                label: "Objective",
                text: "To provide skill-based, industry-aligned education in computer and IT fields; to prepare youth for the professional world; and to contribute to the nation through educated and capable graduates.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-cream rounded-sm p-10 border border-gray-200 hover:shadow-xl hover:border-gold/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-6">
                  <Target size={20} className="text-gold" />
                </div>
                <h3 className="font-serif text-navy font-bold text-2xl mb-4">{item.label}</h3>
                <p className="font-sans text-gray-600 text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Detailed Objectives */}
          <div className="bg-cream rounded-sm border border-gold/30 p-10 md:p-12">
            <h2 className="font-serif text-3xl text-navy mb-8">
              Our <span className="italic font-light">Objectives in Detail</span>
            </h2>
            <div className="space-y-6 font-sans text-gray-700">
              <div>
                <h4 className="font-bold text-navy text-lg mb-2">1. Educational Excellence</h4>
                <p className="text-gray-600">
                  Deliver high-quality, industry-relevant curriculum that meets international standards and prepares students for global opportunities.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-2">2. Skill Development & Employability</h4>
                <p className="text-gray-600">
                  Focus on practical skill training, hands-on projects, and real-world problem-solving to ensure graduates are job-ready and competitive in the market.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-2">3. Social Responsibility</h4>
                <p className="text-gray-600">
                  Provide accessible education to economically weaker sections and foster a sense of social consciousness among students.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-2">4. Holistic Development</h4>
                <p className="text-gray-600">
                  Nurture not just academic growth but also personality development, ethical values, and leadership qualities in every student.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-2">5. Infrastructure & Innovation</h4>
                <p className="text-gray-600">
                  Maintain state-of-the-art infrastructure and encourage innovation and research among students and faculty.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg mb-2">6. Industry Partnerships</h4>
                <p className="text-gray-600">
                  Build strong partnerships with industry leaders to ensure curriculum relevance and facilitate internships and placements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-gold inline-block"></span>
                <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">
                  What We Stand For
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy">
                Our Core <span className="italic font-light">Values</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="p-8 bg-white group hover:bg-navy transition-all duration-500 border border-gray-200 rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-cream group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-navy group-hover:text-gold text-xl mb-3 transition-colors">{v.title}</h3>
                  <p className="font-sans text-gray-500 group-hover:text-cream/70 text-sm leading-relaxed transition-colors">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose GTB */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-navy text-center mb-16">
            Why Choose <span className="italic font-light">GTB College</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Experienced Faculty",
                desc: "Our faculty comprises experienced educators and industry professionals committed to student success.",
              },
              {
                title: "Industry-Aligned Curriculum",
                desc: "Courses designed in consultation with industry leaders to ensure relevance and job readiness.",
              },
              {
                title: "State-of-the-Art Infrastructure",
                desc: "Modern labs, libraries, and facilities equipped with the latest technology for practical learning.",
              },
              {
                title: "Strong Placement Record",
                desc: "Dedicated placement cell with partnerships with leading companies ensuring career opportunities.",
              },
              {
                title: "Affordable Education",
                desc: "Quality education accessible to all sections of society with various scholarship programs.",
              },
              {
                title: "Holistic Development",
                desc: "Focus on academic, professional, and personal development of every student.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold text-navy">
                    <ChevronRight size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-navy font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
