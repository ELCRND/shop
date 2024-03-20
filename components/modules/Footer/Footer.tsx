'use client'
import Logo from "@/components/elements/Logo/Logo";
import { useLang } from "@/hooks/useLang";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const {lang,translations} =useLang()
  return (
    <footer className="pt-10 text-text--paragraph">
      <div className="container grid tablet:grid-cols-[auto_auto]">
        <div className="row-end-3 tablet:row-end-2">
          <Logo />
          <address className="w-min mt-10 mb-6 tablet:block hidden">
            Cricklewood,London NW2 6qg, Uk
          </address>
          <ul className="w-fit mx-auto mb-[76px] flex grid-cols-2 gap-2 desktop:gap-4 py-3 px-[72px]  rounded-[200px] bg-base--gray-background tablet:mx-0 tablet:p-0 tablet:grid tablet:bg-transparent desktop:flex">
            <li className="w-8 h-8 rounded-full bg-[#1877F2] _content-center">
              <Link href="/">
                <Image width={0} height={0} className="w-4 h-4" src="/img/socials/facebook.svg" alt="facebook" />
              </Link>
            </li>
            <li className="w-8 h-8 rounded-full bg-[#1DA1F2] _content-center">
              <Link href="/">
                <Image width={0} height={0} className="w-4 h-4" src="/img/socials/twitter.svg" alt="twitter" />
              </Link>
            </li>
            <li className="w-8 h-8 rounded-full bg-[#2867B2] _content-center">
              <Link href="/">
                <Image width={0} height={0} className="w-4 h-4" src="/img/socials/linkedin.svg" alt="linkedin" />
              </Link>
            </li>
            <li className="w-8 h-8 rounded-full bg-[#EA4C89] _content-center">
              <Link href="/">
                <Image width={0} height={0} className="w-4 h-4" src="/img/socials/dribbble.svg" alt="dribbble" />
              </Link>
            </li>
          </ul>
          <span>© 2022 Commerce, Inc.</span>
        </div>
        <div className="grid">
          <div className="flex flex-col tablet:grid grid-cols-4">
            <div>
              <input type="checkbox" id="Shop" className="peer/shop hidden"/>
              <label htmlFor="Shop" className="_accordion tablet:p-0 tablet:bg-transparent tablet:after:content-none">Shop</label>
              <ul className="_accordion-list peer-checked/shop:flex tablet:m-0 tablet:flex">
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Gift-cards']}                   
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Site-map']}                 
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Polka-blog']}                   
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Login']}                   
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Sign-in']}                    
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <input type="checkbox" id="Sell" className="peer/sell hidden"/>
              <label htmlFor="Sell" className="_accordion tablet:p-0 tablet:bg-transparent tablet:after:content-none">Sell</label>
              <ul className="_accordion-list peer-checked/sell:flex tablet:m-0 tablet:flex">
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Sell-on-Polka']}                    
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Teams']}                   
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Forums']}                   
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    {translations[lang].footer['Affiliates']}                   
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <input type="checkbox" id="About" className="peer/about hidden"/>
              <label htmlFor="About" className="_accordion tablet:p-0 tablet:bg-transparent tablet:after:content-none">About</label>
              <ul className="_accordion-list peer-checked/about:flex tablet:m-0 tablet:flex">
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                  {translations[lang].footer['Polka-Inc']}                   
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                  {translations[lang].footer['Policies']}
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                  {translations[lang].footer['Investors']}                 
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                  {translations[lang].footer['Careers']}                 
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                  {translations[lang].footer['Press']}          
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <input type="checkbox" id="Help" className="peer/help hidden "/>
              <label htmlFor="Help" className="_accordion tablet:p-0 tablet:bg-transparent tablet:after:content-none">Help</label>
              <ul className="_accordion-list peer-checked/help:flex tablet:m-0 tablet:flex">
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                  {translations[lang].footer['Help-Center']}                  
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                  {translations[lang].footer['Trust-and-safety']}     
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                  {translations[lang].footer['Privacy-settings']}                 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[60px] desktop:mt-8 flex flex-col tablet:flex-row gap-12 relative">
            <Link href="/" className="_hover _active">
            {translations[lang].footer['Privacy-policy']} 
            </Link>
            <Link href="/" className="_hover _active">
            {translations[lang].footer['Terms-of-use']}
            </Link>
            <Link href="/" className="_hover _active">
            {translations[lang].footer['Cookies']}
            </Link>
            <Link href="#header" className="absolute right-0 _hover _active">
              {translations[lang].footer['Scroll-to-top']} &#8673;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
