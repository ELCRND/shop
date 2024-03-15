"use client";
import HumbBtn from "@/components/elements/HumbBtn/HumbBtn";
import Logo from "@/components/elements/Logo/Logo";
import Search from "@/components/elements/Search/Search";

import { useLang } from "@/hooks/useLang";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { lang, translations } = useLang();
  return (
    <header>
      <div className="container">
        <div className="mt-6 grid items-center">
          <Logo />
          <Search />
          <HumbBtn />
          <button className="col-start-3 justify-self-end py-4 px-[30px] rounded-[50px] bg-main-primary text-[12px] leading-4 font-medium">
            {translations[lang].header["help-btn"]}
          </button>
          <Link
            href="/"
            className="col-start-4 justify-self-end md:mr-6 md:ml-4 flex before:mr-2 before:content-[url('/img/header/user_icon.svg')] _hover _active"
          >
            <span>{translations[lang].header["account"]}</span>
          </Link>
          <Link
            href="/"
            className="col-start-5 justify-self-end flex before:mr-2 before:content-[url('/img/header/shopping_icon.svg')] _hover _active"
          >
            <span>{translations[lang].header["shopping"]}</span>
          </Link>
        </div>
        <ul className="mt-6 desktop:flex justify-between text-[14px] leading-6 text-center hidden">
          <li>
            <Link className="_hover _active" href="jewelry&cccessories">{translations[lang].header["jewelry&accessories"]}</Link>
          </li>
          <li>
            <Link className="_hover _active" href="clothing&shoes">{translations[lang].header["clothing&shoes"]}</Link>
          </li>
          <li>
            <Link className="_hover _active" href="home&living">{translations[lang].header["home&living"]}</Link>
          </li>
          <li>
            <Link className="_hover _active" href="wedding&party">{translations[lang].header["wedding&party"]}</Link>
          </li>
          <li>
            <Link className="_hover _active" href="toys&entertainment">{translations[lang].header["toys&entertainment"]}</Link>
          </li>
          <li>
            <Link className="_hover _active" href="art&collectibles">{translations[lang].header["art&collectibles"]}</Link>
          </li>
          <li>
            <Link className="_hover _active" href="craft&tools">{translations[lang].header["craftSupplies&tools"]}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;



