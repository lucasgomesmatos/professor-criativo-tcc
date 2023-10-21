"use client";

import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { ScrollArea } from "@/components/ui/scrollArea";
import { formatDateLocaleBr } from "@/shared/utils/dateUtils/date";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEventsStore } from "../../store";

export const EventDialog = () => {
  const { dialogEvent, event, setOpenDialogEvent } = useEventsStore();

  return (
    <>
      {event && (
        <DialogBase
          setOpenDialogBase={() => setOpenDialogEvent(null, false)}
          title={event.name}
          isOpen={dialogEvent}
        >
          <div className="m-4 flex flex-col items-center gap-4">
            <Image
              className="rounded-full"
              src={event.image_path}
              alt=""
              width={160}
              height={160}
            />
            <p className="mt-4 text-xl">{formatDateLocaleBr(event.date)}</p>
            <ScrollArea className="h-[100px] w-full rounded-md border p-4">
              {event.description}
            </ScrollArea>

            <div className="mt-4 flex gap-5">
              <Link href={event.path} target="_blank">
                <span className="flex cursor-pointer items-center justify-center gap-4 rounded bg-purple-400 px-4 py-3 text-gray-50 hover:bg-purple-500">
                  <ExternalLink className="h-5 w-5" /> Link do Evento
                </span>
              </Link>
              <Button
                onClick={() => setOpenDialogEvent(null, false)}
                className="flex h-12 w-24 items-center justify-center bg-red-600 hover:bg-red-500"
              >
                Fechar
              </Button>
            </div>
          </div>
        </DialogBase>
      )}
    </>
  );
};
