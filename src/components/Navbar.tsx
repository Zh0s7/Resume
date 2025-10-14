"use client";

import { useState } from "react";
import Link from "next/link";
import { josefinSans, petrona, preospe } from "@/lib/fonts";
import { Josefin_Sans } from "next/font/google";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // track dropdown

  return (
    <nav className="w-full bg-grey-1000 shadow-md">
      <div className="max-6xl mx-auto px-4 flex justify-between items-center h-20 relative">
        {/* Left side: Name */}
        <Link href="/" className={josefinSans.className} style={{ fontSize: "24px" }}>
          Joshua Weekes
        </Link>

        {/* Right side: Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:right" style={{ color: "var(--font-color-yellow)" }}
        >
          ☰
        </button>

        {/* Dropdown Menu (hidden by default on small screens) */}
        {isOpen && (
          <div className="absolute right-10 mt-45 w-50 bg-black shadow-lg rounded-md flex flex-col">
            <Link href="/about" className="px-4 py-4 hover:bg-grey-50">
              About
            </Link>
            <Link href="/projects" className="px-4 py-4 hover:bg-grey-50">
              Projects
            </Link>
            <Link href="/skills" className="px-4 py-4 hover:bg-grey-50">
              Skills
            </Link>
            <Link href="/certifications" className="px-4 py-4 hover:bg-grey-50">
              Certifications
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
