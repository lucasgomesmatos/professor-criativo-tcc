"use client";

import { Button } from "@/components/base/button";
import { TextInputBase } from "@/components/base/forms/textInput";
import { Logo } from "@/components/base/logo";
import { Footer } from "@/components/ui/footer";
import { useSendUserForgotPasswordRequest } from "@/services/forgotPassword/operations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  FormEmailResetPasswordData,
  requestEmailResetValidationFormSchema,
} from "./schema";

export default function RecoverPassword() {
  const userRequestForm = useForm<FormEmailResetPasswordData>({
    resolver: zodResolver(requestEmailResetValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = userRequestForm;

  const { mutate, isLoading } = useSendUserForgotPasswordRequest();

  const handleUpdateEmailRequest = (data: FormEmailResetPasswordData) =>
    mutate(data.email);

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
            label="E-mail"
            icon={Mail}
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>

        <div>
          <Button loading={isLoading}>Recuperar</Button>
        </div>
        <div className="self-center">
          <a
            className="text-purple-300 hover:text-purple-400 hover:underline"
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
