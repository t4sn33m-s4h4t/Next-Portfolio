"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Projects" },
  { id: "certificate", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function CreateMenus({ activeLink, setActiveLink, closeMenu }) {
  return menuItems.map((item) => (
    <LinkScroll
      key={item.id}
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      onClick={closeMenu}
      className={`px-4 py-2 cursor-pointer block lg:inline-block relative 
        ${
          activeLink === item.id
            ? "text-green-main font-semibold border-b-2 border-green-main"
            : "text-[#000] font-bold hover:text-green-main transition-all"
        }
      `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link href="/">
          <div className="flex items-center font-bold text-[20px] text-green-main cursor-pointer">
            <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] bg-green-main">
              <span className="text-white-500 text-[25px] font-bold">T</span>
            </div>
            asneem
          </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6">
            <CreateMenus setActiveLink={setActiveLink} activeLink={activeLink} />
          </ul>

          {/* CV Download Button */}
          <div className="hidden lg:block">
              <button className="py-3 px-6 border-[2px] bg-[#fff] border-green-main text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none">
                Download CV
              </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-green-main text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu (Slide-in) */}
      <div
        className={`fixed top-0 left-0 w-4/5 h-full bg-white-500 border-r-2 shadow-xl shadow-green-500 border-green-500 z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-[calc(100%+20px)]"
        } lg:hidden`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          <CreateMenus
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            closeMenu={() => setIsMenuOpen(false)}
          /> 
            <button
              className="py-3 px-6 border-[2px] bg-[#fff] border-green-main text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              Download CV
            </button> 
        </nav>
      </div>
    </>
  );
}
