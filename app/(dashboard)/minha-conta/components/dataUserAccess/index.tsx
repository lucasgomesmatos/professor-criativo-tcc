import { TextInputBase } from "@/components/base/forms/textInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";

import {
  readOnlyDataUserAccessForm,
  readOnlyDataUserAccessFormSchema,
} from "../../schema/dataUserAccessSchema";
import { useAccountUserStore } from "../../store";
import { DataUserAccessDialogEmail } from "./DataUserAccessDialogEmail";
import { DataUserAccessDialogPassword } from "./DataUserAccessDialogPassword";

export const DataUserAccess = () => {
  const { emailUser, setOpenDialogUpdateEmail, setOpenDialogUpdatePassword } =
    useAccountUserStore();

  const userRequestForm = useForm<readOnlyDataUserAccessForm>({
    mode: "onBlur",
    resolver: zodResolver(readOnlyDataUserAccessFormSchema),
    defaultValues: {
      password: "*********",
    },
  });

  const { setValue, register } = userRequestForm;

  useEffect(() => {
    if (emailUser) setValue("email", emailUser);
  }, [emailUser, setValue]);

  return (
    <Element name="a2" className="rounded-md bg-gray-700 p-8">
      <h1 className="text-2xl font-bold">Meu Acesso</h1>
      <div className="mt-6 flex flex-col items-center justify-center">
        <div className="mt-6 flex w-full flex-col gap-4">
          <TextInputBase
            readOnly
            {...register("email")}
            label="E-mail de Cadastro"
            className="border-none pl-4 pr-20"
            optionComponent={
              <div
                onClick={setOpenDialogUpdateEmail}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center  pr-3 text-purple-500 hover:text-purple-400"
              >
                Alterar
              </div>
            }
          />
          <TextInputBase
            label="Senha"
            readOnly
            {...register("password")}
            className="border-none pl-4 pr-20"
            optionComponent={
              <div
                onClick={setOpenDialogUpdatePassword}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center  pr-3 text-purple-500 hover:text-purple-400"
              >
                Alterar
              </div>
            }
          />
        </div>
      </div>
      <DataUserAccessDialogEmail />
      <DataUserAccessDialogPassword />
    </Element>
  );
};
