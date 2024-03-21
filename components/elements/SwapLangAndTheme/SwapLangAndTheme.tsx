'use client'
import { Langs } from "@/constants/langs";
import { setLang } from "@/context/lang";

const SwapLangAndTheme = () => {
  return (
    <div className="p-3 flex gap-2">
      <label className="w-8 h-8 block rounded-full bg-[url('/img/EN_flag.svg')] bg-center bg-cover cursor-pointer hover:scale-110">
        <input className="hidden" type="radio" name="lang" onChange={()=>setLang(Langs.EN)} />
      </label>
      <label className="w-8 h-8 block rounded-full bg-[url('/img/RU_flag.svg')] bg-center bg-cover cursor-pointer hover:scale-110">
        <input className="hidden" type="radio" name="lang" onChange={()=>setLang(Langs.RU)}/>
      </label>
    </div>
  )
}

export default SwapLangAndTheme