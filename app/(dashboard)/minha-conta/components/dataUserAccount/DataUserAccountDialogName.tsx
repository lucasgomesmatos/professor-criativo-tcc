"use client";

import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { TextInputBase } from "@/components/base/forms/textInput";
import { useSendUpdateDataUserRequest } from "@/services/me";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaseUpper } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FormNameData,
  requestNameValidationFormSchema,
} from "../../schema/nameSchema";
import { useAccountUserStore } from "../../store";

export const DataUserAccountDialogName = () => {
  const { isOpenDialogUpdateName, setOpenDialogUpdateName, setNameUser } =
    useAccountUserStore();

  const userRequestForm = useForm<FormNameData>({
    resolver: zodResolver(requestNameValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    clearErrors,
    watch,
    reset,
    formState: { errors },
  } = userRequestForm;

  const nameValue = watch("name");

  const { mutate, isLoading } = useSendUpdateDataUserRequest(
    setOpenDialogUpdateName,
    reset,
    setNameUser,
    nameValue
  );

  useEffect(() => {
    if (!isOpenDialogUpdateName) clearErrors();
  }, [isOpenDialogUpdateName, clearErrors]);

  const handleUserRequest = async (data: FormNameData) => {
    mutate(data);
  };

  return (
    <>
      <DialogBase
        setOpenDialogBase={() => setOpenDialogUpdateName()}
        title="Alterar o Nome"
        isOpen={isOpenDialogUpdateName}
      >
        <form className="space-y-6" onSubmit={handleSubmit(handleUserRequest)}>
          <TextInputBase
            label=""
            maxLength={15}
            icon={CaseUpper}
            {...register("name")}
            placeholder="Digite seu nome completo"
            error={errors.name?.message}
          />

          <Button disabled={!Boolean(nameValue?.length)} loading={isLoading}>
            Salvar
          </Button>
        </form>
      </DialogBase>
    </>
  );
};
