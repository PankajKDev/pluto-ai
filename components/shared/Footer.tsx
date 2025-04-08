"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import { MailIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur mt-10 supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary">
              Pluto AI
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering developers and tech professionals with AI-driven
              learning and interview preparation.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/PankajKDev" target="_blank">
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={16}
                    height={16}
                  />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:pankajk.dev0000@gmail.com" target="_blank">
                  <MailIcon width={16} height={16} />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/pankajkdev" target="_blank">
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                  />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          <SignedIn>
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="text-muted-foreground hover:text-foreground transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SignedIn>
        </div>

        <div className="mt-16 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pluto AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-foreground transition"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition">
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="hover:text-foreground transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
