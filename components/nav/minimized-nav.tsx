"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Landing from "../landing-page/landing";
import Pricing from "../pricing";
import Reviews from "../reviews/reviews";

export default function MinimizedTopNav({
  setHomeSection,
}: {
  setHomeSection: Dispatch<SetStateAction<JSX.Element>>;
}) {
  const isHome = useRef(true);
  const [openNav, setOpenNav] = useState(false);
  const [dynamicStyles, setDynamicStyles] = useState("bg-transparent text-white");

  const scrollHandler = () => {
    if (!isHome.current) {
      return;
    }
    if (window.scrollY >= window.screen.height / 2 - 60) {
      setDynamicStyles("bg-white text-black shadow-lg");
    } else {
      if (window.scrollY <= window.screen.height / 2 - 60) {
        setDynamicStyles("bg-transparent text-white");
      }
    }
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navElements = () => {
    return (
      <div className="flex flex-col gap-5 text-[23px] font-[350]">
        <div
          onClick={() => {
            setOpenNav(false);
            isHome.current = false;
            setHomeSection(<Reviews />);
          }}
          className=""
        >
          Reviews
        </div>
        <div
          className="hover:cursor-pointer hover:opacity-50 "
          onClick={() => {
            setOpenNav(false);
            isHome.current = false;
            setDynamicStyles("bg-white text-black shadow-lg");
            setHomeSection(<Pricing />);
          }}
        >
          Pricing
        </div>
        <div>
          <Image src={"/profile.png"} width={35} height={35} loading="eager" alt="location" />
        </div>
      </div>
    );
  };

  return (
    <header
      style={{ transition: "all 0.35s linear" }}
      className={`fixed top-0 left-0 right-0 z-10 ${dynamicStyles}`}
    >
      <div className="mx-auto md:flex items-center md:justify-between">
        <div className={`flex items-center py-[10px] justify-between pl-2`}>
          <div
            className="text-[23px] font-[350]"
            onClick={() => {
              isHome.current = true;
              scrollHandler();
              setOpenNav(false);
              setHomeSection(<Landing />);
            }}
          >
            Journal
          </div>
          <button
            onClick={() => setOpenNav((prev) => !prev)}
            className="block md:hidden p-2 rounded focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-4">{navElements()}</nav>
        <div
          className={`${
            openNav ? "" : "hidden"
          } mt-2 flex flex-col gap-4 px-2 pb-5 rounded ${dynamicStyles}`}
        >
          {navElements()}
        </div>
      </div>
    </header>
  );
}
