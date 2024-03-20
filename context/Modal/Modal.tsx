import { useEffect, useState, useCallback, useRef } from "react";
import type { MouseEventHandler } from "react";
import Portal, { createContainer } from "@/components/elements/Portal/Portal";

type Props = { 
  onClose?: () => void;
   children: React.ReactNode };

const MODAL_CONTAINER_ID = "modal-container-id";

const Modal = ({ onClose, children }: Props) => {
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
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className="_modal-wrapper" ref={rootRef}>
        <div className="_modal">
          <button type="button" className="absolute right-5" onClick={handleClose}>
            x
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
