"use client";
import HeaderNav from "@/components/elements/HeaderNav/HeaderNav";
import HumbBtn from "@/components/elements/HumbBtn/HumbBtn";
import Logo from "@/components/elements/Logo/Logo";
import Modal from "@/components/modules/Modal/Modal";
import ModalNav from "@/components/elements/ModalNav/ModalNav";
import Search from "@/components/elements/Search/Search";

import { useLang } from "@/hooks/useLang";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  $menuModal,
  bodyOverflowAdd,
  bodyOverflowRemove,
  closeMenuModal,
  showMenuModal,
} from "@/context/modals";
import { useUnit } from "effector-react";
import { $showAuthModal, closeAuthModal, showAuthModal } from "@/context/auth";
import AuthModal from "../AuthModal/AuthModal";

const Header = () => {
  const menuIsOpen = useUnit($menuModal);
  const authIsOpen = useUnit($showAuthModal);
  const { lang, translations } = useLang();
  const handleAuthOpen = () => {
    showAuthModal();
    bodyOverflowAdd();
  };
  const handleAuthClose = () => {
    closeAuthModal();
    bodyOverflowRemove();
  };
  const handleModalOpen = () => {
    showMenuModal();
    bodyOverflowAdd();
  };
  const handleModalClose = () => {
    closeMenuModal();
    bodyOverflowRemove();
  };
  return (
    <header id="header" className="bg-[#FFF9F3]">
      <div className="container pb-2">
        <div className="pt-6 grid items-center">
          <Logo />
          <Search />
          <HumbBtn openModal={handleModalOpen} />
          {menuIsOpen && (
            <Modal onClose={handleModalClose}>
              <ModalNav />
            </Modal>
          )}
          <button className="col-start-3 justify-self-end py-4 px-[30px] hidden tablet:block rounded-[50px] bg-main-primary text-[12px] leading-4 font-medium">
            {translations[lang].header["help-btn"]}
          </button>
          <button
            onClick={handleAuthOpen}
            className="row-start-1 col-start-2 tablet:col-start-4 justify-self-end tablet:mr-6 tablet:ml-4 desktop:m-0 flex text-text--text before:mr-2 before:content-[url('/img/header/user_icon.svg')] _hover _active"
          >
            <span className="hidden tablet:inline">
              {translations[lang].header["account"]}
            </span>
          </button>
          <button className="row-start-1 col-start-3 tablet:col-start-5 justify-self-end flex text-text--text before:mr-2 before:content-[url('/img/header/shopping_icon.svg')] _hover _active">
            <span className="hidden tablet:inline">
              {translations[lang].header["shopping"]}
            </span>
          </button>
          {authIsOpen && <AuthModal onClose={handleAuthClose}></AuthModal>}
        </div>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
