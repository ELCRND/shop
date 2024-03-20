'use client'
import Product from "@/components/elements/Product/Product"
import { useLang } from "@/hooks/useLang"
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";


register();

const Products = () => {
    const {lang,translations}=useLang()
    const swiperRef = useRef(null) as any;
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView: 4,
      navigation: true,
      loop: true,
      spaceBetween: 24,
      breakpoints: {
        200: {
          slidesPerView: 1,
        },
        580: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1320: {
          slidesPerView: 4,
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
    }
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <div className="mt-6">
        <swiper-container ref={swiperRef} init={false}>
            <swiper-slide>
                <Product 
                    imagePath="/img/products/chair.png" 
                    name="chair" 
                    desc={translations[lang].products.chair.desc}
                    price={195.13}
                    colorsNames={[
                        'Sushi',
                        'Pelorous',
                        'Shamrock',
                        'Blue',
                        'Potion',
                        'Veronica',
                        'Rajah',
                    ]}
                    bgColor="snowy-mint"
                />
            </swiper-slide>
            
            <swiper-slide>
                <Product 
                    imagePath="/img/products/lamp.png" 
                    name="lamp" 
                    desc={translations[lang].products.lamp.desc}
                    price={458.43}
                    colorsNames={[
                        'Sushi',
                        'Blue',
                        'Potion',
                        'Veronica',
                        'Rajah',
                    ]}
                    bgColor="bisque"
                />
            </swiper-slide>
            
            <swiper-slide>
                <Product 
                    imagePath="/img/products/sofa.png" 
                    name="sofa" 
                    desc={translations[lang].products.sofa.desc}
                    price={789.67}
                    colorsNames={[
                        'Blue',
                        'Potion',
                        'Veronica',
                    ]}
                    bgColor="mauve"
                />
            </swiper-slide>
            
            <swiper-slide>
                <Product 
                    imagePath="/img/products/covers.png" 
                    name="covers" 
                    desc={translations[lang].products.covers.desc}
                    price={43.23}
                    colorsNames={[
                        'Sushi',
                        'Shamrock',
                        'Potion',
                        'Veronica',
                        'Rajah',
                    ]}
                    bgColor="drover"
                />
            </swiper-slide>

            <swiper-slide>
                <Product 
                    imagePath="/img/products/covers.png" 
                    name="covers2" 
                    desc={translations[lang].products.covers.desc}
                    price={43.23}
                    colorsNames={[
                        'Sushi',
                        'Shamrock',
                        'Potion',
                        'Veronica',
                        'Rajah',
                    ]}
                    bgColor="drover"
                />
            </swiper-slide>
            
        </swiper-container>
    </div>
  )
}

export default Products


/*   
'Sushi':'#7CB93E',
'Pelorous':'#33ABC6',
'Shamrock':'#1CCD8D',
'Blue':'#3F65EA',
'Potion':'#F74A69',
'Veronica':'#A635EC',
'Rajah':'#F9A85D',

"snowy-mint": "#d3fbd9",
"bisque": "#FFE4BD",
"mauve": "#D9ABFD",
"drover": "#FDF0AB",
 */