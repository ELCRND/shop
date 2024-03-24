import useImagePreloader from "@/hooks/useImagePreloader";
import { IProduct } from "@/types/common";
import Image from "next/image";
import React from "react";
import CardActionBtn from "../CardActionBtn/CardActionBtn";
import { bodyOverflowAdd, showQuickViewModal } from "@/context/modals";
import { setCurrentProduct } from "@/context/goods";

const BestsellerProduct = ({ item }: { item: IProduct }) => {
  const { handleLoadingImageComplete } = useImagePreloader();
  const handleShowQuickViewModal = () => {
    bodyOverflowAdd();
    showQuickViewModal();
    setCurrentProduct(item);
  };
  return (
    <li
      key={item._id}
      className="bg-slate-50 p-2 rounded-md relative text-text--text"
    >
      <swiper-container navigation={true} pagination={true}>
        {item.images.map((img: string) => (
          <swiper-slide key={img}>
            <Image
              className="mx-auto max-h-[376px] _opacity transition-all duration-1000"
              src={img}
              alt={item.description}
              width={296}
              height={376}
              onLoad={handleLoadingImageComplete}
            ></Image>
          </swiper-slide>
        ))}
      </swiper-container>
      <div className="mt-4 flex justify-between items-center">
        <span>{item.name}</span>
        <span>{item.price} P</span>
      </div>
      <div className="px-2 absolute rounded-md top-10 z-10 right-3 bg-gray-800 bg-opacity-50">
        <CardActionBtn
          text="add to favorites"
          withTooltip={true}
          actionClass="_favorites"
        />
        <CardActionBtn
          text="quick-view"
          withTooltip={true}
          actionClass="_quick-view"
          callback={handleShowQuickViewModal}
        />
        <CardActionBtn
          text="add to comparison"
          withTooltip={true}
          actionClass="_comparison"
        />
      </div>
      {item.isBestseller && (
        <span className="px-2 rounded-md absolute top-3 left-3 z-10 text-system--succes bg-gray-200 bg-opacity-80">
          Bestseller
        </span>
      )}
      {item.isNew && (
        <span className="px-2 rounded-md absolute top-3 left-28 z-10 text-system-error bg-gray-200 bg-opacity-80">
          New
        </span>
      )}
      {Object.values(item.sizes).some((s) => s) ? (
        <span className="ml-3 relative text-system--succes before:w-2 before:h-2 before:block before:rounded-full before:absolute before:top-1/3 before:bg-system--succes">
          Есть в наличии
        </span>
      ) : (
        <span className="ml-3 relative text-system-error before:w-2 before:h-2 before:block before:rounded-full before:absolute before:top-1/3 before:bg-system-error">
          Нет в наличии
        </span>
      )}
    </li>
  );
};

export default BestsellerProduct;
