"use client";

import { useState } from "react";
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
              <li><a href="#">{navtabs.tab1}</a></li>
              <li><a href="#">{navtabs.tab2}</a></li>
              <li><a href="#">{navtabs.tab3}</a></li>
              <li><a href="#">{navtabs.tab4}</a></li>
              <li><a href="#">{navtabs.tab5}</a></li>
              <li><a href="#">{navtabs.tab6}</a></li>
            </ul>
            <div className="mt-auto space-y-4 h-screen hidden md:block">
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
      <nav className="sticky top-0 left-0 w-screen z-50 bg-white shadow text-gray-800 text-md ">
        <div className="flex justify-between px-4 lg:px-20 py-6 items-center">
          <img src={logo.url} alt="Logo" width={140} height={60} />

          {/* Desktop Menu */}
          <ul className="lg:flex space-x-10 font-semibold text-md hidden">
            <li><a href="#">{navtabs.tab1}</a></li>
            <li><a href="#">{navtabs.tab2}</a></li>
            <li><a href="#">{navtabs.tab3}</a></li>
            <li><a href="#">{navtabs.tab4}</a></li>
            <li><a href="#">{navtabs.tab5}</a></li>
            <li><a href="#">{navtabs.tab6}</a></li>
          </ul>

          {/* Right icons */}
          <ul className="flex space-x-4">
            <li><a href="#" className="text-2xl"><IoInformationCircleOutline /></a></li>
            <li><a href="#" className="text-2xl"><IoSearchOutline /></a></li>
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
