"use client";
import { Langs } from "@/constants/lang";
import { createDomain } from "effector";

const lang = createDomain();

export const setLang = lang.createEvent<Langs>();

export const $langs = lang.createStore(Langs.RU).on(setLang, (_, lang) => lang);