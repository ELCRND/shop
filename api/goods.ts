import { createEffect } from "effector";
import api from "./apiInstance";
import toast from "react-hot-toast";
import { ILoadOneProductFx } from "@/types/goods";

export const loadOneProductFx = createEffect(
  async ({ productId, category }: ILoadOneProductFx) => {
    try {
      const { data } = await api.post("/api/goods/one", {
        productId,
        category,
      });

      if (data?.status === 404) {
        return { productItem: { errorMessage: "Wrong product id" } };
      }

      return data;
    } catch (error) {
      toast.error((error as Error).message);
    }
  }
);
