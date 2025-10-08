"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import AboutSection from "@/components/About/main";
import ContactSection from "@/components/Contact/Main";
import SignIn from '@/components/SignIn/main';
import SignUp from '@/components/SignUp/main';
import Service from '@/components/Service/main'
import Career from '@/components/Career/main'
import { FaChevronRight } from "react-icons/fa";

import {
  IoInformationCircleOutline,
  IoSearchOutline,
  IoMenu,
  IoClose,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

type NavTabsType = {
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  tab5: string;
  tab6: string;
};

type Logo = {
  url: string;
};

type HeaderClientProps = {
  navtabs: NavTabsType;
  logo: Logo;
};

export default function HeaderClient({ navtabs, logo }: HeaderClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const about=<AboutSection/>
  const contact=<ContactSection/>
  const service=<Service/>
  const career=<Career/>
  const signIn=<SignIn/>
   const signUp=<SignUp/>

  // Lock scroll for mobile menu
  const handleMobileMenu = (open: boolean) => {
    const scrollY = window.scrollY;
    setMobileMenuOpen(open);
    if (open) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => handleMobileMenu(false)}
          />
          <div className="absolute left-0 top-0 h-screen w-[85%] max-w-sm bg-black text-white p-6 flex flex-col gap-10 shadow-lg">
            <div className="flex justify-between items-center">
              <img src={logo.url} alt="Logo" width={120} height={50} />
              <button onClick={() => handleMobileMenu(false)}>
                <IoClose className="text-white text-3xl" />
              </button>
            </div>
            <ul className="flex flex-col space-y-4 font-semibold text-lg">
              <li>
                <button className="grid grid-cols-2 gap-3">{navtabs.tab1}
                   <FaChevronDown
                  className={`pt-1 text-xl transition-transform  ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                </button>
              </li>

              {/* tab2 dropdown */}
              <li className="flex flex-col gap-2">
                <button
                  className="flex items-center gap-3"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  {navtabs.tab2}
                  <FaChevronDown
                    className={`pt-1 text-xl transition-transform ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen && (
                  <ul className="ml-4 mt-2 flex flex-col gap-1">
                    <li> <Link href="/">
          Home
        </Link></li>
                    <li> <Link href="/about">
          About
        </Link></li>
                    <li> <Link href="/service">
          Service
        </Link></li>
                    <li> <Link href="/contact">
          Contact
        </Link></li>
                   <li> <Link href="/career">
          Career
        </Link></li>
                   <li> <Link href="/signIn">
          SignIn
        </Link></li>
                   <li> <Link href="/signUp">
          SignUp
        </Link></li>
                  </ul>
                )}
              </li>

              <li>
                <button className="flex items-center gap-3">{navtabs.tab3}
                   <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3">{navtabs.tab4}
                   <FaChevronDown
                  className={`pt-1 text-xl transition-transform  ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3">{navtabs.tab5}
                   <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3">{navtabs.tab6}
                   <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                </button>
              </li>
            </ul>
            <div className="mt-auto space-y-8 h-screen pt-24 ">
              <div>
                <a href="mailto:info@email.com" className="block hover:text-blue-400">
                  info@email.com
                </a>
                <span>00 (123) 456 78 90</span>
              </div>
              <div className="flex space-x-4 text-xl text-white">
                <a href="#"><IoLogoTwitter /></a>
                <a href="#"><IoLogoFacebook /></a>
                <a href="#"><IoLogoDribbble /></a>
                <a href="#"><IoLogoInstagram /></a>
                <a href="#"><IoLogoYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Transparent Navbar */}
      <nav className="sticky top-0 left-0 w-screen z-50 bg-white shadow text-gray-800 text-md">
        <div className="flex justify-between px-4 lg:px-20 py-6 items-center">
          <img src={logo.url} alt="Logo" width={140} height={60} />

          {/* Desktop Menu */}
          <ul className="lg:flex space-x-10 font-semibold text-md hidden">
            <li>
              <button className="flex items-center gap-1 hover:text-blue-500">{navtabs.tab1}
                 <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>

            {/* tab2 dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-500">
                {navtabs.tab2}
                <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {desktopDropdownOpen && (
                <ul className="absolute top-5 left-0 bg-white shadow-lg rounded-xl w-48 p-4  flex flex-col gap-1   ">
                   <li className="flex justify-between hover:text-blue-500"> <Link href="/">
          Home
        </Link>
        <FaChevronRight className="pt-1 text-xl"/>
        </li>
                    <li className="flex justify-between hover:text-blue-500"> <Link href="/about">
          About
        </Link>
        <FaChevronRight className="pt-1 text-xl"/>
        </li>
                    <li className="flex justify-between hover:text-blue-500"> <Link href="/service">
          Service
        </Link>
        <FaChevronRight className="pt-1 text-xl"/>
        </li>
                    <li className="flex justify-betweenhover:text-blue-500"> <Link href="/contact">
          Contact
        </Link>
        <FaChevronRight className="pt-1 text-xl"/>
        </li>
                   <li className="flex justify-between hover:text-blue-500"> <Link href="/career">
          Career
        </Link>
        <FaChevronRight className="pt-1 text-xl"/>
        </li>
                   <li className="flex justify-between hover:text-blue-500"> <Link href="/signIn">
          SignIn
        </Link>
        <FaChevronRight className="pt-1 text-xl"/></li>
                   <li className="flex justify-between hover:text-blue-500"> <Link href="/signUp">
          SignUp
        </Link>
        <FaChevronRight className="pt-1 text-xl"/></li>
                </ul>
              )}
            </li>

            <li>
              <button className="flex items-center gap-1 hover:text-blue-500">{navtabs.tab3}
                 <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 hover:text-blue-500">{navtabs.tab4}
                 <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 hover:text-blue-500">{navtabs.tab5}
                 <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 hover:text-blue-500">{navtabs.tab6}
                 <FaChevronDown
                  className={`pt-1 text-xl transition-transform ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
          </ul>

          {/* Right icons */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-2xl">
                <IoInformationCircleOutline />
              </a>
            </li>
            <li>
              <a href="#" className="text-2xl">
                <IoSearchOutline />
              </a>
            </li>
            <li>
              <button
                className="text-2xl lg:hidden"
                onClick={() => handleMobileMenu(true)}
              >
                <IoMenu />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
