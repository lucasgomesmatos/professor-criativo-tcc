"use client";

import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { TextInputBase } from "@/components/base/forms/textInput";
import { TextareaBase } from "@/components/base/forms/textareaBase";
import { useSendUpdateDataUserRequest } from "@/services/me";
import { isDisabled } from "@/shared/utils/stringUtils/isDisabled";
import { normalizeCpfNumber } from "@/shared/utils/stringUtils/mask";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FormCPFData,
  requestCPFValidationFormSchema,
} from "../../schema/cpfSchema";
import { useAccountUserStore } from "../../store";

export const DataUserAccountDialogCpf = () => {
  const { isOpenDialogUpdateCPF, setOpenDialogUpdateCPF, setCpfUser } =
    useAccountUserStore();

  const userRequestForm = useForm<FormCPFData>({
    resolver: zodResolver(requestCPFValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    clearErrors,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = userRequestForm;

  const cpfValue = watch("cpf");
  const reasonValue = watch("reason");

  const { mutate, isLoading } = useSendUpdateDataUserRequest(
    setOpenDialogUpdateCPF,
    reset,
    setCpfUser,
    cpfValue
  );

  useEffect(() => {
    setValue("cpf", normalizeCpfNumber(cpfValue));
  }, [cpfValue, setValue]);

  useEffect(() => {
    if (!isOpenDialogUpdateCPF) clearErrors();
  }, [isOpenDialogUpdateCPF, clearErrors]);

  const handleUserRequest = async (data: FormCPFData) => {
    const params = {
      ...data,
      cpf: data.cpf.replace(/\D/g, ""),
    };

    mutate(params);
  };

  return (
    <>
      <DialogBase
        setOpenDialogBase={() => setOpenDialogUpdateCPF()}
        title="Editar CPF"
        isOpen={isOpenDialogUpdateCPF}
      >
        <form
          className="max-h-fit space-y-6"
          onSubmit={handleSubmit(handleUserRequest)}
        >
          <TextInputBase
            label=""
            maxLength={14}
            icon={FileText}
            {...register("cpf")}
            placeholder="Digite seu novo CPF"
            error={errors.cpf?.message}
          />
          <TextareaBase
            maxLength={100}
            {...register("reason")}
            error={errors.reason?.message}
            placeholder="Digite o motivo..."
          />

          <Button
            disabled={!isDisabled(cpfValue, reasonValue)}
            loading={isLoading}
          >
            Salvar
          </Button>
        </form>
      </DialogBase>
    </>
  );
};
