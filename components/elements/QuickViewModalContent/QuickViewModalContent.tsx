import { useCardActions } from "@/hooks/useCardActions";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const QuickViewModalContent = () => {
  const [selectedSize, setSelectedSize] = useState("");
  console.log(selectedSize);
  const [quant, setQuant] = useState(0);
  const { product } = useCardActions();
  const swiperRef = useRef(null) as any;
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: {
        clickable: true,
      },
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <div className="w-full h-full grid grid-cols-[minmax(0,2fr)_3fr] gap-10">
      <div className="">
        <swiper-container
          ref={swiperRef}
          init={false}
          style={{ width: "100%", height: "100%" }}
        >
          {product.images.map((img) => (
            <swiper-slide key={img}>
              <Image
                className=""
                src={img}
                alt={product.name}
                fill
                sizes="100%"
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="flex flex-col gap-6 relative">
        <h3 className="mb-5 text-2xl">{product.name}</h3>
        <p className="mb-3 text-lg">{product.description}</p>
        <span>
          Категории: <b className="underline">{product.category}</b>
        </span>
        <span>
          Тип: <b className="underline">{product.type}</b>
        </span>
        <span>
          Артикул: <b className="underline">{product.vendorCode}</b>
        </span>
        <span>
          Цвета: <b className="underline ">{product.characteristics.color}</b>
        </span>
        <span>
          Принты: <b className="underline ">{product.characteristics.print}</b>
        </span>
        <div className="flex">
          <span>Размеры:</span>
          <ul className="ml-4 grid grid-flow-col gap-4">
            {Object.entries(product.sizes).map((s) => (
              <li key={s[0]} className="">
                <label className="p-2 bg-slate-700 rounded-lg cursor-pointer has-[:checked]:outline has-[:disabled]:cursor-not-allowed">
                  <input
                    type="radio"
                    id={s[0]}
                    name="sizes"
                    className="hidden"
                    disabled={!s[1]}
                    onChange={(e) => setSelectedSize(e.target.id)}
                  />
                  <span className="uppercase">{s[0]} : </span>
                  {s[1] ? (
                    <span className="text-system--succes">В наличии</span>
                  ) : (
                    <span className="text-system-error">Отсутсвует</span>
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <span>
          Цена: <b>{product.price}</b> Р
        </span>
        <div className="w-52 px-4 py-2 rounded-3xl flex justify-between text-3xl bg-slate-700">
          <button
            disabled={!quant}
            onClick={() => setQuant((q) => q - 1)}
            className="disabled:cursor-not-allowed"
          >
            -
          </button>
          <input
            type="number"
            value={quant}
            onChange={(e) =>
              +e.target.value < e.target.maxLength && setQuant(+e.target.value)
            }
            onFocus={(e) => e.target.select()}
            min={0}
            max={999}
            maxLength={1000}
            className="w-fit text-center font-semibold bg-inherit"
          />
          <button
            disabled={quant == 999}
            onClick={() => setQuant((q) => q + 1)}
            className="disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
        <button
          disabled={!quant || !selectedSize}
          className="px-6 py-4 bg-system--succes rounded-2xl absolute right-0 bottom-0 hover:brightness-75 active:brightness-100 disabled:hover:brightness-100 disabled:cursor-not-allowed transition-all"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default QuickViewModalContent;
