"use client";

import { useAccountUserStore } from "@/app/(dashboard)/minha-conta/store";
import { NoResult } from "@/components/base/noResult";
import { downloadCertificate } from "@/shared/utils/download";
import { File } from "lucide-react";

export const CertificateView = () => {
  const { account, setLoading, loading } = useAccountUserStore();
  const certificates = account?.data.coursesIPassed;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex justify-center">
        {certificates?.length === 0 && (
          <NoResult text="Você não concluiu nenhum curso ainda." />
        )}
      </div>
      <ul className="flex flex-col gap-4">
        {certificates &&
          certificates?.map((certificate) => (
            <li key={certificate.name}>
              <h1>{certificate.name}</h1>
              <button
                onClick={() =>
                  downloadCertificate(
                    account.data.certificate_template,
                    certificate.created_at,
                    certificate.duration,
                    account.data.name,
                    certificate.name,
                    setLoading
                  )
                }
                className="w-38 mt-2 flex cursor-pointer items-center justify-center gap-4 rounded bg-purple-400 px-4 py-3 text-gray-50 hover:bg-purple-500"
              >
                Baixar
                <File className="h-4 w-4" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
