import { signUpFx } from "@/api/auth";
import { handleSignUp } from "@/context/auth";
import { useAuthForm } from "@/hooks/useAuthForm";
import { emailValidationRules, nameValidationRules } from "@/lib/utils/auth";
import { IAuthSideProps, IInputs } from "@/types/common";
import React from "react";

const AuthModalSignUp = ({ toggleAuth, isSideActive }: IAuthSideProps) => {
  const { spinner, errors, handleSubmit, register } = useAuthForm(
    signUpFx.pending,
    isSideActive,
    handleSignUp
  );

  const submitForm = (data: IInputs) => {
    return handleSignUp({
      name: data.name,
      password: data.password,
      email: data.email,
      isOAuth: false,
    });
  };

  return (
    <div>
      <form className="text-text--text" onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          {...register(
            "name",
            nameValidationRules("Недопустимое значение", "Заполните поле")
          )}
        />
        <input
          type="email"
          {...register(
            "email",
            emailValidationRules("Недопустимое значение", "Заполните поле")
          )}
        />
        <input
          type="password"
          {...register("password", {
            required: "Заполните поле",
            minLength: 4,
          })}
        />
      </form>
    </div>
  );
};

export default AuthModalSignUp;
