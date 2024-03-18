import { useLang } from "@/hooks/useLang";
import CustomSelect from "../Select/Select";

const Search = () => {
  const { lang, translations } = useLang();
  return (
    <label className="row-start-2 col-start-1 col-end-3 tablet:col-end-5 desktop:row-start-1 desktop:col-end-3 desktop:w-[760px] h-full grid grid-cols-[1fr_3fr] gap-4 py-2 px-3 rounded-[50px] bg-main-white">
      <CustomSelect />
      <input
        type="text"
        className="text-[14px] leading-4 text-subtext"
        placeholder={translations[lang].header['search']}
      />
    </label>
  );
};

export default Search;
