import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="lg:py-24 py-8 px-12  lg:px-48 font-latoBold">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence initial={true}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
