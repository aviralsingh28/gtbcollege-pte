"use client";

import Image from "next/image";

export default function TermsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="/gtbptefrontroad.png"
          alt="Terms and Conditions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/87" />

        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4 md:px-8 bg-cream min-h-[60vh]">
        <div className="max-w-5xl mx-auto space-y-10 text-gray-800 leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold mb-3">Introduction</h2>
            <p>
              Welcome to http://gtbpte.in/. By accessing this website, you accept these
              terms and conditions in full. Do not continue to use the website if you
              do not agree with all the terms stated here. 
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Terminology</h2>
            <p>
              "Client", "You", and "Your" refer to the user accessing this website.
              "The Company", "We", "Our", and "Us" refer to GTB College of Professional
              and Technical Education. These terms apply to all agreements and usage
              of services provided by the website. 
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Cookies</h2>
            <p>
              We use cookies to enhance user experience. By accessing this website,
              you agree to the use of cookies in accordance with our Privacy Policy.
              Cookies help enable certain functionality and improve usability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">License</h2>
            <p>
              Unless otherwise stated, all content on this website is owned by GTB
              College. You may access it for personal use only, subject to restrictions.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Do not republish material</li>
              <li>Do not sell or rent content</li>
              <li>Do not reproduce or duplicate content</li>
              <li>Do not redistribute website material</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">User Comments</h2>
            <p>
              Users may post opinions in certain areas. We do not pre-screen comments.
              However, we reserve the right to remove inappropriate or offensive
              content. Users are responsible for their own comments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Hyperlinking</h2>
            <p>
              Certain organizations may link to our website without prior approval,
              including government agencies, search engines, and news organizations.
              Links must not be misleading or imply false endorsement. 
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">iFrames</h2>
            <p>
              You may not create frames around our web pages that alter the visual
              presentation of our website without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Content Liability</h2>
            <p>
              We are not responsible for content appearing on external websites that
              link to us. You agree to protect us against claims arising from your
              website content. 
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Your Privacy</h2>
            <p>
              Please review our Privacy Policy for information on how we handle user
              data and personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Reservation of Rights</h2>
            <p>
              We reserve the right to request removal of any links to our website and
              to amend these terms at any time. Continued use of the website implies
              acceptance of updated terms. 
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Disclaimer</h2>
            <p>
              We do not guarantee the accuracy or completeness of information on this
              website. To the fullest extent permitted by law, we exclude all
              warranties and liabilities for any damages arising from use of the
              website.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}