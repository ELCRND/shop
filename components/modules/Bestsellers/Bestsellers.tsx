import { useUnit } from "effector-react";
import { $bestsellerProducts } from "@/context/goods";
import useImagePreloader from "@/hooks/useImagePreloader";
import { IProduct } from "@/types/common";
import BestsellerProduct from "@/components/elements/BestsellerProduct/BestsellerProduct";
import {
  $showQuickViewModal,
  bodyOverflowRemove,
  closeQuickViewModal,
} from "@/context/modals";
import QuickViewModal from "../QuickViewModal/QuickViewModal";
import QuickViewModalContent from "@/components/elements/QuickViewModalContent/QuickViewModalContent";

const Bestsellers = () => {
  const goods = useUnit($bestsellerProducts);
  console.log(goods);
  const { imgSpinner, handleLoadingImageComplete } = useImagePreloader();
  const showModal = useUnit($showQuickViewModal);
  const handleCloseQuickViewModal = () => {
    bodyOverflowRemove();
    closeQuickViewModal();
  };
  return (
    <>
      <ul
        className={`${
          imgSpinner &&
          "h-[1896px] sm:h-[810px] tablet:h-[936px] desktop:h-[456px] bg-slate-100"
        } mt-6 transition-colors duration-[2500ms] grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-6 rounded-md`}
      >
        {goods.map((product: IProduct) => (
          <BestsellerProduct
            key={product._id}
            item={product}
            isLoading={handleLoadingImageComplete}
          />
        ))}
      </ul>
      {showModal && (
        <QuickViewModal onClose={handleCloseQuickViewModal}>
          <QuickViewModalContent />
        </QuickViewModal>
      )}
    </>
  );
};

export default Bestsellers;
