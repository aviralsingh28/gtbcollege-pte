import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink, ArrowRight } from "lucide-react";

const footerLinks = {

  "Campus & Life": [
    { label: "About GTB College", href: "/about" },
    { label: "Infrastructure & Labs", href: "/infrastructure" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Faculty Directory", href: "/faculty" },
  ],
  "Related Institutions": [
    { label: "GTB College", href: "https://www.gtbcollege.in/", external: true },
    { label: "GTB College of Education", href: "http://gtbcollegeofeducation.com/", external: true },
  ],
   "Legal": [
    { label: "Terms & Conditions", href: "/terms&condition" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-24 h-24 flex items-center justify-center bg-gold rounded-lg shadow-lg p-2">
                <img src="/logo-inverse.webp" alt="GTB College Logo" className="w-20 h-20 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif text-2xl tracking-wide">GTB College</span>
                 <span className="text-white font-serif text-[7px] sm:text-[9px] lg:text-[11px] tracking-wider">
                    Professional & Technical Education
                  </span>
                <span className="text-gold font-sans text-xs uppercase tracking-[0.2em] font-bold">Bilaspur</span>
              </div>
            </div>
            
            <p className="text-cream/70 font-sans text-sm leading-relaxed mb-8 pr-4">
              Providing distinguished technical and professional education since 2010. Empowering the next generation of IT leaders in Chhattisgarh.
            </p>

            <div className="space-y-4 font-sans text-sm text-cream/80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="leading-relaxed">GTB Group Of Colleges, Farhada, 
                Near Gatora Railway Station Road <br />
                Bilaspur, Chhattisgarh<br />
                India 495001</span>
              </div>
              <a href="tel:07752299866" className="flex items-center gap-3 hover:text-gold transition-colors group">
                <Phone size={18} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span>07752 299866 / 72409 99909 / 7415246253 <br/>
                 9637453000 / 9637443000</span>
              </a>
              <a href="mailto:gtbpte@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors group">
                <Mail size={18} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span>  gtbpte@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:pl-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-serif text-gold text-lg mb-6 flex items-center gap-2">
                  <span className="w-4 h-px bg-gold inline-block"></span>
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-2 font-sans text-sm text-cream/70 hover:text-white transition-colors"
                        >
                          <ExternalLink size={14} className="text-gold/70 mt-0.5 shrink-0 group-hover:text-gold" />
                          <span className="leading-snug">{link.label}</span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 font-sans text-sm text-cream/70 hover:text-white transition-colors"
                        >
                          <ArrowRight size={14} className="text-gold/0 -ml-4 group-hover:ml-0 group-hover:text-gold transition-all" />
                          <span>{link.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

{/* Affiliation bar */}
<div className="border-t border-white/5 bg-black/20">
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 font-sans text-xs text-cream/50">
    
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

      {/* LEFT */}
      <p className="text-center md:text-left">
        Affiliated to{" "}
        <span className="text-cream/80 font-medium">
          Atal Bihari Vajpayee Vishwavidyalaya
        </span>
        <span className="mx-2 hidden md:inline">|</span>
        <span className="block md:inline mt-1 md:mt-0">
          College Code:{" "}
          <span className="text-cream/80 font-medium">233</span>
        </span>
      </p>

      {/* RIGHT */}
      <div className="flex flex-col md:flex-row items-center gap-4">

        {/* COPYRIGHT */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} GTB College. All Rights Reserved.
          <span className="mx-2 hidden md:inline">|</span>
          <span className="block md:inline mt-1 md:mt-0">
            Developed by{" "}
            <a
              href="https://www.ezsofttech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-gold transition font-medium"
            >
              EZ Soft Tech
            </a>
          </span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-3 border-l border-white/10 pl-4 md:pl-4 border-l-0 md:border-l mt-2 md:mt-0">

          <a
            href="https://www.facebook.com/people/Gtb-Group-of-colleges/61557432089671/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 text-white text-lg font-bold hover:text-gold hover:scale-110 transition"
          >
            f
          </a>

          <a
            href="https://www.instagram.com/gtb__group?igsh=Y3dkYXE5dTc3czhy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 hover:scale-110 transition"
          >
            <img
              src="/social-media/instagram_no_bg.png"
              alt="Instagram"
              className="w-6 lg:w-6 h-6 lg:h-6 brightness-0 invert"
            />
          </a>

          <a
            href="https://x.com/gtb_group_?s=11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 text-white text-lg font-bold hover:text-gold hover:scale-110 transition"
          >
            𝕏
          </a>

        </div>
      </div>
    </div>
  </div>
</div>
    </footer>
  );
}

