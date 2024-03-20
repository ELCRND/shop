"use client";
import { Langs } from "@/constants/langs";
import { createDomain } from "effector";

const lang = createDomain();

export const setLang = lang.createEvent<Langs>();

export const $langs = lang.createStore(Langs.EN).on(setLang, (_, lang) => lang);
