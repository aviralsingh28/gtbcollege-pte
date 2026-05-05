"use client";

import Image from "next/image";

const faculty = [
  {
    id: 1,
    name: "Dr. S. Shukla",
    designation: "Principal",
    qualification: "Ph.D. in Political Science",
  },
  {
    id: 2,
    name: "Ms. D. Soni",
    designation: "Assistant Professor",
    qualification: "M.C.A",
  },
  {
    id: 3,
    name: "Mr. Vikas Sannadya",
    designation: "Assistant Professor",
    qualification: "M.C.A",
  },
  {
    id: 4,
    name: "Ms. P. Kaiwart",
    designation: "Assistant Professor",
    qualification: "M.C.A",
  },
  {
    id: 5,
    name: "Ms. Poonam Gupta",
    designation: "Assistant Professor",
    qualification: "M.Tech. (CE)",
  },
  {
    id: 6,
    name: "Ms. Pinky Verma",
    designation: "Assistant Professor",
    qualification: "M.Sc. IT",
  },
];

export default function FacultyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
          alt="Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/85" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">
            Our Faculty
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Faculty Members
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Meet our experienced and dedicated faculty guiding students towards academic excellence and professional success.
          </p>
        </div>
      </section>

      {/* Faculty Table */}
      <section className="py-16 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-2">
              Teaching Staff
            </h2>
            <div className="w-20 h-1 bg-gold"></div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
            <table className="w-full text-left border-collapse">
              
              {/* Head */}
              <thead className="bg-navy text-white text-sm uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">S.No.</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Designation</th>
                  <th className="px-6 py-4">Qualification</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-700">
                {faculty.map((member, index) => (
                  <tr
                    key={member.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold text-navy">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-medium">
                      {member.name}
                    </td>
                    <td className="px-6 py-4">
                      {member.designation}
                    </td>
                    <td className="px-6 py-4">
                      {member.qualification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}