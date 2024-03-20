"use client";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import SubCategory from "@/components/elements/SubCategory/SubCategory";
import { useLang } from "@/hooks/useLang";


register();

const SubCategories = () => {
  const swiperRef = useRef(null) as any;
  const { lang, translations } = useLang();
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView: 8,
      navigation: true,
      loop: true,
      spaceBetween: 24,
      breakpoints: {
        200: {
          slidesPerView: 2,
        },
        580: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 5.3,
        },
        1320: {
          slidesPerView: 8,
        },
      },
      injectStyles: [
        `
              .swiper-button-next,
              .swiper-button-prev {
                width:48px;
                height:48px;
                border-radius: 50%;
                background-color: rgba(255,255,255,0.3);
                color: #5F5F5F;
              }
              .swiper-button-next > svg,
              .swiper-button-prev > svg{
                width:8px;
                height:16px;
                transition:scale 0.2s ease-in-out, color 0.1s ease-in-out, background-color 0.1s ease-in-out;
              }
              .swiper-button-next:hover > svg,
              .swiper-button-prev:hover > svg{
                scale:1.5;
              }
              .swiper-button-next:active,
              .swiper-button-prev:active{
                background-color: rgba(255,255,255,0.4);
                color:#eb6d20;
              }      
          `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <div className="mt-10">
      <h2 className="text-lg font-medium text-text--text">Find things you&apos;ll love. Support independent sellers.</h2>
      <span className="text-sm font-medium text-subtext">Only on polka.</span>
      <swiper-container ref={swiperRef} init={false}>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/craft_kits.png"
            desc={translations[lang].subCategories["Craft-Kits"]}
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/throw_pillows.png"
            desc={translations[lang].subCategories["Throw-Pillows"]}
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/natural_glass.png"
            desc={translations[lang].subCategories["Natural-Glass"]}
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/self_care.png"
            desc={translations[lang].subCategories["Self-Care"]}
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/gift_ideas.png"
            desc={translations[lang].subCategories["Gift-Ideas"]}
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/wall_decor.png"
            desc={translations[lang].subCategories["Wall-Decor"]}
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/wedding.png"
            desc={translations[lang].subCategories["Wedding"]}
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/life_style.png"
            desc={translations[lang].subCategories["Life-Style"]}
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/life_style.png"
            desc={translations[lang].subCategories["Life-Style"]}
          />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default SubCategories;
