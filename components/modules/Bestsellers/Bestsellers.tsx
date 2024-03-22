import { useUnit } from "effector-react";
import { $bestsellerProducts } from "@/context/goods";
import { IProduct } from "@/types/common";
import Image from "next/image";

const Bestsellers = () => {
  const goods = useUnit($bestsellerProducts);
  console.log(goods);

  return (
    <ul className="grid grid-cols-4">
      {goods.map((product: IProduct) => (
        <li key={product._id}>
          <div className="h-[500px] flex flex-col bg-[red] text-text--text">
            <Image
              className="w-full"
              src={product.images[0]}
              alt={product.description}
              width={330}
              height={420}
            ></Image>
            <span className="">{product.name}</span>
            <span>{product.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Bestsellers;
