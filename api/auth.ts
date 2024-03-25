import { createEffect } from "effector";
import api from "./apiInstance";
import toast from "react-hot-toast";
import { onAuthSuccess } from "@/lib/utils/auth";
import { ISignUpFx } from "@/types/common";

export const signUpFx = createEffect(
  async ({ name, password, email }: ISignUpFx) => {
    const { data } = await api.post("/api/users/signup", {
      name,
      password,
      email,
    });
    if (data.errorMessage) {
      toast.error(data.errorMessage);
      return;
    }
    onAuthSuccess("Регистрация прошла успешно!", data);
    return data;
  }
);

export const signInFx = createEffect(async ({ password, email }: ISignUpFx) => {
  const { data } = await api.post("/api/users/login", {
    password,
    email,
  });
  if (data.errorMessage) {
    toast.error(data.errorMessage);
    return;
  }
  onAuthSuccess("Вход выполнен!", data);
  return data;
});
