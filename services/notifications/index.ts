import { httpClient } from "@/shared/utils/axios/api";
import { Endpoint } from "@/shared/utils/axios/constants/environment";
import { useNotificationStore } from "@/store/notificationStore";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const getNotifications = async <T>(filter?: string | null, page = 1) => {
  const { data } = await httpClient.get<T>(Endpoint.NOTIFICATIONS_USER, {
    params: {
      paginate: 6,
    },
  });
  return data;
};

export const postVisualizedNotification = async (notificationId: number) => {
  const { data } = await httpClient.patch(Endpoint.NOTIFICATIONS_USER, {
    notification_id: notificationId,
  });
  return data;
};

export const useSendVisualizedNotificationRequest = () => {
  const { setUpdateDate } = useNotificationStore();

  return useMutation((request: number) => postVisualizedNotification(request), {
    onSuccess: () => {
      setUpdateDate();
    },
    onError: (e: AxiosError) => {
      toast.error("Erro " + e);
    },
  });
};

export const postAllVisualizedNotifications = async () => {
  const { data } = await httpClient.patch(Endpoint.NOTIFICATIONS_USER);
  return data;
};

export const useSendAllVisualizedNotificationsRequest = () => {
  const { setUpdateDate } = useNotificationStore();

  return useMutation(() => postAllVisualizedNotifications(), {
    onSuccess: () => {
      setUpdateDate();
    },
    onError: (e: AxiosError) => {
      toast.error("Erro " + e);
    },
  });
};
