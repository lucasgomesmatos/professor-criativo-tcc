import { useModulesStore } from "@/app/(dashboard)/cursos/[lessons]/store";
import { httpClient } from "@/shared/utils/axios/api";
import { Endpoint } from "@/shared/utils/axios/constants/environment";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const sendRateFeedback = async (courseId: number, rate: number) => {
  const { data } = await httpClient.post(
    `${Endpoint.COURSES}/${courseId}/rate`,
    {
      rate: rate,
    }
  );
  return data;
};

export const useSendFeedbackRequest = (funcAction: () => void) => {
  const { course, setUpdateDate } = useModulesStore();

  const courseId = course?.id;

  return useMutation((rate: number) => sendRateFeedback(courseId!, rate), {
    onSuccess: () => {
      toast.success("Obrigado pelo feedback!");
      setUpdateDate();
      funcAction();
    },
    onError: () => {
      toast.error("Error");
    },
  });
};
