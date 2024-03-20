"use client"
import { useLang } from "@/hooks/useLang"
import Image from "next/image"


const Banners = () => {
    const {lang, translations}=useLang()
  return (
    <div className="mt-6 flex flex-col tablet:grid grid-cols-3 gap-6">
        <div className="p-6 grid grid-rows-[auto_auto_auto] desktop:grid-rows-2 desktop:grid-cols-2 text-center desktop:text-start rounded-md bg-base--gray-background">
            <h3 className="mt-6 mb-3 desktop:m-0 text-4 leading-5 font-medium text-main--middle-black">{translations[lang].banners.community.title}</h3>
            <p className="text-xs text-text--paragraph">{translations[lang].banners.community.desc}</p>
            <Image width={126} height={126} className="row-start-1 row-end-2 desktop:row-end-3 desktop:col-start-2 justify-self-center desktop:justify-self-end" src="/img/banners/community_banner.png" alt="community" />
        </div>

        <div className="p-6 grid grid-rows-[auto_auto_auto] desktop:grid-rows-2 desktop:grid-cols-2 text-center desktop:text-start rounded-md bg-base--gray-background">
            <h3 className="mt-6 mb-3 desktop:m-0 text-4 leading-5 font-medium text-main--middle-black">{translations[lang].banners.support.title}</h3>
            <p className="text-xs text-text--paragraph">{translations[lang].banners.support.desc}</p>
            <Image width={126} height={126} className="row-start-1 row-end-2 desktop:row-end-3 desktop:col-start-2 justify-self-center desktop:justify-self-end" src="/img/banners/support_banner.png" alt="support" />
        </div>

        <div className="p-6 grid grid-rows-[auto_auto_auto] desktop:grid-rows-2 desktop:grid-cols-2 text-center desktop:text-start rounded-md bg-base--gray-background">
            <h3 className="mt-6 mb-3 desktop:m-0 text-4 leading-5 font-medium text-main--middle-black">{translations[lang].banners.peace.title}</h3>
            <p className="text-xs text-text--paragraph">{translations[lang].banners.peace.desc}</p>
            <Image width={126} height={126} className="row-start-1 row-end-2 desktop:row-end-3 desktop:col-start-2 justify-self-center desktop:justify-self-end" src="/img/banners/peace_banner.png" alt="peace of mind" />
        </div>
    </div>
  )
}

export default Banners