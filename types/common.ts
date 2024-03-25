import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

export interface IProduct {
  _id: string;
  type: string;
  category: string;
  price: number;
  name: string;
  description: string;
  characteristics: { [index: string]: string };
  images: string[];
  vendorCode: string;
  inStock: string;
  isBestseller: boolean;
  isNew: boolean;
  sizes: ISizes;
  popularity: number;
  errorMessage?: string;
}

export interface ISizes {
  s: boolean;
  l: boolean;
  m: boolean;
  xl: boolean;
  xxl: boolean;
}

export type ActionBtn = {
  text: string;
  withTooltip: boolean;
  actionClass: string;
  callback?: VoidFunction;
};

export interface IInputs {
  name: string;
  email: string;
  password: string;
}
export interface ISignUpFx {
  name?: string;
  isOAuth?: boolean;
  email: string;
  password: string;
}

export interface IAuthSideProps {
  toggleAuth: VoidFunction;
  isSideActive: boolean;
}

export interface IAuthInput {
  register: UseFormRegister<IInputs>;
  errors: Partial<FieldErrorsImpl<IInputs>>;
}
