import useImagePreloader from "@/hooks/useImagePreloader";
import Image from "next/image";

interface IProduct {
  imagePath: string;
  desc: string;
  name: string;
  price: number;
  colorsNames: string[];
  bgColor: string;
}

const Product = ({
  imagePath,
  desc,
  name,
  price,
  colorsNames,
  bgColor,
}: IProduct) => {
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();
  return (
    <div
      className={`${
        imgSpinner && "bg-slate-200"
      } h-[374px] desktop:h-[418px] p-6 grid grid-rows-[200px_32px_32px_auto_auto] items-center rounded-md relative text-text--text bg-${bgColor} transition-colors duration-[1500ms]`}
    >
      <Image
        className="_opacity-0 justify-self-center transition-all duration-[2000ms]"
        onLoad={handleLoadingImageComplete}
        src={imagePath}
        alt={desc}
        width={200}
        height={200}
      />
      <span className="text-xs font-medium">Colors</span>
      <ul className="flex gap-2">
        {colorsNames.map((cName) => (
          <li key={cName}>
            <label
              className={`w-4 h-4 block rounded-full bg-${cName} cursor-pointer has-[:checked]:outline outline-1`}
            >
              <input
                className="hidden"
                type="radio"
                data-colors={cName}
                name={name}
              />
            </label>
          </li>
        ))}
      </ul>

      <h3 className="mb-10 text-[14px] leading-6">{desc}</h3>
      <b>{price} $</b>

      <label className="w-8 h-8 rounded-full flex justify-center items-center bg-white absolute top-4 right-4 cursor-pointer has-[:checked]:bg-system-error has-[:checked]:contrast-150 transition-colors">
        <Image
          src="/img/products/Favorite.svg"
          alt="like"
          width={14}
          height={14}
        />
        <input className="hidden" type="checkbox" />
      </label>
    </div>
  );
};

export default Product;
