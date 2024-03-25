import { signInFx, signUpFx } from "@/api/auth";
import { ISignUpFx } from "@/types/common";
import { createDomain, sample } from "effector";
import toast from "react-hot-toast";

const auth = createDomain();

export const closeAuthModal = auth.createEvent();
export const showAuthModal = auth.createEvent();
export const handleSignUp = auth.createEvent<ISignUpFx>();
export const handleSignIn = auth.createEvent<ISignUpFx>();
export const setIsAuth = auth.createEvent<boolean>();

export const $showAuthModal = auth
  .createStore<boolean>(false)
  .on(showAuthModal, () => true)
  .on(closeAuthModal, () => false);

export const $isAuth = auth
  .createStore(false)
  .on(setIsAuth, (_, isAuth) => isAuth);

export const $auth = auth
  .createStore({})
  .on(signUpFx.done, (_, { result }) => result)
  .on(signUpFx.fail, (_, { error }) => toast.error(error.message))
  .on(signInFx.done, (_, { result }) => result)
  .on(signInFx.fail, (_, { error }) => toast.error(error.message));

sample({
  clock: handleSignUp,
  source: $auth,
  fn: (_, { name, password, email, isOAuth }) => {
    return {
      name,
      password,
      email,
      isOAuth,
    };
  },
  target: signUpFx,
});
sample({
  clock: handleSignIn,
  source: $auth,
  fn: (_, { name, password, email, isOAuth }) => {
    return {
      name,
      password,
      email,
      isOAuth,
    };
  },
  target: signInFx,
});
