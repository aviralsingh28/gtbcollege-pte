import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – GTB College, Bilaspur",
};

export default function AboutIndexPage() {
  const sections = [
    {
      title: "Introduction",
      description: "Learn about GTB College's founding, mission, and role in providing quality technical education to Chhattisgarh.",
      href: "/about/introduction",
      icon: "📖",
    },
    {
      title: "Director's Desk",
      description: "Message from our Chairman and leadership team overseeing the institution's strategic direction.",
      href: "/about/directors-desk",
      icon: "👔",
    },
    {
      title: "Principal's Desk",
      description: "Insights from our Principal about academics, faculty expertise, and educational philosophy.",
      href: "/about/principals-desk",
      icon: "🎓",
    },
    {
      title: "Vision & Mission",
      description: "Our core objectives, values, and commitment to excellence and student development.",
      href: "/about/vision-mission",
      icon: "🎯",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
          alt="GTB College"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 border-b border-gold/20" />
        <div className="relative max-w-7xl mx-auto pt-16 text-center">
          <p className="text-gold text-sm font-sans font-bold uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">About GTB College</h1>
          <p className="text-cream/80 max-w-2xl mx-auto font-sans text-lg md:text-xl leading-relaxed font-light">
            Established in 2010, GTB College Bilaspur has been committed to delivering job-oriented technical education to the youth of Chhattisgarh.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">Explore About Us</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mt-4">Our <span className="italic font-light">Institution</span></h2>
            <p className="text-gray-600 mt-6 font-sans max-w-2xl mx-auto text-lg">
              Discover what makes GTB College a leading institution for professional and technical education in Chhattisgarh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-white rounded-sm border border-gray-200 p-8 hover:border-gold/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{section.icon}</span>
                  <ArrowRight size={20} className="text-gold opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300" />
                </div>
                <h3 className="font-serif text-2xl text-navy font-semibold mb-3">{section.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-navy text-center mb-16">
            GTB College At A <span className="italic font-light">Glance</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "17+", label: "Years of Excellence" },
              { stat: "500+", label: "Students Enrolled" },
              { stat: "30+", label: "Faculty Members" },
              { stat: "100%", label: "Placement Focus" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl md:text-5xl font-serif text-gold font-bold mb-2">{item.stat}</p>
                <p className="font-sans text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">Ready to Learn More?</h2>
          <p className="font-sans text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore our programs, meet our leadership, and discover what we stand for as an institution.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/about/introduction"
              className="px-8 py-3 bg-gold hover:bg-gold-light text-navy font-sans font-bold uppercase tracking-wider rounded-sm transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              Start Exploring
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-gold text-gold hover:bg-gold/10 font-sans font-bold uppercase tracking-wider rounded-sm transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
