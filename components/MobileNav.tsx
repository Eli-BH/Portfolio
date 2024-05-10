import Link from "next/link";
import React from "react";
import { motion as m } from "framer-motion";
import { MdClose } from "react-icons/md";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <m.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
      className="fixed top-0 right-0 w-2/3 sm:w-1/2 h-full bg-rose-900 shadow-lg z-50 p-4 lg:hidden"
    >
      <MdClose
        className="ml-auto text-4xl text-orange-400"
        onClick={() => setIsOpen(false)}
      />

      <ul className="flex flex-col gap-6 mt-24">
        <Link
          className="hover:text-orange-800"
          href="/About"
          onClick={() => setIsOpen(false)}
        >
          <li className="text-xl bg-rose-900 p-2 px-5 text-orange-500">
            About
          </li>
        </Link>
        <Link
          className="hover:text-orange-800"
          href="/Experience"
          onClick={() => setIsOpen(false)}
        >
          <li className="text-xl bg-rose-900 p-2 px-5 text-orange-500">
            Experience
          </li>
        </Link>
        <Link
          className="hover:text-orange-800"
          href="/Projects"
          onClick={() => setIsOpen(false)}
        >
          <li className="text-xl bg-rose-900 p-2 px-5 text-orange-500">
            Projects
          </li>
        </Link>
        <Link
          className="hover:text-orange-800"
          href="/Gallery"
          onClick={() => setIsOpen(false)}
        >
          <li className="text-xl bg-rose-900 p-2 px-5 text-orange-500">
            Gallery
          </li>
        </Link>
        <Link
          className="hover:text-orange-800"
          href="/Contact"
          onClick={() => setIsOpen(false)}
        >
          <li className="text-xl bg-rose-900 p-2 px-5 text-orange-500">
            Contact
          </li>
        </Link>
      </ul>
    </m.div>
  );
};

export default MobileNav;
