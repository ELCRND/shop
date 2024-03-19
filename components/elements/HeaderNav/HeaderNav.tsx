import Link from "next/link";
import { useLang } from "@/hooks/useLang";

const HeaderNav = () => {
  const { lang, translations } = useLang();
  return (
    <ul className={`mt-6 desktop:flex justify-between text-[14px] leading-6 text-center text-text--text hidden`}>
      <li>
        <Link className="_hover _active" href="jewelry&accessories">
          {translations[lang].header["jewelry&accessories"]}
        </Link>
      </li>
      <li>
        <Link className="_hover _active" href="clothing&shoes">
          {translations[lang].header["clothing&shoes"]}
        </Link>
      </li>
      <li>
        <Link className="_hover _active" href="home&living">
          {translations[lang].header["home&living"]}
        </Link>
      </li>
      <li>
        <Link className="_hover _active" href="wedding&party">
          {translations[lang].header["wedding&party"]}
        </Link>
      </li>
      <li>
        <Link className="_hover _active" href="toys&entertainment">
          {translations[lang].header["toys&entertainment"]}
        </Link>
      </li>
      <li>
        <Link className="_hover _active" href="art&collectibles">
          {translations[lang].header["art&collectibles"]}
        </Link>
      </li>
      <li>
        <Link className="_hover _active" href="craft&tools">
          {translations[lang].header["craftSupplies&tools"]}
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNav;
