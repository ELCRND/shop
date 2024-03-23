"use client";

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import Category from "@/components/elements/Category/Category";

register();

const Categories = () => {
  const swiperRef = useRef(null) as any;
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        200: {
          slidesPerView: 1,
        },
        580: {
          slidesPerView: 2,
        },
        1320: {
          slidesPerView: 3,
        },
      },
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <div className="mt-6">
      <swiper-container ref={swiperRef} init={false}>
        <swiper-slide
          style={{
            backgroundColor: "rgb(226, 232, 240)",
            borderRadius: "20px",
          }}
        >
          <Category
            imagePath="/img/categoryCarousel/clothing&shoes.jpeg"
            desc="clothing&shoes"
          />
        </swiper-slide>
        <swiper-slide
          style={{
            backgroundColor: "rgb(226, 232, 240)",
            borderRadius: "20px",
          }}
        >
          <Category
            imagePath="/img/categoryCarousel/home&living.jpeg"
            desc="home&living"
          />
        </swiper-slide>
        <swiper-slide
          style={{
            backgroundColor: "rgb(226, 232, 240)",
            borderRadius: "20px",
          }}
        >
          <Category
            imagePath="/img/categoryCarousel/art&collectibles.jpeg"
            desc="art&collectibles"
          />
        </swiper-slide>
        <swiper-slide
          style={{
            backgroundColor: "rgb(226, 232, 240)",
            borderRadius: "20px",
          }}
        >
          <Category
            imagePath="/img/categoryCarousel/jewelry&accessories.jpeg"
            desc="jewelry&accessories"
          />
        </swiper-slide>
        <swiper-slide
          style={{
            backgroundColor: "rgb(226, 232, 240)",
            borderRadius: "20px",
          }}
        >
          <Category
            imagePath="/img/categoryCarousel/wedding&party.jpeg"
            desc="wedding&party"
          />
        </swiper-slide>
        <swiper-slide
          style={{
            backgroundColor: "rgb(226, 232, 240)",
            borderRadius: "20px",
          }}
        >
          <Category
            imagePath="/img/categoryCarousel/toys&entertainment.jpeg"
            desc="toys&entertainment"
          />
        </swiper-slide>
        <swiper-slide
          style={{
            backgroundColor: "rgb(226, 232, 240)",
            borderRadius: "20px",
          }}
        >
          <Category
            imagePath="/img/categoryCarousel/craftSupplies&tools.jpeg"
            desc="craftSupplies&tools"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Categories;
