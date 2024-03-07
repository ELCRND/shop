"use client";
import { useUnit } from "effector-react";
import { $langs } from "@/context/lang";

import translationsJSON from "@/public/translations/translations.json";

export const useLang = () => {
  const lang = useUnit($langs);
  const translations = translationsJSON;

  return { lang, translations };
};
