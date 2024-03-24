"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="max-w-screen-xl relative mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1521754040860-ed38b308ac9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxhbHBoYWJldHxlbnwwfHwwfHx8MA%3D%3D"
            className="h-8 mr-4"
            alt="Flowbite Logo"
          />
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="font-medium flex space-x-8">
            {navLinks.map((link: NavLink, index: number) => (
              <li key={index}>
                <Link href={link.href}>
                  <div className="text-slate-400 hover:text-white">
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-400 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          ref={drawerRef}
          className={`w-3/5 md:w-64 bg-gray-800 h-screen fixed top-0 right-0 overflow-hidden z-50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className={`fixed inset-0 bg-black opacity-50 z-40 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={closeMenu}
          ></div>
          <ul className="font-medium flex flex-col space-y-4 mt-16">
            {navLinks.map((link: NavLink, index: number) => (
              <li key={index}>
                <Link href={link.href}>
                  <div
                    className="block py-2 px-3 text-slate-400 hover:text-white"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
