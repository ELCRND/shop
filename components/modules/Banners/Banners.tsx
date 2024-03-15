"use client"
import { useLang } from "@/hooks/useLang"


const Banners = () => {
    const {lang, translations}=useLang()
  return (
    <div className="grid grid-cols-3 gap-6">
        <div className="p-6 grid grid-rows-2 grid-cols-2 rounded-md bg-base--gray-background">
            <h3 className="text-4 leading-5 font-medium text-main--middle-black">{translations[lang].banners.community.title}</h3>
            <p className="text-xs text-text--paragraph">{translations[lang].banners.community.desc}</p>
            <img className="row-start-1 row-end-3 col-start-2 justify-self-end" src="/img/banners/community_banner.png" alt="community" />
        </div>

        <div className="p-6 grid grid-rows-2 grid-cols-2 rounded-md bg-base--gray-background">
            <h3 className="text-4 leading-5 font-medium text-main--middle-black">{translations[lang].banners.support.title}</h3>
            <p className="text-xs text-text--paragraph">{translations[lang].banners.support.desc}</p>
            <img className="row-start-1 row-end-3 col-start-2 justify-self-end" src="/img/banners/support_banner.png" alt="support" />
        </div>

        <div className="p-6 grid grid-rows-2 grid-cols-2 rounded-md bg-base--gray-background">
            <h3 className="text-4 leading-5 font-medium text-main--middle-black">{translations[lang].banners.peace.title}</h3>
            <p className="text-xs text-text--paragraph">{translations[lang].banners.peace.desc}</p>
            <img className="row-start-1 row-end-3 col-start-2 justify-self-end" src="/img/banners/peace_banner.png" alt="peace of mind" />
        </div>
    </div>
  )
}

export default Banners