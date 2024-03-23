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
