"use client";
import { Button } from "@/components/base/button";
import { TextInputBase } from "@/components/base/forms/textInput";
import { Logo } from "@/components/base/logo";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useResetPassword } from "./store";

import { Footer } from "@/components/ui/footer";
import { useResetPasswordRequest } from "@/services/forgotPassword/operations";
import { isDisabled } from "@/shared/utils/stringUtils/isDisabled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  FormPasswordData,
  requestPasswordValidationFormSchema,
} from "./schema";

export default function ResetPassword() {
  const {
    isShowVisibilityPasswordOne,
    isShowVisibilityPasswordTwo,
    setShowVisibilityPasswordOne,
    setShowVisibilityPasswordTwo,
  } = useResetPassword();

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const userRequestForm = useForm<FormPasswordData>({
    resolver: zodResolver(requestPasswordValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = userRequestForm;

  const passwordState = watch("password");
  const passwordConfirmationState = watch("password_confirmation");

  const { mutate, isLoading } = useResetPasswordRequest();

  useEffect(() => {
    if (!email || !token) push("/");
  }, [email, token, push]);

  const handleUpdateEmailRequest = (data: FormPasswordData) => {
    mutate({
      email: email,
      token: token,
      password: data.password,
      password_confirmation: data.password_confirmation
    });
  };

  return (
    <main className="flex max-h-full w-full flex-col items-center justify-center  bg-gray-800 p-8 md:w-[380px]">
      <Logo width="196px" height="101px" />
      <h1 className="text-center text-xl text-gray-50">
        Recuperar acesso ao
        <strong> Mundo Prof.</strong>
      </h1>
      <div className="m-2 h-1 w-full rounded bg-gray-500" />
      <form
        action=""
        className="mt-2 flex min-w-full flex-col gap-4"
        onSubmit={handleSubmit(handleUpdateEmailRequest)}
      >
        <div>
          <TextInputBase
            label="Nova senha"
            icon={Lock}
            id="password"
            type={isShowVisibilityPasswordOne ? "text" : "password"}
            placeholder="Digite sua nova senha"
            {...register("password")}
            error={errors.password?.message}
            optionComponent={
              <div
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center  pr-3"
                onClick={setShowVisibilityPasswordOne}
              >
                {isShowVisibilityPasswordOne ? (
                  <EyeOff className="h-4 w-4 text-purple-400 " />
                ) : (
                  <Eye className="h-4 w-4 text-purple-400 " />
                )}
              </div>
            }
          />
        </div>
        <div>
          <TextInputBase
            label="Confirmar senha"
            icon={Lock}
            id="password"
            type={isShowVisibilityPasswordTwo ? "text" : "password"}
            placeholder="Confirme sua nova senha"
            {...register("password_confirmation")}
            error={errors.password_confirmation?.message}
            optionComponent={
              <div
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center  pr-3"
                onClick={setShowVisibilityPasswordTwo}
              >
                {isShowVisibilityPasswordTwo ? (
                  <EyeOff className="h-4 w-4 text-purple-400 " />
                ) : (
                  <Eye className="h-4 w-4 text-purple-400 " />
                )}
              </div>
            }
          />
        </div>

        <div>
          <Button
            loading={isLoading}
            disabled={!isDisabled(passwordState, passwordConfirmationState)}
          >
            Recuperar
          </Button>
        </div>
        <div className="self-center">
          <a
            className="text-purple-500 hover:text-purple-400 hover:underline"
            href="/"
          >
            Voltar
          </a>
        </div>
      </form>
      <Footer />
    </main>
  );
}
