"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Introduction", href: "/about/introduction" },
      { label: "Director's Desk", href: "/about/directors-desk" },
      { label: "Principal's Desk", href: "/about/principals-desk" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    dropdown: [
      { label: "Courses & Fees", href: "/academics/courses-and-fee" },
      { label: "Admissions", href: "/academics/admission" },
      { label: "Scholarships", href: "/academics/scholarship" },
    ],
  },
  { label: "Faculty", href: "/faculty" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false);
  const [mobileAcademicsDropdownOpen, setMobileAcademicsDropdownOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      
      {/* Top bar (ALWAYS SOLID) */}
      <div className={`bg-navy-dark transition-all duration-300 ${scrolled ? "h-0 overflow-hidden" : "h-10"} border-none`}>
  <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 h-full flex justify-between items-center text-cream/80 font-sans text-[11px] sm:text-xs font-medium">

  {/* Left side (only desktop) */}
  <div className="hidden lg:flex items-center gap-6">
    <span className="whitespace-nowrap">
      Code: 233 | Affiliated to ABVV
    </span>
  </div>

  {/* Right side */}
  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto justify-between lg:justify-end">

    {/* 📞 Phone */}
    <a
      href="tel:07752299866"
      className="flex items-center gap-1.5 hover:text-gold transition-colors"
    >
      <Phone size={13} />
      <span className="block">07752 299866</span>
    </a>

    {/* ✉️ Mail */}
    <a
      href="mailto:gtbpte@gmail.com"
      className="flex items-center gap-1.5 hover:text-gold transition-colors"
    >
      <Mail size={13} />
      <span className="block">gtbpte@gmail.com</span>
    </a>

    {/* Desktop social only */}
    <div className="hidden lg:flex items-center gap-4 pl-6 border-l border-white/10">
      <span className="text-sm">Follow us</span>

      <a
        href="https://www.facebook.com/people/Gtb-Group-of-colleges/61557432089671/?mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 text-white text-sm lg:text-lg font-bold hover:scale-110 transition" >
        f
      </a>

      <a
        href="https://www.instagram.com/gtb__group?igsh=Y3dkYXE5dTc3czhy"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 hover:text-gold hover:scale-110 transition" >
        <img
          src="/social-media/instagram_no_bg.png"
          className="w-4 lg:w-5 h-4 lg:h-5 brightness-0 invert"
        />
      </a>

      <a
        href="https://x.com/gtb_group_?s=11"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 text-white text-sm lg:text-lg font-bold hover:scale-110 transition" >
        𝕏
      </a>
    </div>

  </div>
</div>
   </div>

      {/* Main navbar */}
      <div
        className={`relative transition-all duration-300 ${
          scrolled
            ? "bg-navy py-2 shadow-2xl border-none"
            : "bg-transparent py-3 md:py-4 border-none"
        }`}
      >
        {/* DARK GRADIENT OVERLAY (only when not scrolled) */}
        {!scrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none" />
        )}

        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            {/* GOLD STRIP */}
            <div className="bg-gold px-2 sm:px-3 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-r-md shadow-lg">
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/logo-inverse.webp"
                  alt="GTB College Logo"
                  width={45}
                  height={45}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-sm"
                />
                <div className="hidden md:flex flex-col">
                  <span className="text-navy font-serif text-[10px] sm:text-xs lg:text-base tracking-wide leading-tight">
                    GTB College
                  </span>
                  <span className="text-navy font-serif text-[7px] sm:text-[9px] lg:text-[11px] tracking-wider leading-tight">
                    Professional & Technical Education
                  </span>
                  <span className="text-navy font-sans text-[7px] sm:text-[8px] lg:text-[10px] uppercase tracking-[0.15em] font-bold">
                    Bilaspur
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-4 ml-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isDropdownActive = link.dropdown?.some((item) => pathname === item.href);

              if (link.dropdown) {
                const isAboutDropdown = link.label === "About Us";
                const isDropdownOpenState = isAboutDropdown ? aboutDropdownOpen : academicsDropdownOpen;
                const setDropdownOpen = isAboutDropdown ? setAboutDropdownOpen : setAcademicsDropdownOpen;

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`font-sans text-[10px] lg:text-xs font-semibold tracking-normal uppercase transition-all duration-200 relative py-1 lg:py-2 px-1 lg:px-2 flex items-center gap-0.5 lg:gap-1 whitespace-nowrap ${
                        isActive || isDropdownActive
                          ? "text-gold"
                          : "text-cream hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          isDropdownOpenState ? "rotate-180" : ""
                        }`}
                      />
                      {(isActive || isDropdownActive) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full" />
                      )}
                    </button>

                    {/* Dropdown menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 lg:mt-2 bg-navy rounded-md shadow-xl border border-gold/20 overflow-hidden transition-all duration-200 min-w-max ${
                        isDropdownOpenState
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {link.dropdown.map((item) => {
                        const isItemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-3 lg:px-4 py-2 lg:py-3 text-[9px] lg:text-xs font-semibold tracking-normal uppercase transition-all duration-200 whitespace-nowrap ${
                              isItemActive
                                ? "bg-gold/20 text-gold"
                                : "text-cream hover:bg-gold/10 hover:text-white"
                            }`}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-[10px] lg:text-xs font-semibold tracking-normal uppercase transition-all duration-200 relative py-1 lg:py-2 px-1 lg:px-2 whitespace-nowrap ${
                    isActive ? "text-gold" : "text-cream hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-1 lg:ml-2 px-2 lg:px-4 py-1 lg:py-2 bg-gold hover:bg-gold-light text-navy font-sans font-bold text-[9px] lg:text-xs uppercase tracking-wider rounded-sm transition-colors duration-200 flex items-center gap-1 lg:gap-2 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream hover:text-gold p-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-navy border-none shadow-2xl transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="px-4 py-5 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isDropdownActive = link.dropdown?.some(
              (item) => pathname === item.href
            );

            if (link.dropdown) {
              const isAboutDropdown = link.label === "About Us";
              const isMobileDropdownOpen = isAboutDropdown ? mobileAboutDropdownOpen : mobileAcademicsDropdownOpen;
              const setMobileDropdownOpen = isAboutDropdown ? setMobileAboutDropdownOpen : setMobileAcademicsDropdownOpen;

              return (
                <div key={link.href} className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(
                        !isMobileDropdownOpen
                      )
                    }
                    className={`font-serif text-lg sm:text-xl transition-colors flex items-center justify-between ${
                      isActive || isDropdownActive ? "text-gold" : "text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isMobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  <div
                    className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-200 ${
                      isMobileDropdownOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {link.dropdown.map((item) => {
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className={`font-serif text-base sm:text-lg transition-colors ${
                            isItemActive ? "text-gold" : "text-gray-300"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-lg sm:text-xl transition-colors ${
                  isActive ? "text-gold" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 sm:mt-6 inline-flex items-center justify-between w-full p-3 sm:p-4 bg-gold text-navy font-sans font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm"
          >
            <span>Contact Us</span>
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
