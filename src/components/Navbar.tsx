"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  // const scrollToSection = (id: string) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     const currentScrollPosition = window.pageYOffset;
  //     const sectionOffset = section.offsetTop;

  //     const targetScrollPosition = currentScrollPosition + sectionOffset;

  //     window.scrollTo({
  //       top: targetScrollPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  return (
    <div
      className={cn(
        " fixed top-0.5 inset-x-0 max-w-2xl mx-auto z-20 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link
          href={"#skills"}
          // onClick={() => {
          //   scrollToSection("skills");
          // }}
        >
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
        </Link>

        <Link
          href={"#about"}
          // onClick={() => {
          //   scrollToSection("about");
          // }}
        >
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href={"#education"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Education"
          ></MenuItem>
        </Link>
        <Link href={"#project"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
