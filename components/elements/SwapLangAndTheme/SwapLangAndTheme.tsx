'use client'
import { Langs } from "@/constants/lang";
import { setLang } from "@/context/lang";
import { useLang } from "@/hooks/useLang";

const SwapLangAndTheme = () => {
    const {lang} =useLang()
  return (
    <div className="group absolute top-1 left-1 py-1 px-3 rounded-md bg-main-third">
        <button className="hidden group-hover:block" title="swap language" onClick={()=>lang === "ru" ? setLang(Langs.EN) : setLang(Langs.RU)}>
            {lang === "ru" ? 'Русский' : 'English'}
        </button>
    </div>
  )
}

export default SwapLangAndTheme