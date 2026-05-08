import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Introduction – GTB College, Bilaspur",
};

export default function IntroductionPage() {
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
          <p className="text-gold text-sm font-sans font-bold uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">Introduction</h1>
          <p className="text-cream/80 max-w-2xl mx-auto font-sans text-lg md:text-xl leading-relaxed font-light">
            Established in 2010, GTB College Bilaspur has been committed to delivering job-oriented technical education to the youth of Chhattisgarh.
          </p>
        </div>
      </section>

      {/* Introduction Content */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold inline-block"></span>
              <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">
                Who We Are
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8">
              Why GTB College Was <span className="italic font-light">Founded</span>.
            </h2>
            <div className="space-y-6 text-gray-600 font-sans">
              <p className="text-lg leading-relaxed">
                Chhattisgarh is a developing state rich in natural resources — iron ore, coal, bauxite, power, cement, and rice production. After the formation of the new state in 2001, demand for technical and professional education grew rapidly, but quality colleges remained scarce.
              </p>
              <p className="text-lg leading-relaxed">
                In this region of Chhattisgarh, which stands as a witness to India’s glorious past, the Bilaspur Model Education Society, Bilaspur, took a significant initiative in the field of education by establishing the GTB College of Professional & Technical Education in 2010.
              </p>
              <p className="text-lg leading-relaxed">
                The institution's mission: <strong className="text-navy font-semibold">not just educate, but impart knowledge</strong> — elevating the intellectual outlook of students and equipping them for the professional world.
              </p>
              <p className="text-lg leading-relaxed">
                With over a decade of experience, GTB College continues to serve as a beacon of quality education, transforming lives and building capable professionals who contribute meaningfully to society.
              </p>
            </div>
          </div>
          <div className="relative h-96 lg:h-[600px] w-full">
            <Image
              src="/gtbptecollegebuilding2.png"
              alt="College building"
              fill
              className="object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute top-4 -left-4 bottom-4 right-4 border border-gold z-[-1] rounded-sm hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-navy text-center mb-16">
            Key <span className="italic font-light">Milestones</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2010", event: "GTB College Established", desc: "Founded to provide quality technical education" },
              { year: "2010", event: "Affiliation to ABVV", desc: "Recognized for academic excellence" },
              { year: "2024", event: "Growth & Expansion", desc: "Continuous enhancement of facilities" },
              { year: "Present", event: "Leading Institution", desc: "Serving hundreds of students annually" },
            ].map((item) => (
              <div key={item.year} className="p-6 bg-cream rounded-sm border border-gold/30 hover:border-gold transition-all duration-300">
                <p className="text-gold font-sans font-bold text-3xl mb-2">{item.year}</p>
                <h3 className="font-serif text-navy font-semibold text-lg mb-2">{item.event}</h3>
                <p className="font-sans text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses & Fees FAQ Section ─────────────────────────────────── */}
<section className="py-20 px-4 md:px-8 bg-cream">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
        FAQs
      </h2>
      <p className="text-gray-600 text-lg">
        Everything you need to know about our regular and private courses.
      </p>
    </div>

    {/* Regular Courses */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-navy mb-6 border-l-4 border-gold pl-4">
        Regular Courses
      </h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-lg font-semibold text-navy mb-2">
            What courses are available under regular programs?
          </h4>
          <p className="text-gray-600">
            We offer B.A., B.Com, B.Sc (Maths), BCA, PGDCA, DCA, and PGDBM under regular mode.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-lg font-semibold text-navy mb-2">
            What is the fee structure for regular courses?
          </h4>
          <p className="text-gray-600">
            Fees range from ₹12,000 to ₹18,500 depending on the course. BCA and PGDCA have higher fees due to technical curriculum.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-lg font-semibold text-navy mb-2">
            How many seats are available?
          </h4>
          <p className="text-gray-600">
            Seat availability varies by course, ranging from 30 to 120 seats.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-lg font-semibold text-navy mb-2">
            Which course is best for IT careers?
          </h4>
          <p className="text-gray-600">
            BCA and PGDCA are the best options for students interested in IT, software development, and computer applications.
          </p>
        </div>

      </div>
    </div>

    {/* Private Courses */}
    <div>
      <h3 className="text-2xl font-bold text-navy mb-6 border-l-4 border-gold pl-4">
        Private Courses
      </h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-lg font-semibold text-navy mb-2">
            What are private courses?
          </h4>
          <p className="text-gray-600">
            Private courses allow students to complete their degrees without attending regular classes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-lg font-semibold text-navy mb-2">
            Which private courses are available?
          </h4>
          <p className="text-gray-600">
            Available courses include B.A., B.Com, B.Sc (Bio/Maths), M.A. (various subjects), and M.Sc (Maths).
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-lg font-semibold text-navy mb-2">
            Who should choose private courses?
          </h4>
          <p className="text-gray-600">
            Students who are working, preparing for exams, or unable to attend regular classes can opt for private courses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-lg font-semibold text-navy mb-2">
            Is the degree valid for jobs?
          </h4>
          <p className="text-gray-600">
            Yes, degrees obtained through private mode are valid and recognized as per university norms.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
    </>
  );
}
