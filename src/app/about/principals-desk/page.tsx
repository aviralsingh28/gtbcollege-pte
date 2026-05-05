import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Principal's Desk – GTB College, Bilaspur",
};

export default function PrincipalsDeskPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
          alt="Leadership"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 border-b border-gold/20" />
        <div className="relative max-w-7xl mx-auto pt-16 text-center">
          <p className="text-gold text-sm font-sans font-bold uppercase tracking-widest mb-4">Leadership</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">Principal's Message</h1>
          <p className="text-cream/80 max-w-2xl mx-auto font-sans text-lg md:text-xl leading-relaxed font-light">
            Insights from our academic leader
          </p>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-cream border border-gray-200 rounded-sm p-8 md:p-12 shadow-sm">
            <p className="text-gray-700 font-sans leading-relaxed mb-8 text-lg">
              <strong className="text-navy">Welcome to GTB College,</strong>
            </p>

            <div className="space-y-6 text-gray-600 font-sans leading-relaxed">
              <p>
                In this land of Chhattisgarh, which stands as a witness to India's glorious past, 
                Bilaspur Model Education Society, Bilaspur, took a significant step in the field of education 
                by establishing GTB College of Professional & Technical Education in 2010.
              </p>

              <p>
                The primary objective of the institution is not only to provide education, but to impart true knowledge. 
                We aim to elevate the thinking and perspective of students so that they develop a progressive and forward-looking mindset.
              </p>

              <p>
                With this vision, it has been resolved that the college will focus exclusively on 
                job-oriented and professional courses. This approach ensures that students are well-prepared 
                to face the challenges of life and perform effectively in their respective fields.
              </p>

              <p>
                Our faculty members are experienced professionals who are passionate about imparting quality education. 
                They serve as mentors and guides, helping students not just academically, but in their overall personality development.
              </p>

              <p>
                We believe that education is a transformative force that can change lives and societies. 
                We are committed to providing an environment where every student can flourish and achieve their full potential.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 border-t pt-8">
              <p className="text-navy font-serif text-xl font-semibold">
                Dr. S. Shukla
              </p>
              <p className="text-gold font-sans font-bold text-sm uppercase tracking-widest mt-1">
                Principal
              </p>
              <p className="text-gray-600 text-sm font-sans mt-2">
                GTB College of Professional & Technical Education
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
