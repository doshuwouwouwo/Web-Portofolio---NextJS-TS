"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState, useRef, useEffect } from "react";
import MenuOverlays from "./MenuOverlays";
import Image from "next/image";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/16/solid";


interface NavLinksItem {
  title: string;
  path?: string;
  children?: NavLinksItem[];
}

const NavLinks: NavLinksItem[] = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#project" },
  {
    title: "Pages",
    children: [
      { title: "Blog", path: "#blog" },
      { title: "404 Page", path: "#404" },
      { title: "Coming Soon", path: "#comingsoon" },
    ],
  },
  { title: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // ⛔️ Menutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap justify-between items-center mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <Image src="/images/logo.png" alt="Firdaus" width={100} height={100} />
        </Link>

        {/* Toggle Button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5 text-white" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5 text-white" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 mr-2">
            {NavLinks.map((link, index) => (
              <li key={index} className="relative items-center justify-center">
                {link.path ? (
                  <NavLink href={link.path} label={link.title} />
                ) : (
                  <>
                    <button type="button" onClick={toggleDropdown} className="flex items-center justify-center text-lg text-[#ADB7BE] hover:text-white">
                      {link.title}
                      <ChevronDownIcon className={`w-6 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isDropdownOpen && (
                      <ul
                        ref={dropdownRef}
                        className={`absolute mt-2 w-40 rounded-md py-2 bg-[#1f1f1f] text-white shadow transition-all duration-700 origin-top transform z-50
      ${isDropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
                        style={{ transformOrigin: "top" }}
                      >
                        {link.children?.map((child) => (
                          <li key={child.title}>
                            <Link href={child.path || "#"} className="block px-4 py-2 text-md text-white hover:text-black hover:bg-white">
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen ? <MenuOverlays links={NavLinks} /> : null}
    </nav>
  );
}
