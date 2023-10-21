import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { useFetch } from "@/hooks/useFetch/useFetch";
import {
  getNotifications,
  useSendAllVisualizedNotificationsRequest,
  useSendVisualizedNotificationRequest,
} from "@/services/notifications";
import { useNotificationStore } from "@/store/notificationStore";
import { NotificationsRequest } from "@/types/response/notification";
import { AlertCircle, Bell } from "lucide-react";
import { NotificationDialog } from "./NotificationDialog";

export const NotificationBase = () => {
  const {
    setOpenDialogNotification,
    updateDate,
    isOpenDropdown,
    setOpenDropdown,
  } = useNotificationStore();

  const { data } = useFetch<NotificationsRequest>(
    String(updateDate),
    getNotifications
  );

  const alertNotification = data?.data.find(
    (notification) => notification.visualized === false
  );

  const { mutate } = useSendVisualizedNotificationRequest();
  const { mutate: mutateAll, isLoading } =
    useSendAllVisualizedNotificationsRequest();

  return (
    <div>
      <DropdownMenu open={isOpenDropdown} onOpenChange={setOpenDropdown}>
        <DropdownMenuTrigger asChild>
          <button className="relative flex" onClick={() => setOpenDropdown()}>
            <Bell size={24} />
            {alertNotification && (
              <span className=" absolute -top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 bg-gray-500 p-2 max-[600px]:-right-16 ">
          <DropdownMenuLabel className="flex justify-between">
            <span className="tracking-wider text-gray-50">Notificações</span>
            {alertNotification && (
              <button
                disabled={isLoading}
                onClick={() => mutateAll()}
                className="text-[12px] uppercase text-purple-300 hover:text-purple-400 disabled:text-zinc-400"
              >
                Marcar todos como lidas
              </button>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="flex flex-col gap-1 ">
            {data?.data.map((notification) => (
              <DropdownMenuItem
                onClick={() => {
                  mutate(notification.id);
                  setOpenDialogNotification(notification, true);
                }}
                key={notification.id}
                className="gap-1  bg-gray-700 p-4 text-gray-50 hover:bg-gray-800"
              >
                <div className="relative flex">
                  {!notification.visualized && (
                    <span className="absolute -top-1  h-2 w-2 rounded bg-red-600 " />
                  )}
                  <AlertCircle className=" relative mr-2 h-5 w-5 text-purple-300 " />
                </div>
                <span className="w-[80%]  text-gray-50">
                  {notification.title}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {/* <DropdownMenuGroup>
            <DropdownMenuItem className="mt-3 justify-center gap-1 bg-purple-400 p-3 text-gray-50  hover:bg-purple-500">
              <span className=" text-center font-bold uppercase text-gray-50">
                Ver Todas
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup> */}
        </DropdownMenuContent>
      </DropdownMenu>
      <NotificationDialog />
    </div>
  );
};
