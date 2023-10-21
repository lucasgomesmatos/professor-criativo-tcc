"use client";

import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { TextInputBase } from "@/components/base/forms/textInput";
import { useSendUpdateDataUserRequest } from "@/services/me";
import { normalizePhoneNumber } from "@/shared/utils/stringUtils/mask";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FormPhoneData,
  requestPhoneValidationFormSchema,
} from "../../schema/phoneSchema";
import { useAccountUserStore } from "../../store";

export const DataUserAccountDialogPhone = () => {
  const { isOpenDialogUpdatePhone, setOpenDialogUpdatePhone, setPhoneUser } =
    useAccountUserStore();

  const userRequestForm = useForm<FormPhoneData>({
    resolver: zodResolver(requestPhoneValidationFormSchema),
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

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  useEffect(() => {
    if (!isOpenDialogUpdatePhone) clearErrors();
  }, [isOpenDialogUpdatePhone, clearErrors]);

  const { mutate, isLoading } = useSendUpdateDataUserRequest(
    setOpenDialogUpdatePhone,
    reset,
    setPhoneUser,
    phoneValue
  );

  const handleUserRequest = async (data: FormPhoneData) => {
    const params = {
      phone: data.phone.replace(/\D/g, ""),
    };

    mutate(params);
  };

  return (
    <>
      <DialogBase
        setOpenDialogBase={() => setOpenDialogUpdatePhone()}
        title="Editar Telefone"
        isOpen={isOpenDialogUpdatePhone}
      >
        <form className="space-y-6" onSubmit={handleSubmit(handleUserRequest)}>
          <TextInputBase
            label=""
            maxLength={15}
            icon={Phone}
            {...register("phone")}
            placeholder="Digite seu novo Telefone"
            error={errors.phone?.message}
          />

          <Button disabled={!Boolean(phoneValue?.length)} loading={isLoading}>
            Salvar
          </Button>
        </form>
      </DialogBase>
    </>
  );
};
