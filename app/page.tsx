"use client";
import { Button } from "@/components/base/button";
import { TextInputBase } from "@/components/base/forms/textInput";
import { Logo } from "@/components/base/logo";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Footer } from "@/components/ui/footer";
import { useLoginRequest } from "@/hooks/useLoginRequest/useLoginRequest";
import {
  UserRequestData,
  requestUserFormValidationSchema,
} from "@/services/login/schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [showPass, setShowPass] = useState<boolean>(false);
  const handleShowPass = () => setShowPass(!showPass);

  const { mutate, isLoading } = useLoginRequest();

  const token = Cookies.get("mundoprof.com.br");
  const { replace, refresh } = useRouter();

  useEffect(() => {
    if (token) {
      refresh();
      replace("/home");
    }
  }, [token, replace, refresh]);

  const userRequestForm = useForm<UserRequestData>({
    resolver: zodResolver(requestUserFormValidationSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = userRequestForm;

  const handleUserRequest = (data: UserRequestData) => mutate(data);

  return (
    <main className="flex max-h-full w-full flex-col items-center justify-center  bg-gray-800 p-8 md:w-[380px]">
      <Logo width="196px" height="101px" />
      <h1 className="text-center text-xl text-gray-50">
        Bem-vindo ao
        <strong> Mundo Prof.</strong>
      </h1>
      <div className="m-2 h-1 w-full rounded bg-gray-500" />
      <form
        className="mt-2 flex min-w-full flex-col gap-4"
        onSubmit={handleSubmit(handleUserRequest)}
      >
        <div>
          <TextInputBase
            label="E-mail"
            icon={Mail}
            id="email"
            type="email"
            {...register("email")}
            placeholder="Digite seu e-mail"
            error={errors.email?.message}
          />
        </div>
        <div>
          <TextInputBase
            label="Senha"
            icon={Lock}
            id="password"
            type={showPass ? "text" : "password"}
            {...register("password")}
            error={errors.password?.message}
            placeholder="Digite sua senha"
            optionComponent={
              <div
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center  pr-3"
                onClick={handleShowPass}
              >
                {showPass ? (
                  <EyeOff
                    data-error={errors.password?.message}
                    className="h-4 w-4 text-purple-300 data-[error]:text-red-600"
                  />
                ) : (
                  <Eye
                    data-error={errors.password?.message}
                    className="h-4 w-4 text-purple-300 data-[error]:text-red-600"
                  />
                )}
              </div>
            }
          />
        </div>

        <div className="self-end">
          <Link
            className="text-purple-300 hover:text-purple-400 hover:underline"
            href="/recuperar-senha"
          >
            Esqueceu a senha ?
          </Link>
        </div>
        <div>
          <Button disabled={isLoading || Boolean(token)} loading={isLoading}>
            Fazer Login
          </Button>
        </div>
      </form>
      <Footer />
    </main>
  );
}
