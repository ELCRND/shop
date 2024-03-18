import Logo from "@/components/elements/Logo/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-text--paragraph">
      <div className="container grid tablet:grid-cols-[auto_auto]">
        <div className="row-end-3 tablet:row-end-2">
          <Logo />
          <address className="w-min mt-10 mb-6 tablet:block hidden">
            Cricklewood,London NW2 6qg, Uk
          </address>
          <ul className="w-fit mx-auto mb-[76px] flex grid-cols-2 gap-2 desktop:gap-4 py-3 px-[72px]  rounded-[200px] bg-base--gray-background tablet:mx-0 tablet:p-0 tablet:grid tablet:bg-transparent desktop:flex">
            <li className="w-8 h-8 rounded-full bg-[#1877F2] _content-center">
              <Link href="/">
                <img src="/img/socials/facebook.svg" alt="facebook" />
              </Link>
            </li>
            <li className="w-8 h-8 rounded-full bg-[#1DA1F2] _content-center">
              <Link href="/">
                <img src="/img/socials/twitter.svg" alt="twitter" />
              </Link>
            </li>
            <li className="w-8 h-8 rounded-full bg-[#2867B2] _content-center">
              <Link href="/">
                <img src="/img/socials/linkedin.svg" alt="linkedin" />
              </Link>
            </li>
            <li className="w-8 h-8 rounded-full bg-[#EA4C89] _content-center">
              <Link href="/">
                <img src="/img/socials/dribbble.svg" alt="dribbble" />
              </Link>
            </li>
          </ul>
          <span>© 2022 Commerce, Inc.</span>
        </div>
        <div className="grid">
          <div className="flex flex-col tablet:grid grid-cols-4">
            <div>
              <label htmlFor="Shop" className="mb-6 px-6 py-4 rounded-[200px] bg-[#F5F6F8] block text-base font-medium tablet:p-0 tablet:bg-transparent">Shop</label>
              <input type="checkbox" id="Shop" className="peer/shop hidden"/>
              <ul className="peer-checked/shop:flex mx-8 mb-4 flex-col gap-5 text-sm hidden tablet:m-0 tablet:flex">
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Gift cards
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Site map
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Polka blog
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Login
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <label htmlFor="Sell" className="mb-6 px-6 py-4 rounded-[200px] bg-[#F5F6F8] block text-base font-medium tablet:p-0 tablet:bg-transparent">Sell</label>
              <input type="checkbox" id="Sell" className="peer/sell hidden"/>
              <ul className="peer-checked/sell:flex mx-8 mb-4 flex-col gap-5 text-sm hidden tablet:m-0 tablet:flex">
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Sell on Polka
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Teams
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Forums
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <label htmlFor="About" className="mb-6 px-6 py-4 rounded-[200px] bg-[#F5F6F8] block text-base font-medium tablet:p-0 tablet:bg-transparent">About</label>
              <input type="checkbox" id="About" className="peer/about hidden"/>
              <ul className="peer-checked/about:flex mx-8 mb-4 flex-col gap-5 text-sm hidden tablet:m-0 tablet:flex">
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Polka, Inc.
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Policies
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Investors
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Careers
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <label htmlFor="Help" className="mb-6 px-6 py-4 rounded-[200px] bg-[#F5F6F8] block text-base font-medium tablet:p-0 tablet:bg-transparent">Help</label>
              <input type="checkbox" id="Help" className="peer/help hidden "/>
              <ul className="peer-checked/help:flex mx-8 mb-4 flex-col gap-5 text-sm hidden tablet:m-0 tablet:flex">
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Help Center
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Trust and safety
                  </Link>
                </li>
                <li className="border-b tablet:border-b-0 _hover _active hover:underline">
                  <Link href="#">
                    Privacy settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[60px] desktop:mt-5 flex flex-col tablet:flex-row gap-12 relative">
            <Link href="/" className="_hover _active">
              Privacy policy
            </Link>
            <Link href="/" className="_hover _active">
              Terms of use
            </Link>
            <Link href="/" className="_hover _active">
              Cookies
            </Link>
            <Link href="#header" className="absolute right-0 _hover _active">
              Scroll to top &#8673;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
