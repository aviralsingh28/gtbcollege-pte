import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Director's Desk – GTB College, Bilaspur",
};

export default function DirectorsDeskPage() {
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">Director's Message</h1>
          <p className="text-cream/80 max-w-2xl mx-auto font-sans text-lg md:text-xl leading-relaxed font-light">
            Vision and inspiration from our leadership
          </p>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-cream border border-gray-200 rounded-sm p-8 md:p-12 shadow-sm">
            <p className="text-gray-700 font-sans leading-relaxed mb-6 text-lg">
              <strong className="text-navy">Dear Students,</strong>
            </p>

            <p className="text-gray-600 font-sans leading-relaxed mb-8 italic text-lg">
              "What is it that knowledge cannot achieve? Like a wish-fulfilling tree,
              education has the power to fulfill all aspirations."
            </p>

            <div className="space-y-6 text-gray-600 font-sans leading-relaxed">
              <p>
                Human beings are the finest creation of God because they have been
                blessed with the power of thought and conscious action. This is what
                makes us superior to all other living beings. How we utilize this power
                depends entirely on us. True greatness is not inherited by birth, but is
                achieved through continuous effort and meaningful actions.
              </p>

              <p>
                Those who make the best use of time can achieve their goals with ease
                and clarity. Those who fail to value time often drift far away from
                their objectives. Time is precious and must always be respected.
                Discipline brings patience, and patience leads to order and success.
                Failure is not a crime — it is, in fact, the key to success. The real
                mistake lies in setting small goals.
              </p>

              <p>
                You should take pride in your family, your teachers, your institution,
                and your nation.
              </p>

              <p>
                I would like to assure you that GTB College remains fully committed to
                maintaining high standards of education and continuous development. I
                sincerely express my gratitude to the parents, students, and the entire
                college family whose support enables us to overcome challenges and move
                steadily towards our goals.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 border-t pt-8">
              <p className="text-navy font-serif text-xl font-semibold">
                Dr. (Smt.) Palak Jaiswal
              </p>
              <p className="text-gold font-sans font-bold text-sm uppercase tracking-widest mt-1">
                Chairman
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
