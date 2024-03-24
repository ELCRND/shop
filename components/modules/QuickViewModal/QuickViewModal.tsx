import { useEffect, useState, useCallback, useRef } from "react";
import type { MouseEventHandler } from "react";
import Portal, { createContainer } from "@/components/elements/Portal/Portal";

type Props = { onClose?: () => void; children: React.ReactNode };

const MODAL_CONTAINER_ID = "quick-view-modal-id";

const QuickViewModal = (props: Props) => {
  const { onClose, children } = props;
  const [isMounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div
        className="w-full h-full _content-center fixed top-0 z-50 bg-black bg-opacity-50"
        ref={rootRef}
      >
        <div className="h-1/2 desktop:w-11/12 desktop:h-5/6 p-8 bg-gray-800 rounded-md relative">
          <button
            type="button"
            className="absolute top-2 right-5 scale-150"
            onClick={handleClose}
          >
            x
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default QuickViewModal;
