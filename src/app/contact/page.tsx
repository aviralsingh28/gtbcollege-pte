import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – GTB College, Bilaspur",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
          alt="Contact GTB College"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 border-b border-gold/20" />
        <div className="relative max-w-7xl mx-auto pt-16 text-center">
          <p className="text-gold text-sm font-sans font-bold uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">Contact GTB College</h1>
          <p className="text-cream/80 max-w-2xl mx-auto font-sans text-lg md:text-xl leading-relaxed font-light">
            Reach out to us with any questions about admissions, courses, or college facilities.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Address */}
            <div className="bg-cream rounded-sm p-8 border border-gray-200 hover:shadow-lg hover:border-gold/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-6">
                <MapPin size={24} className="text-gold" />
              </div>
              <h3 className="font-serif text-navy font-bold text-xl mb-4">Address</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                GTB Group Of Colleges, Farhada, 
                Near Gatora Railway Station Road <br />
                Bilaspur, Chhattisgarh<br />
                India 495001
              </p>
            </div>

            {/* Phone */}
            <div className="bg-cream rounded-sm p-8 border border-gray-200 hover:shadow-lg hover:border-gold/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-6">
                <Phone size={24} className="text-gold" />
              </div>
              <h3 className="font-serif text-navy font-bold text-xl mb-4">Phone</h3>
              <div className="font-sans text-gray-600 text-sm space-y-2">
                <p>
                  <a href="tel:07752299866" className="hover:text-gold transition-colors font-semibold">
                    07752 299866
                  </a><br />
                  <a href="tel:7240999909" className="hover:text-gold transition-colors font-semibold">
                    72409 99909
                  </a><br />
                  <a href="tel:7415246253" className="hover:text-gold transition-colors font-semibold">
                    74152 46253
                  </a><br />
                  <a href="tel:9637453000" className="hover:text-gold transition-colors font-semibold">
                   96374 53000
                  </a><br />
                  <a href="tel:9637443000" className="hover:text-gold transition-colors font-semibold">
                   96374 43000
                  </a><br />
                </p>
                <p className="text-xs text-gray-500">Office Hours: 9 AM - 5 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-cream rounded-sm p-8 border border-gray-200 hover:shadow-lg hover:border-gold/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-6">
                <Mail size={24} className="text-gold" />
              </div>
              <h3 className="font-serif text-navy font-bold text-xl mb-4">Email</h3>
              <div className="font-sans text-gray-600 text-sm space-y-2">
                <p>
                  <a href="mailto:gtbpte@gmail.com" className="hover:text-gold transition-colors font-semibold break-all">
                    gtbpte@gmail.com
                  </a>
                </p>
                <p className="text-xs text-gray-500">Response within 24 hours</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-cream rounded-sm p-8 border border-gray-200 hover:shadow-lg hover:border-gold/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-6">
                <Clock size={24} className="text-gold" />
              </div>
              <h3 className="font-serif text-navy font-bold text-xl mb-4">Hours</h3>
              <div className="font-sans text-gray-600 text-sm space-y-2">
                <p><span className="font-semibold">Mon - Fri:</span> 9:00 AM - 5:00 PM</p>
                <p><span className="font-semibold">Sat:</span> 10:00 AM - 2:00 PM</p>
                <p><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">Our Location</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mt-4 mb-6">Visit Us</h2>
            <p className="font-sans text-gray-500 text-lg">Find us easily with our interactive map and get directions to our campus.</p>
          </div>

          {/* Embedded Map */}
          <div className="w-full rounded-sm overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.1481741855664!2d82.22782938885496!3d22.082157499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27e1b4c1450597%3A0x41d82242f19d0e5f!2sGTB%20College%20of%20Professional%20%26%20Technical%20Education!5e0!3m2!1sen!2sin!4v1777903040836!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-gold inline-block"></span>
                <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">
                  How to Reach
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8">
                Directions to <span className="italic font-light">GTB College</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-navy mb-3 flex items-center gap-2">
                    <Smartphone size={20} className="text-gold" />
                    By Personal Vehicle
                  </h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    We are located in the heart of Bilaspur, easily accessible by road. Ample parking facilities are available on campus for vehicles.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-navy mb-3 flex items-center gap-2">
                    <Phone size={20} className="text-gold" />
                    Campus Tour Scheduling
                  </h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Interested in visiting our campus? Contact us at <a href="tel:07752299866" className="text-gold font-semibold hover:underline">07752 299866</a> to schedule a campus tour with our admissions team.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-navy mb-3 flex items-center gap-2">
                    <Mail size={20} className="text-gold" />
                    Questions?
                  </h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Email us at <a href="mailto:gtbpte@gmail.com" className="text-gold font-semibold hover:underline">gtbpte@gmail.com</a> with any inquiries about admissions, courses, scholarships, or facilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] w-full">
              <Image
                src="/gtbptecollegebuilding.png"
                alt="GTB College Campus"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute top-4 -left-4 bottom-4 right-4 border border-gold z-[-1] rounded-sm hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold inline-block"></span>
            <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">Ready to Join Us?</span>
            <span className="h-px w-8 bg-gold inline-block"></span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
            Begin Your Journey With GTB College
          </h2>
          <p className="font-sans text-cream/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We're here to answer your questions and help you take the first step towards a career in professional and technical education. Reach out today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07752299866"
              className="px-8 py-4 bg-gold hover:bg-gold-light text-navy font-sans font-bold text-sm uppercase tracking-wider rounded-sm transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Us
            </a>
            <a
              href="mailto:info@gtbcollege.in"
              className="px-8 py-4 border-2 border-gold hover:bg-gold/10 text-gold font-sans font-bold text-sm uppercase tracking-wider rounded-sm transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
