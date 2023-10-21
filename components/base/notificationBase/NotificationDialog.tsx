import { ScrollArea } from "@/components/ui/scrollArea";
import { useNotificationStore } from "@/store/notificationStore";
import { Button } from "../button";
import { DialogBase } from "../dialogBase";

export const NotificationDialog = () => {
  const { isOpenNotification, notification, setOpenDialogNotification } =
    useNotificationStore();
  return (
    <DialogBase
      setOpenDialogBase={() => setOpenDialogNotification(null, false)}
      title={notification?.title || ""}
      isOpen={isOpenNotification}
    >
      <div className="m-4 flex flex-col items-center gap-4">
        <ScrollArea className="h-min-[100px] w-full rounded-md border p-4">
          <p className="text-gray-50">{notification?.description}</p>
        </ScrollArea>

        <div className="mt-4 flex gap-5">
          <Button
            onClick={() => setOpenDialogNotification(null, false)}
            className="flex h-12 w-24 items-center justify-center bg-red-600 hover:bg-red-500"
          >
            Fechar
          </Button>
        </div>
      </div>
    </DialogBase>
  );
};
