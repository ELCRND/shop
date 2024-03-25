import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AuthModalSignUp from "@/components/elements/AuthModalSignUp/AuthModalSignUp";
import Portal, { createContainer } from "@/components/elements/Portal/Portal";

type Props = { onClose?: () => void };
const MODAL_CONTAINER_ID = "auth-modal-id";

const AuthModal = (props: Props) => {
  const [isAuthSwitched, setIsAuthSwitched] = useState(false);
  const [isSignInActive, setIsSignInActive] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  const toggleAuth = () => {
    setIsAuthSwitched(!isAuthSwitched);
    setIsSignInActive(!isSignInActive);
    setIsSignUpActive(!isSignUpActive);
  };
  const { onClose } = props;
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
  return (
    isMounted && (
      <Portal id={MODAL_CONTAINER_ID}>
        <div
          className="w-full h-full _content-center fixed top-0 z-50 bg-black bg-opacity-50"
          ref={rootRef}
        >
          <div className="w-1/4 h-1/2 p-8 bg-gray-600 rounded-md relative">
            <button
              type="button"
              className="absolute top-2 right-5 scale-150"
              onClick={handleClose}
            >
              x
            </button>
            <AuthModalSignUp toggleAuth={toggleAuth} isSideActive={false} />
          </div>
        </div>
      </Portal>
    )
  );
};

export default AuthModal;
