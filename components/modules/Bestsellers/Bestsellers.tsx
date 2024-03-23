import Image from "next/image";
import { useUnit } from "effector-react";
import { $bestsellerProducts } from "@/context/goods";
import useImagePreloader from "@/hooks/useImagePreloader";
import { IProduct } from "@/types/common";
import CardActionBtn from "@/components/elements/CardActionBtn/CardActionBtn";

const Bestsellers = () => {
  const goods = useUnit($bestsellerProducts);
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();
  return (
    <ul
      className={`${
        imgSpinner && "bg-slate-100"
      } desktop:h-[440px] mt-6 transition-colors duration-[2500ms] grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-6 rounded-md`}
    >
      {goods.map((product: IProduct) => (
        <li
          key={product._id}
          className="bg-slate-50 p-2 rounded-md relative text-text--text"
        >
          <swiper-container navigation={true} pagination={true}>
            {product.images.map((img) => (
              <swiper-slide key={img}>
                <Image
                  className="mx-auto max-h-[376px] _opacity transition-all duration-1000"
                  src={img}
                  alt={product.description}
                  width={296}
                  height={376}
                  onLoad={handleLoadingImageComplete}
                ></Image>
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="mt-4 flex justify-between items-center">
            <span>{product.name}</span>
            <span>{product.price} P</span>
          </div>
          <div className="p-2 absolute rounded-md top-10 z-10 right-2 bg-gray-800 bg-opacity-50">
            <CardActionBtn
              text="add to favorites"
              withTooltip={true}
              actionClass="_favorites"
            />
            <CardActionBtn
              text="quick-view"
              withTooltip={true}
              actionClass="_quick-view"
            />
            <CardActionBtn
              text="add to comparison"
              withTooltip={true}
              actionClass="_comparison"
            />
          </div>
          {product.isBestseller && (
            <span className="absolute top-3 left-3 z-10 text-system--succes">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="absolute top-3 right-3 z-10 text-system-error">
              New
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Bestsellers;
