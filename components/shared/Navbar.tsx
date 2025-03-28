"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks, navAuthLinks } from "@/constants";
import MobileMenu from "../ui/MobileMenu";
import MobileMenuButton from "../ui/MobileMenuButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main navbar */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                Pluto AI
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <SignedIn>
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </SignedIn>
              <SignedOut>
                {navAuthLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </SignedOut>
            </div>
          </div>

          {/* user dropdown*/}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <UserButton />
          </div>

          {/* mobile menu button to open it */}
          <div className="flex items-center sm:hidden">
            <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile menu responsive */}
      {isOpen && <MobileMenu navLinks={navLinks} navAuthLinks={navAuthLinks} />}
    </nav>
  );
};

export default Navbar;
