"use client";
import Logo from "@/components/elements/Logo/Logo";
import CustomSelect from "@/components/elements/Select/Select";
import { useLang } from "@/hooks/useLang";
import React from "react";

const Header = () => {
  const { lang, translations } = useLang();
  return (
    <header>
      <div className="container">
        <div className="mt-6 flex items-center">
          <Logo />
          <label className="w-full mr-6 grid grid-cols-[1fr_3fr] gap-4 py-2 px-3 rounded-[50px] bg-main-white">
            <CustomSelect />
            <input
              type="text"
              className="text-[14px] leading-4 text-subtext"
              placeholder="Search anything"
            />
          </label>
          <button className="ml-auto mr-5 py-4 px-[30px] rounded-[50px] bg-main-primary text-[12px] leading-4 font-medium">
            {translations[lang]["help-btn"]}
          </button>
          <a className="mr-6" href="">
            Account
          </a>
          <a href="">Shoping</a>
        </div>
        <ul className="mt-6 flex justify-center gap-12 text-[14px] leading-6">
          <li>
            <a href="">Jewelry & Accessories</a>
          </li>
          <li>
            <a href="">Clothing & Shoes</a>
          </li>
          <li>
            <a href="">Home & Living</a>
          </li>
          <li>
            <a href="">Wedding & Party</a>
          </li>
          <li>
            <a href="">Toys & Entertainment</a>
          </li>
          <li>
            <a href="">Art & Collectibles</a>
          </li>
          <li>
            <a href="">Craft Supplies & Tools</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
