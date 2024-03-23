import { $menuModal } from "@/context/modals";
import { useUnit } from "effector-react";
import React from "react";

const HumbBtn = ({ openModal }: { openModal: VoidFunction }) => {
  const menuIsOpen = useUnit($menuModal);
  return (
    <>
      <label
        onClick={openModal}
        htmlFor="menu_checkbox"
        className="row-start-2 justify-self-end w-12 tablet:w-[86px] h-12 tablet:px-7 px-3 py-3 desktop:hidden block  rounded-[100px] bg-main-white cursor-pointer"
      >
        <input
          type="checkbox"
          id="menu_checkbox"
          className="hidden peer/modal"
          checked={menuIsOpen}
          onChange={() => menuIsOpen}
        />
        <div className="h-1 bg-main-medium mb-1 rounded-sm relative peer-checked/modal:top-2 peer-checked/modal:rotate-[45deg] transition-all"></div>
        <div className="w-3/4 h-1 bg-main-medium mb-1 rounded-sm peer-checked/modal:w-full peer-checked/modal:rotate-[-45deg] transition-all"></div>
        <div className="w-1/2 h-1 bg-main-medium mb-1 rounded-sm peer-checked/modal:hidden"></div>
      </label>
    </>
  );
};

export default HumbBtn;
