import { createDomain } from "effector";

const modals = createDomain();

export const bodyOverflowAdd = () =>
  document.body.classList.add("_overflow-hidden");
export const bodyOverflowRemove = () =>
  document.body.classList.remove("_overflow-hidden");

export const closeMenuModal = modals.createEvent();
export const showMenuModal = modals.createEvent();
export const $menuModal = modals
  .createStore<boolean>(false)
  .on(showMenuModal, () => true)
  .on(closeMenuModal, () => false);

export const closeQuickViewModal = modals.createEvent();
export const showQuickViewModal = modals.createEvent();
export const $showQuickViewModal = modals
  .createStore<boolean>(false)
  .on(showQuickViewModal, () => true)
  .on(closeQuickViewModal, () => false);
