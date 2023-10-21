import { ReactNode } from "react";
import Loading from "react-loading";

interface DialogPostLoadingProps {
  loading: boolean;
  text?: ReactNode;
}

export const DialogPostLoading = ({
  loading = true,
  text,
}: DialogPostLoadingProps) => {
  return (
    <div>
      {loading && (
        <>
          <div className="fixed inset-0 z-50 bg-gray-950/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div>
          <div className="fixed left-[50%] top-[50%] z-50 flex w-full max-w-lg  translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-4 border border-purple-400 bg-gray-700 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full">
            {text ? (
              text
            ) : (
              <p className="flex w-full max-w-xs flex-col items-center justify-center gap-4 text-center">
                <Loading type="spokes" width={32} height={32} />
                Aguarde, o upload dos arquivos estão em andamento...
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
