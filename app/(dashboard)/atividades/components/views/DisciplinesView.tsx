"use client";
import { Button } from "@/components/base/button";
import { Card } from "@/components/base/card";
import { CardsSkeleton } from "@/components/base/cardSkeleton";
import { NoResult } from "@/components/base/noResult";
import { Pagination } from "@/components/base/pagination";
import { SeparatorBase } from "@/components/ui/separator";
import { useFetch } from "@/hooks/useFetch/useFetch";
import { getDisciplines } from "@/services/disciplines";
import {
  Endpoint,
  Environment,
} from "@/shared/utils/axios/constants/environment";
import { useFilterStore } from "@/store/filter";
import { Discipline, DisciplineRequest } from "@/types/response/discipline";
import { FileInput, GraduationCap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useActivitiesStore } from "../../[activities]/store";
import { useDisciplinesStore } from "../../store";

export const DisciplinesView = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { filter } = useFilterStore();
  const { setDisciplines, disciplines, setDisciplineId } =
    useDisciplinesStore();

  const { setActivities } = useActivitiesStore();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error } = useFetch<DisciplineRequest>(
    Endpoint.DISCIPLINES,
    () => getDisciplines(null, currentPage),
    null,
    currentPage
  );

  useEffect(() => {
    if (error instanceof Error) {
      toast.error("Erro de conexão");
      return;
    }

    setActivities(null);
    setDisciplines(data?.data);
  }, [data, setDisciplines, error, setActivities]);

  const showNoResult = !isLoading && !disciplines?.length;

  const handleChangePushPage = (discipline: Discipline) => {
    setDisciplineId(discipline.id);
    push(`${pathname}/${discipline.slug}`);
  };

  return (
    <div className="container">
      <div className="mb-24 mt-56 flex flex-wrap justify-center gap-4">
        {showNoResult && <NoResult />}
        {isLoading ? (
          <CardsSkeleton />
        ) : (
          disciplines?.map((discipline) => (
            <div key={discipline.id}>
              <Card.Root>
                <Card.HeaderBase className="h-10">
                  <GraduationCap className="h-9 w-9 text-purple-400 group-hover:text-purple-300 " />
                </Card.HeaderBase>
                <Card.Content>
                  <div className="flex items-center gap-4">
                    <SeparatorBase
                      className="h-8 w-1 rounded bg-purple-400  group-hover:bg-purple-300"
                      orientation="vertical"
                    />
                    <p className="text-xl font-semibold tracking-wide">
                      {discipline.name}
                    </p>
                  </div>
                </Card.Content>
                <Card.Footer>
                  <Button
                    onClick={() => handleChangePushPage(discipline)}
                    className="flex items-center justify-center gap-4 p-4"
                  >
                    <FileInput className="h-5 w-5" /> Acessar
                  </Button>
                </Card.Footer>
              </Card.Root>
            </div>
          ))
        )}
      </div>
      {data && data?.meta.last_page > 1 && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={Environment.LIMITE_DE_LINHAS}
          totalItems={data.meta.total}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};
