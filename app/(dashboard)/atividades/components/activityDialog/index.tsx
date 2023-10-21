"use client";

import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { ScrollArea } from "@/components/ui/scrollArea";
import { downloadPDF } from "@/shared/utils/download";
import { Download } from "lucide-react";
import Image from "next/image";
import Loading from "react-loading";
import { useActivitiesStore } from "../../[activities]/store";

export const ActivityDialog = () => {
  const {
    dialogActivity,
    setOpenDialogActivity,
    activity,
    setLoading,
    loading,
  } = useActivitiesStore();

  const { nameUser, cpfUser } = useAccountUserStore();

  return (
    <>
      {activity && (
        <DialogBase
          setOpenDialogBase={() =>
            !loading && setOpenDialogActivity(null, false)
          }
          title={activity.name}
          isOpen={dialogActivity}
        >
          <div className="m-4 flex flex-col items-center gap-4">
            <Image
              className="rounded-full"
              src={activity.image_path}
              alt={activity.name}
              width={160}
              height={160}
            />
            <ScrollArea className="h-[150px] w-full rounded-md border p-4">
              {activity.description}
            </ScrollArea>
            <div className="flex w-full flex-wrap gap-4 rounded bg-gray-900 p-4">
              {loading && (
                <span className="flex gap-2 px-4 py-3">
                  <Loading type="spokes" width={20} height={20} />
                  Aguarde, o download já está em andamento...
                </span>
              )}

              {!loading &&
                activity.content.map((pdf) => (
                  <div key={pdf.path}>
                    <button
                      onClick={() =>
                        downloadPDF(
                          activity.name,
                          pdf.path,
                          nameUser,
                          cpfUser,
                          setLoading
                        )
                      }
                      className="w-38 flex cursor-pointer items-center justify-center gap-4 rounded bg-purple-400 px-4 py-3 text-gray-50 hover:bg-purple-500"
                    >
                      <Download className="h-4 w-4" /> Baixar
                    </button>
                  </div>
                ))}
            </div>
            <div className="flex w-full justify-end">
              <Button
                disabled={loading}
                onClick={() => setOpenDialogActivity(null, false)}
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
