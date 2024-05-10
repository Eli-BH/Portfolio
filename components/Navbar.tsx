import Link from "next/link";
import React from "react";
import logo from "@/images/logoEli.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setIsOpen, isOpen }: { setIsOpen: any; isOpen: boolean }) => {
  const router = useRouter();

  return (
    <nav className="text-2xl font-medium z-20 relative flex w-full justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} alt="Eli Logo" height={40} />
      </Link>

      <GiHamburgerMenu
        className="w-8 h-8 text-orange-500 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Navigation Links */}
      <ul className="lg:flex gap-12 text-orange-600 hidden">
        <Link className="hover:text-orange-800" href="/About">
          <li>About</li>
        </Link>
        <Link className="hover:text-orange-800" href="/Experience">
          <li>Experience</li>
        </Link>
        <Link className="hover:text-orange-800" href="/Projects">
          <li>Projects</li>
        </Link>
        <Link className="hover:text-orange-800" href="/Gallery">
          <li>Gallery</li>
        </Link>
        <Link className="hover:text-orange-800" href="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
