"use client";
import { TextInputBase } from "@/components/base/forms/textInput";
import {
  normalizeCpfNumber,
  normalizePhoneNumber,
} from "@/shared/utils/stringUtils/mask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";
import {
  readOnlyDataUserAccountForm,
  readOnlyDataUserAccountFormSchema,
} from "../../schema/dataUserAccountShema";
import { useAccountUserStore } from "../../store";
import { DataUserAccountDialogCpf } from "./DataUserAccountDialogCpf";
import { DataUserAccountDialogName } from "./DataUserAccountDialogName";
import { DataUserAccountDialogPhone } from "./DataUserAccountDialogPhone";
import { DataUserAccountProfileUser } from "./DataUserAccountProfileUser";

export const DataUserAccount = () => {
  const {
    nameUser,
    cpfUser,
    phoneUser,
    setOpenDialogUpdateCPF,
    setOpenDialogUpdatePhone,
    setOpenDialogUpdateName,
  } = useAccountUserStore();

  const userRequestForm = useForm<readOnlyDataUserAccountForm>({
    resolver: zodResolver(readOnlyDataUserAccountFormSchema),
  });

  const { setValue, register } = userRequestForm;

  useEffect(() => {
    if (nameUser && cpfUser && phoneUser) {
      setValue("name", nameUser || "");
      setValue("cpf", normalizeCpfNumber(cpfUser || ""));
      setValue("phone", normalizePhoneNumber(phoneUser || ""));
    }
  }, [nameUser, cpfUser, phoneUser, setValue]);

  return (
    <Element name="a1" className="rounded-md bg-gray-700 p-8">
      <h1 className="text-2xl font-bold">Meus Dados</h1>
      <div className="mt-6 flex flex-col items-center justify-center">
        <DataUserAccountProfileUser />
        <div className="mt-6 flex w-full flex-col gap-4">
          <TextInputBase
            readOnly
            {...register("name")}
            label="Nome Completo"
            className="border-none pl-4 pr-20"
            optionComponent={
              <div
                onClick={setOpenDialogUpdateName}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center  pr-3 text-purple-500 hover:text-purple-400"
              >
                Alterar
              </div>
            }
          />
          <TextInputBase
            readOnly
            {...register("cpf")}
            label="CPF"
            className="border-none pl-4 pr-20"
            optionComponent={
              <div
                onClick={setOpenDialogUpdateCPF}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center  pr-3 text-purple-500 hover:text-purple-400"
              >
                Alterar
              </div>
            }
          />
          <TextInputBase
            readOnly
            {...register("phone")}
            label="Telefone"
            className="border-none pl-4 pr-20"
            optionComponent={
              <div
                onClick={setOpenDialogUpdatePhone}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center  pr-3 text-purple-500 hover:text-purple-400"
              >
                Alterar
              </div>
            }
          />
        </div>
        <DataUserAccountDialogName />
        <DataUserAccountDialogCpf />
        <DataUserAccountDialogPhone />
      </div>
    </Element>
  );
};
