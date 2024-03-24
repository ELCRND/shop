import { $currentProduct } from "@/context/goods";
import { useUnit } from "effector-react";

export const useCardActions = () => {
  const product = useUnit($currentProduct);

  return { product };
};
