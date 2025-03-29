"use client";

import { motion } from "motion/react";
import PageHeading from "../ui/PageHeading";

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
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Check Courses
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Check Pricing
          </button>
        </motion.div>
      </div>
    </div>
  );
}
