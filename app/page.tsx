"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <motion.button className="border-1 border-solid border-stone-400 rounded-3xl hover:border-stone-100 p-7 text-gray-400 hover:text-green-100">Get Started</motion.button>
   </div>
  );
}
