"use client";

import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
          alt="Privacy Policy"
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
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Your privacy is important to us. This policy explains how we collect
            and use your information.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-4 md:px-8 bg-cream min-h-[60vh]">
        <div className="max-w-5xl mx-auto space-y-10 text-gray-800 leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold mb-3">Introduction</h2>
            <p>
              At gtbpte.in, accessible from http://gtbpte.in/, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document outlines the types of information that are collected and
              recorded and how we use it.
            </p>
            <p className="mt-2">
              If you have additional questions or require more information about
              our Privacy Policy, feel free to contact us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Log Files</h2>
            <p>
              gtbpte.in follows a standard procedure of using log files. These
              files log visitors when they visit websites. The information
              collected includes IP addresses, browser type, ISP, date and time
              stamps, referring/exit pages, and number of clicks.
            </p>
            <p className="mt-2">
              This data is not linked to any personally identifiable information
              and is used for analyzing trends, administering the site, tracking
              user movement, and gathering demographic information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Cookies & Web Technologies</h2>
            <p>
              Third-party ad servers or networks may use cookies, JavaScript, or
              Web Beacons in their advertisements and links that appear on
              gtbpte.in. These technologies automatically receive your IP address
              when this occurs.
            </p>
            <p className="mt-2">
              They are used to measure the effectiveness of advertising campaigns
              and personalize the content you see. Note that we do not have
              control over these cookies used by third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Third-Party Privacy Policies</h2>
            <p>
              gtbpte.in’s Privacy Policy does not apply to other advertisers or
              websites. We recommend reviewing the respective Privacy Policies of
              third-party ad servers for more detailed information.
            </p>
            <p className="mt-2">
              You can choose to disable cookies through your browser settings.
              More detailed information about cookie management can be found on
              your browser’s official website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Children’s Information</h2>
            <p>
              Protecting children online is important to us. We encourage parents
              and guardians to monitor and guide their children’s internet usage.
            </p>
            <p className="mt-2">
              gtbpte.in does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you believe your
              child has provided such information, please contact us immediately,
              and we will promptly remove it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Online Privacy Policy Only</h2>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website regarding the information they
              share or collect on gtbpte.in.
            </p>
            <p className="mt-2">
              This policy does not apply to information collected offline or via
              other channels.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}