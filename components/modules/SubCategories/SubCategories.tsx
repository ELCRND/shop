"use client";
import { useEffect, useRef } from "react";
import { SwiperProps, SwiperSlideProps } from "swiper/react";
import { register } from "swiper/element/bundle";
import SubCategory from "@/components/elements/SubCategory/SubCategory";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}

register();

const SubCategories = () => {
  const swiperRef = useRef(null) as any;
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView: 8,
      navigation: true,
      loop:true,
      spaceBetween: 24,
      breakpoints:{
        200:{
          slidesPerView: 2
        },
        580: {
          slidesPerView: 4
        },
        900: {
          slidesPerView: 5.3
        },
        1320: {
          slidesPerView: 8
        }
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
    <>
      <swiper-container ref={swiperRef} init={false} >
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/craft_kits.png"
            desc="Craft Kits"
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/throw_pillows.png"
            desc="Throw Pillows"
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/natural_glass.png"
            desc="Natural Glass"
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/self_care.png"
            desc="Self Care"
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/gift_ideas.png"
            desc="Gift Ideas"
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/wall_decor.png"
            desc="Wall Decor"
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/wedding.png"
            desc="Wedding"
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/life_style.png"
            desc="Life Style"
          />
        </swiper-slide>
        <swiper-slide>
          <SubCategory
            imagePath="/img/subcategoriesCarousel/life_style.png"
            desc="Life Style"
          />
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default SubCategories;
