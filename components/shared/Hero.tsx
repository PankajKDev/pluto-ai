"use client";
import { motion } from "motion/react";
import PageHeading from "../ui/PageHeading";
import Link from "next/link";
import { Button } from "../ui/button";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center ">
      <div className="px-4 py-10 md:py-20">
        <PageHeading
          subHeadingText="Ace interviews with AI-powered courses! Personalized learning, mock
          simulations, expert tips, and flexible access ensure you’re fully
          prepared to land your dream job."
          headingText="Ace Your Interviews with Expert AI-Powered Courses!"
        />

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/courses">
            <Button variant="purchased">Check Courses</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="secondary">Check Pricing</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
