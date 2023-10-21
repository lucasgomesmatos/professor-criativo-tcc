"use client";

import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { TextInputBase } from "@/components/base/forms/textInput";
import { TextareaBase } from "@/components/base/forms/textareaBase";
import { useSendUpdateDataUserRequest } from "@/services/me";
import { isDisabled } from "@/shared/utils/stringUtils/isDisabled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FormEmailData,
  requestEmailValidationFormSchema,
} from "../../schema/emailSchema";
import { useAccountUserStore } from "../../store";

export const DataUserAccessDialogEmail = () => {
  const { isOpenDialogUpdateEmail, setOpenDialogUpdateEmail, setEmailUser } =
    useAccountUserStore();

  const userRequestForm = useForm<FormEmailData>({
    resolver: zodResolver(requestEmailValidationFormSchema),
  });

  const {
    handleSubmit,
    register,
    clearErrors,
    watch,
    reset,
    formState: { errors },
  } = userRequestForm;

  const emailValue = watch("email");
  const reasonValue = watch("reason");

  const { mutate, isLoading } = useSendUpdateDataUserRequest(
    setOpenDialogUpdateEmail,
    reset,
    setEmailUser,
    emailValue
  );

  useEffect(() => {
    if (!isOpenDialogUpdateEmail) clearErrors();
  }, [isOpenDialogUpdateEmail, clearErrors]);

  const handleUpdateEmailRequest = (data: FormEmailData) => {
    mutate(data);
  };

  return (
    <>
      <DialogBase
        setOpenDialogBase={() => setOpenDialogUpdateEmail()}
        title="Editar E-mail"
        isOpen={isOpenDialogUpdateEmail}
      >
        <form
          className="max-h-fit space-y-6"
          onSubmit={handleSubmit(handleUpdateEmailRequest)}
        >
          <TextInputBase
            label=""
            icon={Mail}
            {...register("email")}
            placeholder="Digite seu novo E-mail"
            error={errors.email?.message}
          />
          <TextareaBase
            maxLength={100}
            {...register("reason")}
            error={errors.reason?.message}
            placeholder="Digite o motivo..."
          />

          <Button
            disabled={!isDisabled(emailValue, reasonValue)}
            loading={isLoading}
          >
            Salvar
          </Button>
        </form>
      </DialogBase>
    </>
  );
};
