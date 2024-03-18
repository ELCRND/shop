import Link from "next/link";
import { useLang } from "@/hooks/useLang";

const ModalNav = () => {
  const { lang, translations } = useLang();
  return (
    <ul className={`h-full p-5 grid grid-cols-2 text-[18px] text-center leading-6`}>
      <li>
        <Link className="_hover _active" href="jewelry&cccessories">
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

export default ModalNav;
