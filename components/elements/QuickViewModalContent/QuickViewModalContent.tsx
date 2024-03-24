import { useCardActions } from "@/hooks/useCardActions";
import Image from "next/image";
import React from "react";

const QuickViewModalContent = () => {
  const { product } = useCardActions();
  return (
    <div className="h-full grid grid-cols-2 gap-6">
      <div className="">
        <swiper-container
          navigation={true}
          pagination={true}
          style={{ height: "100%" }}
        >
          {product.images.map((img) => (
            <swiper-slide key={img}>
              <Image
                className=""
                src={img}
                alt={product.name}
                fill
                objectFit="cover"
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
          <ul>
            {Object.entries(product.sizes).map((s) => (
              <li key={s[0]} className="inline-block ml-2 ">
                <span className="uppercase">{s[0]} : </span>
                {s[1] ? (
                  <span className="text-system--succes">В наличии</span>
                ) : (
                  <span className="text-system-error">Отсутсвует</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <span>
          Цена: <b>{product.price}</b> Р
        </span>
        <button className="px-6 py-4 bg-system--succes rounded-2xl absolute right-0 bottom-0 hover:brightness-75 active:brightness-100 transition-all">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default QuickViewModalContent;
